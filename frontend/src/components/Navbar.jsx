import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' },
  { to: '/classes', label: 'Classes' },
  { to: '/about', label: 'About' },
  { to: '/join', label: 'Join' },
  { to: '/donate', label: 'Donate' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.logoRing}>
            <img src={`${import.meta.env.BASE_URL}logo.avif`} alt="" className={styles.logoImg} width={48} height={48} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandTitle}>Fine Arts Society</span>
            <span className={styles.brandSub}>of Middle Georgia</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>

        <nav className={styles.nav} data-open={open}>
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
