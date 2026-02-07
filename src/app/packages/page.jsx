import PackageCard from '@/components/PackageCard'
import { packages, addOns } from '@/lib/data'

export const metadata = {
  title: 'Packages | Charcuterie de Paris',
  description: 'Explore our luxury charcuterie board packages for gatherings of all sizes.',
}

export default function PackagesPage() {
  return (
    <div className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">
            Our Packages
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Each board is thoughtfully curated with premium meats, artisanal cheeses, fresh fruits, and elegant accompaniments.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} package={pkg} index={index} />
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-ivory p-12 border-2 border-gold/30">
          <h2 className="text-3xl font-serif text-charcoal text-center mb-8">
            Optional Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="text-center">
                <p className="text-lg text-charcoal mb-2">{addOn.name}</p>
                <p className="text-2xl font-serif text-gold">{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/event-inquiry"
            className="inline-block bg-gold text-charcoal px-12 py-5 text-xl hover:bg-soft-gold transition-all duration-300 shadow-lg"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </div>
  )
}
