import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export const validateSchema = (schema: Schema) => {
    return (request: Request, response: Response, next: NextFunction) => {
        const { error } = schema.validate(request.body, { abortEarly: false });

        if (error) {
            return response.status(400).json(error);
        }
        next();
    };
};

// this validates the schema
