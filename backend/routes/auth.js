import express from 'express';
import { register, login, googleLogin, completeProfile } from '../controllers/authController.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Google OAuth login route
router.post('/google-login', googleLogin);

// Profile completion route
router.post('/completeprofile', completeProfile);

export default router;