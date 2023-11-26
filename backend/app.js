import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());


// Route imports
import product from "./routes/productRoute.js";


app.use("/api/v1", product);


export default app; 