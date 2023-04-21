import { Camera } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { TabsProfile } from './TabsProfile'

import corvetteImg from '../../assets/tests/Corvete.png'
import porsheImg from '../../assets/tests/Porche.png'
import { useState } from 'react'
import { ChangesConfirmModal } from './ChangesConfirmModal'

export const Profile = () => {
  const [openChangesConfirmModal, setOpenChangesConfirmModal] = useState(false)
  return (
    <div className=" bg-base-white h-full min-h-screen px-20 py-8 ">
      <ChangesConfirmModal
        openModal={openChangesConfirmModal}
        setOpenModal={setOpenChangesConfirmModal}
      />
      <div className="flex justify-evenly items-start h-full">
        <div className="flex flex-col items-center w-full max-w-[384px]">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/50462308?v=4"
              className="w-44 h-44 rounded-full"
              alt="profile-image"
            />
            <div className="absolute right-0 bottom-0 rounded-md bg-product-red h-10 w-10 flex justify-center items-center transition-colors hover:bg-product-red-dark cursor-pointer">
              <Camera size={20} weight="bold" className="text-white" />
            </div>
          </div>
          <TabsProfile setModal={setOpenChangesConfirmModal} />
        </div>
        <hr className="w-1 h-full bg-base-gray" />
        <div className="flex flex-col gap-6">
          <h1 className="font-archivo font-semibold text-2xl text-base-title">
            Agendamentos feitos
          </h1>
          <div className="grid-rows-1 ">
            <Card
              image={corvetteImg}
              brand="CHEVROLET"
              model="Corvette Z06"
              price="1200"
              fuelType="gasoline"
              cardLayoutType="horizontal"
            />
            <Card
              image={porsheImg}
              brand="PORCHE"
              model="Panamera"
              price="340"
              fuelType="energy"
              cardLayoutType="horizontal"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
