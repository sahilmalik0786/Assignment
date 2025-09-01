import { Document } from "mongoose";
export interface User extends Document {
    email: string;
    fullName: string;
    dob: string;
}
declare const userModel: import("mongoose").Model<User, {}, {}, {}, Document<unknown, {}, User, {}, {}> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default userModel;
//# sourceMappingURL=user.model.d.ts.map