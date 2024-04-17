import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import express, {
    NextFunction,
    Request,
    Response
} from 'express';
import { userSchema, favoriteImageSchema } from '../Server/schemas/user.schema.js';
import fs from "fs"
import { request } from 'http';

dotenv.config();
const app = express();



app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())


app.get("/api/search", async (request: Request, response: Response, next: NextFunction) => {
    try {
        // Make a GET request to the external API
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VITE_GOOGLE_API_KEY}&cx=${process.env.VITE_SEARCH_ENGINE_ID}&num=10&searchType=image&q=${request.query.searchQuery}`);

        //print out searchInformation from Response FOR SEARCH RESULTS
        let searchResult = response.data.searchInformation;

        let pictures = response.data.items.map((item: string) => item.link);
        let myData = {
            pictures: pictures,
            searchData: searchResult
        }
        response.status(200).json(myData);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        response.status(500).json({ error: 'Error fetching data' });
    }
});


//create new favorite for user
app.post("store-user-data", (request: Request, response: Response) => {


    const validateResults = userSchema.validate(request.body)
    if (validateResults.error) {
        return response.status(400).json({ error: validateResults.error.details[0].message })
    }

    // Write user data to JSON file
    fs.writeFile("../data/users.json", JSON.stringify(request.body), (err) => {
        if (err) {
            console.error("Error writing user data to file:", err);
            return response.status(500).json({ error: "Failed to store user data" });
        }
        console.log("User data stored successfully");
        response.status(200).json({ message: "User data stored successfully" });
    });
})

app.listen(3000, () => console.log("Server is running on port 3000..."))