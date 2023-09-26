import express from 'express'
const router = express.Router()

import { login, register } from '../controllers/authentication'


export default (router: express.Router) => {
    /**
     * @swagger
     * /auth/register:
     *  post:
     *      tag:
     *         - Register
     *      summary: Register a user
     *      requestBody: 
     *          required: true
     *          contents: 
     *              application/json
     */
    router.post('/auth/register', register)
    router.post('/auth/login', login)
}