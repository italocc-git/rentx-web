/* eslint-disable camelcase */
import { createContext, ReactNode, useContext, useState } from 'react'
import { parseCookies, destroyCookie, setCookie } from 'nookies'
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
interface AuthProviderProps {
  children: ReactNode
}

interface User {
  email: string | null
  name: string | null
  driver_license?: string | null
  avatar?: string | null
  avatar_url: string | null
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
  const auth = getAuth()

  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<AuthState | null>(() => {
    const userCookie = parseCookies(null)

    if (userCookie[import.meta.env.VITE_STORAGE_KEY]) {
      const { user, token, refresh_token } = JSON.parse(
        userCookie[import.meta.env.VITE_STORAGE_KEY],
      )
      // api.defaults.headers.common.Authorization = `Bearer ${token}`
      return { user, token, refreshToken: refresh_token }
    } else {
      return null
    }
  })

  const signIn = async ({ email, password }: UserCredentialsData) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user

    const token = await user.getIdToken()
    const refresh_token = user.refreshToken
    setCookie(
      null,
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify({ user, token, refresh_token }),
      {
        maxAge: 30 * 24 * 60 * 60,
      },
    )
    const userData: User = {
      name: user.displayName,
      email: user.email,
      avatar_url: user.photoURL,
    }

    setUserData({
      token,
      user: userData,
      refreshToken: refresh_token,
    })

    // api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUserData(null)
        destroyCookie(null, import.meta.env.VITE_STORAGE_KEY)
      })
      .catch((error) => console.log(error.message))
  }

  const signUpUser = ({ email, password }: UserCredentialsData) => {
    return createUserWithEmailAndPassword(auth, email, password)
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
