/**
 * Anropar googles api i olika funktioner beroende på vad man vill göra
 */

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5173;

// Define a route to call the API
app.get('/api/data', async (req, res) => {
    try {
        // Make a GET request to the external API
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=cow`);

        // Send the response from the external API back to the client
        res.json(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});