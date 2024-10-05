const express = require('express');
const router = express.Router();

// Dummy in-memory data storage for demonstration purposes
let games = [];
let users = [];

// Endpoint to create a new game
router.post('/games', (req, res) => {
    const { title, description, creatorId } = req.body;
    if (!title || !description || !creatorId) {
        return res.status(400).json({ error: 'Title, description, and creator ID are required.' });
    }
    
    const newGame = {
        id: games.length + 1,
        title,
        description,
        creatorId,
        createdAt: new Date(),
    };
    games.push(newGame);
    res.status(201).json(newGame);
});

// Endpoint to fetch all games
router.get('/games', (req, res) => {
    res.json(games);
});

// Endpoint to fetch a specific game by ID
router.get('/games/:id', (req, res) => {
    const gameId = parseInt(req.params.id);
    const game = games.find(g => g.id === gameId);
    if (!game) {
        return res.status(404).json({ error: 'Game not found' });
    }
    res.json(game);
});

// Endpoint to create a new user
router.post('/users', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username is required.' });
    }
    
    const newUser = {
        id: users.length + 1,
        username,
        createdAt: new Date(),
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint to fetch all users
router.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint to fetch a specific user by ID
router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

let avatars = {}; // Store avatars by user ID

// Endpoint to save an avatar
router.post('/avatars/:userId', (req, res) => {
    const { userId } = req.params;
    const { skinColor, shirtColor, pantsColor } = req.body;

    if (!skinColor || !shirtColor || !pantsColor) {
        return res.status(400).json({ error: 'All color fields are required.' });
    }

    avatars[userId] = { skinColor, shirtColor, pantsColor };
    res.status(201).json(avatars[userId]);
});

// Endpoint to get an avatar
router.get('/avatars/:userId', (req, res) => {
    const { userId } = req.params;
    const avatar = avatars[userId];

    if (!avatar) {
        return res.status(404).json({ error: 'Avatar not found' });
    }

    res.json(avatar);
});

// Export the router
module.exports = router;
