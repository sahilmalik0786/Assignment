import express from 'express'
import { authUser } from '../middlewares/auth.middleware.js'
import { createNotesController } from '../controller/notes.controller.js'

const router = express.Router()

router.post('/create' , authUser , createNotesController)


export default router