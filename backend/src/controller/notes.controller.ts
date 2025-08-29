import type { Request , Response } from "express"
import notesModel from "../models/notes.model.js"
import {type AuthRequest } from "../middlewares/auth.middleware.js"


export const createNotesController = async(req:AuthRequest , res:Response)=>{
    const {title} = req.body
    const user = req.user

    const notes = await notesModel.create({
        title:title,
        user:user?.id
    })
     
    res.status(201).json({
        message:'note created successfully',
        notes
    })

}

