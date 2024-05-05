import { Request, Response } from "express";
import { deleteCarById, editCarById, getAllCars, getCommentsByIdCar, registerCar } from "../services/car.service";
import { StatusCodes } from "http-status-codes";
import { isValid } from "../utils/validate.elements";


export const getCars = async (_req: Request, res: Response) => {

    try {
        const resultCars = await getAllCars()
        res.status(resultCars.status).json({
            message: resultCars.message,
            error: resultCars.error
        })
    } catch (error: any) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: `Error: ${error.message}`
        })
    }
}

export const postCar = async (req: Request, res: Response) => {


    try {

        const carData = req.body


        if (Object.entries(carData).length !== 0) {

            const resultCar = await registerCar(carData)
            res.status(resultCar.status).json({
                message: resultCar.message,
                error: resultCar.error
            })

        } else {
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

export const putCar = async (req: Request, res: Response) => {
    const carData: any = req.body
    const idCar = req.params.id
    if (Object.keys(carData).length !== 0 && isValid(idCar)) {
        const result = await editCarById(idCar, carData)
        res.status(result.status).json({
            message: result.message,
            error: result.error
        })
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'No se enviaron los datos',
            error: true
        })
    }
}

export const getCommentsByCar = async (req: Request, res: Response) => {

    const idCar = req.params.id

    if (isValid(idCar)) {
        const resultComments = await getCommentsByIdCar(idCar)
        res.status(resultComments.status).json({
            message: resultComments.message,
            error: resultComments.error
        })
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Dato no correcto',
            error: true
        })
    }

}

export const deleteCar = async (req: Request, res: Response) => {

    const idCar = req.params.id

    if (isValid(idCar)) {
        const result = await deleteCarById(idCar)
        res.status(result.status).json({
            message: result.message,
            error: result.error
        })
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Dato no correcto',
            error: true
        })
    }

}