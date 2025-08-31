import jwt, { type JwtPayload } from 'jsonwebtoken'

import type { Request , Response ,NextFunction} from "express"
import userModel from '../models/user.model.js'

interface AUser{
    email:string,
    fullName:string,
    id:string
}

interface JwtUserPayload extends JwtPayload {
  id: string;
}

export interface AuthRequest extends Request{
    user?: AUser
}

export const authUser = async(req:AuthRequest , res:Response , next:NextFunction)=>{
    // const {token} = req.cookies
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjNlYTMxOWFkOGFhYWQ1ZDFhYWY4YiIsImlhdCI6MTc1NjYyMzMzMX0.vSx9szBXjnTcXlmQ6jJsvoWgvndRV0iofh2-PzmV8QI`

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET) as JwtUserPayload
       
        
        const user = await userModel.findById(decoded.id).lean()
        
        if(!user){
            return res.status(401).json({
                message:'User not found'
            })
        }
        req.user = { id: user._id.toString(), email: user.email, fullName: user.fullName };
        next()
    } catch (error) {
        console.log(error)
    }


}