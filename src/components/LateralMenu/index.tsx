import rentxIcon from '../../assets/icons/rentx.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Car, House, User } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/authContext'

export const LateralMenu = () => {
  const navigate = useNavigate()
  const { userData } = useAuth()

  const linkStyleClass =
    'h-[54px] w-full bg-transparent laptop:border-l-[3px] laptop:border-b-0 mobile:border-b-[3px] border-transparent transition-colors focus:outline-none focus:border-product-red hover:border-product-red flex items-center justify-center text-base-text focus:text-white'

  const handleNavigateToDashboard = () => {
    navigate('/')
  }

  return (
    <div className="z-10 bg-black-500 mobile:fixed mobile:bottom-0 mobile:h-20 mobile:w-screen laptop:relative laptop:h-screen laptop:w-full laptop:max-w-[5rem]">
      <button
        onClick={handleNavigateToDashboard}
        className="flex h-20 w-full items-center justify-center bg-product-red transition-colors hover:bg-product-red-dark mobile:hidden laptop:inline-flex"
      >
        <img src={rentxIcon} alt="rentx-icon" className="cursor-pointer" />
      </button>
      <div className="flex h-[calc(100%-5rem)] items-center justify-center gap-3 mobile:h-full mobile:flex-row laptop:flex-col">
        <Link to="/inicio/lista-carros-disponíveis" className={linkStyleClass}>
          <House weight="light" size={26} />
        </Link>
        <Link to="/filtro/carros-por-data" className={linkStyleClass}>
          <Car weight="light" size={26} />
        </Link>
        <Link
          to={userData !== null ? '/perfil' : '/perfil/login'}
          className={linkStyleClass}
        >
          <User weight="light" size={26} />
        </Link>
      </div>
    </div>
  )
}
