import React, { useState } from 'react'

// Importa tu imagen predeterminada
import defaultImage from '../assets/preview.png';

function CarForm() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imgSelected, setImageSelected] = useState(false);

    const handleImgChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                setImageSelected(true);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div>
            <div className='flex items-center justify-center drop-shadow-lg mt-[50px]'>
                <div className="max-w-[600px] mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden">
                    <form>
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
                                <label htmlFor="fileInput" className="cursor-pointer w-full text-center mt-2 mb-5 inline-block bg-blue-500 text-white py-2 px-4 mx-10 rounded-md">
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

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="px-10">
                                <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
                                    <div>
                                        <label className="block text-gray-700 font-bold">Marca</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Marca' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Modelo</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Modelo' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Año</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Año' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Kilometraje</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Kilometraje' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Precio</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Precio' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Combustible</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2" placeholder='
                                Tipo'/>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Transmisión</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Transmisión' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Capacidad de motor</label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Capacidad de motor' />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold">Condición </label>
                                        <input type="text" readOnly className="border-solid border-2 w-full rounded-md px-4 py-2"
                                            placeholder='Condición' />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="max-w-[600px] w-full overflow-y-auto overflow-x-hidden px-10 pb-5">
                            <label className="block text-gray-700 font-bold">Descripción</label>
                            <textarea readOnly className="border-solid border-2 w-full rounded-md px-4 py-2 resize-none"
                                placeholder='Ingrese una descripción' />

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