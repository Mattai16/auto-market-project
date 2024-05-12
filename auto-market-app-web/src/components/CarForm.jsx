import React, { useEffect, useState } from 'react'
import defaultImage from '../assets/preview.png';
import { useForm } from 'react-hook-form';
import { postDataCar } from '../api/fetch';
import { useNavigate } from 'react-router-dom';

function CarForm() {

    const navigate = useNavigate()
    const { setValue, register, handleSubmit, formState: { errors } } = useForm()
    const [selectedImage, setSelectedImage] = useState(null);
    const [imgSelected, setImageSelected] = useState(false);
    const [condicionSelected, setCondicionSelected] = useState('Excelente')
    const [fuelTypeSelected, setfuelTypeSelected] = useState('Gasolina')
    const [postErrors, setPostErrors] = useState(null)
    const [transmissionSelected, setTransmissionSelected] = useState('Estandar')

    const handleImgChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                setImageSelected(true);

            };
            reader.readAsDataURL(selectedFile);
            setValue('imagen', selectedFile)
        }
    };

    useEffect(() => {
        if (postErrors != null) {
            const timer = setTimeout(() => {
                setPostErrors(null)
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [postErrors])

    const fuelTypeChange = (event) => {
        setfuelTypeSelected(event.target.value)
    }

    const conditionChange = (event) => {
        setCondicionSelected(event.target.value)
    }

    const transmissionChange = (event) => {
        setTransmissionSelected(event.target.value)
    }

    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData()
        formData.append('brand', values.brand)
        formData.append('model', values.model)
        formData.append('year', values.year)
        formData.append('mileage', values.mileage)
        formData.append('price', values.price)
        formData.append('fuelType', fuelTypeSelected)
        formData.append('transmission', transmissionSelected)
        formData.append('condition', condicionSelected)
        formData.append('imagen', values.imagen)
        formData.append('description', values.description)
        formData.append('engineCapacity', values.engineCapacity)
        
        postDataCar(formData)
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                setPostErrors(error.response.data.message)
            })
    })

    return (
        <div>
            <div className='flex items-center justify-center drop-shadow-lg mt-[50px]'>
                <div className="max-w-[600px] mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden">
                    <form onSubmit={onSubmit}>
                        <div>
                            {imgSelected ? (
                                <img
                                    className="w-full max-h-[300px] object-cover"
                                    src={selectedImage}
                                    alt='Preview'
                                />
                            ) : (
                                <img
                                    className="w-full max-h-[300px] object-cover"
                                    src={defaultImage}
                                    alt='Default Preview'
                                />
                            )}

                            <div className='flex items-center'>
                                <label htmlFor="fileInput"
                                    className="cursor-pointer w-full text-center mt-2 mb-1 block bg-blue-500 text-white py-2 px-4 mx-10 rounded-md">
                                    Escoger imagen
                                </label>

                                <input
                                    type="file"
                                    className="hidden"
                                    id="fileInput"
                                    onChange={handleImgChange}
                                />

                            </div>
                        </div>

                        {
                            imgSelected === false && (
                                <p className='text-red-500 px-1 block text-center'>La foto es requerida</p>
                            )
                        }

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="px-10">
                                <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
                                    <div>
                                        <label className="block text-gray-700 font-bold">Marca</label>
                                        <input type="text"
                                            {...register('brand', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Marca' />
                                        {
                                            errors.brand && (
                                                <p className='text-red-500 px-1'>Marca requerida</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Modelo</label>
                                        <input type="text"
                                            {...register('model', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Modelo' />
                                        {
                                            errors.model && (
                                                <p className='text-red-500 px-1'>Modelo requerido</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Año</label>
                                        <input
                                            type="text"
                                            {...register('year', {
                                                required: true,
                                                pattern: {
                                                    value: /^(19\d{2}|20[0-1]\d|202[0-4])$/,
                                                    message: "Ingrese un año válido (entre 1900 y 2024)"
                                                }
                                            })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Año'
                                        />
                                        {errors.year && (
                                            <p className='text-red-500 px-1'>{errors.year.message}</p>
                                        )}
                                    </div>


                                    <div>
                                        <label className="block text-gray-700 font-bold">Kilometraje</label>
                                        <input
                                            type="text"
                                            {...register('mileage', {
                                                required: true,
                                                pattern: {
                                                    value: /^(0|[1-9]\d{0,5})$/,
                                                    message: "El kilometraje debe ser un número entre 0 y 300,000"
                                                },
                                                validate: value => parseInt(value, 10) <= 300000 || "El kilometraje debe ser un número entre 0 y 300,000"
                                            })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Kilometraje' />
                                        {
                                            errors.mileage && (
                                                <p className='text-red-500 px-1'>{errors.mileage.message}</p>
                                            )
                                        }
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold">Precio</label>
                                        <input
                                            type="number"
                                            {...register('price', {
                                                required: true,
                                                pattern: {
                                                    value: /^[1-9]\d*$/,
                                                    message: "Formato no correcto"
                                                },

                                            })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Precio'
                                        />
                                        {errors.price && (
                                            <p className='text-red-500 px-1'>{errors.price.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold">Combustible</label>
                                        <select type="text"
                                            value={fuelTypeSelected}
                                            onChange={fuelTypeChange}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                        >
                                            <option value="Gasolina">Gasolina</option>
                                            <option value="Electrico">Electrico</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Hibirido">Hibirido</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold">Transmisión</label>
                                        <select type="text"
                                            value={transmissionSelected}
                                            onChange={transmissionChange}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Transmisión'>
                                            <option value="Estandar">Estandar</option>
                                            <option value="Automatico">Automatico</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Capacidad de motor</label>
                                        <input
                                            type="text"
                                            {...register('engineCapacity', {
                                                required: true,
                                                pattern: {
                                                    value: /^(0|[1-9]\d{0,2})(\.\d{1,2})?$/,
                                                    message: "La capacidad del motor debe ser un número válido"
                                                }
                                            })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Capacidad de motor'
                                        />
                                        {errors.engineCapacity && (
                                            <p className='text-red-500 px-1'>{errors.engineCapacity.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold">Condición </label>
                                        <select
                                            value={condicionSelected} onChange={conditionChange}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                        >
                                            <option value="Excelente">Excelente</option>
                                            <option value="Buena">Buena</option>
                                            <option value="Mala">Mala</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="max-w-[600px] w-full overflow-y-auto overflow-x-hidden px-10 pb-5">
                            <label className="block text-gray-700 font-bold">Descripción</label>
                            <textarea
                                {...register('description', { required: true })}
                                className="border-solid border-2 w-full rounded-md px-4 py-2 resize-none"
                                placeholder='Ingrese una descripción' />
                            {
                                errors.description && (
                                    <p className='text-red-500 px-1'>Descripción requerida</p>
                                )
                            }

                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white w-full py-2 mt-5 rounded-md'
                                type='submit'>
                                Registrar carro
                            </button>

                            {
                                <div className='text-red-500 px-1 pt-3'>
                                    {postErrors}
                                </div>
                            }
                        </div>


                    </form>
                </div>
            </div>
            <p className='mt-20'></p>
        </div>
    )
}

export default CarForm