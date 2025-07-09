require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

const authRoutes = require('../routes/auth');
app.use('/api/auth', authRoutes);

const tokenRoutes = require('../routes/token');
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