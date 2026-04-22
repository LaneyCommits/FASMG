import { aprilJVirtualGalleryPieces, aprilJVirtualGalleryProfile } from '../data/aprilJVirtualGallery'
import VirtualGalleryArtistPage from './VirtualGalleryArtistPage'

export default function AprilJGalleryPage() {
  return <VirtualGalleryArtistPage pieces={aprilJVirtualGalleryPieces} profile={aprilJVirtualGalleryProfile} />
}
