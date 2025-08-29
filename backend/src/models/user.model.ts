import mongoose, { Document, Schema, Types, model } from "mongoose";

export interface User {
  email: string;
  username: string;
  password: string;
//   _id:string
}


 

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
},{
    timestamps:true
});

const userModel =  model<User>("User", userSchema);
export default userModel;