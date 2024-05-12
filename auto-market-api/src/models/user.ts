import { Schema } from "mongoose";
import { User } from "../interfaces/user.interface";
import mongoose from "mongoose";

const userSchema = new Schema<User>({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ["administrador", "cliente"],
        required: true
    }
})

export default mongoose.model('User', userSchema)