import axios from 'axios'
export const app_uri = import.meta.env.VITE_API_URI

export const req = axios.create({ baseURL: app_uri })

export const formatMoneyToMAD = (amount: number) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)

  return formatted.replace('MAD', '').trim() + ' MAD'
}

export const getQuantityColor = (quantity: number) => {
  if (quantity > 20) {
    return 'success'
  } else if (quantity > 0) {
    return 'warning'
  } else {
    return 'danger'
  }
}

export const formatQuantity = (quantity: number): string => {
  const abs = Math.abs(quantity)

  if (abs >= 1_000_000_000_000) return `${Math.floor(quantity / 1_000_000_000_000)} T`
  if (abs >= 1_000_000_000) return `${Math.floor(quantity / 1_000_000_000)} Md`
  if (abs >= 1_000_000) return `${Math.floor(quantity / 1_000_000)} M`
  if (abs >= 1_000) return `${Math.floor(quantity / 1_000)} K`

  return `${quantity}`
}

export const formatWithSeparators = (value: number): string => {
  return value.toLocaleString('en-US', {
    maximumFractionDigits: 0
  })
}

export const formatShortMoney = (amount: number): string => {
  const abs = Math.abs(amount)
  let value = amount
  let suffix = ''

  if (abs >= 1_000_000_000_000) {
    value = amount / 1_000_000_000_000
    suffix = 'T'
  } else if (abs >= 1_000_000_000) {
    value = amount / 1_000_000_000
    suffix = 'Md'
  } else if (abs >= 1_000_000) {
    value = amount / 1_000_000
    suffix = 'M'
  } else if (abs >= 1_000) {
    value = amount / 1_000
    suffix = 'K'
  } else {
    // For smaller numbers, no suffix
    return amount.toString()
  }

  // Take only the first digit of the integer part
  const firstDigit = Math.floor(value).toString()

  return firstDigit + ' ' + suffix
}

export const getFullTime = (dateInput: Date) => {
  const date = new Date(dateInput)
  return `${date.getHours()}:${date.getMinutes()}`
}

export const getFullDate = (dateInput: Date) => {
  const date = new Date(dateInput)
  const day = String(date.getDate()).padStart(2, '0')       
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())
  return `${day}/${month}/${year}`
}

export const getTimeDifference = (dateInput: Date): string => {
  const now = new Date()
  const diffMs = now.getTime() - dateInput.getTime()
  const diffS = Math.floor(diffMs / 1000)
  const diffM = Math.floor(diffMs / (1000 * 60))
  const diffH = Math.floor(diffMs / (1000 * 60 * 60))
  const diffD = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffMo = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30))

  if (Math.abs(diffS) < 60) return `${Math.abs(diffS)} s`
  if (Math.abs(diffM) < 60) return `${Math.abs(diffM)} m`
  if (Math.abs(diffH) < 24) return `${Math.abs(diffH)} h`
  if (Math.abs(diffD) < 30) return `${Math.abs(diffD)} j`
  return `${Math.abs(diffMo)} mois`
}
