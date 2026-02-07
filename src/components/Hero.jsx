'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-ivory via-cream to-cream/50">
      {/* Decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-6 leading-tight">
              Luxury Charcuterie Boards for Gatherings and Special Occasions
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-charcoal/80 mb-10 font-light"
          >
            Paris-inspired boards thoughtfully curated for celebrations, brunches, and social events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/event-inquiry"
              className="inline-block bg-gold text-charcoal px-8 py-4 text-lg font-light tracking-wide hover:bg-soft-gold transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Start Your Event Inquiry
            </Link>
            <Link
              href="/packages"
              className="inline-block border-2 border-gold text-charcoal px-8 py-4 text-lg font-light tracking-wide hover:bg-gold hover:text-charcoal transition-all duration-300 text-center"
            >
              View Our Packages
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
