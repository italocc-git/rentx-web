import { ArrowRight, Drop, Leaf, Lightning } from '@phosphor-icons/react'
import AutomaticIcon from '../../assets/icons/automatic-transmission.png'
import ManualIcon from '../../assets/icons/manual-transmission.png'
interface CardProps {
  id?: number | string
  image: string
  brand: string
  model: string
  price: string
  transmission: 'automatic' | 'manual'
  fuelType: 'gasoline' | 'hybrid' | 'energy'
  cardLayoutType?: 'horizontal' | 'vertical'
}

export const Card = ({
  image,
  brand,
  model,
  price,
  transmission,
  fuelType,
  cardLayoutType,
}: CardProps) => {
  const CardLayoutHorizontalComponent = () => {
    return (
      <div className="mb-4 h-[258px] w-full max-w-[600px] cursor-pointer">
        <div className="flex max-h-[198px] items-center justify-between gap-1 border border-base-secondary bg-base-white px-6">
          <div className="flex items-end justify-between ">
            <div className="mt-4 flex flex-col gap-6">
              <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
                <span className="text-xs text-base-text-details ">{brand}</span>
                <span className="text-xl text-base-title ">{model}</span>
              </div>
              <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
                <span className="text-xs text-base-text-details ">AO DIA</span>
                <span className="text-xl font-medium text-product-red">
                  R$ {price}
                </span>
              </div>
            </div>
            <div>
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
          <div className="flex h-[209px] items-center justify-center ">
            <img
              src={image}
              alt="image-car"
              className="mobile:h-[80px] mobile:w-[130px] laptop:h-[132px] laptop:w-[288px]"
            />
          </div>
        </div>
        <hr className="h-1 w-full  bg-base-main" />
        <div className="flex h-14 items-center justify-between gap-1 border border-base-secondary  bg-base-white px-6 py-5">
          <span className="font-archivo text-xs font-medium text-base-text-details">
            PERÍODO DO ALUGUEL
          </span>
          <div className="flex  items-center mobile:gap-2 laptop:gap-6">
            <span className="font-medium text-base-title mobile:text-sm laptop:text-lg">
              18 Jul 2021
            </span>
            <ArrowRight size={20} className="text-base-text-details" />
            <span className="font-medium text-base-title mobile:text-sm laptop:text-lg">
              20 Jul 2021
            </span>
          </div>
        </div>
      </div>
    )
  }

  const CardVerticalLayoutComponent = () => {
    return (
      <div className="mb-5 h-[293px] w-full cursor-pointer border border-base-secondary bg-base-white">
        <div className="flex h-[209px] items-center justify-center  mobile:px-2 laptop:px-6">
          <img src={image} alt="image-car" className="h-[200px] w-[370px]" />
        </div>
        <hr className="w-full border bg-base-secondary" />
        <div className="flex items-center justify-between mobile:px-2 laptop:px-6">
          <div className="mt-4 flex gap-6">
            <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
              <span className="text-xs text-base-text-details ">{brand}</span>
              <span className="text-base-title tablet:text-base desktop:text-xl ">
                {model}
              </span>
            </div>
            <div className="flex flex-col justify-between gap-2 font-archivo font-medium">
              <span className="text-xs text-base-text-details ">AO DIA</span>
              <span className="font-medium text-product-red tablet:text-base desktop:text-xl">
                R$ {price}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div>
              <img
                src={transmission === 'automatic' ? AutomaticIcon : ManualIcon}
                alt="transmission image"
                className="h-8 w-8"
              />
            </div>
            {fuelType === 'energy' ? (
              <Lightning
                size={34}
                weight="bold"
                className="text-base-text-details"
              />
            ) : fuelType === 'gasoline' ? (
              <Drop
                size={34}
                weight="regular"
                className="text-base-text-details"
              />
            ) : (
              <Leaf
                size={34}
                weight="regular"
                className="text-base-text-details"
              />
            )}
          </div>
        </div>
      </div>
    )
  }
  if (cardLayoutType === 'vertical') {
    return <CardVerticalLayoutComponent />
  } else {
    return <CardLayoutHorizontalComponent />
  }
}
