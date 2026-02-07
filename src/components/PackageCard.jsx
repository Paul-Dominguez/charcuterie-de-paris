'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PackageCard({ package: pkg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-ivory border-2 ${
        pkg.featured ? 'border-gold' : 'border-gold/30'
      } p-8 hover:border-gold transition-all duration-300 hover:shadow-xl relative`}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal px-4 py-1 text-sm tracking-wide">
          SEASONAL
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-3xl font-serif text-charcoal mb-2">
          {pkg.name}
        </h3>
        <p className="text-charcoal/60 mb-4">{pkg.guests}</p>
        <div className="text-4xl font-serif text-gold mb-4">
          {pkg.price}
        </div>
      </div>

      <p className="text-charcoal/70 text-center mb-8 leading-relaxed">
        {pkg.description}
      </p>

      <Link
        href="/event-inquiry"
        className="block w-full text-center bg-transparent border-2 border-charcoal text-charcoal px-6 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
      >
        Book This Package
      </Link>
    </motion.div>
  );
}
