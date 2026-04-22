import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import ArtSupplySwapShopModal from './ArtSupplySwapShopModal'
import RigbyFineArtExhibitModal from './RigbyFineArtExhibitModal'
import RigbysSpringMarketModal from './RigbysSpringMarketModal'
import events from '../data/events.json'
import { isArtSupplySwapShopEvent } from '../data/artSupplySwapShop'
import { isRigbysFineArtExhibitEvent } from '../data/rigbysFineArtExhibit'
import { isRigbysSpringMarketEvent } from '../data/rigbysSpringMarket'
import { getUpcomingEvents, formatEventBadgeParts } from '../utils/getUpcomingEvents'
import styles from './FeaturesAndEvents.module.css'

function badgeClassForType(type) {
  if (type === 'meeting') return styles.badge_blue
  if (type === 'deadline') return styles.badge_gold
  if (type === 'holiday') return styles.badge_muted
  return styles.badge_orange
}

const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function getDayName(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number)
  return dayNames[new Date(y, m - 1, d).getDay()]
}

export default function FeaturesAndEvents() {
  const upcoming = useMemo(() => getUpcomingEvents(events), [])
  const [rigbyModalOpen, setRigbyModalOpen] = useState(false)
  const closeRigbyModal = useCallback(() => setRigbyModalOpen(false), [])
  const [swapShopModalOpen, setSwapShopModalOpen] = useState(false)
  const closeSwapShopModal = useCallback(() => setSwapShopModalOpen(false), [])
  const [springMarketModalOpen, setSpringMarketModalOpen] = useState(false)
  const closeSpringMarketModal = useCallback(() => setSpringMarketModalOpen(false), [])

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
            const dayName = getDayName(ev.date)
            return (
              <li key={ev.id} className={styles.eventRow}>
                <div className={`${styles.badge} ${badgeClassForType(ev.type)}`}>
                  <span className={styles.badgeMonth}>{month.toUpperCase()}</span>
                  <span className={styles.badgeDay}>{day}</span>
                  <span className={styles.badgeDayName}>{dayName}</span>
                </div>
                <div className={styles.eventBody}>
                  <div className={styles.eventTitleRow}>
                    <p className={styles.eventTitle}>{ev.title}</p>
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
                  </div>
                  <p className={styles.eventMeta}>
                    {ev.time && (
                      <span className={styles.metaItem}>
                        <svg className={styles.metaIcon} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                        </svg>
                        {ev.time}
                      </span>
                    )}
                    {ev.location && (
                      <span className={styles.metaItem}>
                        <svg className={styles.metaIcon} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.28 11.28 0 00.757.433c.12.062.216.107.281.14l.018.009.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                        </svg>
                        {ev.location}
                      </span>
                    )}
                  </p>
                </div>
                <ChevronRightIcon className={styles.chevron} />
              </li>
            )
          })}
        </ul>
      )}

      <RigbyFineArtExhibitModal open={rigbyModalOpen} onClose={closeRigbyModal} />
      <ArtSupplySwapShopModal open={swapShopModalOpen} onClose={closeSwapShopModal} />
      <RigbysSpringMarketModal open={springMarketModalOpen} onClose={closeSpringMarketModal} />
    </aside>
  )
}
