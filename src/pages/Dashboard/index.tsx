import rentxImg from '../../assets/logo.png'
import carImg from '../../assets/car-image-dashboard.png'
import carBackground from '../../assets/car-background.png'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
  return (
    <div className="h-full ">
      <div className="w-full max-w-[1300px] flex justify-between mt-20 mx-auto ">
        <div className="max-w-[400px]">
          <img src={rentxImg} alt="logo-rentx" className="mb-[120px]" />
          <div className="flex flex-col  gap-20">
            <h1 className="font-semibold text-5xl text-base-white leading-[54px]">
              Alugue um carro de maneira simples e fácil
            </h1>
            <span className="font-inter text-xl text-base-white leading-[30px]">
              Vários modelos para você dirigir seguro, com conforoto e segurança
            </span>

            <Link
              to="/cars-list"
              className="bg-product-red w-[292px] hover:bg-product-red-dark transition-colors h-[80px] text-base-white font-medium text-lg flex justify-center items-center"
            >
              Começar agora
            </Link>
          </div>
        </div>
        <div className="relative min-w-[610px] ">
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
    </div>
  )
}
