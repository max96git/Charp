// server/routes/auth.js

const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// User login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
        res.status(200).json({ user: userCredential.user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(401).json({ error: 'Invalid email or password' });
    }
});

// User signup
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRecord = await admin.auth().createUser({ email, password });
        res.status(201).json({ user: userRecord });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).json({ error: 'Failed to create user' });
    }
});

// Other auth-related routes can be added here

module.exports = router;
