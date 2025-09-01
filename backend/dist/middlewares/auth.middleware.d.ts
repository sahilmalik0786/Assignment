import type { Request, Response, NextFunction } from "express";
interface AUser {
    email: string;
    fullName: string;
    id: string;
}
export interface AuthRequest extends Request {
    user?: AUser;
}
export declare const authUser: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=auth.middleware.d.ts.map