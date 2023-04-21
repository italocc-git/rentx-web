import { CarsGridComponent } from '../../components/CarsGridComponent'

export const AvailableCarsList = () => {
  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-base-title font-semibold font-archivo text-4xl">
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
