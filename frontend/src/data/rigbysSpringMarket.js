export function isRigbysSpringMarketEvent(title) {
  return /Rigby's Spring Market/i.test(title)
}

export function rigbysSpringMarketFlierUrl() {
  return `${import.meta.env.BASE_URL}img/fliers/rigspringexhibit.jpg`
}

export const rigbysSpringMarketTitle = "Rigby's Spring Exhibit & Market"

export const rigbysSpringMarketParagraphs = [
  "Join the Fine Art Society of Middle Georgia for our Spring Exhibit at Rigby's. Opening reception: Friday, March 20, 6:00–8:00 PM.",
  'Artists may submit up to three pieces completed within the last two years. Works previously entered in FAS exhibits are not eligible. Accepted media: two-dimensional works, mixed media, and photography.',
  'Entry fees: members $10 per piece; non-members $20 for the first piece and $10 for each additional piece. Awards are based on the number of entries received.',
  'Art drop-off: March 18, 2026, 3:00–6:00 PM. Artists remove work at the completion of the exhibit. Pre-registration is required — drop-offs are not accepted without pre-registration. Call or text 478-397-3994 to register.',
]

export const rigbysSpringMarketLocation = {
  venue: "Rigby's Conference Center",
  lines: ['2001 Karl Drive', 'Warner Robins, GA 31088'],
}
