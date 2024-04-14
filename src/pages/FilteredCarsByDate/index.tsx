import { CalendarComponent } from '../../components/CalendarComponent'
import {
  convertDateToString,
  differenceBetweenDates,
} from '../../utils/convertDate'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type SelectedRangeDateType = {
  startDate: string
  endDate: string
  quantityOfDays: number
}
export const FilteredCarsByDate = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const navigate = useNavigate()
  const [selectedRangeDate, setSelectedRangeDate] =
    useState<SelectedRangeDateType>({} as SelectedRangeDateType)
  const handleOnChangeCalendar = (dateValue: any) => {
    const [start, end] = dateValue
    setSelectedRangeDate({
      startDate: convertDateToString(start, language),
      endDate: convertDateToString(end, language),
      quantityOfDays: Math.abs(differenceBetweenDates(start, end)),
    })
  }
  const handleSubmitDates = () => {
    navigate('/filter/cars-list', {
      state: {
        dateSelected: selectedRangeDate,
      },
    })
  }

  return (
    <div className="min-h-screen bg-base-main py-8 mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20">
      <div className="flex w-full flex-col items-center">
        <h1 className="font-archivo font-semibold text-base-title mobile:text-lg laptop:text-4xl">
          {t('pages.filterByDate.title')}
        </h1>
        <div className="flex h-[495px] max-w-[844px] justify-between gap-5  p-12  mobile:flex-col desktop:flex-row">
          <CalendarComponent onChangeCalendar={handleOnChangeCalendar} />
          <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-archivo text-sm font-medium text-base-text-details">
                  {t('pages.filterByDate.dateContent.from')}
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
                  {t('pages.filterByDate.dateContent.to')}
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
            <div className="w-full">
              <button
                type="button"
                onClick={handleSubmitDates}
                className="min-w-64 min-h-16 flex items-center justify-center rounded bg-product-red shadow-sm  hover:bg-product-red-dark disabled:opacity-50 mobile:w-full "
              >
                <span className="font-archivo text-lg font-medium text-base-white ">
                  {t('pages.filterByDate.buttonText')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
