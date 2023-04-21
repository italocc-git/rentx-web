import { CalendarComponent } from '../../components/CalendarComponent'
import {
  convertDateToString,
  differenceBetweenDates,
} from '../../utils/convertDate'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
type SelectedRangeDateType = {
  startDate: string
  endDate: string
  quantityOfDays: number
}
export const FilteredCarsByDate = () => {
  const navigate = useNavigate()
  const [selectedRangeDate, setSelectedRangeDate] =
    useState<SelectedRangeDateType>({} as SelectedRangeDateType)
  const handleOnChangeCalendar = (dateValue: any) => {
    const [start, end] = dateValue
    setSelectedRangeDate({
      startDate: convertDateToString(start),
      endDate: convertDateToString(end),
      quantityOfDays: Math.abs(differenceBetweenDates(start, end)),
    })
  }
  const handleSubmitDates = () => {
    navigate('/filtered-cars-list', {
      state: {
        dateSelected: selectedRangeDate,
      },
    })
  }

  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-base-title font-semibold font-archivo text-4xl">
          Escolha uma data de início e fim do aluguel
        </h1>
        <div className="flex justify-between h-[495px] p-12 min-w-[844px]">
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
              onClick={handleSubmitDates}
              className="h-16 w-64 flex justify-center items-center rounded bg-product-red  shadow-sm hover:bg-product-red-dark disabled:opacity-50 "
            >
              <span className="text-base-white font-medium font-archivo text-lg ">
                Confirmar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
