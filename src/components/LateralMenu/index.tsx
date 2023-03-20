import homeIcon from '../../assets/icons/home.svg'
import carIcon from '../../assets/icons/car.svg'
import profileIcon from '../../assets/icons/profile.svg'
import rentxIcon from '../../assets/icons/rentx.svg'
export const LateralMenu = () => {
  return (
    <div className="absolute top-0 w-[80px] ">
      <div className="w-[80px] h-[80px] bg-product-red flex items-center justify-center">
        <img src={rentxIcon} alt="rentx-icon" className="cursor-pointer" />
      </div>
      <div className="min-h-screen bg-black-700 flex flex-col items-center justify-center gap-10">
        <img src={homeIcon} className="cursor-pointer" alt="home-icon" />
        <img src={carIcon} className="cursor-pointer" alt="car-icon" />
        <img src={profileIcon} className="cursor-pointer" alt="profile-icon" />
      </div>
    </div>
  )
}
