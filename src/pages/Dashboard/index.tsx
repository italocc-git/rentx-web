import rentxImg from '../../assets/logo.png'
import carImg from '../../assets/car-image-dashboard.png'
import carBackground from '../../assets/car-background.png'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full max-w-[1300px] bg-base-black px-5  py-[140px] mobile:mx-3 mobile:justify-center laptop:mx-auto laptop:justify-between">
      <div className="max-w-[400px] ">
        <img src={rentxImg} alt="logo-rentx" className="m-auto mb-[120px]" />
        <div className="flex flex-col gap-20 mobile:items-center laptop:items-start">
          <h1 className="font-semibold  text-base-white mobile:text-3xl tablet:text-5xl ">
            Alugue um carro de maneira simples e fácil
          </h1>
          <span className="mobile:text-md font-inter leading-[30px] text-base-white tablet:text-xl">
            Vários modelos para você dirigir seguro, com conforto e segurança
          </span>

          <Link
            to="/inicio/lista-carros-disponíveis"
            className="flex h-[80px] w-[292px] items-center justify-center bg-product-red text-lg font-medium text-base-white transition-colors hover:bg-product-red-dark"
          >
            Começar agora
          </Link>
        </div>
      </div>
      <div className="relative  min-w-[610px] mobile:hidden laptop:block ">
        <img
          src={carImg}
          alt="car-image-into"
          className="absolute top-40 right-12 z-10"
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
