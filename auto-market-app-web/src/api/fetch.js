import axios from './axios'

export const getCars = () => axios.get('/carros')
export const getCar = (id) => axios.get(`/carros/getCar/${id}`)
export const getCommentsByCar = (id) => axios.get(`/carros/getCommentsByCar/${id}`)