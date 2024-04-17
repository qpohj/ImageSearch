import { NextFunction } from "express"
import { Schema } from "joi"

const validate = (schema: Schema) => {



    return (request: Request, response: Response, next: NextFunction) => {

        const { error } = schema.validate(request.body, { abortEarly: false })

        if (error) {
            return response.status(400).json(error)
        }
        next()
    }
}

module.exports = { validate }