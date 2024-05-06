import express from 'express'
import { getUser, postCommentByUser, postUser, putComment } from '../controllers/user.controller'
import { auth } from '../middlewares/validate.token'


const router = express.Router()

router.get('/', getUser)
router.post('/registrar', postUser)
router.post('/comentar', auth, postCommentByUser)
router.put('/editComment/:id', auth, putComment)

export default router