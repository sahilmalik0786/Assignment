// models/otp.model.ts
import { Schema, Document, model } from "mongoose";

interface otp extends Document {
    email:string;
    otp:string;
    createdAt: Date;
}

const otpSchema = new Schema<otp>({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 }, 
  // auto-delete after 10 minutes 
});

const otpModel = model<otp>("Otp", otpSchema);
export default otpModel
