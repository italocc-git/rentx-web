import {
  ArrowLineUp,
  ArrowsDownUp,
  Drop,
  Gauge,
  SteeringWheel,
  Users,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { CarouselComponent } from '../../components/CarouselComponent'
import { CarSpecification } from '../../components/CarSpecification'

import { Tabs } from '../../components/Tabs'
import { DateSelectModal } from './DateSelectModal'
import { HeaderCarDetails } from './HeaderCarDetails'

export const CarDetails = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className=" bg-base-white h-full min-h-screen px-20 py-8 ">
      <DateSelectModal openModal={openModal} setOpenModal={setOpenModal} />
      <HeaderCarDetails brand="AUDI" model="Q3 2023" price="120,00" />
      <div className="flex justify-between w-full ">
        <CarouselComponent />
        <div className="flex flex-col max-w-[384px] ">
          <div className="flex flex-col gap-12 mb-[48px]">
            <div className="grid grid-cols-2 gap-2 ">
              <CarSpecification icon={Gauge} name="270km/h" />
              <CarSpecification icon={ArrowLineUp} name="6.8s" />
              <CarSpecification icon={Drop} name="Gasolina" />
              <CarSpecification icon={ArrowsDownUp} name="Auto" />
              <CarSpecification icon={Users} name="5 pessoas" />
              <CarSpecification icon={SteeringWheel} name="280 HP" />
            </div>
          </div>
          <Tabs />
          <div className="mt-[113px]">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-product-red w-[384px] h-20 text-white transition-colors hover:bg-product-red-dark"
            >
              <span className="font-inter font-medium text-lg">
                Escolher período do aluguel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
