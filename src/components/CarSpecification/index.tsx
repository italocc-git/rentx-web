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
    <div className="flex h-16 w-full gap-1 bg-base-main ">
      <div className="flex min-w-[52px] items-center justify-center">
        <Icon weight="bold" color="black" size={24} />
      </div>
      <hr className="h-full w-[2px] bg-base-white" />
      <div className=" flex w-full items-center  justify-center">
        <span className=" font-inter text-lg font-medium text-base-text ">
          {name}
        </span>
      </div>
    </div>
  )
}
