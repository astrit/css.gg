import { format, isThisYear } from "date-fns"

export const formatShortDate = (date: string) => {
  const _date = new Date(date)

  return isThisYear(_date) ? format(_date, "MMM d") : format(_date, "MMM d, y")
}
