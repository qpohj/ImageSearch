import express from 'express';
import * as favoriteController from '../controller/favorite.controller';
import { initDB } from '../service/userDB';

const favoriteRouter = express.Router();

initDB();

favoriteRouter.get('/get/:userId', favoriteController.getFavorite);
favoriteRouter.post('/create/:userId', favoriteController.createFavorite);
favoriteRouter.put('/update/:userId', favoriteController.updateFavorite);
favoriteRouter.delete('/delete/:userId', favoriteController.deleteFavorite);

export default favoriteRouter;
