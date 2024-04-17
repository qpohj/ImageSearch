const Joi = require("joi");

// Define Joi schema for FavoriteImage
const favoriteImageSchema = Joi.object({
    Title: Joi.string().required(),
    byteSize: Joi.number().required(),
    url: Joi.string().uri().required()
});

// Define Joi schema for User
const userSchema = Joi.object({
    user: Joi.string().required(),
    favoriteImages: Joi.array().items(favoriteImageSchema)
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


module.exports = favoriteImageSchema, userSchema