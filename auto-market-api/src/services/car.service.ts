import { StatusCodes } from "http-status-codes";
import { Car } from "../interfaces/car.interface";
import CarModel from "../models/car";
import { ResponseContent } from "../utils/response.content";
import { validateTypeId } from "../utils/validate.type.id";

export const registerCar = async (carData: Car, imagenCar: string) => {

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
      description: carData.description,
      image: imagenCar
    })

    const carSaved = await newCar.save()
    console.log(carSaved)

    if (carSaved.brand != undefined) {
      ResponseContent.message = `El carro ${carSaved.brand} ha sido registrado`
      ResponseContent.status = StatusCodes.CREATED
      ResponseContent.error = false
    } else {
      ResponseContent.message = `Error: ${carSaved}`
      ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent

}

export const getCarById = async (idCar: string) => {
  ResponseContent.error = true

  try {

    if (validateTypeId(idCar)) {

      const carFound = await CarModel.findById(idCar)

      if (carFound) {
        ResponseContent.message = carFound
        ResponseContent.status = StatusCodes.OK
        ResponseContent.error = false
      } else {
        ResponseContent.message = 'El carro no existe'
        ResponseContent.status = StatusCodes.NOT_FOUND
      }

    } else {
      ResponseContent.message = 'El id no es valido'
      ResponseContent.status = StatusCodes.BAD_REQUEST
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent
}

export const getAllCars = async () => {

  ResponseContent.error = true
  try {
    const cars = await CarModel.find()

    if (cars.length > 0) {
      ResponseContent.message = cars
      ResponseContent.status = StatusCodes.OK
      ResponseContent.error = false
    } else {
      ResponseContent.message = "No se han encontrado carros"
      ResponseContent.message = StatusCodes.NOT_FOUND
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent
}

export const getCommentsByIdCar = async (idCar: string) => {

  ResponseContent.error = true

  try {

    if (validateTypeId(idCar)) {
      const car = await CarModel.findById(idCar).populate('comments')

      if (car) {
        ResponseContent.message = car.comments
        ResponseContent.status = StatusCodes.OK
        ResponseContent.error = false
      } else {
        ResponseContent.message = `El carro no existe`
        ResponseContent.status = StatusCodes.NOT_FOUND
      }
    } else {
      ResponseContent.message = `El id no es valido`
      ResponseContent.status = StatusCodes.BAD_REQUEST
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
  }

  return ResponseContent

}

export const editCarById = async (idCar: string, carData: Car, imagenCar: string) => {

  ResponseContent.error = true

  if (imagenCar !== 'no update') {
    carData.image = imagenCar
  }

  if (validateTypeId(idCar)) {

    const carFound = await CarModel.findById(idCar)

    if (carFound) {

      const resultUpdate = await CarModel.findByIdAndUpdate(idCar, carData, {
        new: true
      })

      if (resultUpdate !== null) {
        ResponseContent.message = resultUpdate
        ResponseContent.status = StatusCodes.OK
        ResponseContent.error = false
      } else {
        ResponseContent.message = 'El carro no se actualizó'
        ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
      }

    } else {
      ResponseContent.message = 'El carro no existe'
      ResponseContent.status = StatusCodes.NOT_FOUND
    }

  } else {
    ResponseContent.message = 'El id no es valido'
    ResponseContent.status = StatusCodes.BAD_REQUEST
  }

  return ResponseContent
}

export const deleteCarById = async (idCar: string) => {

  ResponseContent.error = true

  try {

    if (validateTypeId(idCar)) {

      const carFound = await CarModel.findById(idCar)

      if (carFound) {

        const resultDelete = await CarModel.deleteOne({ _id: idCar })

        if (resultDelete.deletedCount > 0) {
          ResponseContent.message = 'El carro se elimino correctamente'
          ResponseContent.status = StatusCodes.OK
        } else {
          ResponseContent.message = 'Error al eliminar el carro'
          ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
        }

      } else {
        ResponseContent.message = 'El carro no existe'
        ResponseContent.status = StatusCodes.NOT_FOUND
      }

    } else {
      ResponseContent.message = 'El id no es valido'
      ResponseContent.status = StatusCodes.BAD_REQUEST
    }

  } catch (error: any) {
    ResponseContent.message = `Error: ${error.message}`
    ResponseContent.status
  }

  return ResponseContent
}