import { Router } from "express";
import { deleteCar, getCars, getCommentsByCar, postCar } from "../controllers/car.controller";

const router = Router()

router.get('/', getCars)
router.post('/registrar', postCar)
router.get('/getCommentsByCar/:id', getCommentsByCar)
router.delete('/deleteCar/:id', deleteCar)

export default router
