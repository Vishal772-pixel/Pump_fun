# Pump_fun Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the `backend` directory with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/pumpfun
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```

3. Start the server:
   ```bash
   node src/index.js
   ```

The backend will run on `http://localhost:5000` by default.

# Setup Instructions

1. Create a file named `.env` in the `backend` directory.
2. Add the following line to the `.env` file:

```
MONGO_URI="mongodb+srv://memecoin:tiwariom@cluster0.tlubk6w.mongodb.net/"
```

This will allow the backend to connect to your MongoDB database.