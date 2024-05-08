import React from 'react'
import { Link } from 'react-router-dom'

export default function CarCard({ car }) {
    const imageUrl = "https://via.placeholder.com/200";
    const name = "Producto Genérico";
    
    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={imageUrl} alt={name} />
            <div className="p-4">
                <h2 className="text-gray-800 text-xl font-semibold">{car.brand}</h2>
                <p className="text-gray-800 font-bold mt-2">${car.price}</p>
                <div className='text-right mt-4'>
                    <Link to={`/carro/${car._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Ver más
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
