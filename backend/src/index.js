import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.route.js";
import taskRoutes from "./routes/task.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://global-trend-assignment-k7ce.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server running locally",
  });
});

// ✅ LOCAL ONLY
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});