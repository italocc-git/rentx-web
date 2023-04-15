import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'

export function convertDateToString(date: Date): string {
  return dayjs(date).locale(ptbr).format('DD [de] MMMM')
}
