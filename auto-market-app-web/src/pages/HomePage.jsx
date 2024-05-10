import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getCars } from '../api/fetch'
import CarCard from '../components/CarCArd'


async function loadCars() {
    const { data } = await getCars()
    const cars = data.message
    return cars
}

function HomePage() {

    const [cars, setCars] = useState()

    useEffect(() => {
        async function fetchData() {
            const cars = await loadCars()
            setCars(cars)
        }
        fetchData()
    }, [])

    if (!cars || cars.length === 0) return (<h1>No hay carros</h1>)

    return (
        <div>
            <NavBar />
            <main className='container mx-auto px-20 mt-20 grid grid-cols-4 gap-5'>
                {cars.map((car) => (
                    <CarCard car={car} key={car._id} />
                ))}
            </main>
                <p className='w-full mt-10'></p>
        </div>
    )
}

export default HomePage