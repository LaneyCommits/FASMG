import styles from './Section.module.css'

export default function Section({ children, className = '', id, tight, style }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tight ? styles.tight : ''} ${className}`.trim()}
      style={style}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
