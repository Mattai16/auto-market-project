import User from "../models/user";
import { ResponseContent } from '../utils/response.content';
import { StatusCodes } from 'http-status-codes';
import { generateHash, matchPassword } from '../utils/password.bcrypt';
import { createAccesToken } from "../utils/jwt";

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
            ResponseContent.status = StatusCodes.CREATED
            ResponseContent.error = false

        } else {
            ResponseContent.message = `El usuario no se ha podido registrar`
            ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
        }

    } catch (error: any) {
        ResponseContent.message = `Error: ${error.message}`
        ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
    }

    return ResponseContent
}

export const loginUser = async (email: string, password: string) => {
    ResponseContent.error = true
    let token = undefined
    try {

        const userFound = await User.findOne({ email })

        if (userFound) {
            const verifiPassword = await matchPassword(password, userFound.password)
            if (verifiPassword) {

                token = await createAccesToken({
                    id: userFound._id,
                    userName: userFound.userName,
                    rol: userFound.rol
                })
            
                ResponseContent.message = `Bienvenid@ al sistema ${userFound.userName}`
                ResponseContent.status = StatusCodes.OK
                ResponseContent.error = false

            } else {
                ResponseContent.message = 'Credenciales no validas'
                ResponseContent.status = StatusCodes.NOT_FOUND
            }
        } else {
            ResponseContent.message = 'Credenciales no validas'
            ResponseContent.status = StatusCodes.NOT_FOUND
        }

    } catch (error: any) {
        ResponseContent.message = `Error: ${error.message}`
        ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
    }

    return {resultLogin: ResponseContent, token}
}


export default registerUser