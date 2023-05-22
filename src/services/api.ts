import axios from 'axios'
import { toast } from 'react-toastify'
const baseURL = import.meta.env.VITE_API_URL
const api = axios.create({
  baseURL,
})

/* api.interceptors.request.use(
  (request) => {
    api.defaults.headers.common.Authorization = ''
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
) */

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      toast.error(error.response.data.message)
    } else {
      toast.error('Erro interno , tente novamente')
    }

    return Promise.reject(error)
  },
)

export default api
