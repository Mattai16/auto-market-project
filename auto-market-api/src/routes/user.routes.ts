import express from 'express'
import { getUser, postCommentByUser, postUser } from '../controllers/user.controller'


const router = express.Router()

router.get('/', getUser)
router.post('/registrar', postUser)
router.post('/comentar', postCommentByUser)

export default router