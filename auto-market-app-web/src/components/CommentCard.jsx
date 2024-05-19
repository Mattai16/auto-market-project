import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { deleteComment, putComment } from '../api/fetch';

function CommentCard({ comment }) {
    const { user } = useAuth();
    const [commentErrors, setCommentErrors] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [content, setContentData] = useState(comment.content);

    const onEliminar = async () => {
        try {
            const response = await deleteComment(comment._id);
            console.log(response);
        } catch (error) {
            console.log(error);
            setCommentErrors(error.response.data.message);
        }
    };

    const handleChange = (event) => {
        setContentData(event.target.value);
    };

    const onEdit = () => {
        setIsEdit(true);
    };

    const onCancel = () => {
        setIsEdit(false);
        setContentData(comment.content);
    };

    const onSave = async () => {
        const contentData = {
            content: content
        }
        await putComment(comment._id, contentData)
            .then(response => {
                console.log(response)
                setIsEdit(false);
            }).catch(error => {
                setCommentErrors(error.response.data.message)
            })
    };

    useEffect(() => {
        if (commentErrors !== null) {
            const timer = setTimeout(() => {
                setCommentErrors(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [commentErrors]);

    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <div className="flex justify-between px-4 py-2 bg-gray-100">
                <h3 className="text-base font-semibold">{comment.userName}</h3>
                <div className="text-red-500 px-1 text-center">
                    {commentErrors}
                </div>
                <div>
                    {user.rol === 'administrador' && (
                        <button
                            onClick={onEliminar}
                            className="bg-red-500 hover:bg-red-600 text-white py-0.5 px-3 rounded-md">
                            Eliminar
                        </button>
                    )}
                    {!isEdit && comment.user === user.id && (
                        <>
                            <button
                                onClick={onEdit}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-0.5 px-4 mr-2 rounded-md">
                                Editar
                            </button>
                            <button
                                onClick={onEliminar}
                                className="bg-red-500 hover:bg-red-600 text-white py-0.5 px-3 rounded-md">
                                Eliminar
                            </button>
                        </>
                    )}
                    {isEdit && comment.user === user.id && (
                        <>
                            <button
                                onClick={onSave}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-0.5 px-4 mr-2 rounded-md">
                                Guardar
                            </button>
                            <button
                                onClick={onCancel}
                                className="bg-red-500 hover:bg-red-600 text-white py-0.5 px-3 rounded-md">
                                Cancelar
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="px-4 py-3">
                {!isEdit ? (
                    <p>{comment.content}</p>
                ) : (
                    <input
                        onChange={handleChange}
                        className="w-full border-solid border-2 rounded-md px-4"
                        type="text"
                        value={content}
                    />
                )}
            </div>
        </div>
    );
}

export default CommentCard;
