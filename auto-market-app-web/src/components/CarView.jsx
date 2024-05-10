import React from 'react';

const CarPublication = ({ car }) => {
    const imageUrl = `data:image/jpeg;base64,${car.image}`;
    return (
        <div className="w-[500px] h-[510px]  mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Infromación del coche</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div>
                    <img src={imageUrl} alt="Coche" className="w-full h-auto rounded-md" />
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-bold mb-2 mt-4">Marca</label>
                        <p>{car.brand}</p>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-bold mb-2">Modelo</label>
                        <p>{car.model}</p>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Año</label>
                        <p>{car.year}</p>
                    </div>
                </div>
                <div className="overflow-auto">
                    <div className="grid grid-cols-2 gap-4 mb-4">

                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Kilometraje</label>
                            <p>{car.mileage}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Precio</label>
                            <p>${car.price}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Tipo de Combustible</label>
                            <p>{car.fuelType}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Transmisión</label>
                            <p>{car.transmission}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Cilindrada del Motor</label>
                            <p>{car.engineCapacity}</p>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Condición</label>
                            <p>{car.condition}</p>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-bold mb-2">Descripción</label>
                            <p>{car.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarPublication;
