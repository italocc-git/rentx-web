import userIcon from '../../assets/icons/user.svg'
export const Header = () => {
  return (
    <div className="w-full h-[80px]  ">
      <div className=" bg-base-white h-full flex justify-between items-center text-base-title ">
        <span className="font-semibold text-xl ml-[116px]  ">Início</span>
        <div className="flex items-center gap-3 mr-[116px]">
          <span className="font-inter font-semibold text-base">
            Faça o login
          </span>
          <div className="w-[48px] h-[43px] bg-base-secondary rounded-full flex justify-center items-center">
            <img src={userIcon} alt="user-avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}
