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
    <div className="flex w-full h-16 gap-1 bg-base-main ">
      <div className="min-w-[52px] flex justify-center items-center">
        <Icon weight="bold" color="black" size={24} />
      </div>
      <hr className="w-[2px] h-full bg-base-white" />
      <div className=" flex items-center justify-center  w-full">
        <span className=" text-base-text text-lg font-inter font-medium ">
          {name}
        </span>
      </div>
    </div>
  )
}
