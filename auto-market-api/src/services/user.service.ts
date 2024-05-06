import car from "../models/car";
import user from "../models/user";
import CommentModel from "../models/comment";
import { ResponseContent } from "../utils/response.content"
import { StatusCodes } from "http-status-codes";
import { validateTypeId } from "../utils/validate.type.id";
import { isValidObjectId } from "mongoose";

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

export const editCommentById = async (idComment: string, content: string) => {

    ResponseContent.error = true

    try {

        if (validateTypeId(idComment)) {

            const commentFound = await CommentModel.findById(idComment)
            if (commentFound) {
                const commentUpdate = await CommentModel.findByIdAndUpdate(idComment, { content }, { new: true })
                if (commentUpdate) {
                    ResponseContent.message = commentUpdate
                    ResponseContent.status = StatusCodes.OK
                    ResponseContent.error = false
                } else {
                    ResponseContent.message = 'El comentario no se pudo editar'
                    ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
                }
            } else {
                ResponseContent.message = 'El comentario no existe'
                ResponseContent.status = StatusCodes.NOT_FOUND
            }

        } else {
            ResponseContent.message = 'El id no es valido'
            ResponseContent.status = StatusCodes.BAD_REQUEST
        }

    } catch (error: any) {
        ResponseContent.message = `Error: ${error.message}`
        ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
    }

    return ResponseContent
}

export const deleteCommentById = async (idComment: string) => {

    ResponseContent.error = true

    if (isValidObjectId(idComment)) {

        const commentFound = await CommentModel.findById(idComment)

        if (commentFound) {

            const commentDeleted = await CommentModel.deleteOne({ _id: idComment })
            if (commentDeleted.deletedCount > 0) {
                ResponseContent.message = 'El comentario ha sido eliminado'
                ResponseContent.status = StatusCodes.OK
                ResponseContent.error = false
            } else {
                ResponseContent.message = 'El comentario no se pudo eliminar'
                ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
            }

        } else {
            ResponseContent.message = 'El comentario no existe'
            ResponseContent.status = StatusCodes.NOT_FOUND
        }

    } else {
        ResponseContent.message = 'El id no es valido'
        ResponseContent.status = StatusCodes.BAD_REQUEST
    }

    return ResponseContent
}