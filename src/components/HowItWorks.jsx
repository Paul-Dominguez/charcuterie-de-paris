'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Explore Our Boards',
    description: 'Browse our selection of charcuterie boards designed for gatherings of all sizes.',
  },
  {
    number: '2',
    title: 'Submit an Event Inquiry',
    description: 'Choose a date and time, select a package, and share your event details.',
  },
  {
    number: '3',
    title: 'We Confirm the Details',
    description: 'We review availability, finalize details, and coordinate delivery or pickup.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold text-charcoal rounded-full flex items-center justify-center text-2xl font-serif mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                {step.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
