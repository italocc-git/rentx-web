import Modal from '../../../components/Modal'
import { CheckFat } from '@phosphor-icons/react'
import union from '../../../assets/union.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/authContext'
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
  const handleSubmitNewUser = () => {
    setModal(false)
    auth.logout()
    navigate('/perfil/login')
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
          Feito!
        </h1>
        <div className="flex flex-col items-center  gap-2 px-1 font-inter mobile:text-xs laptop:text-lg">
          <span className="text-base-text-details">
            Agora suas informações foram atualizadas.
          </span>
          <span className="font-bold text-base-white">
            Atenção: Faça o login com a nova senha !
          </span>
        </div>
        <button
          onClick={handleSubmitNewUser}
          className="z-10 mt-3 w-[120px] bg-base-title font-inter font-medium text-white transition-colors hover:bg-base-black mobile:h-8 laptop:h-16"
        >
          Ok
        </button>
      </div>
    </Modal>
  )
}
