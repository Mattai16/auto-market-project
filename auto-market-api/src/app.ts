import "dotenv/config"
import express  from "express";
import cors from "cors";
import { connectDB } from "./utils/db";
import userRouter from '../src/routes/personal.routes'
import authRouter from '../src/routes/auth.routes'

const PORT = process.env.PORT || 3003;
const app = express()

app.use(express.json())
app.use(cors())
connectDB();

app.use('/api', authRouter)
app.use('/api/usuario', userRouter)



app.listen(PORT, () => console.log(`Api auto-market escuchando en el puerto ${PORT}`))