import app from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";

// Configuring Environment variables.
dotenv.config({path:"backend/config/config.env"});

// Connecting Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on http://localhost:${process.env.PORT}`);
});