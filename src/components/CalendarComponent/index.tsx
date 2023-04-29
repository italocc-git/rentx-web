import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Calendar } from 'react-calendar'
import { Value } from 'react-calendar/dist/cjs/shared/types'

interface CalendarComponentProps {
  onChangeCalendar: (value: Value) => void
}
export const CalendarComponent = ({
  onChangeCalendar,
}: CalendarComponentProps) => {
  /*  const [value, onChange] = useState(new Date()) */

  const calendarConfig = {
    selectRange: true,
    prevAriaLabel: 'prev calendar button',
    nextAriaLabel: 'next calendar button',
    prevLabel: <CaretLeft weight="bold" size={20} />,
    nextLabel: <CaretRight weight="bold" size={20} />,
    prev2Label: null,
    next2Label: null,
  }

  return (
    <div>
      <Calendar
        onChange={onChangeCalendar}
        minDate={new Date()}
        className="calendar-style-customized"
        {...calendarConfig}
      />
    </div>
  )
}
