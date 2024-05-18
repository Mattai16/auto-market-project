import React, { useEffect, useState } from 'react'
import CarView from '../components/CarView'
import CommentBox from '../components/CommentBox';
import CommentCard from '../components/CommentCard';
import { useParams } from 'react-router-dom';
import { getCar, getCommentsByCar } from '../api/fetch';
import NavBarUser from '../components/NavBarUser';
import { useAuth } from '../context/AuthContext';

async function loadCar(id) {
    const data = await getCar(id)
    const carData = data.data.message
    return carData
}


function CarPageUser() {

    const { id } = useParams()
    const { user } = useAuth()
    const [car, setCar] = useState()
    const [comments, setComments] = useState()
    const { loadComments } = useAuth()

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
    }, [id, loadComments])



    return (
        <div>
            <NavBarUser />
            <main className="container mx-auto px-20 mt-20 flex">
                <div className="flex-1 mr-5 flex justify-end">
                    <div className="h-full fixed">
                        {car && <CarView car={car} />}
                    </div>
                </div>
                <div className="flex-1 flex justify-start">
                    <div className="h-full w-[450px]">
                        <div className='w-full'>
                            <CommentBox idUser={user.id} idCar={id} />
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

export default CarPageUser