import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/db/db.js";

dotenv.config();

connectDB();

export default app;