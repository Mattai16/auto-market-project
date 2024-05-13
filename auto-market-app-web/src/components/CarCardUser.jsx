import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function CarCardUser({ car }) {
    const imageUrl = `data:image/jpeg;base64,${car.image}`;
    const { user } = useAuth()

    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={imageUrl} alt={car.model} />
            <div className="p-4">
                <h2 className="text-gray-800 text-xl font-semibold">{car.brand}</h2>
                <p className="text-gray-800 font-bold mt-2">${car.price}</p>
                <div className='flex text-right mt-4 justify-end'>
                    {user.rol === 'administrador' && (
                        <Link to={`/home/carroEdit/${car._id}`}>
                            <button className="bg-green-600 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mx-1">
                                Modificar
                            </button>
                        </Link>
                    )}
                    <Link to={`/home/carro/${car._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Ver más
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
