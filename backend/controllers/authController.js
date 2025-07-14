import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, passwordHash });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, user: { username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

// Google login controller
import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: 'Google token required.' });
    }
    // Verify Google token
    const ticket = await client.verifyIdToken({ idToken: token, audience: process.env.GOOGLE_CLIENT_ID });
    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;
    let user = await User.findOne({ googleId });
    let profileComplete = false;
    if (!user) {
      // Create user with minimal info
      user = new User({ googleId, email, avatar: picture, profileComplete: false });
      await user.save();
    }
    profileComplete = user.profileComplete;
    // Issue JWT
    const jwtToken = jwt.sign({ userId: user._id, googleId: user.googleId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token: jwtToken, user: { email: user.email, googleId: user.googleId, avatar: user.avatar }, profileComplete });
  } catch (err) {
    res.status(500).json({ message: 'Google login failed.' });
  }
};

// Profile completion controller
const completeProfile = async (req, res) => {
  try {
    const { userId, username, contactInfo } = req.body;
    if (!userId || !username) {
      return res.status(400).json({ message: 'User ID and username required.' });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    user.username = username;
    user.contactInfo = contactInfo;
    user.profileComplete = true;
    await user.save();
    res.json({ message: 'Profile completed.', user: { username: user.username, contactInfo: user.contactInfo } });
  } catch (err) {
    res.status(500).json({ message: 'Profile completion failed.' });
  }
};

export { register, login, googleLogin, completeProfile };