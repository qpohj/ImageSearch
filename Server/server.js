const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())

app.get('/api/search', async (req, res) => {
    try {
        // Make a GET request to the external API
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VITE_GOOGLE_API_KEY}&cx=${process.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${req.query.searchQuery}`);



        // Send the response from the external API back to the client
        res.json(response);
        res.status(200);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Start the server
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });
app.listen(3000, () => console.log("Sever is up and running... on port 3000"))