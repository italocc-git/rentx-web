/* import { useState } from 'react' */
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Calendar } from 'react-calendar'
/* import './calendarStyle.css' */
export const CalendarComponent = () => {
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
        onChange={(dateSelected: any) => console.log(dateSelected)}
        className="calendar-style-customized"
        {...calendarConfig}
        /* value={value} */
      />
    </div>
  )
}
