import React from 'react'
import { useAuth } from '../context/AuthContext'
import { logoutRequest } from '../api/fetch'

function ProfileUser() {


    const { user } = useAuth()

    const onLogout = async () => {
        const result = await logoutRequest()
        console.log(result)
    }

    return (
        <div>
            <div className='flex items-center justify-center drop-shadow-lg mt-20 h-[calc(100vh-350px)]'>

                <div className='bg-white max-w-md w-full p-8 rounded-md'>
                    <h1 className='text-3xl font-bold'>Datos del perfil</h1>
                    <p className='text-2xl px-4 mt-5'>Nombre de usuario: {user.userName}</p>
                    <p className='text-2xl px-4'>Correo: {user.email}</p>

                    <button 
                        onClick={onLogout}
                        className='bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md mt-10'>
                        Cerrar sesión
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProfileUser