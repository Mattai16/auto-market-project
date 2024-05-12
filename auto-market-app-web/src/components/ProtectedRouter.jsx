import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter() {

    const {isAuth} = useAuth()

    if(!isAuth) return <Navigate to='/' replace/>

    return <Outlet/>
}

export default ProtectedRouter