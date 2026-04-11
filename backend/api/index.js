import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/db/db.js";

dotenv.config();

// Connect DB once per serverless instance
connectDB().catch((err) => {
  console.log("DB Connection Error:", err.message);
});

export default app;