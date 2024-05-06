import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { isValid } from "../utils/validate.elements";
import { editCommentById, registerComment } from "../services/user.service";

export const getUser = (_req: Request, res: Response) => {
    console.log('Han solicitado los usuarios')
    res.status(StatusCodes.OK).json({
        message: 'Obteniendo todos los usuarios'
    })
}

export const postUser = (_req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Se ha enviado un usuario'
        })
    } catch (err: any) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: err.message
        })
    }
}

export const postCommentByUser = async (req: Request, res: Response) => {
    const {idUser, idCar, comment} = req.body

    if(isValid(idUser) && isValid(idCar) && isValid(comment)){
        const resultComment = await registerComment(idUser, idCar, comment)
        res.status(resultComment.status).json({
            message: resultComment.message,
            error: resultComment.error
        })
    }else{
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'Datos no correctos',
            error: true
        })
    }
}

export const putComment = async (req: Request, res: Response) => {
  
    const idComment = req.params.id
    const {content}  = req.body

    if(content && isValid(idComment)){
        const result = await editCommentById(idComment, content)
        res.status(result.status).json({
            message: result.message,
            error: result.error
        })
    }else{
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'No se enviaron los datos',
            error: true
        })
    }

}

