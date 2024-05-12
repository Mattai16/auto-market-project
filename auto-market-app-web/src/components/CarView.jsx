import React from 'react';

const CarPublication = ({ car }) => {
    const imageUrl = `data:image/jpeg;base64,${car.image}`;
    return (
        <div className="max-w-[500px] mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-40 object-cover" src={imageUrl} alt={car.model} />
            <div className="flex flex-col md:flex-row gap-8">
                <div className="px-10">
                    <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
                        <div>
                            <label className="block text-gray-700 font-bold">Marca</label>
                            <p>{car.brand}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Modelo</label>
                            <p>{car.model}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Año</label>
                            <p>{car.year}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Kilometraje</label>
                            <p>{car.mileage}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Precio</label>
                            <p>${car.price}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Tipo de Combustible</label>
                            <p>{car.fuelType}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Transmisión</label>
                            <p>{car.transmission}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Cilindrada del Motor</label>
                            <p>{car.engineCapacity}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold">Condición</label>
                            <p>{car.condition}</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="max-w-[500px] w-full overflow-y-auto overflow-x-hidden px-10 pb">
                <label className="block text-gray-700 font-bold">Descripción</label>
                <p className="block max-w-[500px] pb-5">{car.description}</p>
            </div>
        </div>
    );
};

export default CarPublication;
