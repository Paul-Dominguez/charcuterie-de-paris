import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      
      {/* Featured Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, our curated boards bring a touch of Parisian elegance to every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="inline-block bg-charcoal text-cream px-8 py-4 text-lg hover:bg-charcoal/90 transition-all duration-300"
            >
              View All Packages
            </Link>
            <Link
              href="/gallery"
              className="inline-block border-2 border-charcoal text-charcoal px-8 py-4 text-lg hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
