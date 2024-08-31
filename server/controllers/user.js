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
  // return res.status(201).json({ message: "User created successfully" });
};

const login = (req, res) => {
  res.send("hello from login");
};
export { newUser, login };
