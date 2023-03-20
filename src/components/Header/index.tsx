import userAvatar from '../../assets/user-avatar.svg'
export const Header = () => {
    return(
        <div className='w-full h-[80px]  ' >
            <div className=" bg-base-white  flex justify-between items-center text-base-title ">
                <span className='font-semibold text-xl ml-[116px]  '>Início</span>
                <div className='flex items-center gap-3 mr-[116px]'>
                    <span className='font-inter font-semibold text-base'>Faça o login</span>
                    <img src={userAvatar} alt="user-avatar"  className=''/>
                </div>
            </div>
        </div>
    )
}