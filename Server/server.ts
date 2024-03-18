import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

const { userPictureSchema } = require("./schemas/user.schema.js");
const { validate } = require("./schemas/validate.js");

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())
app.get("/api/search", async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Make a GET request to the external API

        // console.log(process.env.VITE_GOOGLE_API_KEY);
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VITE_GOOGLE_API_KEY}&cx=${process.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${req.query.searchQuery}`);

        let picture = response.data.items.map((item: string) => item.link);        
        
        console.log(response.data.items);
        console.log(picture);
        res.status(200).json(picture);
        next()
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});


app.post('/api/user/images', (req, res) => {
    /// GÖR EN POST FUNKTION FÖR DATA IFRÅN CLIENT
    const response = {
        
    }

    console.log(response);
    res.status(201).json(req.body)
})


app.listen(3000, () => console.log("Server is up and running..."))