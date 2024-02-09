export interface TaskBusinessObject {
  id?: string
  title: string
  description: string
  priority: string
  effort: number
  dueDate: Date
  completed: boolean
  notes: string
  blocked: boolean
  created: Date
}