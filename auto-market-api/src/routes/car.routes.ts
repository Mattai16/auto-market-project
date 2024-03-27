import { Router } from "express";
import { getCars, postCar } from "../controllers/car.controller";

const router = Router()

router.get('/', getCars)
router.post('/registrar', postCar)

export default router
