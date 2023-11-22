/* eslint-disable camelcase */
import { createContext, ReactNode, useContext, useState } from 'react'
import { parseCookies, destroyCookie, setCookie } from 'nookies'
import { UserCredential } from 'firebase/auth'
import {
  authenticateUserInFirebase,
  signOutUserInFirebase,
  signUpUserInFirebase,
} from '../lib/services/auth'
import { getUserInDB } from '../lib/services/crud'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string
  email: string
  name: string
  driverLicense: string
  admin?: boolean
  avatarUrl?: string
}

interface UserCredentialsData {
  email: string
  password: string
}

interface AuthState {
  user: User
  token: string
  refreshToken: string
}

interface AuthContextData {
  signIn: (userData: UserCredentialsData) => Promise<void>
  userData: AuthState | null
  logout: () => void
  updateUser: (userData: User) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  signUpUser: (
    userCredentialsData: UserCredentialsData,
  ) => Promise<UserCredential>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<AuthState | null>(() => {
    const userCookie = parseCookies(null)

    if (userCookie[import.meta.env.VITE_STORAGE_KEY]) {
      const { user, token, refreshToken } = JSON.parse(
        userCookie[import.meta.env.VITE_STORAGE_KEY],
      )
      return { user, token, refreshToken }
    } else {
      return null
    }
  })

  const signIn = async ({ email, password }: UserCredentialsData) => {
    const { uid, refreshToken, token } = await authenticateUserInFirebase({
      email,
      password,
    })

    const userInfo = await getUserInDB(uid)

    if (!userInfo) {
      throw new Error('User doesn`t exists')
    }

    const userData: User = {
      id: uid,
      email: userInfo.email,
      name: userInfo.name,
      driverLicense: userInfo.driver_license,
      admin: userInfo.admin,
      avatarUrl: userInfo.avatar_url,
    }

    setCookie(
      null,
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify({ user: userData, token, refreshToken }),
      {
        maxAge: 30 * 24 * 60 * 60,
      },
    )

    setUserData({
      token,
      user: userData,
      refreshToken,
    })
  }

  const logout = () => {
    signOutUserInFirebase()
      .then(() => {
        setUserData(null)
        destroyCookie(null, import.meta.env.VITE_STORAGE_KEY)
      })
      .catch((error) => console.log(error.message))
  }

  const signUpUser = ({ email, password }: UserCredentialsData) => {
    return signUpUserInFirebase({ email, password })
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
      value={{
        userData,
        logout,
        signIn,
        updateUser,
        setIsLoading,
        isLoading,
        signUpUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
