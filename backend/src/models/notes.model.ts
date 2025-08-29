import {Document, model , Schema, Types } from 'mongoose'

interface INotes extends Document{
    title:string;
    user:Types.ObjectId;
}

const noteSchema  = new Schema<INotes>({
    title:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
} , {
    timestamps:true
})

const notesModel = model<INotes>('Notes',noteSchema)

export default notesModel 