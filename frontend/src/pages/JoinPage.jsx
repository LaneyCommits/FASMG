import {
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  PaintBrushIcon,
  CalendarDaysIcon,
  PhotoIcon,
  BuildingStorefrontIcon,
  EnvelopeIcon,
  MapIcon,
  SwatchIcon,
  GlobeAltIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import Section from '../components/Section'
import styles from './JoinPage.module.css'

const BASE = import.meta.env.BASE_URL

const activities = [
  { icon: PhotoIcon, label: 'Open Art Exhibits' },
  { icon: SparklesIcon, label: 'Pop-up Art Shows' },
  { icon: AcademicCapIcon, label: 'Scholarship Programs' },
  { icon: PaintBrushIcon, label: 'Art / Educational Workshops' },
  {
    icon: SwatchIcon,
    label: 'Pencil Me In',
    desc: 'Monthly portrait drawing session',
  },
  {
    icon: CalendarDaysIcon,
    label: 'Easel Does It',
    desc: 'Painting classes for Adults & Kids',
  },
]

const benefits = [
  { icon: PhotoIcon, label: 'Member Art Exhibits' },
  { icon: StarIcon, label: 'Art programs at meetings' },
  { icon: BuildingStorefrontIcon, label: 'Hang art at local businesses' },
  { icon: EnvelopeIcon, label: 'Monthly Newsletters' },
  { icon: MapIcon, label: 'Field Trips' },
  {
    icon: PaintBrushIcon,
    label: 'Hues on First',
    desc: 'Monthly creative session',
  },
  { icon: GlobeAltIcon, label: 'Virtual Gallery' },
]

const tiers = [
  {
    name: 'Individual',
    price: '$30',
    accent: 'navy',
  },
  {
    name: 'Family',
    price: '$45',
    accent: 'orange',
    popular: true,
  },
  {
    name: 'Student / Art Teacher',
    price: '$10',
    accent: 'blue',
  },
]

export default function JoinPage() {
  return (
    <>
      {/* Hero banner — photo under gradient scrim (BASE_URL for / vs /static/) */}
      <section
        className={styles.hero}
        style={{ '--join-hero-image': `url('${BASE}img/gallery-exhibit.png')` }}
      >
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Become a Member</h1>
          <p className={styles.heroLede}>
            Membership is open, not only to artists, but to anyone with a love of art. Among our members are digital artists, photographers, as well as nationally recognized professional artists, and teachers.
          </p>
          <p className={styles.heroSub}>
            Members artwork include portrait, mural, oil, acrylic, watercolor, pen and ink, clay, calligraphy, illustration, comic, realism, surrealism, abstract, mix media, and more!
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <Section className={styles.section}>
        <h2 className={styles.sectionTitle}>Membership Tiers</h2>
        <p className={styles.sectionLede}>
          All memberships are due annually on the first of March. You may pay by Cash, Check, Money Order, or set up autopay on PayPal.
        </p>

        <div className={styles.tierGrid}>
          {tiers.map((t) => (
            <div key={t.name} className={`${styles.tierCard} ${styles[`tier_${t.accent}`]} ${t.popular ? styles.tierPopular : ''}`}>
              {t.popular && <span className={styles.popularBadge}>Most Popular</span>}
              <h3 className={styles.tierName}>{t.name}</h3>
              <div className={styles.tierPrice}>
                <span className={styles.priceAmount}>{t.price}</span>
                <span className={styles.priceUnit}>/ year</span>
              </div>
              <ul className={styles.tierPerks}>
                <li><CheckIcon className={styles.perkCheck} aria-hidden />All activities access</li>
                <li><CheckIcon className={styles.perkCheck} aria-hidden />Members-only benefits</li>
                <li><CheckIcon className={styles.perkCheck} aria-hidden />Monthly newsletters</li>
                <li><CheckIcon className={styles.perkCheck} aria-hidden />Virtual gallery listing</li>
              </ul>
              <div className={styles.tierNotice}>
                PayPal is unavailable at this time. We apologize for the inconvenience.
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Activities + Benefits side-by-side */}
      <Section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.colTitle}>
              <UserGroupIcon className={styles.colTitleIcon} aria-hidden />
              Activities
            </h2>
            <ul className={styles.featureList}>
              {activities.map((a) => (
                <li key={a.label} className={styles.featureItem}>
                  <a.icon className={styles.featureIcon} aria-hidden />
                  <div>
                    <span className={styles.featureLabel}>{a.label}</span>
                    {a.desc && <span className={styles.featureDesc}>{a.desc}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.colTitle}>
              <StarIcon className={styles.colTitleIcon} aria-hidden />
              Members Only Benefits
            </h2>
            <ul className={styles.featureList}>
              {benefits.map((b) => (
                <li key={b.label} className={styles.featureItem}>
                  <b.icon className={styles.featureIcon} aria-hidden />
                  <div>
                    <span className={styles.featureLabel}>{b.label}</span>
                    {b.desc && <span className={styles.featureDesc}>{b.desc}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
