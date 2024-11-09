export default function dateFormatted(date) {
  const formatter = new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
  return formatter.format(date)
}
