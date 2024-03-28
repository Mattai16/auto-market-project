import { Request, Response } from "express";
import registerUser from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
    const {userName, email, password, rol} = req.body

    try {

        const newUser = await registerUser(userName, email, password, rol)
        console.log(newUser)
        

        if(newUser.userName != undefined){
            res.status(200).json({
                message: `¡El usuario ${newUser.userName} ha sido registrado!`,
                userName: newUser.userName,
                email: newUser.email,
                rol: newUser.rol,
                error: false
            })

        }else{
            res.status(200).json({
                message: `Error: ${newUser}`,
                error: true
            })
        }

    } catch (error: any) {

        res.status(500).json({
            message: '¡Error, el usuario no se ha registrado!',
            error: error.message
        })
    }
    

}

export const login = (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Logeado...'
    })
}