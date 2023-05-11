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
      <div className="bg-black-300 py-7 flex flex-col justify-between items-center gap-4 relative ">
        <img
          src={union}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
          alt="union-img"
        />

        <CheckFat size={56} weight="fill" className="text-product-green mb-8" />
        <h1 className="font-archivo font-semibold laptop:text-4xl mobile:text-xl text-white ">
          Feito!
        </h1>
        <div className="font-inter laptop:text-lg mobile:text-xs  px-1 flex flex-col gap-2 items-center">
          <span className="text-base-text-details">
            Agora suas informações foram atualizadas.
          </span>
          <span className="font-bold text-base-white">
            Atenção: Faça o login com a nova senha !
          </span>
        </div>
        <button
          onClick={handleSubmitNewUser}
          className="laptop:h-16 mobile:h-8 w-[120px] mt-3 bg-base-title font-inter text-white font-medium transition-colors hover:bg-base-black z-10"
        >
          Ok
        </button>
      </div>
    </Modal>
  )
}
