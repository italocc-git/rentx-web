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
    <div className="flex items-center gap-9 border-b-2 border-base-gray pb-7 mb-10">
      <div className="flex items-center justify-center cursor-pointer">
        <CaretLeft
          onClick={() => navigate(-1)}
          weight="bold"
          size={30}
          className="text-base-text "
        />
      </div>
      <div className="font-archivo">
        <span className="text-base-text-details font-medium text-sm ">
          {brand}
        </span>
        <h1 className="text-base-title font-semibold text-4xl">{model}</h1>
      </div>
      <div className="font-archivo">
        <span className="text-base-text-details font-medium text-sm">
          AO DIA
        </span>
        <h1 className="text-product-red font-semibold text-4xl">R$ {price}</h1>
      </div>
    </div>
  )
}
