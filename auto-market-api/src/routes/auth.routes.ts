import { Router } from "express";
import { login, logout, register, validateToken } from "../controllers/auth.controller";

const router = Router()

router.post('/registrarse',register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/validateTokenUser', validateToken)

export default router