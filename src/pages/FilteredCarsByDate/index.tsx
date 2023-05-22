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
    navigate('/filtro/listagem-de-carros', {
      state: {
        dateSelected: selectedRangeDate,
      },
    })
  }

  return (
    <div className="min-h-screen bg-base-main py-8 mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20">
      <div className="flex flex-col items-center mobile:w-[300px] tablet:w-full">
        <h1 className="font-archivo font-semibold text-base-title mobile:text-lg laptop:text-4xl">
          Escolha uma data de início e fim do aluguel
        </h1>
        <div className="flex h-[495px] justify-between gap-5 p-12 mobile:max-w-[315px] mobile:flex-col tablet:max-w-[515px] laptop:max-w-[844px] desktop:flex-row">
          <CalendarComponent onChangeCalendar={handleOnChangeCalendar} />
          <div className="flex flex-col justify-between ">
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

              <div className="mb-4 flex flex-col gap-2">
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
              onClick={handleSubmitDates}
              className="flex h-16 items-center justify-center rounded bg-product-red shadow-sm hover:bg-product-red-dark  disabled:opacity-50 mobile:w-48 laptop:w-64 "
            >
              <span className="font-archivo text-lg font-medium text-base-white ">
                Confirmar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
