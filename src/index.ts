import { Elysia } from 'elysia'
import * as mongoose from 'mongoose'
import { taskPlugin } from './plugins/task.plugin'

const apiUrl = process.env.DATABASE_URL!

await mongoose.connect(apiUrl)

//APPLICATION
const app = new Elysia().use(taskPlugin)

//SERVER
app.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
