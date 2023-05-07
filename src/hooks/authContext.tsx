import { createContext, ReactNode, useContext, useState } from 'react'
import { parseCookies, destroyCookie, setCookie } from 'nookies'
import api from '../services/api'
interface AuthProviderProps {
  children: ReactNode
}

interface User {
  email: string
  name: string
  cnh: string
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  user: User
  token: string
}

interface AuthContextData {
  signIn: (userData: SignInCredentials) => void
  userData: AuthState | null
  logout: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState<AuthState | null>(() => {
    const userCookie = parseCookies(null)
    if (userCookie[import.meta.env.VITE_STORAGE_KEY]) {
      const { user, token } = JSON.parse(
        userCookie[import.meta.env.VITE_STORAGE_KEY],
      )
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return { user, token }
    } else {
      return null
    }
  })

  const signIn = async (userData: SignInCredentials) => {
    const response = await api.post('sessions', userData)

    const { user, token } = response.data
    setCookie(
      null,
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify({ user, token }),
      {
        maxAge: 30 * 24 * 60 * 60,
      },
    )
    setUserData({
      token,
      user,
    })
  }

  const logout = () => {
    setUserData(null)
    destroyCookie(null, import.meta.env.VITE_STORAGE_KEY)
  }

  return (
    <AuthContext.Provider value={{ userData, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
