import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../src/db/db.js";
import userRoutes from "../src/routes/user.route.js";
import taskRoutes from "../src/routes/task.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://global-trend-assignment-navy.vercel.app", 
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API running on Vercel",
  });
});

// ❗ VERY IMPORTANT
export default app;