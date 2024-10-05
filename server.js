const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the src folder
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    console.log('Home page requested');
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/avatar', (req, res) => {
    console.log('Avatar page requested');
    res.sendFile(path.join(__dirname, 'src', 'avatar.html'));
});

app.get('/game-play', (req, res) => {
    console.log('Game play page requested');
    res.sendFile(path.join(__dirname, 'src', 'pages', 'game-play.html'));
});

app.get('/create-game', (req, res) => {
    console.log('Create game page requested');
    res.sendFile(path.join(__dirname, 'src', 'pages', 'create-game.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
