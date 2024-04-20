import { NextFunction, Request, Response } from 'express';

export const getFavorite = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {
        console.error('Failed to retrieve user', error);
        response.status(500).send({ message: 'Something went wrong' });
    }
};

export const createFavorite = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {
        console.error('Failed to retrieve user', error);
        response.status(500).send({ message: 'Something went wrong' });
    }
};

export const updateFavorite = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {
        console.error('Failed to retrieve user', error);
        response.status(500).send({ message: 'Something went wrong' });
    }
};

export const deleteFavorite = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {
        console.error('Failed to retrieve user', error);
        response.status(500).send({ message: 'Something went wrong' });
    }
};
