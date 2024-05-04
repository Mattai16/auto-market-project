import jwt  from "jsonwebtoken";

export function createAccesToken(payload :any) {
    return new Promise((resolve, reject)=>{
        jwt.sign(
            payload,
            "secretToken",
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        )
    }) 
}