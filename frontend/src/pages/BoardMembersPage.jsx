import { useCallback, useEffect, useState } from 'react'
import {
  ChevronRightIcon,
  MapPinIcon,
  PaintBrushIcon,
  TrophyIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { executiveBoard, membersAtLarge } from '../data/boardMembers'
import styles from './BoardMembersPage.module.css'

const boardHeroBg = `url('${import.meta.env.BASE_URL}img/artclass.jpg')`

function initialsFromName(fullName) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function cardSubtitle(member) {
  if (member.role) return member.role
  if (member.summary) return member.summary
  return 'Member at large supporting society programs and events.'
}

function bioParagraphs(member) {
  return member.bio.split('\n\n').filter((p) => /[^\s]/.test(p))
}

function MemberCard({ member, onClick }) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={`${member.name}${member.role ? `, ${member.role}` : ''}. Read biography.`}
    >
      <div className={styles.cardImage}>
        {member.image ? (
          <img src={member.image} alt="" className={styles.cardImg} loading="lazy" />
        ) : (
          <span className={styles.cardImgFallback} aria-hidden="true">
            {initialsFromName(member.name)}
          </span>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{member.name}</h3>
        <p className={styles.cardDesc}>{cardSubtitle(member)}</p>
        <span className={styles.cardArrow} aria-hidden="true">
          <ChevronRightIcon className={styles.arrowIcon} />
        </span>
      </div>
    </button>
  )
}

function MemberModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [member, onClose])

  if (!member) return null

  const paras = bioParagraphs(member)
  const showMetaRole = Boolean(member.role)
  const showHometown = Boolean(member.hometown)
  const showMediums = Boolean(member.mediums)
  const showMemberSince = Boolean(member.memberSince)

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`Biography of ${member.name}`}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close biography">
          <svg viewBox="0 0 24 24" className={styles.closeIcon}>
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className={styles.bioModalLayout}>
          <aside className={styles.bioSidebar}>
            <div className={styles.bioPhotoWrap}>
              {member.image ? (
                <img src={member.image} alt="" className={styles.bioPhoto} />
              ) : (
                <div className={styles.bioPhotoFallback} aria-hidden="true">
                  <span>{initialsFromName(member.name)}</span>
                </div>
              )}
            </div>
            {member.quote && (
              <blockquote className={styles.bioQuote}>
                <p>{member.quote}</p>
              </blockquote>
            )}
            {(showMetaRole || showHometown || showMediums || showMemberSince) && (
              <div className={styles.bioMeta}>
                {showMetaRole && (
                  <div className={styles.bioMetaRow}>
                    <UserIcon className={styles.bioMetaIcon} aria-hidden />
                    <div>
                      <span className={styles.bioMetaLabel}>Role</span>
                      <span className={styles.bioMetaValue}>{member.role}</span>
                    </div>
                  </div>
                )}
                {showHometown && (
                  <div className={styles.bioMetaRow}>
                    <MapPinIcon className={styles.bioMetaIcon} aria-hidden />
                    <div>
                      <span className={styles.bioMetaLabel}>Hometown</span>
                      <span className={styles.bioMetaValue}>{member.hometown}</span>
                    </div>
                  </div>
                )}
                {showMediums && (
                  <div className={styles.bioMetaRow}>
                    <PaintBrushIcon className={styles.bioMetaIcon} aria-hidden />
                    <div>
                      <span className={styles.bioMetaLabel}>Medium</span>
                      <span className={styles.bioMetaValue}>{member.mediums}</span>
                    </div>
                  </div>
                )}
                {showMemberSince && (
                  <div className={styles.bioMetaRow}>
                    <TrophyIcon className={styles.bioMetaIcon} aria-hidden />
                    <div>
                      <span className={styles.bioMetaLabel}>Member since</span>
                      <span className={styles.bioMetaValue}>{member.memberSince}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </aside>
          <div className={styles.bioMain}>
            <h2 className={styles.bioName}>{member.name}</h2>
            {member.role && <p className={styles.bioRoleLine}>{member.role}</p>}
            {member.summary && !member.role && <p className={styles.bioSummaryLine}>{member.summary}</p>}
            <hr className={styles.bioGoldRule} />
            {member.bioSectionTitle && <h3 className={styles.bioSectionHead}>{member.bioSectionTitle}</h3>}
            {paras.map((para, i) => (
              <p key={i} className={styles.bioPara}>
                {para}
              </p>
            ))}

            <button type="button" className={styles.bioCloseBtn} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BoardMembersPage() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <>
      <section className={styles.hero} style={{ '--board-hero-bg': boardHeroBg }}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Our Board Members</h1>
          <p className={styles.heroLede}>
            A dedicated group of artists, leaders, and community supporters working together to promote and celebrate the fine arts in Middle Georgia.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Executive Board</h2>
          <div className={styles.grid}>
            {executiveBoard.map((m) => (
              <MemberCard key={m.name} member={m} onClick={() => setSelected(m)} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Members at Large</h2>
          <div className={styles.gridSmall}>
            {membersAtLarge.map((m) => (
              <MemberCard key={m.name} member={m} onClick={() => setSelected(m)} />
            ))}
          </div>
        </div>
      </section>

      <MemberModal member={selected} onClose={close} />
    </>
  )
}
