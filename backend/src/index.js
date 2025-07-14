import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

import authRoutes from '../routes/auth.js';
app.use('/api/auth', authRoutes);

import tokenRoutes from '../routes/token.js';
app.use('/api/tokens', tokenRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const state = mongoose.connection.readyState;
  // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
  let status = 'disconnected';
  if (state === 1) status = 'connected';
  else if (state === 2) status = 'connecting';
  else if (state === 3) status = 'disconnecting';
  res.json({
    mongoConnection: status,
    readyState: state
  });
});

// Placeholder route
app.get('/', (req, res) => {
  res.send('Pump_fun backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});