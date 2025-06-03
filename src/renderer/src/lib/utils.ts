export const formatMoneyToMAD = (amount: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return formatted.replace('MAD', '').trim() + ' MAD';
};