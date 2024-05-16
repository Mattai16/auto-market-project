import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { postComment } from '../api/fetch'

function CommentCard(idData) {

    const { handleSubmit, register, formState: { errors }, setValue } = useForm()
    const [commentErros, setCommentErrors] = useState(null)

    useEffect(() => {
        function setValues() {
            setValue('idUser', idData.idUser)
            setValue('idCar', idData.idCar)
        }
        setValues()
    }, [idData, setValue])

    useEffect(() => {
        if (commentErros != null) {
            const timer = setTimeout(() => {
                setCommentErrors(null)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [commentErros])

    const onSubmit = handleSubmit(async (values) => {
        postComment(values)
            .then(response => {
                console.log(response.data.message)
            })
            .catch(error => {
                console.log(error.response.data.message)
                setCommentErrors(error.response.data.message)
            })
    })

    return (
        <form onSubmit={onSubmit}>
            <div className="flex mt-10">
                <textarea
                    {...register('comment', { required: true })}
                    className="flex-1 h-10 p-2 border rounded-md resize-none mr-2"
                    placeholder="Escribe tu comentario aquí..."
                />

                <button
                    type='submit'
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Comentar
                </button>
            </div>
            {
                errors.comment && (
                    <p className='text-gray-100 px-1'>Ingrese un comentario*</p>
                )
            }
            {
                <p className='text-gray-100 px-1'>{commentErros}</p>
            }
        </form>
    )
}

export default CommentCard