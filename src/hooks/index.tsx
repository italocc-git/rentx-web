import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './authContext'
interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      {children}
      <ToastContainer autoClose={3000} />
    </AuthProvider>
  )
}
