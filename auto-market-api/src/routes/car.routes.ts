import { Router } from "express";
import { getCars, getCommentsByCar, postCar } from "../controllers/car.controller";

const router = Router()

router.get('/', getCars)
router.post('/registrar', postCar)
router.get('/getCommentsByCar/:id', getCommentsByCar)

export default router
