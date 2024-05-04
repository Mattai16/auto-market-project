import User from "../models/user";
import { ResponseContent } from '../utils/response.content';
import { StatusCodes } from 'http-status-codes';
import { generateHash } from '../utils/password.hash';

export const registerUser = async (userName: string, email: string, password: string, rol: string) => {


    ResponseContent.error = true

    try {

        const hashPassword = await generateHash(password)

        const newUser = new User({
            userName,
            email,
            password: hashPassword,
            rol
        })

        const userSaved = await newUser.save()

        if (userSaved.userName != undefined) {
            ResponseContent.message = `¡El usuario ${userSaved.userName} ha sido registrado!`
            ResponseContent.satatus = StatusCodes.CREATED
            ResponseContent.error = false

        } else {
            ResponseContent.message = `El usuario no se ha podido registrar`
            ResponseContent.satatus = StatusCodes.INTERNAL_SERVER_ERROR
        }

    } catch (error: any) {
        ResponseContent.message = `Error: ${error.message}`
        ResponseContent.satatus = StatusCodes.INTERNAL_SERVER_ERROR
    }

    return ResponseContent
}


export default registerUser