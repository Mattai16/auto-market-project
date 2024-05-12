import axios from './axios'

export const getCars = () => axios.get('/carros')
export const validateToken = () => axios.get('/validateTokenUser')
export const getCar = (id) => axios.get(`/carros/getCar/${id}`)
export const getCommentsByCar = (id) => axios.get(`/carros/getCommentsByCar/${id}`)
export const loginRequest = (user) => axios.post('/login', user)
export const postDataCar = (formdata) => {
  return axios.post('/carros/registrar', formdata, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  })
}