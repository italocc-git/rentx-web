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
    <div className="flex tablet:flex-row mobile:flex-col tablet:items-center mobile:items-baseline tablet:gap-9 mobile:gap-1 border-b-2 border-base-gray px-2 pb-7 mb-10">
      <div className="flex items-center justify-center cursor-pointer">
        <CaretLeft
          onClick={() => navigate(-1)}
          weight="bold"
          size={30}
          className="text-base-text "
        />
      </div>
      <div className="font-archivo">
        <span className="text-base-text-details font-medium laptop:text-sm mobile:text-xs">
          {brand}
        </span>
        <h1 className="text-base-title font-semibold laptop:text-4xl mobile:text-2xl">
          {model}
        </h1>
      </div>
      <div className="font-archivo">
        <span className="text-base-text-details font-medium laptop:text-sm mobile:text-xs">
          AO DIA
        </span>
        <h1 className="text-product-red font-semibold laptop:text-4xl mobile:text-2xl">
          R$ {price}
        </h1>
      </div>
    </div>
  )
}
