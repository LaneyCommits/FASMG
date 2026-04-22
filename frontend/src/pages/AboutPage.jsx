import Section from '../components/Section'
import styles from './AboutPage.module.css'

const BASE = import.meta.env.BASE_URL

const missionCopy =
  'Our mission is to promote the fine arts in the Middle Georgia area through the celebration of our own work and that of others. We intend to have great fun together: learning more about teaching the arts while raising money to do service in the community and help to further an interest and appreciation for art. We will come together to hold meetings, sponsor art, demonstrations, workshops, trips, shows and exhibitions, festivals and other art related activities.'

const historyCopy =
  'The Fine Art Society (FAS) is a Non-Profit Organization founded in January of 2000. FAS is dedicated to fostering and supporting an interest in the Fine Arts through workshops, programs, and art shows. Artist members help bring the enjoyment of art to others in the community and middle GA area.'

export default function AboutPage() {
  return (
    <>
      <section
        className={styles.hero}
        style={{ '--about-hero-image': `url('${BASE}img/hero-2.avif')` }}
        aria-labelledby="about-hero-heading"
      >
        <div className={styles.heroInner}>
          <h1 id="about-hero-heading" className={styles.heroTitle}>
            About
          </h1>
        </div>
      </section>

      <Section className={styles.section}>
        <div className={styles.content}>
          <article className={styles.block}>
            <div className={`${styles.blockMedia} ${styles.blockMediaMission}`}>
              <div className={styles.mediaWrap}>
                <img
                  className={styles.mediaImage}
                  src={`${BASE}img/EventPics/PaintingPumpkins.jpg`}
                  alt="Fine Art Society members painting pumpkins at a community event."
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.textColumn}>
                <h2 className={styles.blockTitle}>Mission</h2>
                <p className={styles.body}>{missionCopy}</p>
              </div>
            </div>
          </article>
          <article className={styles.block}>
            <div className={`${styles.blockMedia} ${styles.blockMediaHistory}`}>
              <div className={styles.textColumn}>
                <h2 className={styles.blockTitle}>History</h2>
                <p className={styles.body}>{historyCopy}</p>
              </div>
              <div className={styles.mediaWrap}>
                <img
                  className={styles.mediaImage}
                  src={`${BASE}img/EventPics/CarPaintEvent.jpg`}
                  alt="Car painting workshop outdoors with Fine Art Society participants."
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </article>
        </div>
      </Section>
    </>
  )
}
