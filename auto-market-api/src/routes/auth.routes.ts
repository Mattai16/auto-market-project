import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const router = Router()

router.post('/registrarse',register)
router.post('/ingresar', login)

export default router