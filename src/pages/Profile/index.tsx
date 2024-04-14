import { Camera } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { TabsProfile } from './TabsProfile'
import userImage from '../../assets/user-image.png'
import corvetteImg from '../../assets/tests/Corvete.png'
import porsheImg from '../../assets/tests/Porche.png'
import { ChangeEvent, useState } from 'react'
import { ChangesConfirmModal } from './ChangesConfirmModal'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/authContext'
import DotLoader from 'react-spinners/DotLoader'
import { uploadUserAvatar } from '../../lib/firebase/services/storage'
import { updateUserAvatarInFirebase } from '../../lib/firebase/services/crud'
import { useTranslation } from 'react-i18next'
export const Profile = () => {
  const [openChangesConfirmModal, setOpenChangesConfirmModal] = useState(false)

  const { userData, updateUser, setIsLoading, isLoading } = useAuth()

  const { t } = useTranslation()
  const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && userData) {
      const { user } = userData

      if (files.length > 0) {
        setIsLoading(true)

        const userUpdatedData = await uploadUserAvatar(user, files)
        updateUser(userUpdatedData)

        updateUserAvatarInFirebase(userUpdatedData)

        toast.success('Avatar alterado com sucesso')
        setIsLoading(false)
      }
    }
  }

  return (
    <div className=" min-h-screen bg-base-white mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20 laptop:py-8">
      <ChangesConfirmModal
        openModal={openChangesConfirmModal}
        setModal={setOpenChangesConfirmModal}
      />
      <div className="flex h-full items-start  justify-evenly mobile:flex-col mobile:gap-1 laptop:flex-row laptop:gap-16">
        <div className="flex w-full flex-col items-center ">
          <div className="relative flex items-center justify-center mobile:h-32 mobile:w-32 laptop:h-44 laptop:w-44">
            {isLoading ? (
              <DotLoader
                color="#dc1637"
                loading={isLoading}
                size={50}
                aria-label="Loading Image Spinner"
              />
            ) : (
              <img
                src={
                  userData?.user.avatarUrl ? userData.user.avatarUrl : userImage
                }
                className="h-full w-full rounded-full"
                alt=""
              />
            )}
            <label
              htmlFor="avatarInput"
              className="absolute right-0 bottom-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-product-red transition-colors hover:bg-product-red-dark"
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
        <hr className=" bg-base-gray mobile:mt-24 mobile:w-full laptop:mt-0 laptop:h-full laptop:w-1" />
        <div className="flex w-full flex-col gap-6">
          <h1 className="font-archivo text-2xl font-semibold text-base-title">
            {t('pages.profileContent.account.scheduleSection.title')}
          </h1>
          <div className="grid-rows-1 ">
            <Card
              image={corvetteImg}
              brand="CHEVROLET"
              model="Corvette Z06"
              price="1200"
              fuelType="gasoline"
              cardLayoutType="horizontal"
              transmission="automatic"
            />
            <Card
              image={porsheImg}
              brand="PORCHE"
              model="Panamera"
              price="340"
              fuelType="energy"
              cardLayoutType="horizontal"
              transmission="automatic"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
