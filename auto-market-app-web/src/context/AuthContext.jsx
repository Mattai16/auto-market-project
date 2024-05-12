import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest } from "../api/fetch";
import Cookies from 'js-cookie'
export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('No context')
  }
  return context
}

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  const [errors, setErros] = useState(null)

  const login = async (user) => {
    try {
      const res = await loginRequest(user)
      console.log(res)
      setIsAuth(true)
      setErros(null)
    } catch (error) {
      setErros(error.response.data.message)
    }
  }

  useEffect(() => {
    if (errors != null) {
      const timer = setTimeout(() => {
        setErros(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  useEffect(() => {
    async function checkAuth() {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuth(false)
        return setUser(null)
      }
    }
    console.log(isAuth)
    checkAuth()
  }, [isAuth])

  return (
    <AuthContext.Provider value={{
      user,
      isAuth,
      errors,
      login
    }}>
      {children}
    </AuthContext.Provider>
  )
}
