import { X } from '@phosphor-icons/react'
import { CalendarComponent } from '../../../components/CalendarComponent'
import Modal from '../../../components/Modal'
import {
  convertDateToString,
  differenceBetweenDates,
} from '../../../utils/convertDate'
import { SelectedRangeDateType } from '../types'

interface DateSelectModalProps {
  openModal: boolean
  setOpenModal: (open: boolean) => void
  selectedRangeDate: SelectedRangeDateType
  setSelectedRangeDate: (selectedRangeDate: SelectedRangeDateType) => void
  setSelectTab: (tabSelected: string) => void
}

export const DateSelectModal = ({
  openModal,
  setOpenModal,
  selectedRangeDate,
  setSelectedRangeDate,
  setSelectTab,
}: DateSelectModalProps) => {
  const handleOnChangeCalendar = (dateValue: any) => {
    const [start, end] = dateValue
    setSelectedRangeDate({
      startDate: convertDateToString(start),
      endDate: convertDateToString(end),
      quantityOfDays: Math.abs(differenceBetweenDates(start, end)),
    })
    setSelectTab('tab2')
  }
  return (
    <Modal openModal={openModal} setOpen={setOpenModal}>
      <div className="flex h-20 items-center justify-between bg-black-700 px-12 py-7">
        <span className="font-archivo text-lg font-semibold text-base-white">
          Escolha uma data de início e fim do aluguel
        </span>
        <X
          onClick={() => setOpenModal(false)}
          size={18}
          className="cursor-pointer text-base-text-details transition-colors hover:text-base-hover"
        />
      </div>
      <div className="flex justify-between p-12 mobile:h-[560px] mobile:flex-col laptop:h-[495px] laptop:flex-row">
        <CalendarComponent onChangeCalendar={handleOnChangeCalendar} />
        <div className="flex flex-col justify-between gap-4 ">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-archivo text-sm font-medium text-base-text-details">
                DE
              </span>
              <span
                className={`h-9 font-inter text-3xl font-semibold text-base-title ${
                  !selectedRangeDate.startDate &&
                  'border-b-2 border-base-text-details'
                }`}
              >
                {selectedRangeDate.startDate}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-archivo text-sm font-medium text-base-text-details">
                ATÉ
              </span>
              <span
                className={`h-9 font-inter text-3xl font-semibold text-base-title ${
                  !selectedRangeDate.endDate &&
                  'border-b-2 border-base-text-details'
                }`}
              >
                {selectedRangeDate.endDate}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="flex h-16 w-64 items-center justify-center rounded bg-product-red  shadow-sm hover:bg-product-red-dark disabled:opacity-50 "
            onClick={() => setOpenModal(false)}
          >
            <span className="font-archivo text-lg font-medium text-base-white ">
              Confirmar
            </span>
          </button>
        </div>
      </div>
    </Modal>
  )
}
