import "dotenv/config"
import express  from "express";
import cors from "cors";
import { connectDB } from "./utils/db";
import userRouter from './routes/user.routes'
import authRouter from '../src/routes/auth.routes'
import carRouter from '../src/routes/car.routes'
import { main } from "./utils/route.main";
import cookieParser from 'cookie-parser'

const PORT = 3002;
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

connectDB();

app.use(`${main}/carros`, carRouter)
app.use(`${main}`, authRouter)
app.use(`${main}/usuario`, userRouter)

app.listen(PORT, () => console.log(`Api auto-market escuchando en el puerto ${PORT}`))