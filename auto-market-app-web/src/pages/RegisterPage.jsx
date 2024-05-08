import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function RegisterPage() {
  return (
    <div>
    <NavBar />
    <div className='flex items-center justify-center drop-shadow-lg mt-20 h-[calc(100vh-150px)]'>
        <div className='bg-white max-w-md w-full p-8 rounded-md'>
            <h1 className='font-bold text-3xl mb-6 '>Registro de cuenta</h1>

            <form action="">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Nombre de usuario</label>
                    <input
                        id="email"
                        className='border-solid border-2 w-full rounded-md px-4 py-2'
                        type="text"
                        placeholder='Ingresa tu nombre de usuario'
                    />
                </div>

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

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-semibold mb-2">Confirmar contraseña</label>
                    <input
                        id="password"
                        className='border-solid border-2 w-full rounded-md px-4 py-2'
                        type="password"
                        placeholder='Confirma tu contraseña'
                    />
                </div>

                <button
                    className='bg-blue-500 hover:bg-blue-600 text-white w-full py-2 mt-3 rounded-md'
                    type='submit'>
                    REGISTRARSE
                </button>

                <div className='container flex justify-center items-center mt-4'>
                    <span className="text-gray-600 text-sm text-center inline">¿Ya tienes una cuenta?
                        <Link to='/login'>
                            <h1 href="#" className="text-blue-500 inline hover:underline">  Inicia sesión aquí</h1>
                        </Link>
                    </span>
                </div>

            </form>
        </div>
    </div>
</div>
  )
}

export default RegisterPage