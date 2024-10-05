const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let games = [];

// API Endpoint to fetch all games
app.get('/api/games', (req, res) => {
    res.json(games);
});

// API Endpoint to create a new game
app.post('/api/games', (req, res) => {
    const { title, description, preview, gameData } = req.body;
    const newGame = {
        id: games.length + 1,
        title,
        description,
        preview,
        gameData,
    };
    games.push(newGame);
    res.status(201).json(newGame);
});

// API Endpoint to fetch a specific game
app.get('/api/games/:id', (req, res) => {
    const gameId = parseInt(req.params.id);
    const game = games.find(g => g.id === gameId);
    if (!game) {
        return res.status(404).json({ error: 'Game not found' });
    }
    res.json(game);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
