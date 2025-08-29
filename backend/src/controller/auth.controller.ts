import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import type { AuthRequest } from "../middlewares/auth.middleware.js";

// i'm going to use tanstack-query on the frontend so don't need to send the user in register
// and login just a status and message will do the job for the acknowlegement



export const registerController = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  const isUserExists = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });
  
  if (isUserExists) {
    return res.status(401).json({
      message: "Can't Create the User ! User is Already Exists",
    });
  }

  const User = await userModel.create({
    username: username,
    email: email,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(201).json({
    message: "User Created Successfully",
  });
};
export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const User = await userModel.findOne({
    email: email,
  });

  if (!User) {
    return res.status(400).json({
      message: "there is no User with this email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, User.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "UnAuthorized ! Password is not Valid",
    });
  }

  const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(201).json({
    message: "Login Successfully",
  });
};

// this is going to be used for getting the user info with the cookie token that we had set earlier. 
export const getUser = async(req:AuthRequest , res:Response)=>{
     const user = req.user
    
     res.status(200).json({
        message:'hello ',
        user
     })

}