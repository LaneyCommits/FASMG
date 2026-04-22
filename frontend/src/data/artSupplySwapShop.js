export function isArtSupplySwapShopEvent(title) {
  return /Art Supply Swap\s*&\s*Shop/i.test(title)
}

export function artSupplySwapShopFlierUrl() {
  return `${import.meta.env.BASE_URL}img/fliers/swapshop.jpg`
}

export const artSupplySwapShopTitle = 'Art Supply Swap & Shop'

export const artSupplySwapShopParagraphs = [
  'Come ready to swap gently used art supplies — bring items you are ready to pass along and leave with new treasures for your studio.',
  'Create and trade art with others, then shop our Artist Market for one-of-a-kind pieces and supplies.',
  'Presented in partnership with Minds Eye Connections, ARTSPACE Macon, and Macon Arts Alliance.',
]

export const artSupplySwapShopWhen = {
  dateLine: 'Saturday, April 26',
  timeLine: '1:00 PM – 4:00 PM',
  venue: 'Mill Hill Community Arts Center',
  area: 'Macon, Georgia',
}
