import { Icon as IconType } from '@phosphor-icons/react'
interface CarSpecificationProps {
  icon: IconType
  name: string
}

export const CarSpecification = ({
  icon: Icon,
  name,
}: CarSpecificationProps) => {
  return (
    <div className="flex w-[180px] h-16 gap-1 bg-base-main rounded-sm">
      <div className="flex-grow flex justify-center items-center border-r-2 border-base-white">
        <Icon weight="regular" color="black" size={24} />
      </div>
      <div className="min-w-[124px] flex items-center justify-center">
        <span className=" text-base-text text-lg font-inter font-medium ">
          {name}
        </span>
      </div>
    </div>
  )
}
