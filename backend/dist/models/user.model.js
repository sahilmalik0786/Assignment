import { Document, Schema, model } from "mongoose";
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    dob: { type: String, required: true },
}, {
    timestamps: true
});
const userModel = model("User", userSchema);
export default userModel;
//# sourceMappingURL=user.model.js.map