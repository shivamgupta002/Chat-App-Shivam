import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";

// Create a new User and save it to database amd save in cookie
const newUser = async (req, res) => {
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
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");
  if (!user) return res.status(400).json({ message: "Invalid Username" });

  const isMatch = await compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

  sendToken(res, user, 201, `Welcome Back,${user.name}`);
};
export { newUser, login };
