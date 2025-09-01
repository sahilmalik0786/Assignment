import jwt, {} from 'jsonwebtoken';
import userModel from '../models/user.model.js';
export const authUser = async (req, res, next) => {
    const { token } = req.cookies;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).lean();
        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }
        req.user = { id: user._id.toString(), email: user.email, fullName: user.fullName };
        next();
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=auth.middleware.js.map