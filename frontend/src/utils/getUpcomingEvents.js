function todayISO(now = new Date()) {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** @param {object[]} events */
export function getUpcomingEvents(events, now = new Date()) {
  const cutoff = todayISO(now)
  return [...events]
    .filter((e) => typeof e.date === 'string' && e.date >= cutoff)
    .sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id)
    .slice(0, 3)
}

/**
 * @param {string} isoDate YYYY-MM-DD
 * @param {Intl.DateTimeFormatOptions} [options]
 */
export function formatEventDate(isoDate, options) {
  const [y, m, d] = isoDate.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return dt.toLocaleDateString('en-US', options ?? { month: 'long', day: 'numeric', year: 'numeric' })
}

/** Month label + year for grouping, e.g. "April 2026" */
export function formatEventMonthHeading(isoDate) {
  return formatEventDate(isoDate, { month: 'long', year: 'numeric' })
}

/** Short month + day for badges */
export function formatEventBadgeParts(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return {
    month: dt.toLocaleDateString('en-US', { month: 'short' }),
    day: String(d),
  }
}

/** @param {object[]} events */
export function groupEventsByMonth(events) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id)
  /** @type {{ heading: string; items: object[] }[]} */
  const groups = []
  for (const e of sorted) {
    const heading = formatEventMonthHeading(e.date)
    const last = groups[groups.length - 1]
    if (!last || last.heading !== heading) {
      groups.push({ heading, items: [e] })
    } else {
      last.items.push(e)
    }
  }
  return groups
}
