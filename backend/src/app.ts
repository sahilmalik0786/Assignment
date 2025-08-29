import  express  from "express";
import type { Application } from "express";
import connectDB from "./config/db.js";
import cookieparser from 'cookie-parser'

// routes imports 
import authRoutes from './routes/user.routes.js'
import notesRoutes from './routes/notes.routes.js'

const app:Application = express()
connectDB()

app.use(express.json())
app.use(cookieparser())


// auth routes will handle with this 
app.use('/api/auth', authRoutes)

//notes routes will handle with this
app.use('/api/notes' , notesRoutes)

export default app 