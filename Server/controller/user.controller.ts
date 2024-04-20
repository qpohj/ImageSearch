import { NextFunction, Request, Response } from 'express';
import { create, get, remove, update } from '../service/user.service';

//#TODO: fix requests
export const getUser = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const userId = request.params.userId;
        const user = await get(userId);
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user:', error);
        response.status(500).json({ error: 'Error fetching user' });
    }
};

export const createUser = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const user = request.body; // Assuming user data is sent in the request body
        const createdUser = await create(user);
        if (!createdUser) {
            return response
                .status(500)
                .json({ message: 'Failed to create user' });
        }
        response.status(201).json({ user: createdUser });
    } catch (error) {
        console.error('Failed to create user:', error);
        response.status(500).json({ error: 'Failed to create user' });
    }
};

export const updateUser = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const userId = request.params.userId;
        const userData = request.body;
        const updatedUser = await update(userId, userData);
        if (!updatedUser) {
            return response.status(404).json({ message: 'User not found' });
        }
        response.status(200).json({ user: updatedUser });
    } catch (error) {
        console.error('Failed to update user:', error);
        response.status(500).json({ error: 'Failed to update user' });
    }
};

export const deleteUser = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const userId = request.params.userId;
        await remove(userId);
        response.status(204).send(); // No content response
    } catch (error) {
        console.error('Failed to delete user:', error);
        response.status(500).json({ error: 'Failed to delete user' });
    }
};
