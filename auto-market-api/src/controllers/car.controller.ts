import {Request, Response } from "express";
import { registerCar } from "../services/car.service";


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

            if(resultCar.brand != undefined){
                res.status(200).json({
                    message: '¡El carro ha sido registrado!',
                    brand: resultCar.brand,
                    model: resultCar.model,
                    year: resultCar.year,
                    mileage: resultCar.mileage,
                    price: resultCar.price,
                    error: false
                })
            }else{
                res.status(500).json({
                    message: `Error: ${resultCar}`,
                    error: true
                })
            }

        }else{
            res.status(200).json({
                message: 'No se enviaron datos del carro',
                error: true
            })
        }

    } catch (error) {
        res.status(200).json({
            message: 'Hubo un error al enviar el carro',
            error: true
        })
    }
}