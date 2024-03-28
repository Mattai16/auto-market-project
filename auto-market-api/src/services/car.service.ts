import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car";


export const registerCar = async (carData : Car) => {
  try {
    
    const newCar = new CarModel({
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        mileage: carData.mileage,
        price: carData.price,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        engineCapacity: carData.engineCapacity,
        condition: carData.condition,
        description: carData.description
    })

    const carSaved = await newCar.save()

    return carSaved

  } catch (error: any) {
    return error.message
  }
}