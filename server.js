const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (like CSS, JS) from the src folder
app.use(express.static(path.join(__dirname, 'src')));

// Serve index.html (home page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Serve avatar.html
app.get('/avatar', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'avatar.html'));
});

// Serve game-play.html
app.get('/game-play', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'game-play.html'));
});

// Serve create-game.html
app.get('/create-game', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'create-game.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
