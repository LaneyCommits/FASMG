import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import styles from './FeatureCardsGrid.module.css'

import exhibitionIcon from '@img/icons/exhibition.jpg.jpeg?url'
import drawIcon from '@img/icons/draw.jpg.jpeg?url'
import calIcon from '@img/icons/cal.jpg.jpeg?url'
import connectIcon from '@img/icons/connect.jpg.jpeg?url'

/** Homepage “Creative Community” row — matches reference: four pillars + gold links. */
const pillars = [
  {
    id: 'exhibitions',
    title: 'Exhibitions',
    desc: 'See work on the walls and meet makers.',
    to: '/gallery',
    iconSrc: exhibitionIcon,
    cta: 'View Gallery',
  },
  {
    id: 'classes',
    title: 'Classes',
    desc: 'Workshops and lessons for every level.',
    to: '/classes',
    iconSrc: drawIcon,
    cta: 'See Classes',
  },
  {
    id: 'events',
    title: 'Events',
    desc: 'Openings, demos, trips, and community nights.',
    to: '/events',
    iconSrc: calIcon,
    cta: 'View Events',
  },
  {
    id: 'involved',
    title: 'Get Involved',
    desc: 'Join the society, volunteer, and connect with neighbors who love the arts.',
    to: '/membership',
    iconSrc: connectIcon,
    cta: 'Learn How',
  },
]

export default function FeatureCardsGrid() {
  return (
    <div className={styles.wrap}>
      <div className={styles.layout}>
        <header className={styles.intro}>
          <div className={styles.introText}>
            <h2 className={styles.heading}>A Creative Community</h2>
            <p className={styles.subhead}>Gallery shows, classes, and events for people who make art</p>
            <Link to="/about" className={styles.aboutLink}>
              Learn more about us
              <ChevronRightIcon className={styles.aboutArrow} aria-hidden />
            </Link>
          </div>
        </header>

        <ul className={styles.grid}>
          {pillars.map(({ id, title, desc, to, iconSrc, cta }) => (
            <li key={id} className={styles.cell}>
              <Link to={to} className={styles.card}>
                <div className={styles.iconFrame} aria-hidden>
                  <span className={styles.iconWash} />
                  <img className={styles.iconArt} src={iconSrc} alt="" loading="lazy" decoding="async" />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <span className={styles.cardCta}>
                  {cta}
                  <ChevronRightIcon className={styles.cardArrow} aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
