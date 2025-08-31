import { Document, Schema,  model } from "mongoose";

export interface User extends Document {
  email: string;
  fullName: string;
  dob: string;
 
//   _id:string
}


 

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  dob: { type: String, required: true },
 
},{
    timestamps:true
});

const userModel =  model<User>("User", userSchema);
export default userModel;