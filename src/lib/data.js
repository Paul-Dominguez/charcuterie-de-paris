export const packages = [
  {
    id: 'small',
    name: 'Small Board',
    guests: '8–10 guests',
    price: '$150',
    priceValue: 150,
    description: 'Perfect for intimate gatherings and small celebrations.',
  },
  {
    id: 'medium',
    name: 'Medium Board',
    guests: '15–20 guests',
    price: '$275',
    priceValue: 275,
    description: 'Ideal for dinner parties and medium-sized events.',
  },
  {
    id: 'large',
    name: 'Large Board',
    guests: '20–25 guests',
    price: '$350',
    priceValue: 350,
    description: 'Great for larger gatherings and special occasions.',
  },
  {
    id: 'extra-large',
    name: 'Extra-Large Board',
    guests: '25–30 guests',
    price: '$400–$450',
    priceValue: 400,
    description: 'Our grandest option for major celebrations.',
  },
  {
    id: 'holiday',
    name: 'Holiday Board',
    guests: 'Custom sizing',
    price: 'starting at $300',
    priceValue: 300,
    description: 'Festive arrangements for holiday celebrations.',
    featured: true,
  },
  {
    id: 'brunch',
    name: 'Brunch Board',
    guests: 'Custom sizing',
    price: 'starting at $225',
    priceValue: 225,
    description: 'Morning gatherings deserve something special.',
    featured: true,
  },
];

export const addOns = [
  {
    name: 'Veggie platter with dip',
    price: '+$35',
  },
  {
    name: 'Extra cheese or meat upgrade',
    price: '+$40',
  },
  {
    name: 'Custom theme or elevated styling',
    price: '+$50+',
  },
];

export const galleryImages = [
  '/images/gallery/board-1.jpg',
  '/images/gallery/board-2.jpg',
  '/images/gallery/board-3.jpg',
  '/images/gallery/board-4.jpg',
  '/images/gallery/board-5.jpg',
  '/images/gallery/board-6.jpg',
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Event Inquiry', href: '/event-inquiry' },
];
