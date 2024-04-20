import express from 'express';
import * as userController from '../controller/user.controller';
import { initDB } from '../service/userDB';

const router = express.Router();

initDB(); 

router.get('/:userId', userController.getUser);
router.post('/:userId', userController.createUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

export default router;
