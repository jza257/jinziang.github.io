import ArtworkCard from './ArtworkCard';
import './GalleryGrid.css';

export default function GalleryGrid({ artworks, onOpenLightbox }) {
  return (
    <div className="gallery-grid">
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          index={index}
          onOpenLightbox={onOpenLightbox}
        />
      ))}
    </div>
  );
}