// server/routes/games.js

const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// Get all games
router.get('/', async (req, res) => {
    try {
        const snapshot = await db.collection('games').get();
        const games = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(games);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

// Add a new game
router.post('/', async (req, res) => {
    const gameData = req.body;
    try {
        const docRef = await db.collection('games').add(gameData);
        res.status(201).json({ id: docRef.id, ...gameData });
    } catch (error) {
        console.error('Error adding game:', error);
        res.status(500).json({ error: 'Failed to add game' });
    }
});

module.exports = router;
