import axios from 'axios'

console.log(import.meta.env)
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default api
