/* eslint-disable camelcase */
import { createContext, ReactNode, useContext, useState } from 'react'
import { parseCookies, destroyCookie, setCookie } from 'nookies'
import api from '../services/api'
interface AuthProviderProps {
  children: ReactNode
}

interface User {
  email: string
  name: string
  driver_license: string
  avatar: string
  avatar_url: string
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  user: User
  token: string
  refreshToken: string
}

interface AuthContextData {
  signIn: (userData: SignInCredentials) => Promise<void>
  userData: AuthState | null
  logout: () => void
  updateUser: (userData: User) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<AuthState | null>(() => {
    const userCookie = parseCookies(null)
    if (userCookie[import.meta.env.VITE_STORAGE_KEY]) {
      const { user, token, refresh_token } = JSON.parse(
        userCookie[import.meta.env.VITE_STORAGE_KEY],
      )
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return { user, token, refreshToken: refresh_token }
    } else {
      return null
    }
  })

  const signIn = async (userData: SignInCredentials) => {
    const response = await api.post('sessions', userData)

    const { user, token, refresh_token } = response.data
    setCookie(
      null,
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify({ user, token, refresh_token }),
      {
        maxAge: 30 * 24 * 60 * 60,
      },
    )
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setUserData({
      token,
      user,
      refreshToken: refresh_token,
    })
  }

  const logout = () => {
    setUserData(null)
    destroyCookie(null, import.meta.env.VITE_STORAGE_KEY)
  }

  const updateUser = (user: User) => {
    if (userData) {
      const dataUpdated = {
        refreshToken: userData.refreshToken,
        token: userData.token,
        user,
      }
      setCookie(
        null,
        import.meta.env.VITE_STORAGE_KEY,
        JSON.stringify(dataUpdated),
        {
          maxAge: 30 * 24 * 60 * 60,
        },
      )

      setUserData(dataUpdated)
    }
  }

  return (
    <AuthContext.Provider
      value={{ userData, logout, signIn, updateUser, setIsLoading, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
