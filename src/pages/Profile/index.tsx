import { Camera } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { TabsProfile } from './TabsProfile'
import userImage from '../../assets/user-image.png'
import corvetteImg from '../../assets/tests/Corvete.png'
import porsheImg from '../../assets/tests/Porche.png'
import { ChangeEvent, useState } from 'react'
import { ChangesConfirmModal } from './ChangesConfirmModal'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/authContext'
import DotLoader from 'react-spinners/DotLoader'
export const Profile = () => {
  const [openChangesConfirmModal, setOpenChangesConfirmModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { userData, updateUser } = useAuth()

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const data = new FormData()
      data.append('avatar', files[0])
      if (files.length > 0) {
        setIsLoading(true)
        api
          .patch('/users/avatar', data)
          .then((response) => {
            updateUser(response.data)
            toast.success('Avatar alterado com sucesso')
          })
          .finally(() => setIsLoading(false))
      }
    }
  }

  return (
    <div className=" bg-base-white min-h-screen laptop:px-20 laptop:py-8 mobile:px-8 laptop:mb-0 mobile:mb-20">
      <ChangesConfirmModal
        openModal={openChangesConfirmModal}
        setModal={setOpenChangesConfirmModal}
      />
      <div className="flex mobile:flex-col laptop:flex-row  justify-evenly items-start h-full mobile:gap-1 laptop:gap-16">
        <div className="flex flex-col items-center w-full ">
          <div className="relative mobile:w-32 mobile:h-32 laptop:w-44 laptop:h-44 flex items-center justify-center">
            {isLoading ? (
              <DotLoader
                color="#dc1637"
                loading={isLoading}
                size={50}
                aria-label="Loading Image Spinner"
              />
            ) : (
              <img
                src={userData?.user ? userData.user.avatar_url : userImage}
                className="rounded-full w-full h-full"
                alt="profile-image"
              />
            )}
            <label
              htmlFor="avatarInput"
              className="absolute right-0 bottom-0 rounded-md bg-product-red h-10 w-10 flex justify-center items-center transition-colors hover:bg-product-red-dark cursor-pointer"
            >
              <Camera size={20} weight="bold" className="text-white" />
              <input
                id="avatarInput"
                type="file"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
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
