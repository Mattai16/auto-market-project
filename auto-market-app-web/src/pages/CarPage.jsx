import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CarView from '../components/CarView'
import CommentCard from '../components/CommentCard';
import { useParams } from 'react-router-dom';
import { getCar, getCommentsByCar } from '../api/fetch';
import { Link } from 'react-router-dom';

async function loadCar(id) {
    const data = await getCar(id)
    const carData = data.data.message
    return carData
}

async function loadComments(id) {
    const data = await getCommentsByCar(id)
    const commentsData = data.data.message
    return commentsData
}

function CarPage() {

    const { id } = useParams()

    const [car, setCar] = useState()
    const [comments, setComments] = useState()

    useEffect(() => {
        async function fetchData(idCar) {
            const car = await loadCar(idCar)
            setCar(car)
        }
        fetchData(id)
    }, [id])

    useEffect(() => {
        async function fetchData(idCar) {
            const comments = await loadComments(id)
            setComments(comments)
        }
        fetchData(id)
    }, [id])


    return (
        <div>
            <NavBar />
            <main className="container mx-auto px-20 mt-20 flex">
                <div className="flex-1 mr-5 flex justify-end">
                    <div className="h-full fixed">
                        {car && <CarView car={car} />}
                    </div>
                </div>
                <div className="flex-1 flex justify-start">
                    <div className="h-full w-[450px]">
                        <div className='w-full'>
                            <Link to='/login'>
                                <div className="flex mt-10">
                                    <label
                                        className="text-white bg-cyan-950 text-center flex-1 h-10 p-2 rounded-md resize-none mr-2 hover:bg-gray-800 cursor-pointer"
                                    >Inicia sesión para hacer cometarios</label>
                                </div>
                            </Link>
                            {comments && comments.length > 0 ? (
                                comments.map(comment => (
                                    <CommentCard comment={comment} key={comment._id} />
                                ))
                            ) : (<p className=' text-center mt-5 text-gray-700 text-3xl font-semibold'>No hay comentarios</p>)}
                        </div>
                        <p className='mt-10'></p>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default CarPage