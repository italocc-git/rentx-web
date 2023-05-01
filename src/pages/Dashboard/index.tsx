import rentxImg from '../../assets/logo.png'
import carImg from '../../assets/car-image-dashboard.png'
import carBackground from '../../assets/car-background.png'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-base-black max-w-[1300px] flex mobile:justify-center  laptop:justify-between px-5 py-[140px] laptop:mx-auto mobile:mx-3">
      <div className="max-w-[400px] ">
        <img src={rentxImg} alt="logo-rentx" className="mb-[120px] m-auto" />
        <div className="flex flex-col mobile:items-center laptop:items-start gap-20">
          <h1 className="font-semibold  mobile:text-3xl tablet:text-5xl text-base-white ">
            Alugue um carro de maneira simples e fácil
          </h1>
          <span className="font-inter mobile:text-md tablet:text-xl text-base-white leading-[30px]">
            Vários modelos para você dirigir seguro, com conforto e segurança
          </span>

          <Link
            to="/inicio/lista-carros-disponíveis"
            className="bg-product-red w-[292px] hover:bg-product-red-dark transition-colors h-[80px] text-base-white font-medium text-lg flex justify-center items-center"
          >
            Começar agora
          </Link>
        </div>
      </div>
      <div className="mobile:hidden  laptop:block relative min-w-[610px] ">
        <img
          src={carImg}
          alt="car-image-into"
          className="absolute z-10 top-40 right-12"
        />
        <img
          src={carBackground}
          alt="car-background"
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  )
}
