import Modal from '../../../components/Modal'
import { CheckFat } from '@phosphor-icons/react'
import union from '../../../assets/union.png'
import { useNavigate } from 'react-router-dom'
interface SuccessfullyUserCreationModalProps {
  openModal: boolean
  setOpenModal: (open: boolean) => void
  username?: string
}

export const SuccessfullyUserCreationModal = ({
  openModal,
  setOpenModal,
  username,
}: SuccessfullyUserCreationModalProps) => {
  const navigate = useNavigate()

  const handleSubmitNewUser = () => {
    navigate('/perfil/login')
    setOpenModal(false)
  }

  return (
    <Modal openModal={openModal} setOpen={setOpenModal}>
      <div className="relative flex flex-col items-center justify-between gap-4 bg-black-300 py-7 ">
        <img
          src={union}
          className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
          alt="union-img"
        />

        <CheckFat size={56} weight="fill" className="mb-8 text-product-green" />
        <h1 className="font-archivo font-semibold text-white mobile:text-xl laptop:text-4xl ">
          Conta criada
        </h1>
        <div className="flex flex-col items-center font-inter text-base-text-details mobile:text-xs laptop:text-lg">
          <span>Agora você faz parte da RentX. </span>
          <span>Seja bem-vindo </span>
          <span>{username}</span>
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
