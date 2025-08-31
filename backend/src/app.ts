import  express  from "express";
import type { Application } from "express";
import connectDB from "./config/db.js";
import cookieparser from 'cookie-parser'
import cors from 'cors'
// routes imports 
import authRoutes from './routes/user.routes.js'
import notesRoutes from './routes/notes.routes.js'

const app:Application = express()
connectDB()

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials:true
}))

// auth routes will handle with this 
app.use('/api/auth', authRoutes)

//notes routes will handle with this
app.use('/api/notes' , notesRoutes)

export default app 