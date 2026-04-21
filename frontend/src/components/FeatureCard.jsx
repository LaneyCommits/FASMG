import { Link } from 'react-router-dom'
import {
  PaintBrushIcon,
  PhotoIcon,
  CalendarDaysIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import styles from './FeatureCard.module.css'

const accentClass = {
  orange: styles.accentOrange,
  blue: styles.accentBlue,
  gold: styles.accentGold,
  navy: styles.accentNavy,
}

const ICONS = {
  classes: PaintBrushIcon,
  gallery: PhotoIcon,
  events: CalendarDaysIcon,
  membership: UserGroupIcon,
}

export default function FeatureCard({ id, title, description, imageUrl, to, accent }) {
  const Icon = ICONS[id] ?? PhotoIcon

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={imageUrl} alt="" className={styles.image} loading="lazy" />
        <span className={`${styles.iconBadge} ${accentClass[accent] || ''}`} aria-hidden="true">
          <Icon className={styles.iconSvg} />
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <Link to={to} className={styles.more}>
          Learn More →
        </Link>
      </div>
    </article>
  )
}
