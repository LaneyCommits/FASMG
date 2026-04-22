import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  PaintBrushIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import styles from './VirtualGalleryArtistPage.module.css'

function FacebookGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3l-.5 3H13v6.95c5.05-.5 9-4.76 9-9.95z"
      />
    </svg>
  )
}

function SocialGlyph({ href, className }) {
  if (href.startsWith('mailto:')) {
    return <EnvelopeIcon className={className} aria-hidden />
  }
  return <FacebookGlyph className={className} />
}

/**
 * @param {{
 *   pieces: Array<{ id: string; imageUrl: string; title: string; meta: string }>
 *   profile: {
 *     name: string
 *     mediumHeadline: string
 *     portraitUrl: string
 *     portraitAlt: string
 *     hometown: string
 *     studioLine: string
 *     memberLine: string
 *     bioParagraphs: string[]
 *     quote?: string
 *     socialLinks: Array<{ label: string; href: string }>
 *   }
 * }} props
 */
export default function VirtualGalleryArtistPage({ pieces, profile }) {
  const [index, setIndex] = useState(0)
  const thumbStripRef = useRef(null)
  const thumbRefs = useRef([])
  const count = pieces.length
  const piece = pieces[index] ?? pieces[0]

  useEffect(() => {
    const strip = thumbStripRef.current
    const thumb = thumbRefs.current[index]
    if (!strip || !thumb) return
    const st = strip.getBoundingClientRect()
    const th = thumb.getBoundingClientRect()
    const delta = th.left + th.width / 2 - (st.left + st.width / 2)
    strip.scrollBy({ left: delta, behavior: 'smooth' })
  }, [index])

  const go = useCallback(
    (delta) => {
      if (count === 0) return
      setIndex((i) => (i + delta + count) % count)
    },
    [count],
  )

  if (!piece || count === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.shell}>
          <Link to="/gallery" className={styles.back}>
            <ChevronLeftIcon className={styles.backIcon} aria-hidden />
            Back to Virtual Gallery
          </Link>
          <p className={styles.bio}>No artwork is available for this profile yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <Link to="/gallery" className={styles.back}>
          <ChevronLeftIcon className={styles.backIcon} aria-hidden />
          Back to Virtual Gallery
        </Link>

        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <div className={styles.portraitFrame}>
              <img
                src={profile.portraitUrl}
                alt={profile.portraitAlt}
                className={styles.portrait}
                width={400}
                height={520}
                loading="eager"
              />
            </div>

            <header className={styles.identity}>
              <h1 className={styles.name}>{profile.name}</h1>
              <p className={styles.medium}>{profile.mediumHeadline}</p>
              <div className={styles.divider} aria-hidden />
            </header>

            <section className={styles.about} aria-label="About the artist">
              {profile.bioParagraphs.map((para, i) => (
                <p key={i} className={styles.bio}>
                  {para}
                </p>
              ))}
              <ul className={styles.details}>
                <li className={styles.detailRow}>
                  <MapPinIcon className={styles.detailIcon} aria-hidden />
                  <span>{profile.hometown}</span>
                </li>
                <li className={styles.detailRow}>
                  <PaintBrushIcon className={styles.detailIcon} aria-hidden />
                  <span>{profile.studioLine}</span>
                </li>
                <li className={styles.detailRow}>
                  <CalendarDaysIcon className={styles.detailIcon} aria-hidden />
                  <span>{profile.memberLine}</span>
                </li>
              </ul>
            </section>

            <div className={styles.social} aria-label="Social and links">
              {profile.socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className={styles.socialBtn}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                >
                  <SocialGlyph href={s.href} className={styles.socialGlyph} />
                </a>
              ))}
              <Link to="/" className={styles.socialBtn} aria-label="Fine Arts Society home">
                <GlobeAltIcon className={styles.socialGlyph} aria-hidden />
              </Link>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.heroArtColumn}>
              <div className={styles.carousel}>
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  className={styles.carouselImg}
                  key={piece.id}
                />
                <button
                  type="button"
                  className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
                  onClick={() => go(-1)}
                  aria-label="Previous artwork"
                >
                  <ChevronLeftIcon className={styles.carouselBtnIcon} />
                </button>
                <button
                  type="button"
                  className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
                  onClick={() => go(1)}
                  aria-label="Next artwork"
                >
                  <ChevronRightIcon className={styles.carouselBtnIcon} />
                </button>
              </div>
              <div className={styles.carouselDots} role="tablist" aria-label="Artwork slides">
                {pieces.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${p.title}`}
                    className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>

            <section className={styles.pieceMeta} aria-label="Selected artwork">
              <h2 className={styles.pieceTitle}>{piece.title}</h2>
              <p className={styles.pieceSub}>{piece.meta}</p>
            </section>

            <div className={styles.thumbSection}>
              <div ref={thumbStripRef} className={styles.thumbStrip}>
                {pieces.map((p, i) => (
                  <button
                    key={p.id}
                    ref={(node) => {
                      thumbRefs.current[i] = node
                    }}
                    type="button"
                    className={`${styles.thumb} ${i === index ? styles.thumbActive : ''}`}
                    onClick={() => setIndex(i)}
                    aria-label={`View ${p.title}`}
                    aria-current={i === index ? 'true' : undefined}
                  >
                    <img src={p.imageUrl} alt="" className={styles.thumbImg} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            {profile.quote?.trim() ? (
              <blockquote className={styles.quote}>
                <span className={styles.quoteBadge} aria-hidden>
                  &ldquo;
                </span>
                <p className={styles.quoteText}>{profile.quote}</p>
              </blockquote>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
