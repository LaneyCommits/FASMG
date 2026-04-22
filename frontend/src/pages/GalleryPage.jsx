import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Section from '../components/Section'
import Button from '../components/Button'
import GalleryInfoModal from '../components/GalleryInfoModal'
import { virtualGalleryArtists, galleryMediumFilters } from '../data/virtualGalleryArtists'
import styles from './GalleryPage.module.css'

export default function GalleryPage() {
  const [infoOpen, setInfoOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [medium, setMedium] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return virtualGalleryArtists.filter((a) => {
      if (medium !== 'all' && a.mediumFilter !== medium) return false
      if (!q) return true
      const hay = `${a.name} ${a.mediumLabel} ${a.bio}`.toLowerCase()
      return hay.includes(q)
    })
  }, [query, medium])

  return (
    <>
      <Section className={styles.directory}>
        <header className={styles.masthead}>
          <h1 className={styles.pageTitle}>Virtual Gallery</h1>
          <p className={styles.pageSubtitle}>
            Discover and explore the work of our talented members and local artists.
          </p>
        </header>

        <div className={styles.toolbar}>
          <label className={styles.searchWrap} htmlFor="gallery-artist-search">
            <span className={styles.visuallyHidden}>Search artists</span>
            <MagnifyingGlassIcon className={styles.searchIcon} aria-hidden />
            <input
              id="gallery-artist-search"
              type="search"
              className={styles.searchInput}
              placeholder="Search artists…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </label>
          <label className={styles.visuallyHidden} htmlFor="gallery-medium-filter">
            Filter by medium
          </label>
          <select
            id="gallery-medium-filter"
            className={styles.filterSelect}
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          >
            {galleryMediumFilters.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <ul className={styles.grid}>
          {filtered.length === 0 ? (
            <li className={styles.emptyState}>No artists match your search. Try another name or medium.</li>
          ) : (
            filtered.map((artist) => (
              <li key={artist.id}>
                <article className={styles.artistCard}>
                  <div className={styles.artWrap}>
                    {artist.featured ? (
                      <span className={styles.featuredBadge}>Featured</span>
                    ) : null}
                    <img src={artist.artworkUrl} alt={artist.artworkAlt} className={styles.artImg} loading="lazy" />
                    <img
                      src={artist.portraitUrl}
                      alt={artist.portraitAlt}
                      className={styles.avatar}
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.artistName}>{artist.name}</h3>
                    <p className={styles.medium}>{artist.mediumLabel}</p>
                    <p className={styles.bio}>{artist.bio}</p>
                    <Link to={artist.profileTo} className={styles.viewProfile}>
                      View profile
                      <ChevronRightIcon className={styles.viewArrow} aria-hidden />
                    </Link>
                  </div>
                </article>
              </li>
            ))
          )}
        </ul>

        <div className={styles.footerBand}>
          <button
            type="button"
            className={styles.memberCta}
            onClick={() => setInfoOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={infoOpen}
            aria-controls={infoOpen ? 'virtual-gallery-member-dialog' : undefined}
          >
            How do I put my art in the Virtual Gallery?
          </button>

          <div className={styles.exploreBlock}>
            <h3 className={styles.exploreTitle}>Start exploring</h3>
            <p className={styles.prose}>
              See more rotating artwork on the home page, or learn about membership and exhibits.
            </p>
            <div className={styles.exploreActions}>
              <Button as={Link} to="/" variant="primary">
                Home highlights
              </Button>
              <Button as={Link} to="/membership" variant="secondary">
                Join the Society
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <GalleryInfoModal open={infoOpen} onClose={() => setInfoOpen(false)} />
    </>
  )
}
