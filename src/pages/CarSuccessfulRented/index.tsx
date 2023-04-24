import { CheckFat } from '@phosphor-icons/react'
import union from '../../assets/union.png'
import { useNavigate } from 'react-router-dom'
export const CarSuccessfulRented = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-base-black h-full min-h-screen px-40 flex items-center justify-center relative">
      <img
        src={union}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        alt="union-img"
      />
      <div className="flex flex-col w-[385px] items-center z-10">
        <CheckFat
          className="text-product-green mb-14 w-20 h-14"
          weight="bold"
        />
        <h1 className="font-archivo text-white text-[54px] font-semibold leading-relaxed mb-6">
          Carro alugado!
        </h1>
        <span className="font-inter text-lg text-base-text-details text-center mb-12">
          Agora você só precisa ir até a concessionária da RentX pegar o seu
          automóvel.
        </span>
        <button
          onClick={() => navigate('/home/profile')}
          className="bg-black-300 h-16 w-[120px] rounded-md flex items-center justify-center transition-colors hover:bg-black-700"
        >
          <span className="font-inter font-medium text-white">Ok</span>
        </button>
      </div>
    </div>
  )
}
