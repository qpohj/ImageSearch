import Joi from 'joi';

// Define Joi schema for User
export const userSchema = Joi.object({
    userId: Joi.string().length(32).required(),
    favoriteImages: Joi.array().required()
});

/* Example Data
const userData: User = {
    user: "fakeuser",
    favoriteImages: [
        {
            Title: "title",
            byteSize: 2314,
            url: "http://example.com/image.jpg"
        }
    ]
};
*/
