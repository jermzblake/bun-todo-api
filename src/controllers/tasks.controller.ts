import { Task } from '../models/task'
import { mapTaskBusinessObjectFromTask, mapTaskFromTaskBusinessObject } from '../mappers/task.mapper'
import type { TaskBusinessObject } from '../types/task.type'

export const getTasks = async () => {
  const tasks = await Task.find().sort({ dueDate: 1, priority: 1, effort: -1 })
  return tasks.map((task) => mapTaskBusinessObjectFromTask(task))
}

export const getTask = async (id: string) => {
  const task = await Task.findById(id)
  if (!task) {
    //update this to 404 Error
    throw new Error('Task not found')
  }
  return mapTaskBusinessObjectFromTask(task)
}

export const createTask = async (task: TaskBusinessObject) => {
  const taskEntity = mapTaskFromTaskBusinessObject(task)
  const newTask = new Task(taskEntity)
  await newTask.save()
  return mapTaskBusinessObjectFromTask(newTask)
}

export const updateTask = async (id: string, task: TaskBusinessObject) => {
  const taskEntity = mapTaskFromTaskBusinessObject(task)
  const newTask = await Task.findByIdAndUpdate(id, taskEntity, { new: true })
  if (!newTask) {
    //update this to 404 Error
    throw new Error('Task not found')
  }
  return mapTaskBusinessObjectFromTask(newTask as Task)
}

export const deleteTask = async (id: string) => {
  const deletedTask = await Task.findByIdAndDelete(id)
  if (!deletedTask) {
    return null
  }
  return mapTaskBusinessObjectFromTask(deletedTask as Task)
}
