import styles from './StatsRow.module.css'

const stats = [
  {
    label: 'A Growing Community',
    tone: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    label: '25+ Art Classes',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden>
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
  },
  {
    label: '10+ Annual Events',
    tone: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden>
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
]

export default function StatsRow() {
  return (
    <ul className={styles.list}>
      {stats.map((s) => (
        <li key={s.label} className={`${styles.item} ${styles[s.tone]}`}>
          <span className={styles.circle}>{s.icon}</span>
          <span className={styles.label}>{s.label}</span>
        </li>
      ))}
    </ul>
  )
}
