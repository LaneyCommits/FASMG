import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import events from '../data/events.json'
import { getUpcomingEvents, formatEventDate, formatEventBadgeParts } from '../utils/getUpcomingEvents'
import styles from './FeaturesAndEvents.module.css'

function badgeClassForType(type) {
  if (type === 'meeting') return styles.badge_blue
  if (type === 'deadline') return styles.badge_gold
  if (type === 'holiday') return styles.badge_muted
  return styles.badge_orange
}

export default function FeaturesAndEvents() {
  const upcoming = useMemo(() => getUpcomingEvents(events), [])

  return (
    <aside className={styles.events}>
      <div className={styles.eventsHeader}>
        <h2 className={styles.eventsTitle}>Upcoming Events</h2>
        <Link to="/events" className={styles.viewAll}>
          View All Events →
        </Link>
      </div>
      {upcoming.length === 0 ? (
        <p className={styles.empty}>No upcoming events on the calendar. Check back soon.</p>
      ) : (
        <ul className={styles.eventList}>
          {upcoming.map((ev) => {
            const { month, day } = formatEventBadgeParts(ev.date)
            return (
              <li key={ev.id} className={styles.eventRow}>
                <div className={`${styles.badge} ${badgeClassForType(ev.type)}`}>
                  <span className={styles.badgeMonth}>{month}</span>
                  <span className={styles.badgeDay}>{day}</span>
                </div>
                <div className={styles.eventBody}>
                  <p className={styles.eventTitle}>{ev.title}</p>
                  <p className={styles.eventDate}>{formatEventDate(ev.date)}</p>
                  <p className={styles.eventDetail}>
                    {[ev.time, ev.location].filter(Boolean).join(' · ') || 'Details TBD'}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      )}
      <Button as={Link} to="/events" variant="secondary" className={styles.viewAllBtn}>
        View All Events
      </Button>
    </aside>
  )
}
