import { CheckFat } from '@phosphor-icons/react'
import union from '../../assets/union.png'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export const CarSuccessfulRented = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
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
          {t('pages.listContent.successfulRented.title')}
        </h1>
        <span className="mb-12 text-center font-inter text-lg text-base-text-details">
          {t('pages.listContent.successfulRented.description')}
        </span>
        <button
          onClick={() => navigate('/profile')}
          className="flex h-16 w-[120px] items-center justify-center rounded-md bg-black-300 transition-colors hover:bg-black-700"
        >
          <span className="font-inter font-medium text-white">Ok</span>
        </button>
      </div>
    </div>
  )
}
