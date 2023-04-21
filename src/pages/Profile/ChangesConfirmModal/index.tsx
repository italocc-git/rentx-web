import Modal from '../../../components/Modal'
import { CheckFat } from '@phosphor-icons/react'
import union from '../../../assets/union.png'
interface SuccessfullyUserCreationModalProps {
  openModal: boolean
  setOpenModal: (open: boolean) => void
}

export const ChangesConfirmModal = ({
  openModal,
  setOpenModal,
}: SuccessfullyUserCreationModalProps) => {
  const handleSubmitNewUser = () => {
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
          Feito!
        </h1>
        <div className="font-inter text-lg text-base-text-details">
          <span>Agora suas informações foram atualizadas. </span>
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
