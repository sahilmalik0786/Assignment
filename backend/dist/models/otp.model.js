// models/otp.model.ts
import { Schema, Document, model } from "mongoose";
const otpSchema = new Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 600 },
    // auto-delete after 10 minutes 
});
const otpModel = model("Otp", otpSchema);
export default otpModel;
//# sourceMappingURL=otp.model.js.map