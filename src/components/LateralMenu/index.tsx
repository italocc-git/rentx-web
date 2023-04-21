import rentxIcon from '../../assets/icons/rentx.svg'
import { Link } from 'react-router-dom'
import { Car, House, User } from '@phosphor-icons/react'
export const LateralMenu = () => {
  const linkStyleClass =
    'h-[54px] w-full bg-transparent border-l-[3px] border-transparent transition-colors focus:outline-none focus:border-product-red hover:border-product-red flex items-center justify-center text-base-text focus:text-white'

  return (
    <div className="w-[80px] h-screen">
      <div className="w-[80px] h-[80px] bg-product-red flex items-center justify-center">
        <img src={rentxIcon} alt="rentx-icon" className="cursor-pointer" />
      </div>
      <div className="h-full bg-black-700 flex flex-col items-center justify-center gap-3">
        <Link to="/available-cars-list" className={linkStyleClass}>
          <House weight="light" size={26} />
        </Link>
        <Link to="/filtered-cars-by-date" className={linkStyleClass}>
          <Car weight="light" size={26} />
        </Link>
        <Link to="/profile" className={linkStyleClass}>
          <User weight="light" size={26} />
        </Link>
      </div>
    </div>
  )
}
