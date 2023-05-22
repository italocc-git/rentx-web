import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
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
  return (
    <div className="mb-10 flex border-b-2 border-base-gray px-2 pb-7 mobile:flex-col mobile:items-baseline mobile:gap-1 tablet:flex-row tablet:items-center tablet:gap-9">
      <div className="flex cursor-pointer items-center justify-center">
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
          AO DIA
        </span>
        <h1 className="font-semibold text-product-red mobile:text-2xl laptop:text-4xl">
          R$ {price}
        </h1>
      </div>
    </div>
  )
}
