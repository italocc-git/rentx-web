import {
  ArrowLineUp,
  ArrowsDownUp,
  Drop,
  Gauge,
  SteeringWheel,
  Users,
  Warning,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { CarouselComponent } from '../../components/CarouselComponent'
import { CarSpecification } from '../../components/CarSpecification'

import { DateSelectModal } from './DateSelectModal'
import { HeaderCarDetails } from './HeaderCarDetails'
import { SelectedRangeDateType } from './types'
import { useNavigate } from 'react-router-dom'
import { TabsCarInformation } from './TabsCarInformation'
import { useAuth } from '../../hooks/authContext'
export const CarDetails = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const isLogged = !!user
  const [openModal, setOpenModal] = useState(false)
  const [selectedRangeDate, setSelectedRangeDate] =
    useState<SelectedRangeDateType>({} as SelectedRangeDateType)

  const handleSuccessRentalPage = () => {
    navigate('/carro-alugado-com-sucesso')
  }
  const [selectedTab, setSelectedTab] = useState<string>('tab1')

  return (
    <div className=" bg-base-white min-h-screen desktop:px-20 py-8 laptop:px-8 tablet:px-1 laptop:mb-0 mobile:mb-20">
      <DateSelectModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedRangeDate={selectedRangeDate}
        setSelectedRangeDate={setSelectedRangeDate}
        setSelectTab={setSelectedTab}
      />
      <HeaderCarDetails brand="AUDI" model="Q3 2023" price="120,00" />
      <div className="flex mobile:flex-col desktop:flex-row items-center  justify-between w-full ">
        <CarouselComponent />
        <div className="flex flex-col w-full max-w-[384px] ">
          <div className="flex flex-col gap-12 mb-[48px] ">
            <div className="grid tablet:grid-cols-2 mobile:grid-rows-1 gap-2">
              <CarSpecification icon={Gauge} name="270km/h" />
              <CarSpecification icon={ArrowLineUp} name="6.8s" />
              <CarSpecification icon={Drop} name="Gasolina" />
              <CarSpecification icon={ArrowsDownUp} name="Auto" />
              <CarSpecification icon={Users} name="5 pessoas" />
              <CarSpecification icon={SteeringWheel} name="280 HP" />
            </div>
          </div>
          <TabsCarInformation
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
                  className="bg-product-green w-full h-20 text-white transition-colors hover:bg-product-green-dark disabled:bg-product-green-light"
                >
                  <span className="font-inter font-medium text-lg">
                    Alugar agora
                  </span>
                </button>
                {!isLogged && (
                  <div className="flex gap-1 text-xs text-product-red mt-2">
                    <span>Faça o login para alugar</span>
                    <Warning weight="bold" size={16} />
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => setOpenModal(true)}
                className="bg-product-red w-full h-20 text-white transition-colors hover:bg-product-red-dark"
              >
                <span className="font-inter font-medium text-lg">
                  Escolher período do aluguel
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
