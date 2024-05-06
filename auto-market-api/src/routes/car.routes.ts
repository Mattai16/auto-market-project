import { Router } from "express";
import { deleteCar, getCar, getCars, getCommentsByCar, postCar, putCar } from "../controllers/car.controller";
import multer from 'multer'

const router = Router()
const upload = multer({ storage: multer.memoryStorage() })

router.get('/', getCars)
router.post('/registrar', upload.single('imagen'), postCar)
router.get('/getCommentsByCar/:id', getCommentsByCar)
router.delete('/deleteCar/:id', deleteCar)
router.get('/getCar/:id', getCar)
router.put('/updateCar/:id', putCar)
router.put('/updateCar/:id', putCar)

export default router
