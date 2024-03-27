import "dotenv/config"
import express  from "express";
import cors from "cors";
import { connectDB } from "./utils/db";
import userRouter from '../src/routes/personal.routes'
import authRouter from '../src/routes/auth.routes'
import carRouter from '../src/routes/car.routes'
import { main } from "./utils/route.main";

const PORT = process.env.PORT || 3003;
const app = express()

app.use(express.json())
app.use(cors())
connectDB();

app.use(`${main}/carros`, carRouter)
app.use(`${main}`, authRouter)
app.use(`${main}/usuario`, userRouter)

app.listen(PORT, () => console.log(`Api auto-market escuchando en el puerto ${PORT}`))