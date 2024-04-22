import Joi from 'joi';

// Define Joi schema for FavoriteImage
export const favoriteImageSchema = Joi.object({
    Title: Joi.string().required(),
    byteSize: Joi.number().required(),
    url: Joi.string().uri().required()
});
