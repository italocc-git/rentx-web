import {
  ArrowLineUp,
  ArrowsDownUp,
  Drop,
  Gauge,
  CarProfile,
  Users,
  Warning,
  Lightning,
  Leaf,
} from '@phosphor-icons/react'
import { useCallback, useEffect, useState } from 'react'

import { CarouselComponent } from '@/components/CarouselComponent'
import { CarSpecification } from '@/components/CarSpecification'

import { DateSelectModal } from './DateSelectModal'
import { HeaderCarDetails } from './HeaderCarDetails'
import { SelectedRangeDateType } from './types'
import { useNavigate, useParams } from 'react-router-dom'
import { TabsCarInformation } from './TabsCarInformation'
import { useAuth } from '@/hooks/authContext'

import { DotLoader } from 'react-spinners'
import { CarsType } from '../../types/Car'
import { getCar } from './query'

import { useTranslation } from 'react-i18next'
export const CarDetails = () => {
  const navigate = useNavigate()
  const {
    i18n: { language },
    t,
  } = useTranslation()

  const { id } = useParams()
  const { userData, setIsLoading, isLoading } = useAuth()
  const isLogged = !!userData
  const [openModal, setOpenModal] = useState(false)
  const [carInformation, setCarInformation] = useState<CarsType>({} as CarsType)

  const [selectedRangeDate, setSelectedRangeDate] =
    useState<SelectedRangeDateType>({} as SelectedRangeDateType)

  const handleSuccessRentalPage = () => {
    navigate('/successfully-rented-car')
  }
  const [selectedTab, setSelectedTab] = useState<string>('tab1')
  const handleWithIcons = (specificationName: string) => {
    switch (specificationName) {
      case 'Speedometer': // velocimetro
        return Gauge
      case 'Capacity': // Capacidade //people
        return Users
      case 'Power': // Potencia
        return ArrowLineUp
      case 'Gasoline': // Gasolina
        return Drop
      case 'Hybrid': // Hibrido
        return Leaf
      case 'Electric': // eletrico
        return Lightning
      case 'Transmission': // Transmissao // Automatic // Manual
        return ArrowsDownUp
      case 'Doors': // Portas //doors
        return CarProfile

      default:
        return Gauge
    }
  }

  const loadCarData = useCallback(async () => {
    setIsLoading(true)

    if (id) {
      await getCar(id, language).then(({ car }) => {
        setCarInformation(car)
      })
    }

    setIsLoading(false)
  }, [id, setIsLoading, language])

  useEffect(() => {
    loadCarData()
  }, [loadCarData])

  return (
    <div className=" min-h-screen bg-base-white py-8 mobile:mb-20 tablet:px-1 laptop:mb-0 laptop:px-8 desktop:px-20">
      <DateSelectModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedRangeDate={selectedRangeDate}
        setSelectedRangeDate={setSelectedRangeDate}
        setSelectTab={setSelectedTab}
      />
      <HeaderCarDetails
        brand={carInformation?.brand}
        model={carInformation?.name}
        price={carInformation?.dailyRate}
      />

      <div className="flex w-full items-center justify-between mobile:flex-col desktop:flex-row ">
        {isLoading ? (
          <div className="flex w-full items-center justify-center">
            <DotLoader
              color="#dc1637"
              loading={isLoading}
              size={100}
              aria-label="Loading CarInfo Spinner"
            />
          </div>
        ) : (
          <>
            <CarouselComponent imagesUrl={carInformation.carImages} />
            <div className="flex w-full max-w-[384px] flex-col px-6">
              <div className="mb-[48px] flex flex-col gap-12 ">
                <div className="grid gap-2 mobile:grid-rows-1 tablet:grid-cols-2">
                  {carInformation.carSpecifications?.map((specification) => (
                    <CarSpecification
                      key={specification.id}
                      icon={handleWithIcons(specification.iconName)}
                      name={specification.description}
                    />
                  ))}
                </div>
              </div>
              <TabsCarInformation
                carInformation={carInformation}
                selectedData={selectedRangeDate}
                setOpenModal={setOpenModal}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
              <div className="mt-[113px]">
                {selectedRangeDate.startDate ? (
                  <>
                    <button
                      onClick={handleSuccessRentalPage}
                      disabled={!isLogged}
                      className="h-20 w-full bg-product-green text-white transition-colors hover:bg-product-green-dark disabled:bg-product-green-light"
                    >
                      <span className="font-inter text-lg font-medium">
                        {t(
                          'pages.listContent.home.car.footer.rentButton.userLogged',
                        )}
                      </span>
                    </button>
                    {!isLogged && (
                      <div className="mt-2 flex gap-1 text-xs text-product-red">
                        <span>
                          {t(
                            'pages.listContent.home.car.footer.rentButton.userNotLogged',
                          )}
                        </span>
                        <Warning weight="bold" size={16} />
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => setOpenModal(true)}
                    className="h-20 w-full bg-product-red text-white transition-colors hover:bg-product-red-dark"
                  >
                    <span className="font-inter text-lg font-medium">
                      {t('pages.listContent.home.car.footer.buttonTitle')}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
