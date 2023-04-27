import { Power, User } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/authContext'

export const Header = () => {
  const { user, logout } = useAuth()
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
              <button onClick={logout}>
                <Power
                  weight="light"
                  className="text-base-title w-10 h-10 transition-colors hover:text-base-text cursor-pointer"
                />
              </button>
            </>
          ) : (
            <>
              <span className="font-inter font-semibold text-base laptop:block mobile:hidden">
                Faça o login
              </span>
              <div className="w-10 h-10 rounded-full ring-2 bg-base-secondary ring-base-secondary flex justify-center items-center">
                <User size={24} className="text-base-title" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
