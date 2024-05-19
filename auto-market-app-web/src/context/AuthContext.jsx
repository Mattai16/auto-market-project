import { createContext, useContext, useEffect, useState } from "react";
import { getCommentsByCar, loginRequest, validateToken } from "../api/fetch";
import Cookies from 'js-cookie'
import { toast, Bounce } from "react-toastify";

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
  const [loading, setLoading] = useState(true)

  const login = async (user) => {
    try {
      const res = await loginRequest(user)
      console.log(res)
      setIsAuth(true)
      setErros(null)
      toast.success(res.data.message, {
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
      setErros(error.response.data.message)
    }
  }

  const loadComments = async (id) => {
    const data = await getCommentsByCar(id)
    const commentsData = data.data.message
    return commentsData
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
        setLoading(false)
        return setUser(null)
      }

      try {

        if (cookies.token) {
          const res = await validateToken()
          if (!res.data) {
            setIsAuth(false)
            setLoading(false)
            return
          }

          setIsAuth(true)
          setUser(res.data)
          setLoading(false)

        }

      } catch (error) {
        setIsAuth(false)
        setUser(null)
        setLoading(false)
      }
    }

    checkAuth()
  }, [isAuth, user])

  return (
    <AuthContext.Provider value={{
      user,
      isAuth,
      errors,
      login,
      loading,
      loadComments
    }}>
      {children}
    </AuthContext.Provider>
  )
}
