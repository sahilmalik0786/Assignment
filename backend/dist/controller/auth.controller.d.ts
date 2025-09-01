import type { Request, Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
export declare const sendOtpforRegister: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const sendOtpForLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyOtpForRegister: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyOtpForLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUser: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map