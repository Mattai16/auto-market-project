import car from "../models/car";
import user from "../models/user";
import CommentModel from "../models/comment";
import { ResponseContent } from "../utils/response.content"
import { StatusCodes } from "http-status-codes";
import { validateTypeId } from "../utils/validate.type.id";

export const registerComment = async (idUser: string, idCar: string, comment: string) => {
    ResponseContent.error = true

    try {

        if (validateTypeId(idUser) && validateTypeId(idCar)) {

            const userFound = await user.findById(idUser)
            const carFound = await car.findById(idCar)

            if (userFound && carFound) {
                const newComment = new CommentModel({
                    user: idUser,
                    userName: userFound.userName,
                    content: comment
                })

                const commentSaved = await newComment.save()

                if (commentSaved) {
                    const commentId: string = commentSaved._id.toString()
                    carFound.comments.push(commentId)
                    const commentCar = await carFound.save()

                    if (commentCar) {
                        ResponseContent.message = 'Se guardo correctamente el comentario'
                        ResponseContent.status = StatusCodes.CREATED
                        ResponseContent.error = false
                    } else {
                        ResponseContent.message = 'No se guardo correctamente el comentario'
                        ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
                    }

                } else {
                    ResponseContent.message = 'No se guardo correctamente el comentario'
                    ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
                }

            } else {
                ResponseContent.message = 'No se econtraron los objetos'
                ResponseContent.status = StatusCodes.NOT_FOUND
            }

        } else {
            ResponseContent.message = 'Tipos de idObject validos'
            ResponseContent.status = StatusCodes.BAD_REQUEST
        }


    } catch (error: any) {
        ResponseContent.message = `Error: ${error.message}`
        ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
    }

    return ResponseContent
}