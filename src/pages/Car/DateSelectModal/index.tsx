import { X } from '@phosphor-icons/react'
/* import { Value } from 'react-calendar/dist/cjs/shared/types' */
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
      <div className="h-20 bg-black-700 px-12 py-7 flex justify-between items-center">
        <span className="text-base-white font-archivo font-semibold text-lg">
          Escolha uma data de início e fim do aluguel
        </span>
        <X
          onClick={() => setOpenModal(false)}
          size={18}
          className="text-base-text-details cursor-pointer transition-colors hover:text-base-hover"
        />
      </div>
      <div className="flex justify-between h-[495px] p-12">
        <CalendarComponent onChangeCalendar={handleOnChangeCalendar} />
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-base-text-details font-medium text-sm font-archivo">
                DE
              </span>
              <span
                className={`text-base-title font-semibold text-3xl font-inter h-9 ${
                  !selectedRangeDate.startDate &&
                  'border-b-2 border-base-text-details'
                }`}
              >
                {selectedRangeDate.startDate}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-base-text-details font-medium text-sm font-archivo">
                ATÉ
              </span>
              <span
                className={`text-base-title font-semibold text-3xl font-inter h-9 ${
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
            className="h-16 w-64 flex justify-center items-center rounded bg-product-red  shadow-sm hover:bg-product-red-dark disabled:opacity-50 "
            onClick={() => setOpenModal(false)}
          >
            <span className="text-base-white font-medium font-archivo text-lg ">
              Confirmar
            </span>
          </button>
        </div>
      </div>
    </Modal>
  )
}
