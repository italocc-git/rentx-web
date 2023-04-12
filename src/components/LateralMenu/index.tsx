import homeIcon from '../../assets/icons/home.svg'
import carIcon from '../../assets/icons/car.svg'
import profileIcon from '../../assets/icons/profile.svg'
import rentxIcon from '../../assets/icons/rentx.svg'
import { Link } from 'react-router-dom'
export const LateralMenu = () => {
  const linkStyleClass =
    'h-[54px] w-full bg-transparent border-l-[3px] border-transparent focus:outline-none focus:border-product-red hover:border-product-red   flex items-center justify-center '

  return (
    <div className="w-[80px]">
      <div className="w-[80px] h-[80px] bg-product-red flex items-center justify-center">
        <img src={rentxIcon} alt="rentx-icon" className="cursor-pointer" />
      </div>
      <div className="h-full bg-black-700 flex flex-col items-center justify-center gap-3">
        <Link
          to="/available-cars-list"
          className="h-[54px] w-full bg-transparent border-l-[3px] border-transparent focus:outline-none focus:border-product-red hover:border-product-red flex items-center justify-center "
        >
          <img src={homeIcon} alt="home-icon" className="" />
        </Link>
        <Link to="/available-cars-list" className={linkStyleClass}>
          <img src={carIcon} alt="car-icon" />
        </Link>
        <Link to="/car" className={linkStyleClass}>
          <img src={profileIcon} alt="profile-icon" />
        </Link>
      </div>
    </div>
  )
}
