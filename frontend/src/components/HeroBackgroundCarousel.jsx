import { useState, useEffect, useCallback, useMemo } from 'react'
import { heroBackgroundArt } from '../data/heroImages'
import styles from './HeroBackgroundCarousel.module.css'

/** Dwell time on each slide before sliding to the next. */
const INTERVAL_MS = 14000

function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const im = new Image()
          im.onload = () => resolve()
          im.onerror = () => resolve()
          im.src = src
        }),
    ),
  )
}

export default function HeroBackgroundCarousel({ onActivePieceChange, onIndexChange }) {
  const originalCount = heroBackgroundArt.length
  const slides = useMemo(
    () =>
      originalCount > 1
        ? [...heroBackgroundArt, heroBackgroundArt[0]]
        : heroBackgroundArt,
    [originalCount],
  )
  const slideCount = slides.length

  const [index, setIndex] = useState(0)
  const [imagesReady, setImagesReady] = useState(false)
  const [instant, setInstant] = useState(false)

  useEffect(() => {
    let cancelled = false
    const urls = [...new Set(slides.map((p) => p.imageUrl))]
    preloadImages(urls).then(() => {
      if (!cancelled) setImagesReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [slides])

  useEffect(() => {
    if (!imagesReady || originalCount <= 1) return undefined

    const id = window.setInterval(() => {
      setIndex((n) => {
        if (n < originalCount) return n + 1
        return n
      })
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [imagesReady, originalCount])

  const pieceIndex = index < originalCount ? index : 0
  const piece =
    heroBackgroundArt.length > 0
      ? (heroBackgroundArt[pieceIndex] ?? heroBackgroundArt[0])
      : undefined

  useEffect(() => {
    if (!onActivePieceChange || !piece) return
    onActivePieceChange(piece)
  }, [piece, onActivePieceChange])

  useEffect(() => {
    onIndexChange?.(pieceIndex)
  }, [pieceIndex, onIndexChange])

  const onTransitionEnd = useCallback(
    (e) => {
      if (e.propertyName !== 'transform') return
      if (instant) return
      if (originalCount <= 1) return
      if (index !== originalCount) return
      setInstant(true)
      setIndex(0)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setInstant(false))
      })
    },
    [index, instant, originalCount],
  )

  return (
    <div className={styles.root} aria-hidden>
      {imagesReady ? (
        <div className={styles.viewport}>
          <div
            className={`${styles.track} ${instant ? styles.trackInstant : ''}`}
            style={{
              width: `${slideCount * 100}%`,
              transform: `translateX(calc(-${index} * 100% / ${slideCount}))`,
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((p, i) => (
              <div
                key={`${p.imageUrl}-${i}`}
                className={styles.slide}
                style={{ flex: `0 0 calc(100% / ${slideCount})` }}
              >
                <div className={styles.slideMat}>
                  <img src={p.imageUrl} alt="" className={styles.slideImg} decoding="async" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {piece ? (
        <span className={styles.visuallyHidden} aria-live="polite">
          {piece.title} — {piece.artistName}
        </span>
      ) : null}
    </div>
  )
}
