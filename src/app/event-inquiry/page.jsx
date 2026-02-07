import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata = {
  title: 'Event Inquiry | Charcuterie de Paris',
  description: 'Book your luxury charcuterie board for your next event.',
}

export default function EventInquiryPage() {
  return (
    <div className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">
            Event Inquiry
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Select a date and time to discuss your event. We&apos;ll help you choose the perfect board and finalize all the details.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="bg-ivory p-8 shadow-xl">
          <CalendlyEmbed />
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-charcoal/70">
            <strong className="text-charcoal">Please note:</strong> We require 48 hours advance notice for all orders.
          </p>
          <p className="text-charcoal/70">
            For immediate assistance, call us at <span className="text-gold">(407) 865-3157</span>
          </p>
        </div>
      </div>
    </div>
  )
}