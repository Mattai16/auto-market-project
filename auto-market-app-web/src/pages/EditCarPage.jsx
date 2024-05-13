import React, { useEffect, useState } from 'react'
import NavBarUser from '../components/NavBarUser'
import CarFormEdit from '../components/CarFormEdit'
import { getCar } from '../api/fetch'
import { useParams } from 'react-router-dom'

async function loadCar(id) {
    const result = await getCar(id)
    const dataCar = result.data.message
    return dataCar
}

function EditCarPage() {

    const { id } = useParams()
    const [car, setCar] = useState(null)

    useEffect(() => {
        async function fetchData(id) {
            const dataCar = await loadCar(id)
            if (dataCar) {
                setCar(dataCar)
            }
        }
        fetchData(id)
    }, [id])

    return (
        <div>
            <NavBarUser />
            <CarFormEdit car={car} />
        </div>
    )
}

export default EditCarPage