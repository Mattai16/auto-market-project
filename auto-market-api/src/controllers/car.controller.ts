import {Request, Response } from "express";


export const getCars = async (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Obteniendo todos los carrros'
    })
}

export const postCar =async (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Enviando un carro'
    })
}