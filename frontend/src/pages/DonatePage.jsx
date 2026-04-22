import {
  HeartIcon,
  GiftIcon,
  SparklesIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import Section from '../components/Section'
import styles from './DonatePage.module.css'

const BASE = import.meta.env.BASE_URL

/** Served from `frontend/public/img/sponsor/` (synced from repo `img/sponsor/`). */
const sponsorGallery = [
  {
    src: `${BASE}img/sponsor/fesponsor.avif`,
    alt: 'Fine Arts Society sponsor recognition artwork',
    frame: 'tall',
  },
  {
    src: `${BASE}img/sponsor/pfsponsor.avif`,
    alt: 'Program sponsor recognition artwork',
    frame: 'square',
  },
  {
    src: `${BASE}img/sponsor/mgcarsponor.avif`,
    alt: 'Community sponsor recognition artwork',
    frame: 'wide',
  },
]

const donationAmounts = [
  { label: '$1', value: 1 },
  { label: '$5', value: 5 },
  { label: '$10', value: 10 },
  { label: 'Other', value: null },
]

export default function DonatePage() {
  return (
    <>
      {/* Hero — member artwork + scrim (BASE_URL for / vs /static/) */}
      <section
        className={styles.hero}
        style={{ '--donate-hero-image': `url('${BASE}img/birdsmakingjoyfulnoiseAC.png')` }}
        aria-labelledby="donate-hero-heading"
      >
        <div className={styles.heroInner}>
          <HeartIcon className={styles.heroIcon} aria-hidden />
          <h1 id="donate-hero-heading" className={styles.heroTitle}>
            Help Support Our Mission
          </h1>
          <p className={styles.heroLede}>
            Our mission is to promote the Fine Arts in the Middle Georgia and surrounding areas through the celebration of our own work and that of others. We intend to have great fun together: learning more about teaching the arts while raising money to do service in the community and help to further an interest and appreciation for art.
          </p>
          <p className={styles.heroSub}>
            We will come together to hold meetings, sponsor art, demonstrations, workshops, trips, shows and exhibitions, festivals and other art related activities.
          </p>
        </div>
      </section>

      {/* Donation options */}
      <Section className={styles.section}>
        <div className={styles.donateIntro}>
          <GiftIcon className={styles.donateIntroIcon} aria-hidden />
          <div>
            <h2 className={styles.sectionTitle}>Make a Donation</h2>
            <p className={styles.sectionLede}>
              Make a one time or subscription monthly donation to help out the Fine Art Society of Middle GA.
            </p>
          </div>
        </div>

        <div className={styles.donateGrid}>
          {/* One-time */}
          <div className={styles.donateCard}>
            <div className={styles.donateCardHeader}>
              <CurrencyDollarIcon className={styles.donateCardIcon} aria-hidden />
              <h3 className={styles.donateCardTitle}>One-Time Donation</h3>
            </div>
            <p className={styles.donateCardDesc}>Any amount over $1</p>
            <div className={styles.amountGrid}>
              {donationAmounts.map((a) => (
                <span key={a.label} className={styles.amountChip}>
                  {a.label}
                </span>
              ))}
            </div>
            <p className={styles.donateNotice} role="note">
              PayPal is unavailable at this time. We apologize for the inconvenience.
            </p>
          </div>

          {/* Monthly */}
          <div className={`${styles.donateCard} ${styles.donateCardMonthly}`}>
            <div className={styles.donateCardHeader}>
              <SparklesIcon className={styles.donateCardIcon} aria-hidden />
              <h3 className={styles.donateCardTitle}>Monthly Subscription</h3>
            </div>
            <p className={styles.donateCardDesc}>Recurring donation of $1 or more each month</p>
            <div className={styles.monthlyHighlight}>
              <span className={styles.monthlyAmount}>$1+</span>
              <span className={styles.monthlyUnit}>/ month</span>
            </div>
            <p className={styles.donateNotice} role="note">
              PayPal is unavailable at this time. We apologize for the inconvenience.
            </p>
          </div>
        </div>
      </Section>

      {/* Sponsorship */}
      <Section className={styles.section}>
        <div className={styles.sponsorBlock}>
          <div className={styles.sponsorText}>
            <h2 className={styles.sectionTitle}>Art Program Sponsorship Packages</h2>
            <p className={styles.sectionLede}>
              Interested in sponsoring our programs and events? We offer sponsorship packages for local businesses and individuals who want to support the arts in Middle Georgia.
            </p>
            <p className={styles.sponsorCta}>
              Contact our President for any inquiries as a Sponsor!
            </p>
          </div>
          <div className={styles.sponsorImageWrap}>
            <div className={styles.sponsorImagePlaceholder}>
              <GiftIcon className={styles.sponsorPlaceholderIcon} aria-hidden />
              <span>Sponsorship packages info coming soon</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Thanks + sponsor mosaic — two columns on wide screens */}
      <div className={styles.sponsorSpotlightRow}>
        <section className={styles.thanksBar} aria-label="Sponsor thanks">
          <div className={styles.thanksInner}>
            <HeartIcon className={styles.thanksIcon} aria-hidden />
            <h2 className={styles.thanksText}>Thanks to Our Sponsors!!</h2>
            <ul className={styles.sponsorList}>
              {[
                'Felix Rivers',
                'Verneen Hill',
                'Dona Schaffer',
                'Memorial art at Gallery',
                'Nancy Miller',
                'Donna D.',
                'Chris Coleman',
                'Deanna Griffin',
              ].map((name) => (
                <li key={name} className={styles.sponsorName}>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.mosaicSection} aria-labelledby="sponsor-mosaic-heading">
          <div className={styles.mosaicInner}>
            <div className={styles.mosaicHeader}>
              <span className={styles.mosaicEyebrow} aria-hidden>✦</span>
              <h2 id="sponsor-mosaic-heading" className={styles.mosaicTitle}>
                Sponsor spotlights
              </h2>
            </div>
            <div className={styles.mosaicGrid}>
              {sponsorGallery.map((item) => (
                <figure
                  key={item.src}
                  className={`${styles.mosaicFrame} ${styles[`mosaic_${item.frame}`]}`}
                >
                  <div className={styles.mosaicImgShell}>
                    <img src={item.src} alt={item.alt} className={styles.mosaicImg} loading="lazy" />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
