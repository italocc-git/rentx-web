import rentxIcon from '../../assets/icons/rentx.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Car, House, User } from '@phosphor-icons/react'

export const LateralMenu = () => {
  const navigate = useNavigate()
  const linkStyleClass =
    'h-[54px] w-full bg-transparent laptop:border-l-[3px] laptop:border-b-0 mobile:border-b-[3px] border-transparent transition-colors focus:outline-none focus:border-product-red hover:border-product-red flex items-center justify-center text-base-text focus:text-white'

  const handleNavigateToDashboard = () => {
    navigate('/')
  }

  return (
    <div className="laptop:w-full laptop:max-w-[5rem] mobile:w-screen laptop:h-screen mobile:h-20 laptop:relative mobile:fixed mobile:bottom-0 bg-black-500 z-10">
      <button
        onClick={handleNavigateToDashboard}
        className="w-full h-20 bg-product-red flex items-center justify-center transition-colors hover:bg-product-red-dark laptop:inline-flex mobile:hidden"
      >
        <img src={rentxIcon} alt="rentx-icon" className="cursor-pointer" />
      </button>
      <div className="h-[calc(100%-5rem)] mobile:h-full flex laptop:flex-col mobile:flex-row items-center justify-center gap-3">
        <Link to="/home/available-cars-list" className={linkStyleClass}>
          <House weight="light" size={26} />
        </Link>
        <Link to="/home/filtered-cars-by-date" className={linkStyleClass}>
          <Car weight="light" size={26} />
        </Link>
        <Link to="/home/sign-in" className={linkStyleClass}>
          <User weight="light" size={26} />
        </Link>
      </div>
    </div>
  )
}
