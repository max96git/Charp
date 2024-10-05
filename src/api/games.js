// In-memory storage for games (for testing purposes)
let games = [];

// Function to fetch all games
const fetchGames = (req, res) => {
    res.json(games); // Return the games array
};

// Function to create a new game
const createGame = (req, res) => {
    const { name, description } = req.body; // Get the game details from the request body
    if (!name || !description) {
        return res.status(400).json({ message: "Name and description are required" });
    }

    const newGame = {
        id: games.length + 1,
        name,
        description,
    };

    games.push(newGame); // Add the new game to the array
    res.status(201).json(newGame); // Return the created game
};

module.exports = { fetchGames, createGame };
