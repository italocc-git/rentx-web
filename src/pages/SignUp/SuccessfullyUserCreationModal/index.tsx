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
    navigate('/sign-in')
    setOpenModal(false)
  }

  return (
    <Modal openModal={openModal} setOpen={setOpenModal}>
      <div className="bg-black-300 py-7 flex flex-col justify-between items-center gap-4 relative ">
        <img
          src={union}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
          alt="union-img"
        />

        <CheckFat size={56} weight="fill" className="text-product-green mb-8" />
        <h1 className="font-archivo font-semibold text-4xl text-white ">
          Conta criada
        </h1>
        <div className="font-inter text-lg text-base-text-details flex flex-col items-center">
          <span>Agora você faz parte da RentX. </span>
          <span>Seja bem-vindo {username}</span>
        </div>
        <button
          onClick={handleSubmitNewUser}
          className="h-16 w-[120px] mt-3 bg-base-title font-inter text-white font-medium transition-colors hover:bg-base-black z-10"
        >
          Ok
        </button>
      </div>
    </Modal>
  )
}
