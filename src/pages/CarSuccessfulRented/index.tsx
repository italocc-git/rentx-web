import { CheckFat } from '@phosphor-icons/react'
import union from '../../assets/union.png'
import { useNavigate } from 'react-router-dom'
export const CarSuccessfulRented = () => {
  const navigate = useNavigate()
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-base-black px-40">
      <img
        src={union}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        alt="union-img"
      />
      <div className="z-10 flex w-[385px] flex-col items-center">
        <CheckFat
          className="mb-14 h-14 w-20 text-product-green"
          weight="bold"
        />
        <h1 className="mb-6 font-archivo text-[54px] font-semibold leading-relaxed text-white">
          Carro alugado!
        </h1>
        <span className="mb-12 text-center font-inter text-lg text-base-text-details">
          Agora você só precisa ir até a concessionária da RentX pegar o seu
          automóvel.
        </span>
        <button
          onClick={() => navigate('/perfil')}
          className="flex h-16 w-[120px] items-center justify-center rounded-md bg-black-300 transition-colors hover:bg-black-700"
        >
          <span className="font-inter font-medium text-white">Ok</span>
        </button>
      </div>
    </div>
  )
}
