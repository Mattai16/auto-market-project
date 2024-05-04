import {Request, Response } from "express";
import { registerCar } from "../services/car.service";
import { StatusCodes } from "http-status-codes";


export const getCars = async (_req: Request, res: Response) => {

    res.status(200).json({
        message: 'Obteniendo los carros'
    })


}

export const postCar = async (req: Request, res: Response) => {


    try {

        const carData = req.body
       
        
        if(Object.entries(carData).length !== 0){

            const resultCar = await registerCar(carData)
            res.status(resultCar.satatus).json({
                message: resultCar.message,
                error: resultCar.error
            })

        }else{
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'No se enviaron datos del carro',
                error: true
            })
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Hubo un error al enviar el carro',
            error: true
        })
    }
}