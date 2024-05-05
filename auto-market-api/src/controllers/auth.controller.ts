import { Request, Response } from "express";
import registerUser, { loginUser } from "../services/auth.service";
import { StatusCodes } from "http-status-codes";
export const register = async (req: Request, res: Response) => {
    const { userName, email, password, rol } = req.body

    try {

        const newUser = await registerUser(userName, email, password, rol)
        res.status(newUser.status).json({
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

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body

    if (email && password && email.trim() !== "" && password.trim() !== "") {
        const { resultLogin, token } = await loginUser(email, password)

        if (token) {
            res.cookie('token', token)
        }
        res.status(resultLogin.status).json({
            message: resultLogin.message,
            error: resultLogin.error
        })
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'No se enviaron los datos',
            error: true
        })
    }

}

export const logout = async (_req: Request, res: Response) => {
    try {
        res.cookie('token', "", {
            expires: new Date(0)
        })
        res.status(StatusCodes.OK).json({
            message: 'Sesión cerrada',
            error: false
        })
    } catch (err: any) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error: ${err.message}`,
            error: true
        })
    }
}