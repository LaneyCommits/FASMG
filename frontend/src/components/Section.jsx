import styles from './Section.module.css'

export default function Section({ children, className = '', id, tight }) {
  return (
    <section id={id} className={`${styles.section} ${tight ? styles.tight : ''} ${className}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
