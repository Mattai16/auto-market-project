import mongoose from 'mongoose';

export const validateTypeId = (idObject: string) => {
    if (mongoose.Types.ObjectId.isValid(idObject)){
        return true
    }else{
        return false
    }
}