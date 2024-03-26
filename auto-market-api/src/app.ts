import "dotenv/config"
import express  from "express";
import cors from "cors";
import { connectDB } from "./utils/db";
const PORT = process.env.PORT || 3001;
const app = express()

app.use(cors())

connectDB();

app.listen(PORT, () => console.log(`Api auto-market escuchando en el puerto ${PORT}`))