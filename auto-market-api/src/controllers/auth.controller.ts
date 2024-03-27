import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs'

export const register = async (req: Request, res: Response) => {
    const {userName, email, password, rol} = req.body

    try {

        const hashPassword =  await bcrypt.hash(password, 8)

        const newUser = new User ({
            userName,
            email,
            password: hashPassword,
            rol
        })
    
        await newUser.save()

        res.status(200).json({
            message: `¡El usuario ${newUser.userName} ha sido registrado!`,
            userName: newUser.userName,
            email: newUser.email,
            error: false
        })

    } catch (error: any) {

        res.status(500).json({
            message: '¡Error, el usuario no se ha registrado!',
            error: error.message
        })
    }
    
    res.status(200).json({
        message: 'Registrado..'
    })
}

export const login = (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Logeado...'
    })
}