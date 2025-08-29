import express from 'express'
import { getUser, loginController, registerController } from '../controller/auth.controller.js'
import { authUser } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.post('/register' , registerController )
router.post('/login', loginController )
router.get('/getuser' , authUser, getUser)

export default router