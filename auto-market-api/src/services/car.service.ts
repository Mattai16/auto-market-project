import { StatusCodes } from "http-status-codes";
import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car";
import { ResponseContent } from "../utils/response.content";
import { validateTypeId } from "../utils/validate.type.id";

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

export const getAllCars = async () => {

  ResponseContent.error = true
  try {
    const cars = await CarModel.find()
    
    if(cars.length > 0){
      ResponseContent.message = cars
      ResponseContent.satatus = StatusCodes.OK
      ResponseContent.error = false
    }else{
      ResponseContent.message = "No se han encontrado carros"
      ResponseContent.message = StatusCodes.NOT_FOUND
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.satatus = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent
}

export const getCommentsByIdCar = async (idCar: string) => {
  
  ResponseContent.error = true

  try {
    
    if(validateTypeId(idCar)){
      const car = await CarModel.findById(idCar).populate('comments')

      if(car){
        ResponseContent.message = car.comments
        ResponseContent.satatus = StatusCodes.OK
        ResponseContent.error = false
      }else{
        ResponseContent.message = `El carro no existe`
        ResponseContent.satatus = StatusCodes.NOT_FOUND
      }
    }else{
      ResponseContent.message = `El id no es valido`
      ResponseContent.satatus = StatusCodes.BAD_REQUEST
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.satatus = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent

}