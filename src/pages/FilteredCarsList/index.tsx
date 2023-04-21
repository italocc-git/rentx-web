import { useLocation } from 'react-router-dom'
import {
  ArrowRight,
  CalendarBlank,
  SlidersHorizontal,
} from '@phosphor-icons/react'
import { CarsGridComponent } from '../../components/CarsGridComponent'
export const FilteredCarsList = () => {
  const { state } = useLocation()
  const { dateSelected } = state
  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-base-title font-semibold font-archivo text-4xl">
          0 Carros encontrados
        </h1>
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-base-text-details font-medium text-xs font-archivo">
              DE
            </span>
            <span className="text-base-title font-medium text-lg">
              {dateSelected.startDate}
            </span>
          </div>
          <ArrowRight weight="bold" className="text-base-text-details" />
          <div className="flex flex-col gap-1">
            <span className="text-base-text-details font-medium text-xs font-archivo">
              ATÉ
            </span>
            <span className="text-base-title font-medium text-lg">
              {dateSelected.endDate}
            </span>
          </div>
          <button className="w-12 h-12 bg-product-red rounded flex justify-center items-center transition-colors hover:bg-product-red-dark">
            <CalendarBlank size={20} weight="bold" className="text-white" />
          </button>
          <hr className="h-6 border border-base-gray" />
          <button className="w-12 h-12 bg-product-red rounded flex justify-center items-center transition-colors hover:bg-product-red-dark">
            <SlidersHorizontal size={20} weight="bold" className="text-white" />
          </button>
        </div>
      </div>
      <hr className="bg-base-secondary border w-full my-10" />
      <CarsGridComponent />
    </div>
  )
}
