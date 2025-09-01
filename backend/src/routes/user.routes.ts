import express from 'express'
import { getUser, logoutController, sendOtpForLogin, sendOtpforRegister, verifyOtpForLogin, verifyOtpForRegister } from '../controller/auth.controller.js'
import { authUser } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.post('/register' , verifyOtpForRegister )
router.post('/login', verifyOtpForLogin )
router.get('/getuser' , authUser, getUser)
router.post('/registerOtp' , sendOtpforRegister)
router.post('/loginOtp' , sendOtpForLogin)
router.post('/logout' , logoutController)


export default router