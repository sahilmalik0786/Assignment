import { Schema, Types, model } from "mongoose";

export interface User {
  email: string;
  username: string;
  password: string;
  Otp:number;
//   _id:string
}


 

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  Otp: Number
},{
    timestamps:true
});

const userModel =  model<User>("User", userSchema);
export default userModel;