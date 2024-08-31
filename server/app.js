import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

// Access Data from .env file
dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI);

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(errorMiddleware);

// Port Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
