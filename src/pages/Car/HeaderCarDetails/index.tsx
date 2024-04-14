import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
interface HeaderCarDetailsProps {
  brand: string
  model: string
  price: string
}
export const HeaderCarDetails = ({
  brand,
  model,
  price,
}: HeaderCarDetailsProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className="mb-10 flex items-center justify-around gap-9 border-b-2 border-base-gray  px-2 pb-7  mobile:gap-1">
      <div className=" cursor-pointer">
        <CaretLeft
          onClick={() => navigate(-1)}
          weight="bold"
          size={30}
          className="text-base-text "
        />
      </div>
      <div className="font-archivo">
        <span className="font-medium text-base-text-details mobile:text-xs laptop:text-sm">
          {brand}
        </span>
        <h1 className="font-semibold text-base-title mobile:text-2xl laptop:text-4xl">
          {model}
        </h1>
      </div>
      <div className="font-archivo">
        <span className="font-medium text-base-text-details mobile:text-xs laptop:text-sm">
          {t('pages.listContent.home.car.header.perDay')}
        </span>
        <h1 className="font-semibold text-product-red mobile:text-2xl laptop:text-4xl">
          R$ {price}
        </h1>
      </div>
    </div>
  )
}
