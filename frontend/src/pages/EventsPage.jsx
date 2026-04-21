import { useMemo, useState } from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Section from '../components/Section'
import events from '../data/events.json'
import { formatEventDate, groupEventsByMonth } from '../utils/getUpcomingEvents'
import styles from './EventsPage.module.css'

const CALENDAR_PDF = `${import.meta.env.BASE_URL}fasmgcalendar.pdf`

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'meeting', label: 'Meetings' },
  { id: 'event', label: 'Exhibits & events' },
  { id: 'deadline', label: 'Deadlines' },
  { id: 'holiday', label: 'Holidays' },
]

function typeLabel(type) {
  if (type === 'meeting') return 'Meeting'
  if (type === 'deadline') return 'Deadline'
  if (type === 'holiday') return 'Holiday'
  return 'Event'
}

export default function EventsPage() {
  const [filter, setFilter] = useState('all')

  const grouped = useMemo(() => {
    const list =
      filter === 'all' ? events : events.filter((e) => e.type === filter)
    return groupEventsByMonth(list)
  }, [filter])

  return (
    <Section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Events</h1>
        <p className={styles.lede}>
          Meetings, exhibits, markets, and important dates for the Fine Arts Society of Middle Georgia.
        </p>
        <a
          href={CALENDAR_PDF}
          download="fasmg-calendar.pdf"
          className={styles.calendarDownload}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ArrowDownTrayIcon className={styles.calendarDownloadIcon} aria-hidden />
          Download calendar (PDF)
        </a>
      </header>

      <div className={styles.filters} role="group" aria-label="Filter events by type">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`${styles.filterBtn} ${filter === f.id ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      {grouped.length === 0 ? (
        <p className={styles.lede}>No events match this filter.</p>
      ) : (
        grouped.map((group) => (
          <section
            key={group.heading}
            className={styles.monthBlock}
            aria-labelledby={`month-${group.items[0]?.date ?? group.heading}`}
          >
            <h2 id={`month-${group.items[0]?.date ?? 'unknown'}`} className={styles.monthHeading}>
              {group.heading}
            </h2>
            <ul className={styles.eventList}>
              {group.items.map((ev) => (
                <li key={ev.id} className={styles.eventCard}>
                  <div className={styles.eventTop}>
                    <h3 className={styles.eventTitle}>{ev.title}</h3>
                    <span
                      className={[styles.typePill, styles[`type_${ev.type}`]].filter(Boolean).join(' ')}
                    >
                      {typeLabel(ev.type)}
                    </span>
                  </div>
                  <p className={styles.meta}>
                    <strong>{formatEventDate(ev.date)}</strong>
                    {ev.time ? ` · ${ev.time}` : ''}
                    {ev.location ? ` · ${ev.location}` : ''}
                  </p>
                  {ev.description ? <p className={styles.description}>{ev.description}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </Section>
  )
}
