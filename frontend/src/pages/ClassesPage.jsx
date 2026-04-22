import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import Section from '../components/Section'
import styles from './ClassesPage.module.css'

const BASE = import.meta.env.BASE_URL

const classes = [
  {
    title: 'Paintings with Oil or Acrylic',
    instructor: 'Allan Carey',
    schedule: 'Saturday 12–2 pm & Wednesday 12–2 pm',
    price: '$25 — supply list provided',
    phone: '478-213-2230',
    email: 'allanbcarey@gmail.com',
    accent: 'orange',
  },
  {
    title: 'Art at the Senior Center',
    instructor: 'Leslie Hoops-Wallace',
    schedule: 'Thursday 1:00–3:00 pm',
    price: '$20 for lessons/help with painting. Free to come paint and chat. Bring your own supplies.',
    note: 'Must be over 50 years old.',
    phone: '478-396-9198',
    email: 'unicornsquest@hotmail.com',
    accent: 'blue',
  },
]

export default function ClassesPage() {
  return (
    <>
      <section
        className={styles.hero}
        style={{ '--classes-hero-bg': `url('${BASE}img/artclass.jpg')` }}
        aria-labelledby="classes-hero-heading"
      >
        <div className={styles.heroInner}>
          <h1 id="classes-hero-heading" className={styles.heroTitle}>
            Art Classes
          </h1>
          <p className={styles.heroLede}>
            Call the instructors for more information and to sign-up for the class.
          </p>
          <p className={styles.heroSubLede}>
            All classes are held at different locations. See Instructor for details.
          </p>
        </div>
      </section>

      <Section className={styles.page}>
        <div className={styles.grid}>
          {classes.map((c) => (
            <article key={c.title} className={`${styles.card} ${styles[`accent_${c.accent}`]}`}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{c.title}</h2>
                <span className={styles.instructorPill}>{c.instructor}</span>
              </div>

              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <ClockIcon className={styles.detailIcon} aria-hidden />
                  <span>{c.schedule}</span>
                </div>
                <div className={styles.detailRow}>
                  <CurrencyDollarIcon className={styles.detailIcon} aria-hidden />
                  <span>{c.price}</span>
                </div>
                {c.note && (
                  <div className={styles.detailRow}>
                    <MapPinIcon className={styles.detailIcon} aria-hidden />
                    <span>{c.note}</span>
                  </div>
                )}
              </div>

              <div className={styles.contact}>
                <span className={styles.contactLabel}>Contact</span>
                <a href={`tel:${c.phone.replace(/-/g, '')}`} className={styles.contactLink}>
                  <PhoneIcon className={styles.contactIcon} aria-hidden />
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className={styles.contactLink}>
                  <EnvelopeIcon className={styles.contactIcon} aria-hidden />
                  {c.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
