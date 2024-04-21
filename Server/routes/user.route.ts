import express from 'express';
import * as userController from '../controller/user.controller';
import { initDB } from '../service/userDB';

const userRouter = express.Router();

initDB();

userRouter.get('/getUser/:userId', userController.getUser);
userRouter.post('/create', userController.createUser);
userRouter.put('/update/:userId', userController.updateUser);
userRouter.delete('/delete/:userId', userController.deleteUser);

export default userRouter;
