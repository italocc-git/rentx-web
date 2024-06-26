import { Power, User } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/authContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export const Header = () => {
  const { userData, logout } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useTranslation()

  let headerName = pathname.split('/')[1]
  headerName = headerName[0].toUpperCase().concat(headerName.substring(1))
  const handleLogout = () => {
    logout()
    navigate('/profile/sign-in')
  }
  const handleSignIn = () => {
    navigate('/profile/sign-in')
  }

  return (
    <div className="h-[5rem] w-full border-b border-base-secondary bg-base-white px-20 ">
      <div className="  flex h-full items-center justify-between text-base-title ">
        <span className="text-xl font-semibold">
          {t(`components.header.title.${headerName.toLocaleLowerCase()}`)}
        </span>
        <div className="flex items-center gap-3 ">
          {userData?.user !== undefined ? (
            <>
              <span className="font-inter text-base font-semibold mobile:hidden laptop:block">
                {userData.user.email}
              </span>
              <button onClick={handleLogout}>
                <Power
                  weight="light"
                  className="h-10 w-10 cursor-pointer text-base-title transition-colors hover:text-base-text"
                />
              </button>
            </>
          ) : (
            <button className="flex items-center gap-2" onClick={handleSignIn}>
              <span className="font-inter text-base font-semibold mobile:hidden laptop:block">
                {t('components.header.loginText')}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-base-secondary ring-2 ring-base-secondary">
                <User size={24} className="text-base-title" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
