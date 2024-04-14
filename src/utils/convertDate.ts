import dayjs from 'dayjs'

export function convertDateToString(date: Date, locale: string): string {
  const formatText = locale === 'pt' ? 'DD [de] MMMM' : 'MMMM DD[th]'
  return dayjs(date).format(formatText)
}

export function differenceBetweenDates(
  initialDate: Date,
  finalDate: Date,
): number {
  return dayjs(initialDate).diff(finalDate, 'day')
}
