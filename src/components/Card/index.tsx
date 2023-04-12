import { Drop, Leaf, Lightning } from '@phosphor-icons/react'

interface CardProps {
  image: any
  brand: string
  model: string
  price: string
  fuelType: 'gasoline' | 'hybrid' | 'energy'
}

export const Card = ({ image, brand, model, price, fuelType }: CardProps) => {
  return (
    <div className="w-full max-w-[360px] h-[293px] border border-base-secondary bg-base-white flex-col gap-1 items-center mb-5 cursor-pointer">
      <div className="flex items-center justify-center h-[209px] px-6">
        <img src={image} alt="image-car" className="w-[288px] h-[132px]" />
      </div>
      <hr className="bg-base-secondary border w-full" />
      <div className="flex justify-between items-center px-6">
        <div className="flex gap-6 mt-4">
          <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
            <span className="text-base-text-details text-xs ">{brand}</span>
            <span className="text-base-title text-xl ">{model}</span>
          </div>
          <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
            <span className="text-base-text-details text-xs ">AO DIA</span>
            <span className="text-product-red text-xl font-medium">
              R$ {price}
            </span>
          </div>
        </div>
        {fuelType === 'energy' ? (
          <Lightning
            size={32}
            weight="bold"
            className="text-base-text-details"
          />
        ) : fuelType === 'gasoline' ? (
          <Drop size={32} weight="regular" className="text-base-text-details" />
        ) : (
          <Leaf size={32} weight="regular" className="text-base-text-details" />
        )}
      </div>
    </div>
  )
}
