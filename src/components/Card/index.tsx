import { ArrowRight, Drop, Leaf, Lightning } from '@phosphor-icons/react'

interface CardProps {
  id?: number
  image: any
  brand: string
  model: string
  price: string
  fuelType: 'gasoline' | 'hybrid' | 'energy'
  cardLayoutType?: 'horizontal' | 'vertical'
}

export const Card = ({
  image,
  brand,
  model,
  price,
  fuelType,
  cardLayoutType,
}: CardProps) => {
  const CardLayoutHorizontalComponent = () => {
    return (
      <div className="w-full max-w-[600px] h-[258px] cursor-pointer mb-4">
        <div className="border max-h-[198px] border-base-secondary bg-base-white flex gap-1 items-center justify-between px-6">
          <div className="flex justify-between items-end ">
            <div className="flex flex-col gap-6 mt-4">
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
              <Drop
                size={32}
                weight="regular"
                className="text-base-text-details"
              />
            ) : (
              <Leaf
                size={32}
                weight="regular"
                className="text-base-text-details"
              />
            )}
          </div>
          <div className="flex items-center justify-center h-[209px] ">
            <img
              src={image}
              alt="image-car"
              className="mobile:w-[130px] mobile:h-[80px] laptop:w-[288px] laptop:h-[132px]"
            />
          </div>
        </div>
        <hr className="h-1 bg-base-main  w-full" />
        <div className="border h-14 border-base-secondary bg-base-white flex gap-1 items-center  justify-between px-6 py-5">
          <span className="font-archivo text-xs font-medium text-base-text-details">
            PERÍODO DO ALUGUEL
          </span>
          <div className="flex  items-center laptop:gap-6 mobile:gap-2">
            <span className="text-base-title font-medium mobile:text-sm laptop:text-lg">
              18 Jul 2021
            </span>
            <ArrowRight size={20} className="text-base-text-details" />
            <span className="text-base-title font-medium mobile:text-sm laptop:text-lg">
              20 Jul 2021
            </span>
          </div>
        </div>
      </div>
    )
  }

  const CardVerticalLayoutComponent = () => {
    return (
      <div className="w-full h-[293px] border border-base-secondary bg-base-white mb-5 cursor-pointer">
        <div className="flex items-center justify-center h-[209px]  laptop:px-6 mobile:px-2">
          <img src={image} alt="image-car" className="w-[288px] h-[132px]" />
        </div>
        <hr className="bg-base-secondary border w-full" />
        <div className="flex justify-between items-center laptop:px-6 mobile:px-2">
          <div className="flex gap-6 mt-4">
            <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
              <span className="text-base-text-details text-xs ">{brand}</span>
              <span className="text-base-title tablet:text-base desktop:text-xl ">
                {model}
              </span>
            </div>
            <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
              <span className="text-base-text-details text-xs ">AO DIA</span>
              <span className="text-product-red tablet:text-base desktop:text-xl font-medium">
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
            <Drop
              size={32}
              weight="regular"
              className="text-base-text-details"
            />
          ) : (
            <Leaf
              size={32}
              weight="regular"
              className="text-base-text-details"
            />
          )}
        </div>
      </div>
    )
  }
  if (cardLayoutType === 'vertical') {
    return <CardVerticalLayoutComponent />
  } else {
    return <CardLayoutHorizontalComponent />
  }

  /* return (
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
  ) */
}
