import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.name}>Fine Arts Society of Middle GA</p>
          <p className={styles.tag}>All Artists Welcome</p>
        </div>

        <div className={styles.contact}>
          <p className={styles.contactMeta}>
            <span className={styles.label}>Contact</span>
            <span className={styles.sep} aria-hidden>
              ·
            </span>
            <span>Middle Georgia</span>
          </p>
          <a href="mailto:fasmidga@gmail.com" className={styles.email}>
            fasmidga@gmail.com
          </a>
        </div>

        <div className={styles.social}>
          <span className={styles.socialLabel}>Join us on Facebook</span>
          <a
            href="https://www.facebook.com/groups/35360981908/"
            className={styles.socialLink}
            aria-label="Facebook group"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 24 24" className={styles.socialIcon}>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3l-.5 3H13v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
          </a>
        </div>

        <p className={styles.copy}>© {new Date().getFullYear()} Fine Arts Society of Middle GA. All rights reserved.</p>
      </div>
    </footer>
  )
}
