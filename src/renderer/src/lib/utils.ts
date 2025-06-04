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
    return "danger"
  }
}

export const formatQuantity =(quantity: number): string=> {
  const abs = Math.abs(quantity)

  if (abs >= 1_000_000_000_000) return `${(quantity / 1_000_000_000_000).toFixed(1)} T`
  if (abs >= 1_000_000_000) return `${(quantity / 1_000_000_000).toFixed(1)} Md`
  if (abs >= 1_000_000) return `${(quantity / 1_000_000).toFixed(1)} M`
  if (abs >= 1_000) return `${(quantity / 1_000).toFixed(1)} K`

  return `${quantity}`
}
export const formatWithSeparators=(value: number): string =>{
  return value.toLocaleString('en-US', {
    maximumFractionDigits: 0,
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
