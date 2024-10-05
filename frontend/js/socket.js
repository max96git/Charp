const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

let players = {};  // Object to hold all connected players

io.on('connection', (socket) => {
    console.log(`Player connected: ${socket.id}`);

    // Add new player to the players object
    players[socket.id] = { x: 0, y: 0 };

    // Emit the updated player list to all clients
    io.emit('updatePlayers', players);

    // Listen for player movement
    socket.on('playerMove', (movement) => {
        // Update player position
        if (players[socket.id]) {
            players[socket.id].x += movement.x;
            players[socket.id].y += movement.y;
        }

        // Broadcast updated player positions to all clients
        io.emit('updatePlayers', players);
    });

    // Handle player disconnection
    socket.on('disconnect', () => {
        console.log(`Player disconnected: ${socket.id}`);
        delete players[socket.id];
        io.emit('updatePlayers', players);  // Emit updated players list
    });
});

// Serve static files (like HTML, CSS, and JS)
app.use(express.static('public'));

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
