import { useCallback, useMemo, useState } from 'react'
import { ArrowDownTrayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Section from '../components/Section'
import ArtSupplySwapShopModal from '../components/ArtSupplySwapShopModal'
import RigbyFineArtExhibitModal from '../components/RigbyFineArtExhibitModal'
import RigbysSpringMarketModal from '../components/RigbysSpringMarketModal'
import events from '../data/events.json'
import { isArtSupplySwapShopEvent } from '../data/artSupplySwapShop'
import { isRigbysFineArtExhibitEvent } from '../data/rigbysFineArtExhibit'
import { isRigbysSpringMarketEvent } from '../data/rigbysSpringMarket'
import { formatEventDate } from '../utils/getUpcomingEvents'
import styles from './EventsPage.module.css'

const CALENDAR_PDF = `${import.meta.env.BASE_URL}fasmgcalendar.pdf`
const MEETING_REMINDER_IMG = `${import.meta.env.BASE_URL}img/meeting-reminder.png`

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'meeting', label: 'Meetings' },
  { id: 'event', label: 'Events' },
  { id: 'deadline', label: 'Deadlines' },
  { id: 'holiday', label: 'Holidays' },
]

function typeLabel(type) {
  if (type === 'meeting') return 'Meeting'
  if (type === 'deadline') return 'Deadline'
  if (type === 'holiday') return 'Holiday'
  return 'Event'
}

/** @param {{ y: number; m: number }} c — `m` is 0–11 */
function addMonths(c, delta) {
  const d = new Date(c.y, c.m + delta, 1)
  return { y: d.getFullYear(), m: d.getMonth() }
}

/** @param {string} iso */
function parseEventMonth(iso) {
  const [y, mo] = iso.split('-').map(Number)
  return { y, m: mo - 1 }
}

/** @param {object[]} evts */
function firstEventMonth(evts) {
  if (!evts.length) {
    const n = new Date()
    return { y: n.getFullYear(), m: n.getMonth() }
  }
  const sorted = [...evts].sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id)
  return parseEventMonth(sorted[0].date)
}

/** @param {{ y: number; m: number }} a @param {{ y: number; m: number }} b */
function compareMonth(a, b) {
  if (a.y !== b.y) return a.y - b.y
  return a.m - b.m
}

export default function EventsPage() {
  const [filter, setFilter] = useState('all')
  const [cursor, setCursor] = useState(() => firstEventMonth(events))
  const [rigbyModalOpen, setRigbyModalOpen] = useState(false)
  const closeRigbyModal = useCallback(() => setRigbyModalOpen(false), [])
  const [swapShopModalOpen, setSwapShopModalOpen] = useState(false)
  const closeSwapShopModal = useCallback(() => setSwapShopModalOpen(false), [])
  const [springMarketModalOpen, setSpringMarketModalOpen] = useState(false)
  const closeSpringMarketModal = useCallback(() => setSpringMarketModalOpen(false), [])

  const filteredEvents = useMemo(
    () => (filter === 'all' ? events : events.filter((e) => e.type === filter)),
    [filter],
  )

  function setFilterAndMonth(nextFilter) {
    const list = nextFilter === 'all' ? events : events.filter((e) => e.type === nextFilter)
    setFilter(nextFilter)
    setCursor(firstEventMonth(list))
  }

  const monthBounds = useMemo(() => {
    if (!filteredEvents.length) return null
    const sorted = [...filteredEvents].sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id)
    return {
      min: parseEventMonth(sorted[0].date),
      max: parseEventMonth(sorted[sorted.length - 1].date),
    }
  }, [filteredEvents])

  const monthLabel = useMemo(
    () =>
      new Date(cursor.y, cursor.m, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    [cursor],
  )

  const monthEvents = useMemo(() => {
    return filteredEvents
      .filter((e) => {
        const [y, mo] = e.date.split('-').map(Number)
        return y === cursor.y && mo - 1 === cursor.m
      })
      .sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id)
  }, [filteredEvents, cursor])

  const canPrev = monthBounds && compareMonth(cursor, monthBounds.min) > 0
  const canNext = monthBounds && compareMonth(cursor, monthBounds.max) < 0

  return (
    <>
    <Section className={styles.page}>
      <div className={styles.pageShell}>
        <div className={styles.pageTop}>
          <div className={styles.pageTopMain}>
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
          </div>
          <img
            src={MEETING_REMINDER_IMG}
            alt=""
            className={styles.meetingReminder}
            width={200}
            height={200}
            decoding="async"
            aria-hidden
          />
        </div>

      <div className={styles.filters} role="group" aria-label="Filter events by type">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`${styles.filterBtn} ${filter === f.id ? styles.filterBtnActive : ''}`}
            onClick={() => setFilterAndMonth(f.id)}
            aria-pressed={filter === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredEvents.length === 0 ? (
        <p className={styles.emptyFilter}>No events match this filter.</p>
      ) : (
        <section className={styles.monthSection} aria-labelledby="events-month-heading">
          <div className={styles.monthNav}>
            <button
              type="button"
              className={styles.monthNavBtn}
              onClick={() => setCursor((c) => addMonths(c, -1))}
              disabled={!canPrev}
              aria-label="Previous month"
            >
              <ChevronLeftIcon className={styles.monthNavIcon} aria-hidden />
            </button>
            <h2 id="events-month-heading" className={styles.monthHeading}>
              {monthLabel}
            </h2>
            <button
              type="button"
              className={styles.monthNavBtn}
              onClick={() => setCursor((c) => addMonths(c, 1))}
              disabled={!canNext}
              aria-label="Next month"
            >
              <ChevronRightIcon className={styles.monthNavIcon} aria-hidden />
            </button>
          </div>

          {monthEvents.length === 0 ? (
            <p className={styles.emptyMonth}>No events in {monthLabel} for this filter.</p>
          ) : (
            <ul className={styles.eventList}>
              {monthEvents.map((ev) => (
                <li key={ev.id} className={styles.eventCard}>
                  <div className={styles.eventTop}>
                    <h3 className={styles.eventTitle}>{ev.title}</h3>
                    <div className={styles.eventTopAside}>
                      {isRigbysFineArtExhibitEvent(ev.title) && (
                        <button
                          type="button"
                          className={styles.learnMore}
                          onClick={() => setRigbyModalOpen(true)}
                        >
                          Learn more
                        </button>
                      )}
                      {isArtSupplySwapShopEvent(ev.title) && (
                        <button
                          type="button"
                          className={styles.learnMore}
                          onClick={() => setSwapShopModalOpen(true)}
                        >
                          Learn more
                        </button>
                      )}
                      {isRigbysSpringMarketEvent(ev.title) && (
                        <button
                          type="button"
                          className={styles.learnMore}
                          onClick={() => setSpringMarketModalOpen(true)}
                        >
                          Learn more
                        </button>
                      )}
                      <span
                        className={[styles.typePill, styles[`type_${ev.type}`]].filter(Boolean).join(' ')}
                      >
                        {typeLabel(ev.type)}
                      </span>
                    </div>
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
          )}
        </section>
      )}
      </div>
    </Section>
    <RigbyFineArtExhibitModal open={rigbyModalOpen} onClose={closeRigbyModal} />
    <ArtSupplySwapShopModal open={swapShopModalOpen} onClose={closeSwapShopModal} />
    <RigbysSpringMarketModal open={springMarketModalOpen} onClose={closeSpringMarketModal} />
    </>
  )
}
