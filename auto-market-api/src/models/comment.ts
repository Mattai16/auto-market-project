import mongoose, { Schema } from "mongoose";
import { Comment } from "../interfaces/comment.interface";

const commentSchema = new Schema<Comment>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    }
})


export default mongoose.model('Comment', commentSchema)