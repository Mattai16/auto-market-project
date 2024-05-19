import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/fetch'
import { toast, Bounce } from 'react-toastify'

function RegisterPage() {

    const {setValue, register, handleSubmit, formState: { errors } } = useForm()
    const [registerErrors, setRegisterErrors] = useState(null)
    const navigate = useNavigate()
    

    const onSubmit = handleSubmit(async (values) => {
        const rol = 'cliente'
        if (values.password === values.passwordConfirm) {
            try {
                setValue('rol', rol)
                console.log(values.rol)
                const result = await registerRequest(values)
                console.log(result)
                navigate('/login')
                toast.success('Usuario registrado', {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
            } catch (error) {
                setRegisterErrors(error.response.data.message)
            }
        } else {
            setRegisterErrors('Las contraseñas no coinciden')
        }

    })

    useEffect(()=> {
        if(registerErrors != null){
            const timer = setTimeout(() => {
              setRegisterErrors(null)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [registerErrors])

    return (
        <div>
            <NavBar />
            <div className='flex items-center justify-center drop-shadow-lg mt-20 h-[calc(100vh-150px)]'>
                <div className='bg-white max-w-md w-full p-8 rounded-md'>
                    <h1 className='font-bold text-3xl mb-6 '>Registro de cuenta</h1>
                    {
                        <div className='text-red-500 pb-4 text-center'>
                            {registerErrors}
                        </div>
                    }
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Nombre de usuario</label>
                            <input

                                {...register('userName', { required: true })}
                                className='border-solid border-2 w-full rounded-md px-4 py-2'
                                type="text"
                                placeholder='Ingresa tu nombre de usuario'
                            />
                            {
                                errors.userName && (
                                    <p className='text-red-500 px-1'>El nombre de usuario es requerido</p>
                                )
                            }
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                {...register('email', { required: true })}
                                className='border-solid border-2 w-full rounded-md px-4 py-2'
                                type="email"
                                placeholder='Ingresa tu email'
                            />
                            {
                                errors.email && (
                                    <p className='text-red-500 px-1'>El email es requerido</p>
                                )
                            }
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Contraseña</label>
                            <input
                                {...register('password', { required: true })}
                                className='border-solid border-2 w-full rounded-md px-4 py-2'
                                type="password"
                                placeholder='Ingresa tu contraseña'
                            />
                            {
                                errors.password && (
                                    <p className='text-red-500 px-1'>La contraseña es requerida</p>
                                )
                            }
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Confirmar contraseña</label>
                            <input
                                {...register('passwordConfirm', { required: true })}
                                className='border-solid border-2 w-full rounded-md px-4 py-2'
                                type="password"
                                placeholder='Confirma tu contraseña'
                            />
                            {
                                errors.passwordConfirm && (
                                    <p className='text-red-500 px-1'>Se requiere confirmar contraseña</p>
                                )
                            }
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