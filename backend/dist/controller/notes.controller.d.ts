import type { Response } from "express";
import { type AuthRequest } from "../middlewares/auth.middleware.js";
export declare const createNotesController: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteNoteController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllNotesController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=notes.controller.d.ts.map