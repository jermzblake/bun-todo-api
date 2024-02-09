import * as mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
  title: String,
  description: { type: String, required: true },
  priority: {
    type: Number,
    min: 1,
    max: 3,
    required: true
  },
  effort: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  dueDate: Date,
  completed: { type: Boolean, default: false },
  notes: String,
  blocked: { type: Boolean, default: false },
  created: { type: Date, default: Date.now }
})

export type Task = mongoose.InferSchemaType<typeof taskSchema>
export const Task = mongoose.model('Task', taskSchema)