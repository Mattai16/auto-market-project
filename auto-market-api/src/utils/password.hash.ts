import bcrypt from 'bcryptjs'

export const generateHash = async (password : string) => {
    let hashPassword: any = ""
    if (password === "") {
        hashPassword = null
    } else {
        hashPassword = await bcrypt.hash(password, 8)
    }
    return hashPassword
}