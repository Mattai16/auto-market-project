
export interface Car {
    brand: string,
    model: string,
    year: string,
    mileage: number,
    price: number,
    fuelType: 'Gasolina' | 'Electrico' | 'Diesel' | 'Hibirido',
    transmission: 'Estandar' | 'Automatico'
    engineCapacity: number,
    condition: 'Excelente' | 'Buena' | 'Mala',
    description?: string,
    image: string,
    imageType: string
    comments: string[],
}