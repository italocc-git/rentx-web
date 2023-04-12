import { CaretLeft } from '@phosphor-icons/react'
export const HeaderCarDetails = () => {
  return (
    <div className="flex items-center gap-9 border-b-2 border-base-gray pb-7 mb-10">
      <div className="flex items-center justify-center cursor-pointer">
        <CaretLeft weight="bold" size={30} className="text-base-text " />
      </div>
      <div className="font-archivo">
        <span className="text-base-text-details font-medium text-sm ">
          AUDI
        </span>
        <h1 className="text-base-title font-semibold text-4xl">
          Q3 Baita Foda
        </h1>
      </div>
      <div className="font-archivo">
        <span className="text-base-text-details font-medium text-sm">
          AO DIA
        </span>
        <h1 className="text-product-red font-semibold text-4xl">R$ 120</h1>
      </div>
    </div>
  )
}
