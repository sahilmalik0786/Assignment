import  express  from "express";
import type { Application, Request, Response } from "express";
import connectDB from "./config/db.js";
import cookieparser from 'cookie-parser'
import authRoutes from './routes/user.routes.js'

const app:Application = express()
connectDB()

app.use(express.json())
app.use(cookieparser())


// auth routes will handle with this 
app.use('/api/auth', authRoutes)


export default app 