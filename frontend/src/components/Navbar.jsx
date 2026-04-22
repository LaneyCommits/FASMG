import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const primaryLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/classes', label: 'Classes' },
  { to: '/events', label: 'Events' },
]

const menuLinks = [
  { to: '/boardmembers', label: 'Board Members' },
  { to: '/contact', label: 'Contact' },
]

/** Mobile “All pages” scroll list (Join + Donate are separate CTAs below). */
const mobileNavLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/classes', label: 'Classes' },
  { to: '/events', label: 'Events' },
  { to: '/boardmembers', label: 'Board Members' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header ref={headerRef} className={styles.header}>
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

        <div className={styles.navCluster}>
          <nav className={styles.navPrimary} aria-label="Primary pages">
            {primaryLinks.map(({ to, label, end }) => (
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

          <div className={styles.ctaCluster} aria-label="Support the society">
            <NavLink
              to="/membership"
              className={({ isActive }) =>
                `${styles.ctaJoin} ${isActive ? styles.ctaJoinActive : ''}`
              }
              onClick={() => setOpen(false)}
            >
              Join the Society
            </NavLink>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                `${styles.ctaDonate} ${isActive ? styles.ctaDonateActive : ''}`
              }
              onClick={() => setOpen(false)}
            >
              <span className={styles.ctaDonateIcon} aria-hidden>
                💛
              </span>
              Donate
            </NavLink>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-menu-panels"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} data-open={open} />
          </button>

          <div id="site-menu-panels" className={styles.menuPanels} data-open={open}>
            <nav className={styles.panelDesktop} aria-label="More pages">
              {menuLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.menuLinkActive : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <nav className={styles.panelMobile} aria-label="All pages">
              {mobileNavLinks.map(({ to, label, end }) => (
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
              <div className={styles.mobileCtas}>
                <NavLink
                  to="/membership"
                  className={({ isActive }) =>
                    `${styles.mobileCtaJoin} ${isActive ? styles.mobileCtaJoinActive : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  Join the Society
                </NavLink>
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    `${styles.mobileCtaDonate} ${isActive ? styles.mobileCtaDonateActive : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.ctaDonateIcon} aria-hidden>
                    💛
                  </span>
                  Donate
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
