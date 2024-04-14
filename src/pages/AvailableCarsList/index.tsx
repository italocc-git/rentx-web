import { useCallback, useEffect, useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'
import { CarsGridComponent } from '../../components/CarsGridComponent'
import { useAuth } from '../../hooks/authContext'
import { CarsType } from '../../types/Car'
import { getCarsList } from './query'
import { useTranslation } from 'react-i18next'

export const AvailableCarsList = () => {
  const [carsList, setCarsList] = useState<CarsType[]>([])
  const { isLoading, setIsLoading } = useAuth()
  const { t } = useTranslation()
  const loadAvailableCarsList = useCallback(async () => {
    setIsLoading(true)
    await getCarsList()
      .then(({ data }) => {
        if (data) {
          setCarsList(data.cars)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setIsLoading])

  useEffect(() => {
    loadAvailableCarsList()
  }, [loadAvailableCarsList])

  return (
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
        <>
          <div className=" flex items-center justify-between mobile:flex-col laptop:flex-row">
            <h1 className="font-archivo font-semibold text-base-title mobile:text-xl laptop:text-4xl">
              {t('pages.listContent.home.availableCars.title')}
            </h1>
            <span className="font-inter text-base font-normal text-base-text">
              {t('pages.listContent.home.availableCars.description1')}{' '}
              {carsList.length}{' '}
              {t('pages.listContent.home.availableCars.description2')}
            </span>
          </div>
          <hr className="my-10 w-full border bg-base-secondary" />
          <CarsGridComponent carsList={carsList} />
        </>
      )}
    </div>
  )
}
