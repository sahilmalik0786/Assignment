import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('connected to Db'))
        .catch((err) => console.log(err));
};
export default connectDB;
//# sourceMappingURL=db.js.map