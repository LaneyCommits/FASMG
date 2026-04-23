import { NavLink } from 'react-router-dom'
import styles from './BottomNav.module.css'

import paintIcon from '@img/icons/paint.jpg.jpeg?url'
import galleryIcon from '@img/icons/gallery.jpg.jpeg?url'
import calIcon from '@img/icons/cal.jpg.jpeg?url'
import arttIcon from '@img/icons/artt.jpg.jpeg?url'
import connectIcon from '@img/icons/connect.jpg.jpeg?url'

const tabs = [
  { to: '/', label: 'Home', iconSrc: paintIcon, end: true },
  { to: '/gallery', label: 'Gallery', iconSrc: galleryIcon },
  { to: '/events', label: 'Events', iconSrc: calIcon },
  { to: '/about', label: 'About', iconSrc: arttIcon },
  { to: '/contact', label: 'Contact', iconSrc: connectIcon },
]

export default function BottomNav() {
  return (
    <nav className={styles.bar} aria-label="Mobile navigation">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
        >
          <img src={tab.iconSrc} alt="" className={styles.icon} width={24} height={24} />
          <span className={styles.label}>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
