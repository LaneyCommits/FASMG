import styles from './HeroQuoteCard.module.css'

export default function HeroQuoteCard({ artistName, title }) {
  return (
    <aside className={styles.card} aria-label="Current hero artwork">
      <p key={artistName} className={styles.artist}>
        {artistName}
      </p>
      <p key={title} className={styles.title}>
        {title}
      </p>
    </aside>
  )
}
