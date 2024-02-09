import type { TaskBusinessObject } from '../types/task.type'
import type { Task } from '../models/task'

interface PriorityMap {
  [key: number]: string
}

const priorityMap: PriorityMap = {
  1: 'high',
  2: 'medium',
  3: 'low',
}

const getKeyFromValue = (value: string): number | undefined => {
  for (const key in priorityMap) {
    if (priorityMap[key] === value) {
      return parseInt(key)
    }
  }
  return undefined // If value is not found
}

export const mapPriorityFromNumberToString = (priorityNumber: number): string => {
  return priorityMap[priorityNumber]
}

export const mapPriorityFromStringToNumber = (priorityString: string): number => {
  return getKeyFromValue(priorityString) as number
}

export const mapTaskFromTaskBusinessObject = (task: TaskBusinessObject): Task => {
  return {
    title: task.title,
    description: task.description,
    priority: mapPriorityFromStringToNumber(task.priority),
    effort: task.effort,
    dueDate: task.dueDate,
    completed: task.completed,
    notes: task.notes,
    blocked: task.blocked,
    created: task.created,
  }
}

export const mapTaskBusinessObjectFromTask = (task: Task): TaskBusinessObject => {
  return {
    id: task._id?.toString(),
    title: task.title as string,
    description: task.description,
    priority: mapPriorityFromNumberToString(task.priority),
    effort: task.effort,
    dueDate: task.dueDate as Date,
    completed: task.completed,
    notes: task.notes as string,
    blocked: task.blocked,
    created: task.created,
  }
}
