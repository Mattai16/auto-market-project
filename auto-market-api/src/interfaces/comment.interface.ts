import { Types } from "mongoose";

export interface Comment {
    user: Types.ObjectId,
    userName: string,
    content: string,
}