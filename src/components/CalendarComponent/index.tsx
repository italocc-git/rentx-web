/* import { useState } from 'react' */
import { Calendar } from 'react-calendar'
export const CalendarComponent = () => {
  /*  const [value, onChange] = useState(new Date()) */
  return (
    <div>
      <Calendar
        onChange={(dateSelected: any) => console.log(dateSelected)}
        /* value={value} */
      />
    </div>
  )
}
