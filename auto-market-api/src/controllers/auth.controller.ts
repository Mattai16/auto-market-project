import { Request, Response } from "express";
import registerUser from "../services/auth.service";
import { StatusCodes } from "http-status-codes";

export const register = async (req: Request, res: Response) => {
    const {userName, email, password, rol} = req.body

    try {

        const newUser = await registerUser(userName, email, password, rol)
        res.status(newUser.satatus).json({
            message: newUser.message,
            error: newUser.error
        })
        
    } catch (error: any) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error: ${error.message}`,
            error: true
        })
    }
    

}

export const login = (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Logeado...'
    })
}