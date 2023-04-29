import { createContext, ReactNode, useContext, useState } from 'react'
import { parseCookies, destroyCookie, setCookie } from 'nookies'
interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id?: string
  email: string
  name: string
  cnh: string
}

interface AuthContextData {
  register: (userData: User) => void
  user: User | null
  logout: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const userCookie = parseCookies(null)
    if (userCookie['@rentx-dev:userId']) {
      return JSON.parse(userCookie['@rentx-dev:userId'])
    } else {
      return {} as User
    }
  })

  const register = (userData: User) => {
    setCookie(null, '@rentx-dev:userId', JSON.stringify(userData), {
      maxAge: 30 * 24 * 60 * 60,
    })
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
    destroyCookie(null, '@rentx-dev:userId')
  }

  return (
    <AuthContext.Provider value={{ user, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
