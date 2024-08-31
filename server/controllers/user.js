import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

// Create a new User and save it to database amd save in cookie
const newUser = async (req, res, next) => {
  try {
    const { name, username, password, bio } = req.body;
    const avatar = {
      public_id: "hello",
      url: "hi",
    };

    const user = await User.create({
      name,
      bio,
      username,
      avatar,
      password,
    });

    sendToken(res, user, 201, "User created");
  } catch (error) {
    next(error);
  }
};

// Login user and save token in cookie

const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid username ", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch) return next(new ErrorHandler("Invalid username ", 404));

  sendToken(res, user, 200, `Welcome Back,${user.name}`);
});

const getMyProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user);
  res.status(200).json({
    success: true,
    user,
  });
});

export { newUser, login, getMyProfile };
