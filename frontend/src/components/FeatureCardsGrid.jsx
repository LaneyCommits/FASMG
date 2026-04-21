import { Link } from 'react-router-dom'
import {
  PaintBrushIcon,
  PhotoIcon,
  CalendarDaysIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import styles from './FeatureCardsGrid.module.css'

const cards = [
  {
    id: 'classes',
    title: 'Classes &\nWorkshops',
    desc: 'Learn, grow, and create with others.',
    to: '/classes',
    accent: 'orange',
  },
  {
    id: 'gallery',
    title: 'Exhibitions &\nGallery',
    desc: 'Showcasing local talent and inspiring creativity.',
    to: '/gallery',
    accent: 'blue',
  },
  {
    id: 'events',
    title: 'Events &\nPrograms',
    desc: "From demos to trips, there's always something happening.",
    to: '/events',
    accent: 'gold',
  },
]

const ICONS = {
  classes: PaintBrushIcon,
  gallery: PhotoIcon,
  events: CalendarDaysIcon,
  membership: UserGroupIcon,
}

const accentClass = {
  orange: styles.accentOrange,
  blue: styles.accentBlue,
  gold: styles.accentGold,
  navy: styles.accentNavy,
}

export default function FeatureCardsGrid() {
  return (
    <div>
      <div className={styles.grid}>
        {cards.map((c) => {
          const Icon = ICONS[c.id] ?? PhotoIcon
          return (
            <Link key={c.id} to={c.to} className={`${styles.card} ${accentClass[c.accent] || ''}`}>
              <span className={styles.iconWrap}>
                <Icon className={styles.iconSvg} />
              </span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
