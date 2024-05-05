import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

declare module "express" {
    interface Request {
        user?: any
    }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    
    const { token } = req.cookies
    
    if (!req.cookies || !req.cookies.token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'UNAUTHORIZED',
            error: true
        });
    }
    

    jwt.verify(token, "secretToken", (err: any, user: any) => {
        if (err) return res.status(StatusCodes.FORBIDDEN).json({
            message: 'Token invalido',
            error: true
        })

        req.user = user

        next()
        return
    })

    return
}