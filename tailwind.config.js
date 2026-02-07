/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        ivory: '#FFFEF9',
        charcoal: '#2C2C2C',
        gold: '#C9A961',
        'soft-gold': '#D4BA7F',
        'dark-charcoal': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
