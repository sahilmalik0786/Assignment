import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import otpModel from "../models/otp.model.js";
import sendOtpMail from "../services/sendMail.service.js";
// i'm going to use tanstack-query on the frontend so don't need to send the user in register
// and login just a status and message will do the job for the acknowlegement
export const sendOtpforRegister = async (req, res) => {
    try {
        const { email } = req.body;
        console.log('ek');
        const isUserExists = await userModel.findOne({
            email: email,
        });
        if (isUserExists) {
            return res.status(401).json({
                message: "Can't Create the User ! User is Already Exists",
            });
        }
        const otp = crypto.randomInt(100000, 999999).toString();
        await otpModel.findOneAndUpdate({ email }, { otp, createdAt: new Date() }, { upsert: true });
        await sendOtpMail(email, otp);
        return res.status(200).json({
            message: "Otp has send",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
};
export const sendOtpForLogin = async (req, res) => {
    try {
        const { email } = req.body;
        const user = userModel.findOne({
            email
        });
        if (!user) {
            return res.status(400).json({
                message: 'There is no User with this Email'
            });
        }
        const otp = crypto.randomInt(100000, 999999).toString();
        await otpModel.findOneAndUpdate({
            email
        }, { otp, createdAt: new Date() }, { upsert: true });
        await sendOtpMail(email, otp);
        res.status(201).json({ message: 'Otp has sent' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server Error'
        });
    }
};
export const verifyOtpForRegister = async (req, res) => {
    const { email, otp, fullName, dob } = req.body;
    console.log('ej');
    const record = await otpModel.findOne({ email });
    if (!record) {
        return res.status(400).json({
            message: 'Otp expired or not found'
        });
    }
    if (record.otp !== otp) {
        return res.status(400).json({
            message: 'Invalid Otp'
        });
    }
    const user = await userModel.create({
        fullName,
        email,
        dob
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000,
        path: '/' });
    res.status(201).json({
        message: 'Account created Successfully'
    });
};
export const verifyOtpForLogin = async (req, res) => {
    const { email, otp } = req.body;
    const record = await otpModel.findOne({
        email
    });
    if (!record) {
        return res.status(400).json({
            message: 'Otp expired or Not found'
        });
    }
    if (record.otp !== otp) {
        return res.status(400).json({
            message: 'Invalid Otp'
        });
    }
    const user = await userModel.findOne({
        email
    }).lean();
    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET);
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000,
        path: '/'
    });
    res.status(200).json({
        message: 'Login Sucessfully'
    });
};
// this is going to be used for getting the user info with the cookie token that we had set earlier.
export const getUser = async (req, res) => {
    const user = req.user;
    res.status(200).json({
        message: "hello ",
        user,
    });
};
//# sourceMappingURL=auth.controller.js.map