import React from 'react'

function CommentCard() {
    return (
        <div className="flex mt-10">
            <textarea
                className="flex-1 h-10 p-2 border rounded-md resize-none mr-2"
                placeholder="Escribe tu comentario aquí..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Comentar
            </button>
        </div>
    )
}

export default CommentCard