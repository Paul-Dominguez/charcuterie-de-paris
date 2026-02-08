import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Gallery | Charcuterie de Paris',
  description: 'View our beautiful collection of luxury charcuterie boards.',
}

// Use the project images that were uploaded
const galleryImages = [
  '/images/gallery/board-1.jpg',
  '/images/gallery/board-2.jpg',
  '/images/gallery/board-3.jpg',
  '/images/gallery/board-4.jpg',
  '/images/gallery/board-5.jpg',
  '/images/gallery/board-6.jpg',
  '/images/gallery/board-7.jpg',
  '/images/gallery/board-8.jpg',
  '/images/gallery/board-9.jpg',
  '/images/gallery/board-10.jpg',
  '/images/gallery/CharcEvent.jpg',
  '/images/gallery/CharcEvent2.jpg',
]

export default function GalleryPage() {
  return (
    <div className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Each board is a work of art, carefully crafted to delight your guests and elevate your celebration.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={galleryImages} />

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-charcoal/70 mb-4">
            Follow us on Instagram for more inspiration
          </p>
          <a href="https://www.instagram.com/charcuterie_de_paris" target="_blank" rel="noopener noreferrer" className="inline-block text-gold hover:text-soft-gold transition-colors text-xl">
            @charcuterie_de_paris
          </a>
        </div>
      </div>
    </div>
  )
}