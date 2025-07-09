const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { mint } = require('../controllers/tokenController');

router.post('/mint', auth, mint);

module.exports = router; 