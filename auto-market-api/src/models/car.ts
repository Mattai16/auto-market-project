import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Car } from "../interfaces/car.interface";


const carSchema = new Schema<Car>({
    brand: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    mileage: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    fuelType: {
        type: String,
        required: true,
        enum: ['Gasolina', 'Electrico', 'Diesel', 'Hibirido']
    },
    transmission: {
        type: String,
        required: true,
        enum: ['Estandar', 'Automatico']
    },
    engineCapacity: {
        type: Number,
        required: true,
        trim: true
    },    
    condition: {
        type: String,
        required: true,
        enum: ['Excelente', 'Buena', 'Mala']
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: Buffer,
        required: true
    },
    imageType: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})





export default mongoose.model('Car', carSchema)