import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { deleteComment } from '../api/fetch'

function CommentCard({ comment }) {

    const { user } = useAuth()
    const [commentErrors, setCommentErrors] = useState(null)

    const onEliminar = async () => {
        await deleteComment(comment._id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
                setCommentErrors(error.response.data.message)
            })
    }

    useEffect(() => {
        if (commentErrors != null) {
            const timer = setTimeout(() => {
                setCommentErrors(null)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [commentErrors])

    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <div className="flex justify-between px-4 py-2 bg-gray-100">
                <h3 className="text-base font-semibold">{comment.userName}</h3>
                {
                    <div className='text-red-500 px-1 text-center'>
                        {commentErrors}
                    </div>
                }
                {
                    user.rol === 'administrador' && (
                        <button
                            onClick={onEliminar}
                            className='bg-red-500 hover:bg-red-600 text-white py-0.5 px-3 rounded-md'>
                            Eliminar
                        </button>
                    )
                }
            </div>
            <div className="px-4 py-3">
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default CommentCard