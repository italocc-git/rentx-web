import axios from 'axios'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
const baseURL = import.meta.env.VITE_API_URL
const api = axios.create({
  baseURL,
})

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_HYGRAPH_URI ?? '',
  }),
  cache: new InMemoryCache(),
  ssrMode: false,
})
// api.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     if (error.response) {
//       toast.error(error.response.data.message)
//     } else {
//       toast.error('Erro interno , tente novamente')
//     }

//     return Promise.reject(error)
//   },
// )

export default api
