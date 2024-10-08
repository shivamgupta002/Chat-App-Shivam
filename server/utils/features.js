import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: false,
};

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "ChatApp" })
    .then((data) => {
      console.log(`Connected to DB :${data.connection.host}`);
    })
    .catch((err) => {
      console.log("Database connection lost" + err.message);
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  return res.status(code).cookie("chatApp-token", token, cookieOptions).json({
    success: true,
    message,
    // token,
    // user,
  });
};

export { connectDB, sendToken };
