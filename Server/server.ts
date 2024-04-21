import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import userRouter from './routes/user.route';

dotenv.config();
const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
);
app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log('Server is running on port 3000...'));
