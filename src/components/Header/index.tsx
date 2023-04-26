import profileIcon from '../../assets/icons/profile.svg'
export const Header = () => {
  return (
    <div className="w-full h-[5rem] bg-base-white px-20 border-b border-base-secondary ">
      <div className="  h-full flex justify-between items-center text-base-title ">
        <span className="font-semibold text-xl   ">Início</span>
        <div className="flex items-center gap-3 ">
          <span className="font-inter font-semibold text-base laptop:block mobile:hidden">
            Faça o login
          </span>
          <div className="w-[48px] h-[43px] bg-base-secondary rounded-full flex justify-center items-center">
            <img src={profileIcon} alt="user-avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}
