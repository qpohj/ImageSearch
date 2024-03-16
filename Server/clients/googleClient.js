/**
 * Anropar googles api i olika funktioner beroende på vad man vill göra
 */

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5173;

// Define a route to call the API

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});