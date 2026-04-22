import {
  allanCareyVirtualGalleryPieces,
  allanCareyVirtualGalleryProfile,
} from '../data/allanCareyVirtualGallery'
import VirtualGalleryArtistPage from './VirtualGalleryArtistPage'

export default function AllanCareyGalleryPage() {
  return (
    <VirtualGalleryArtistPage pieces={allanCareyVirtualGalleryPieces} profile={allanCareyVirtualGalleryProfile} />
  )
}
