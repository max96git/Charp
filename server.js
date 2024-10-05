const express = require('express');
const path = require('path');
const cors = require('cors');
const { fetchGames } = require('./src/api/games'); // Import the fetchGames function

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

// Route to fetch games
app.get('/api/games', fetchGames);

app.get('/', (req, res) => {
    console.log('Home page requested');
    res.sendFile(path.join(__dirname, 'src', 'index.html')).catch(err => {
        console.error('Failed to send index.html:', err);
    });
});

app.get('/avatar', (req, res) => {
    console.log('Avatar page requested');
    res.sendFile(path.join(__dirname, 'src', 'avatar.html')).catch(err => {
        console.error('Failed to send avatar.html:', err);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
