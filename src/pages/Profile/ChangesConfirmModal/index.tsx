import Modal from '../../../components/Modal'
import { CheckFat } from '@phosphor-icons/react'
import union from '../../../assets/union.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/authContext'
import { useTranslation } from 'react-i18next'
interface SuccessfullyUserCreationModalProps {
  openModal: boolean
  setModal: (open: boolean) => void
}

export const ChangesConfirmModal = ({
  openModal,
  setModal,
}: SuccessfullyUserCreationModalProps) => {
  const navigate = useNavigate()
  const auth = useAuth()
  const { t } = useTranslation()
  const handleSubmitNewUser = () => {
    setModal(false)
    auth.logout()
    navigate('/profile/sign-in')
  }

  return (
    <Modal openModal={openModal} setOpen={setModal}>
      <div className="relative flex flex-col items-center justify-between gap-4 bg-black-300 py-7 ">
        <img
          src={union}
          className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
          alt="union-img"
        />

        <CheckFat size={56} weight="fill" className="mb-8 text-product-green" />
        <h1 className="font-archivo font-semibold text-white mobile:text-xl laptop:text-4xl ">
          {t(
            'pages.profileContent.account.profileSection.passwordInformation.modal.title',
          )}
        </h1>
        <div className="flex flex-col items-center  gap-2 px-1 font-inter mobile:text-xs laptop:text-lg">
          <span className="text-base-text-details">
            {t(
              'pages.profileContent.account.profileSection.passwordInformation.modal.description1',
            )}
          </span>
          <span className="font-bold text-base-white">
            {t(
              'pages.profileContent.account.profileSection.passwordInformation.modal.description2',
            )}
          </span>
        </div>
        <button
          onClick={handleSubmitNewUser}
          className="z-10 mt-3 w-[120px] bg-base-title font-inter font-medium text-white transition-colors hover:bg-base-black mobile:h-8 laptop:h-16"
        >
          {t(
            'pages.profileContent.account.profileSection.passwordInformation.modal.confirmationText',
          )}
        </button>
      </div>
    </Modal>
  )
}
