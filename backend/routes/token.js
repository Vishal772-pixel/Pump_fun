import express from 'express';
import auth from '../middleware/auth.js';
import { mint } from '../controllers/tokenController.js';
const router = express.Router();

router.post('/mint', auth, mint);

export default router;