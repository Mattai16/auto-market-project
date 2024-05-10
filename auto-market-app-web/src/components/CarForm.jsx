import React, { useState } from 'react'
import defaultImage from '../assets/preview.png';
import { useForm } from 'react-hook-form';
import { postDataCar } from '../api/fetch';

function CarForm() {

    const { setValue, register, handleSubmit, formState: { errors } } = useForm()
    const [selectedImage, setSelectedImage] = useState(null);
    const [imgSelected, setImageSelected] = useState(false);

    const [authErrors, setAuthErrors] = useState(null)

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


    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData()
        formData.append('brand', values.brand)
        formData.append('model', values.model)
        formData.append('year', values.year)
        formData.append('mileage', values.mileage)
        formData.append('price', values.price)
        formData.append('fuelType', values.fuelType)
        formData.append('transmission', values.transmission)
        formData.append('condition', values.condition)
        formData.append('imagen', values.imagen)
        formData.append('description', values.description)

        postDataCar(formData)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
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
                                        <input type="text"
                                            {...register('year', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Año' />
                                        {
                                            errors.year && (
                                                <p className='text-red-500 px-1'>Año requerido</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Kilometraje</label>
                                        <input type="text"
                                            {...register('mileage', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Kilometraje' />
                                        {
                                            errors.mileage && (
                                                <p className='text-red-500 px-1'>Km requerido</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Precio</label>
                                        <input type="text"
                                            {...register('price', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Precio' />
                                        {
                                            errors.price && (
                                                <p className='text-red-500 px-1'>Precio requerido</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Combustible</label>
                                        <input type="text"
                                            {...register('fuelType', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Tipo' />
                                        {
                                            errors.fuelType && (
                                                <p className='text-red-500 px-1'>Tipo requerido</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Transmisión</label>
                                        <input type="text"
                                            {...register('transmission', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Transmisión' />
                                        {
                                            errors.transmission && (
                                                <p className='text-red-500 px-1'>Transmisión requerida</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Capacidad de motor</label>
                                        <input type="text"
                                            {...register('engineCapacity', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Capacidad de motor' />
                                        {
                                            errors.engineCapacity && (
                                                <p className='text-red-500 px-1'>Capacidad requerida</p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Condición </label>
                                        <input type="text"
                                            {...register('condition', { required: true })}
                                            className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Condición' />
                                        {
                                            errors.condition && (
                                                <p className='text-red-500 px-1'>Condición requerida</p>
                                            )
                                        }
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

                        </div>


                    </form>
                </div>
            </div>
            <p className='mt-20'></p>
        </div>
    )
}

export default CarForm