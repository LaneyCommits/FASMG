/** Parse YYYY-MM-DD as local calendar date (avoids UTC off-by-one). */
export function parseLocalDate(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number)
  return new Date(y, m - 1, d)
}

/** e.g. "April 20, 2026" */
export function formatEventDate(isoDate) {
  const dt = parseLocalDate(isoDate)
  return dt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

/** e.g. "April 2026" for month section headings */
export function formatMonthHeading(isoDate) {
  const dt = parseLocalDate(isoDate)
  return dt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
