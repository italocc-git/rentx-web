import { Fragment, ReactNode, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProps {
  openModal: boolean
  setOpen: (openModal: boolean) => void
  children?: ReactNode
}

export default function Modal({ openModal, setOpen, children }: ModalProps) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-700 bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 mobile:items-center mobile:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 mobile:translate-y-0 mobile:scale-95"
              enterTo="opacity-100 translate-y-0 mobile:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 mobile:scale-100"
              leaveTo="opacity-0 translate-y-4 mobile:translate-y-0 mobile:scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mobile:my-8 mobile:w-full tablet:w-1/2">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
