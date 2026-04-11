import dotenv from "dotenv";
import app from "../src/index.js";
import connectDB from "../src/db/db.js";

dotenv.config();

connectDB();

export default app;