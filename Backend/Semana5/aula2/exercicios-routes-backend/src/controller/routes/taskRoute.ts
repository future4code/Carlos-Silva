import express from 'express'
import { createTask,getTaskById } from '../../controller/taskController'


export const taskRoute = express.Router()

taskRoute.put('/task', createTask)
taskRoute.get('/task/:id', getTaskById)