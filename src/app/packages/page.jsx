import PackageCard from '@/components/PackageCard'
import Link from 'next/link'
import { packages, addOns } from '@/lib/data'

export const metadata = {
  title: 'Packages | Charcuterie de Paris',
  description: 'Explore our luxury charcuterie board packages for your next event.',
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
            Choose the perfect board for your celebration. Each package is thoughtfully curated with premium ingredients.
          </p>
        </div>

        {/* Packages Grid - CENTERED */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {packages.map((pkg) => (
            <div key={pkg.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20 bg-ivory p-12 border-2 border-gold/30">
          <h2 className="text-3xl font-serif text-charcoal text-center mb-8">
            Optional Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon.id} className="text-center">
                <h3 className="text-lg font-serif text-charcoal mb-2">
                  {addon.name}
                </h3>
                <p className="text-2xl text-gold font-serif mb-3">
                  {addon.price}
                </p>
                <p className="text-sm text-charcoal/70">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-6">
            Ready to Book Your Event?
          </h2>
          <Link
            href="/event-inquiry"
            className="inline-block bg-gold text-charcoal px-12 py-4 text-lg hover:bg-soft-gold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}