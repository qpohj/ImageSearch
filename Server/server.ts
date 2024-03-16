import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get("/api/test", (req, res) => {

    res.status(200).json({ message: "SUCCESS" })
})

app.get('/api/search', async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Make a GET request to the external API

       // console.log(process.env.VITE_GOOGLE_API_KEY);
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VITE_GOOGLE_API_KEY}&cx=${process.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${req.query.searchQuery}`);
        //logik alternativ 1, hämta ut hela arrayen av link och skicka till frontend


        // for (let i = 0; i < response.data.items.length; i++) {
        //     const picture = response.data.items.link[i];

        //     console.log(picture);
        // }


        console.log(response.data.items[0].link);
        // res.status(200).json(linkList);
        // Send the response from the external API back to the client
        res.status(200).json(response.data.items[0].link);
        next()
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});


app.listen(3000, () => console.log("Sever is up and running..."))