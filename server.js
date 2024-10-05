const express = require('express');
const bodyParser = require('body-parser'); // To parse JSON request bodies
const apiRoutes = require('./src/api/index'); // Adjust the path if necessary

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use('/api', apiRoutes); // Use the API routes

// Serve static files (HTML, CSS, JS)
app.use(express.static('src'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
