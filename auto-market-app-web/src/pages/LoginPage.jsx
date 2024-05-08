import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div>
            <NavBar />
            <div className='flex items-center justify-center drop-shadow-lg mt-20 h-[calc(100vh-350px)]'>
                <div className='bg-white max-w-md w-full p-8 rounded-md'>
                    <h1 className='font-bold text-3xl mb-6 '>Inicio de sesión</h1>

                    <form action="">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                id="email"
                                className='border-solid border-2 w-full rounded-md px-4 py-2'
                                type="text"
                                placeholder='Ingresa tu email'
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">Contraseña</label>
                            <input
                                id="password"
                                className='border-solid border-2 w-full rounded-md px-4 py-2'
                                type="password"
                                placeholder='Ingresa tu contraseña'
                            />
                        </div>

                        <button
                            className='bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md'
                            type='submit'>
                            INICIAR SESIÓN
                        </button>

                        <div className='container flex justify-center items-center mt-4'>
                            <span className="text-gray-600 text-sm text-center inline">¿No tienes una cuenta?
                                <Link to='/register'>
                                    <h1 href="#" className="text-blue-500 inline hover:underline">  Regístrate aquí</h1>
                                </Link>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage