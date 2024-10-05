const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

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

// Add similar logging for other routes...

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
