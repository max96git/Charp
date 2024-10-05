// server/routes/api.js

const express = require('express');
const router = express.Router();
const gamesRoutes = require('./games');
const authRoutes = require('./auth');

router.use('/games', gamesRoutes);

router.use('/auth', authRoutes);

module.exports = router;
