import { Router } from "express";
import { deleteCar, getCars, getCommentsByCar, postCar, putCar } from "../controllers/car.controller";

const router = Router()

router.get('/', getCars)
router.post('/registrar', postCar)
router.get('/getCommentsByCar/:id', getCommentsByCar)
router.delete('/deleteCar/:id', deleteCar)
router.put('/updateCar/:id', putCar)

export default router
