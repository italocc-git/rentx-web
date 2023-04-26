import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarBlank,
  SlidersHorizontal,
} from '@phosphor-icons/react'
import { CarsGridComponent } from '../../components/CarsGridComponent'
import { DrawerComponent } from './DrawerComponent'

export const FilteredCarsList = () => {
  const { state } = useLocation()
  const { dateSelected } = state

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-filter" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className=" bg-base-main min-h-screen px-20 py-8">
          <div className="flex laptop:flex-row mobile:flex-col justify-between items-center drawer-content">
            <h1 className="text-base-title font-semibold font-archivo laptop:text-4xl mobile:text-2xl">
              0 Carros encontrados
            </h1>
            <div className="flex items-center laptop:gap-6 mobile:gap-1">
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
              <Link
                to="/home/filtered-cars-by-date"
                className="w-12 h-12 bg-product-red rounded flex justify-center items-center transition-colors hover:bg-product-red-dark"
              >
                <CalendarBlank size={20} weight="bold" className="text-white" />
              </Link>
              <hr className="h-6 border border-base-gray" />
              <label
                htmlFor="my-drawer-filter"
                className="cursor-pointer w-12 h-12 bg-product-red rounded flex justify-center items-center transition-colors hover:bg-product-red-dark"
              >
                <SlidersHorizontal
                  size={20}
                  weight="bold"
                  className="text-white"
                />
              </label>
            </div>
          </div>

          <hr className="bg-base-secondary border w-full my-10" />
          <CarsGridComponent />
        </div>
      </div>
      <DrawerComponent />
    </div>
  )
}
