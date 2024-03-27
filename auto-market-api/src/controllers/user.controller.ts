import { Request, Response } from "express";


export const getUser = (_req: Request, res: Response) => {
    console.log('Han solicitado los usuarios')
    res.status(200).json({
        message: 'Obteniendo todos los usuarios'
    })
}

export const postUser = (_req: Request, res : Response) =>{
    try {
        res.status(200).json({
            message: 'Se ha enviado un usuario'
        })
    } catch (err : any) {
        res.status(500).json({
            message: err.message
        })
    }
}

