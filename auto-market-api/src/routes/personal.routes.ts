import express from 'express'
import { getUser, postUser } from '../controllers/user.controller'


const router = express.Router()

router.get('/', getUser)
router.post('/registrar', postUser)

export default router