import { StatusCodes } from "http-status-codes";
import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car";
import { ResponseContent } from "../utils/response.content";

export const registerCar = async (carData: Car) => {

  ResponseContent.error = true

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
    console.log(carSaved)

    if (carSaved.brand != undefined) {
      ResponseContent.message = `El carro ${carSaved.brand} ha sido registrado`
      ResponseContent.satatus = StatusCodes.CREATED
      ResponseContent.error = false
    } else {
      ResponseContent.message = `Error: ${carSaved}`
      ResponseContent.satatus = StatusCodes.INTERNAL_SERVER_ERROR
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.satatus = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent
  
}