import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  googleId: { type: String, unique: true, sparse: true },
  metamaskAddress: { type: String, unique: true, sparse: true },
  contactInfo: { type: String },
  profileComplete: { type: Boolean, default: false },
  avatar: { type: String },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);