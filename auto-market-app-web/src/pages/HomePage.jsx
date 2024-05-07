import React from 'react'
import NavBar from '../components/NavBar'
import { getCars } from '../api/fetch'

async function loadCars(){
    const {data} = await getCars()
    console.log(data)
    return data
}

function HomePage() {

    loadCars()
    
    return (
        <div>
            <NavBar />
            <main className='container mx-auto px-20 mt-20 grid grid-cols-4 gap-5'>


            </main>
        </div>
    )
}

export default HomePage