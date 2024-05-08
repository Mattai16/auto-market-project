import React from 'react'

function CommentCard({comment}) {
    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mt-4">
            <div className="px-4 py-2 bg-gray-100">
                <h3 className="text-base font-semibold">{comment.userName}</h3>
            </div>
            <div className="px-4 py-3">
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default CommentCard