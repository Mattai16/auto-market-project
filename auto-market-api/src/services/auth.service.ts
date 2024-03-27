import bcrypt from 'bcryptjs'
import User from "../models/user";

export const registerUser = async (userName: string, email: string, password: string, rol: string) => {
    

    try {

        let hashPassword: any = ""

        if(password === ""){
            hashPassword = null
        }else{
            hashPassword =  await bcrypt.hash(password, 8)
        }

        const newUser = new User ({
            userName,
            email,
            password: hashPassword,
            rol
        })

        await newUser.save()
        return newUser

    } catch (error : any) {
        return error.message
    }
}


export default registerUser