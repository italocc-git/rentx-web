import { useLocation, Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarBlank,
  SlidersHorizontal,
} from '@phosphor-icons/react'
import { CarsGridComponent } from '../../components/CarsGridComponent'
import { DrawerComponent } from './DrawerComponent'
import { CarsType } from '../../types/Car'
import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/authContext'
import { DotLoader } from 'react-spinners'
import { filterTypes } from './types'
import { useTranslation } from 'react-i18next'
import { getFilteredCars } from './query'

export const FilteredCarsList = () => {
  const filterInitialValues = {
    name: '',
    category_id: '',
    fuel_type: '',
    transmission: '',
    lower_price: 0,
    highest_price: 5000,
  }
  const { state } = useLocation()
  const { t } = useTranslation()
  const { dateSelected } = state
  const [carsList, setCarsList] = useState<CarsType[]>([])
  const { isLoading, setIsLoading } = useAuth()
  const [filter, setFilter] = useState<filterTypes>(filterInitialValues)
  const {
    i18n: { language },
  } = useTranslation()

  const loadFilteredCarsList = useCallback(async () => {
    setIsLoading(true)
    await getFilteredCars(filter, language).then(({ cars }) => {
      if (cars) {
        setCarsList(cars)
      }
    })
    setIsLoading(false)
  }, [setIsLoading, filter, language])

  useEffect(() => {
    loadFilteredCarsList()
  }, [loadFilteredCarsList])

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-filter" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className=" min-h-screen bg-base-main py-8 mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20">
          {isLoading ? (
            <div className="flex w-full items-center justify-center">
              <DotLoader
                color="#dc1637"
                loading={isLoading}
                size={100}
                aria-label="Loading Image Spinner"
              />
            </div>
          ) : (
            <div className="drawer-content flex items-center justify-between mobile:flex-col laptop:flex-row">
              <h1 className="font-archivo font-semibold text-base-title mobile:text-2xl laptop:text-4xl">
                {carsList.length} {t('pages.listContent.filteredCars.title')}
              </h1>
              <div className="flex items-center mobile:mt-4 mobile:flex-col mobile:gap-4 laptop:mt-0 laptop:flex-row laptop:gap-6">
                <div className="flex items-center gap-4  laptop:flex-col">
                  <span className="font-archivo text-xs font-medium text-base-text-details">
                    {t('pages.listContent.filteredCars.dateContent.from')}
                  </span>
                  <span className="text-lg font-medium text-base-title">
                    {dateSelected.startDate}
                  </span>
                </div>
                <ArrowRight weight="bold" className="text-base-text-details" />
                <div className="flex items-center gap-4  laptop:flex-col">
                  <span className="font-archivo text-xs font-medium text-base-text-details">
                    {t('pages.listContent.filteredCars.dateContent.to')}
                  </span>
                  <span className="text-lg font-medium text-base-title">
                    {dateSelected.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-4 ">
                  <Link
                    to="/filter/car-by-date"
                    className="flex h-12 w-12 items-center justify-center rounded bg-product-red transition-colors hover:bg-product-red-dark"
                  >
                    <CalendarBlank
                      size={20}
                      weight="bold"
                      className="text-white"
                    />
                  </Link>
                  <hr className="h-6 border border-base-gray" />
                  <label
                    htmlFor="my-drawer-filter"
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded bg-product-red transition-colors hover:bg-product-red-dark"
                  >
                    <SlidersHorizontal
                      size={20}
                      weight="bold"
                      className="text-white"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          <hr className="my-10 w-full border bg-base-secondary" />
          <CarsGridComponent carsList={carsList} />
        </div>
      </div>
      <DrawerComponent setFilterCars={setFilter} />
    </div>
  )
}
