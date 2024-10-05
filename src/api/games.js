// src/api/games.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Example function to fetch games
            const games = await fetchGamesFromDatabase(); // Make sure this function exists and works
            if (!games) {
                return res.status(404).json({ message: 'No games found' });
            }
            res.status(200).json(games);
        } catch (error) {
            console.error('Error fetching games:', error); // Log the error for debugging
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
