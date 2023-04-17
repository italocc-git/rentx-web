import carImageSignPage from '../../assets/car-image-signin.png'
import { Envelope, Lock } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
export const SignIn = () => {
  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <div className="flex justify-between items-center">
        <img src={carImageSignPage} alt="image-sign-page" />
        <div className="flex flex-col  justify-center gap-6">
          <h1 className="font-archivo font-semibold text-4xl text-base-title">
            Estamos quase lá.
          </h1>
          <span className="font-inter text-base-text">
            Faça seu login para começar uma experiência incrível.
          </span>

          <div className="flex flex-col gap-2">
            <div className="flex gap-[2px] h-16 ">
              <div className="w-[60px] h-full rounded-l-sm bg-white flex justify-center items-center border border-base-secondary">
                <Envelope
                  size={24}
                  weight="regular"
                  className="text-base-text "
                />
              </div>
              <input
                type="text"
                className="placeholder-base-text-details p-4 rounded-r-sm flex-grow border-base-secondary focus:border-0
                focus:outline-none focus:ring-1 focus:ring-base-text"
                placeholder="E-mail"
              />
            </div>
            <div className="flex gap-[2px] h-16 ">
              <div className="w-[60px] h-full rounded-l-sm bg-white flex justify-center items-center border border-base-secondary">
                <Lock size={24} weight="regular" className="text-base-text" />
              </div>
              <input
                type="text"
                className="placeholder-base-text-details p-4 rounded-r-sm flex-grow border-base-secondary focus:border-0
                focus:outline-none focus:ring-1 focus:ring-base-text"
                placeholder="Senha"
              />
            </div>
          </div>
          <Link to="/sign-in">
            <span className="text-base-text font-inter">
              Esqueci minha senha
            </span>
          </Link>
          <div className="w-full flex flex-col gap-4 font-inter font-medium">
            <button className="bg-product-red text-white h-16 transition-colors hover:bg-product-red-dark  disabled:opacity-50 disabled:cursor-not-allowed">
              Login
            </button>
            <Link
              to="/sign-up"
              className="flex justify-center items-center bg-transparent text-base-title border border-base-gray h-16 transition-colors hover:border-base-title"
            >
              Criar conta gratuita
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
