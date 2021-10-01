module.exports = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  let newDate = `${hours}:${toTwoChar(minutes)}:${toTwoChar(seconds)} - ${monthNames[month]} ${dayToChar(day)}, ${year}`

  return newDate
}

const toTwoChar = (number) => (parseInt(number) < 10 ? '0' + number.toString() : number.toString())

const dayToChar = (number) => {
  number = parseInt(number)
  if (number == 1 || number == 21 || number == 31) return `${number}st`
  if (number == 2 || number == 22) return `${number}nd`
  if (number == 3 || number == 23) return `${number}rd`
  return `${number}th`
}
