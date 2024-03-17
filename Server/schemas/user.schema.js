const Joi = require("joi");

const userPictureSchema = Joi.object({
    username: Joi.string().required(),
    profilePicture: Joi.string().required()
})

module.exports = {userPictureSchema}