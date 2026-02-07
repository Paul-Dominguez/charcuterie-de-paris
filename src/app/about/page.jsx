import Link from 'next/link'

export const metadata = {
  title: 'About | Charcuterie de Paris',
  description: 'Learn about our passion for creating luxury charcuterie boards in Orlando.',
}

export default function AboutPage() {
  return (
    <div className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
            Charcuterie de Paris brings the art of French entertaining to Orlando. Each board we create is a thoughtful curation of premium imported meats, artisanal cheeses, seasonal fruits, and elegant accompaniments.
          </p>
          <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
            We believe that food is more than sustenance—it&apos;s an experience to be shared, savored, and celebrated. Whether you&apos;re hosting an intimate brunch or a grand celebration, our boards are designed to spark conversation and create lasting memories.
          </p>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Every detail matters, from the selection of ingredients to the artistic presentation. We source the finest products and arrange them with care, ensuring your gathering is as beautiful as it is delicious.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-ivory p-12 border-2 border-gold/30">
          <h2 className="text-3xl font-serif text-charcoal text-center mb-8">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Contact</h3>
              <div className="space-y-2 text-charcoal/70">
                <p>Email: Charcuteriedeparis@gmail.com</p>
                <p>Phone: (407) 865-3157</p>
                <p>Instagram: @charcuteriedeparis</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Service Area</h3>
              <div className="space-y-2 text-charcoal/70">
                <p>Orlando, Florida</p>
                <p>Delivery available within 20 miles</p>
                <p>Pickup available by appointment</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/event-inquiry"
              className="inline-block bg-gold text-charcoal px-10 py-4 text-lg hover:bg-soft-gold transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-charcoal text-center mb-10">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                How far in advance should I order?
              </h3>
              <p className="text-charcoal/70">
                We recommend placing orders at least 48 hours in advance to ensure availability. For larger events or custom requests, please allow more time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                Do you accommodate dietary restrictions?
              </h3>
              <p className="text-charcoal/70">
                Yes! We can customize boards for vegetarian, gluten-free, or other dietary needs. Please mention any restrictions when booking your inquiry.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                What is your delivery area?
              </h3>
              <p className="text-charcoal/70">
                We deliver within 20 miles of Orlando. Pickup is also available at our location by appointment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                Can I see the board before my event?
              </h3>
              <p className="text-charcoal/70">
                While we don&apos;t offer tastings, our gallery showcases our style and quality. We&apos;re happy to discuss your vision during the inquiry call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}