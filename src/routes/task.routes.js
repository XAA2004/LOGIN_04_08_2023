import { Router } from "express";
import { getTask, getTasks, createTask, deleteTask, updateTask } from "../controllers/task.controller.js";
import { requiredAuth, tokenValidation } from '../middlewares/tokenValidation.js';
import { createTaskSchema } from '../schemas/task.schema.js';
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get('/tasks', requiredAuth, getTasks)
router.get('/task/:id',requiredAuth, getTask)
router.post('/task',requiredAuth, validateSchema(createTaskSchema) , createTask)
router.put('/tasks/:id',requiredAuth, updateTask)
router.delete('/task/:id', requiredAuth, deleteTask)

export default router;