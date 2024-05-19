import axios from './axios'

export const getCars = () => axios.get('/carros')
export const validateToken = () => axios.get('/validateTokenUser')
export const getCar = (id) => axios.get(`/carros/getCar/${id}`)
export const getCommentsByCar = (id) => axios.get(`/carros/getCommentsByCar/${id}`)
export const loginRequest = (user) => axios.post('/login', user)
export const registerRequest = (user) => axios.post('/registrarse', user)
export const logoutRequest = () => axios.post('/logout')
export const deleteCar = (id) => axios.delete(`/carros/deleteCar/${id}`)
export const postComment = (dataComment) => axios.post('/usuario/comentar', dataComment)
export const deleteComment = (id) => axios.delete(`/usuario/deleteComment/${id}`)


export const postDataCar = (formdata) => {
  return axios.post('/carros/registrar', formdata, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  })
}

export const putDataCar = (formdata, idCar) => {
  return axios.put(`/carros/updateCar/${idCar}`, formdata, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  })
}