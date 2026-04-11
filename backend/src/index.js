import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import taskRoutes from "./routes/task.route.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS setup (IMPORTANT for frontend + cookies)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API running successfully",
  });
});

export default app;