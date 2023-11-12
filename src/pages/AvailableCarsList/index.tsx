import { useCallback, useEffect, useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'
import { CarsGridComponent } from '../../components/CarsGridComponent'
import { useAuth } from '../../hooks/authContext'
import { CarsType } from '../../types/Car'
import { getCarsList } from './query'

export const AvailableCarsList = () => {
  const [carsList, setCarsList] = useState<CarsType[]>([])
  const { isLoading, setIsLoading } = useAuth()
  const loadAvailableCarsList = useCallback(async () => {
    setIsLoading(true)
    const { data } = await getCarsList()
    if (data) {
      setCarsList(data.cars)
      setIsLoading(false)
    }
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
              Carros disponíveis
            </h1>
            <span className="font-inter text-base font-normal text-base-text">
              Total {carsList.length} carros
            </span>
          </div>
          <hr className="my-10 w-full border bg-base-secondary" />
          <CarsGridComponent carsList={carsList} />
        </>
      )}
    </div>
  )
}
