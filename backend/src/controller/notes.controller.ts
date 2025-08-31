import type { Response } from "express";
import notesModel from "../models/notes.model.js";
import { type AuthRequest } from "../middlewares/auth.middleware.js";

export const createNotesController = async (
  req: AuthRequest,
  res: Response
) => {
  const { title } = req.body;
  const user = req.user;

  const notes = await notesModel.create({
    title: title,
    user: user?.id,
  });

  res.status(201).json({
    message: "note created successfully",
  });
};

export const deleteNoteController = async (req: AuthRequest, res: Response) => {
  try {
    const { noteId } = req.params;
   
    const deletedNote = await notesModel.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllNotesController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = req.user;
    const notes = await notesModel.find({ user: user?.id });
     
    if (notes.length==0) {
      return res.status(200).json({
        message: "there are no notes of this user",
        notes:[]
      });
    }

    res.status(200).json({
      message: "Notes found Successfully",
      notes,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
