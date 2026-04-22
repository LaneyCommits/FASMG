/** Title matches events for Rigby's Fine Art Exhibition (not Spring/Fall Market, etc.). */
export function isRigbysFineArtExhibitEvent(title) {
  return (
    /Rigby's Fine Art Exhibit/i.test(title) ||
    /Rigby's Exhibit Payment Deadline/i.test(title)
  )
}

export function rigbysFineArtExhibitFlierUrl() {
  return `${import.meta.env.BASE_URL}img/fliers/rigbysfaeflier.jpg`
}

export const rigbysFineArtExhibitTitle = "Rigby's Fine Art Exhibition"

export const rigbysFineArtExhibitParagraphs = [
  "Announcing the first annual Rigby's Fine Art Exhibition—a juried showcase celebrating creativity, talent, and the power of visual art.",
  'This exciting new event brings together more than 40 artists, each selected through a juried process to ensure a diverse and high-quality collection of fine art. Guests will have the opportunity to browse a wide range of styles and mediums, connect with artists, and purchase original pieces to take home.',
  "The exhibition kicks off with a special opening reception, where visitors can enjoy drinks and hors d'oeuvres in a relaxed and welcoming atmosphere. It's the perfect setting for a night out—whether you're an art enthusiast, a collector, or simply looking for something unique to experience.",
  'Join us as we launch this inaugural event and celebrate the beginning of what promises to become a standout tradition in the arts community.',
]

export const rigbysFineArtExhibitLocation = {
  venue: "Rigby's Conference Center",
  lines: ['2001 Karl Drive', 'Warner Robins, GA 31088'],
}
