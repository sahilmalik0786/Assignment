import express from 'express'
import { authUser } from '../middlewares/auth.middleware.js'
import { createNotesController, deleteNoteController, getAllNotesController } from '../controller/notes.controller.js'

const router = express.Router()

router.post('/create' , authUser , createNotesController)
router.delete('/:noteId' , authUser , deleteNoteController )
router.get('/getNotes' , authUser , getAllNotesController)

export default router