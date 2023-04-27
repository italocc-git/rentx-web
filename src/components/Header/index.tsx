import { Power, User } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/authContext'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/home/sign-in')
  }
  const handleSignIn = () => {
    navigate('/home/sign-in')
  }
  return (
    <div className="w-full h-[5rem] bg-base-white px-20 border-b border-base-secondary ">
      <div className="  h-full flex justify-between items-center text-base-title ">
        <span className="font-semibold text-xl   ">Início</span>
        <div className="flex items-center gap-3 ">
          {user?.email ? (
            <>
              <span className="font-inter font-semibold text-base laptop:block mobile:hidden">
                {user.email}
              </span>
              <button onClick={handleLogout}>
                <Power
                  weight="light"
                  className="text-base-title w-10 h-10 transition-colors hover:text-base-text cursor-pointer"
                />
              </button>
            </>
          ) : (
            <button className="flex items-center gap-2" onClick={handleSignIn}>
              <span className="font-inter font-semibold text-base laptop:block mobile:hidden">
                Faça o login
              </span>
              <div className="w-10 h-10 rounded-full ring-2 bg-base-secondary ring-base-secondary flex justify-center items-center">
                <User size={24} className="text-base-title" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
