import express from 'express'
import { getUser, postCommentByUser, postUser } from '../controllers/user.controller'
import { auth } from '../middlewares/validate.token'


const router = express.Router()

router.get('/', getUser)
router.post('/registrar', postUser)
router.post('/comentar', auth, postCommentByUser)

export default router