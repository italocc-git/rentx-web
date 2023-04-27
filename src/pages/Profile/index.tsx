import { Camera } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { TabsProfile } from './TabsProfile'
import userImage from '../../assets/user-image.png'
import corvetteImg from '../../assets/tests/Corvete.png'
import porsheImg from '../../assets/tests/Porche.png'
import { useState } from 'react'
import { ChangesConfirmModal } from './ChangesConfirmModal'

export const Profile = () => {
  const [openChangesConfirmModal, setOpenChangesConfirmModal] = useState(false)
  return (
    <div className=" bg-base-white min-h-screen laptop:px-20 laptop:py-8 mobile:px-8 laptop:mb-0 mobile:mb-20">
      <ChangesConfirmModal
        openModal={openChangesConfirmModal}
        setOpenModal={setOpenChangesConfirmModal}
      />
      <div className="flex mobile:flex-col laptop:flex-row  justify-evenly items-start h-full mobile:gap-1 laptop:gap-16">
        <div className="flex flex-col items-center w-full ">
          <div className="relative">
            <img
              src={userImage}
              className="mobile:w-32 mobile:h-32 laptop:w-44 laptop:h-44 rounded-full"
              alt="profile-image"
            />
            <div className="absolute right-0 bottom-0 rounded-md bg-product-red h-10 w-10 flex justify-center items-center transition-colors hover:bg-product-red-dark cursor-pointer">
              <Camera size={20} weight="bold" className="text-white" />
            </div>
          </div>
          <TabsProfile setModal={setOpenChangesConfirmModal} />
        </div>
        <hr className=" mobile:w-full mobile:mt-24 laptop:w-1 laptop:mt-0 laptop:h-full bg-base-gray" />
        <div className="flex flex-col gap-6 w-full">
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
