export const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())
  return `${day}-${month}-${year}`
}

export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value)
}