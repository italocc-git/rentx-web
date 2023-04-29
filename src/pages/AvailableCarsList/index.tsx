import { CarsGridComponent } from '../../components/CarsGridComponent'

export const AvailableCarsList = () => {
  return (
    <div className=" bg-base-main min-h-screen laptop:px-20 py-8 mobile:px-8 laptop:mb-0 mobile:mb-20">
      <div className=" flex laptop:flex-row mobile:flex-col justify-between items-center">
        <h1 className="text-base-title font-semibold font-archivo laptop:text-4xl mobile:text-xl">
          Carros disponíveis
        </h1>
        <span className="text-base-text font-normal font-inter text-base">
          Total 12 carros
        </span>
      </div>
      <hr className="bg-base-secondary border w-full my-10" />
      <CarsGridComponent />
    </div>
  )
}
