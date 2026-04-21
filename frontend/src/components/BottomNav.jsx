import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  PhotoIcon,
  CalendarDaysIcon,
  InformationCircleIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import styles from './BottomNav.module.css'

const tabs = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/gallery', label: 'Gallery', icon: PhotoIcon },
  { to: '/events', label: 'Events', icon: CalendarDaysIcon },
  { to: '/about', label: 'About', icon: InformationCircleIcon },
  { to: '/donate', label: 'Contact', icon: EnvelopeIcon },
]

export default function BottomNav() {
  return (
    <nav className={styles.bar} aria-label="Mobile navigation">
      {tabs.map((tab) => {
        const TabIcon = tab.icon
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
          >
            <TabIcon className={styles.icon} />
            <span className={styles.label}>{tab.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
