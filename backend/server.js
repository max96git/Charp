const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

wss.on('connection', (ws) => {
    console.log('A player connected.');

    // Broadcast player data to other connected clients
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        // Broadcast message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(JSON.stringify(data));
            }
        });
    });

    ws.on('close', () => {
        console.log('A player disconnected.');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
