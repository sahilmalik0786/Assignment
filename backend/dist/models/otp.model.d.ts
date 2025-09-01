import { Document } from "mongoose";
interface otp extends Document {
    email: string;
    otp: string;
    createdAt: Date;
}
declare const otpModel: import("mongoose").Model<otp, {}, {}, {}, Document<unknown, {}, otp, {}, {}> & otp & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default otpModel;
//# sourceMappingURL=otp.model.d.ts.map