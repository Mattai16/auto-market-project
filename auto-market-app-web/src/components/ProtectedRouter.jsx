import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter() {

    const {isAuth, loading} = useAuth()

    if (loading) return <h1>Loading...</h1>
    if(!loading && !isAuth) return <Navigate to='/' replace/>

    return <Outlet/>
}

export default ProtectedRouter