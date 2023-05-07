import { Power, User } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/authContext'
import { useNavigate, useLocation } from 'react-router-dom'
export const Header = () => {
  const { userData, logout } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  let headerName = pathname.split('/')[1]
  headerName = headerName[0].toUpperCase().concat(headerName.substring(1))
  const handleLogout = () => {
    logout()
    navigate('/perfil/login')
  }
  const handleSignIn = () => {
    navigate('/perfil/login')
  }
  return (
    <div className="w-full h-[5rem] bg-base-white px-20 border-b border-base-secondary ">
      <div className="  h-full flex justify-between items-center text-base-title ">
        <span className="font-semibold text-xl">{headerName}</span>
        <div className="flex items-center gap-3 ">
          {userData !== null ? (
            <>
              <span className="font-inter font-semibold text-base laptop:block mobile:hidden">
                {userData.user.email}
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
