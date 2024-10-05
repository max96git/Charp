const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Firebase Admin SDK
initializeApp({
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Get all games
app.get('/api/games', async (req, res) => {
  const db = getDatabase();
  const gamesRef = db.ref('games');
  gamesRef.once('value', snapshot => {
    const games = snapshot.val();
    res.status(200).send(games);
  });
});

// Add a new game
app.post('/api/games', async (req, res) => {
  const db = getDatabase();
  const gamesRef = db.ref('games');
  gamesRef.push(req.body, error => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send('Game added successfully!');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
