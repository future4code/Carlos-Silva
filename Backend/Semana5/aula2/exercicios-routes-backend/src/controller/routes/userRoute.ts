import express from 'express'
import { signup, login, getProfile } from '../../controller/userController'

export const userRoute = express.Router()
    
userRoute.post('/signup', signup)
userRoute.post('/login', login)
userRoute.get('/', getProfile)
