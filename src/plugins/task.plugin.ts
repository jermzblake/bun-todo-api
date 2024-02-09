import { Elysia } from 'elysia'
import * as taskController from '../controllers/tasks.controller'
import type { TaskBusinessObject } from '../types/task.type'

export const taskPlugin = new Elysia()
  .state('plugin-version', 1)
  .post('/tasks', async (req) => {
    const task = await taskController.createTask(req.body as TaskBusinessObject)
    return task
  })
  .get('/tasks', async () => {
    const tasks = await taskController.getTasks()
    return tasks
  })
  .get('/tasks/:id', async (req) => {
    const task = await taskController.getTask(req.params.id)
    return task
  })
  .put('/tasks/:id', async (req) => {
    const task = await taskController.updateTask(req.params.id, req.body as TaskBusinessObject)
    return task
  })
  .delete('/tasks/:id', async (req) => {
    const task = await taskController.deleteTask(req.params.id)
    return task
  })
