import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())
app.get("/api/search", async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Make a GET request to the external API
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VITE_GOOGLE_API_KEY}&cx=${process.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${req.query.searchQuery}`);
        
        //print out searchInformation from Response FOR SEARCH RESULTS
        let searchResult = response.data.searchInformation;

        let pictures = response.data.items.map((item: string) => item.link);
        let myData = {
            pictures: pictures,
            searchData: searchResult
        }
        res.status(200).json(myData);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});


//Get user
// app.get('/api/user', async (req, res, next) => {
//     try {

//         console.log(res.json())
//         next()
//     } catch (error) {

//         console.error('Error getting user:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }

// })

//create new favorite for user
app.post('/api/favorites', async (req, res) => {
    try {
        const jsonData = req.body;

        console.log(jsonData);
    } catch (error) {
        // If an error occurs during image saving process, handle it here
        console.error('Error creating new favorite image:', error);

        // Respond with an error message and appropriate status code
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(3000, () => console.log("Server is up and running..."))