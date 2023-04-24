import rentxIcon from '../../assets/icons/rentx.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Car, House, User } from '@phosphor-icons/react'

export const LateralMenu = () => {
  const navigate = useNavigate()
  const linkStyleClass =
    'h-[54px] w-full bg-transparent border-l-[3px] border-transparent transition-colors focus:outline-none focus:border-product-red hover:border-product-red flex items-center justify-center text-base-text focus:text-white'

  const handleNavigateToDashboard = () => {
    navigate('/')
  }

  return (
    <div className="w-[80px] h-screen">
      <button
        onClick={handleNavigateToDashboard}
        className="w-[80px] h-[80px] bg-product-red flex items-center justify-center"
      >
        <img src={rentxIcon} alt="rentx-icon" className="cursor-pointer" />
      </button>
      <div className="h-full bg-black-700 flex flex-col items-center justify-center gap-3">
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
