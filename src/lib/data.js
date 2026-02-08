// Navigation links
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Event Inquiry', href: '/event-inquiry' },
  { name: 'About', href: '/about' },
];

// Package data
export const packages = [
  {
    id: 'small',
    name: 'Small Board',
    guestCount: '8-10 guests',
    price: '$150',
    description: 'Perfect for intimate gatherings and small celebrations.',
    isSeasonal: false,
  },
  {
    id: 'medium',
    name: 'Medium Board',
    guestCount: '15-20 guests',
    price: '$275',
    description: 'Ideal for dinner parties and medium-sized events.',
    isSeasonal: false,
  },
  {
    id: 'large',
    name: 'Large Board',
    guestCount: '20-25 guests',
    price: '$350',
    description: 'Great for larger gatherings and special occasions.',
    isSeasonal: false,
  },
  {
    id: 'extra-large',
    name: 'Extra-Large Board',
    guestCount: '25-30 guests',
    price: '$400-$450',
    description: 'Our grandest option for major celebrations.',
    isSeasonal: false,
  },
  {
    id: 'holiday',
    name: 'Holiday Board',
    guestCount: 'Custom sizing',
    price: 'starting at $300',
    description: 'Festive arrangements for holiday celebrations.',
    isSeasonal: true,
  },
  {
    id: 'brunch',
    name: 'Brunch Board',
    guestCount: 'Custom sizing',
    price: 'starting at $225',
    description: 'Morning gatherings deserve something special.',
    isSeasonal: true,
  },
  {
    id: 'boxes',
    name: 'Charcuterie Boxes',
    guestCount: 'Individual serving',
    price: '$20 each',
    description: 'Perfect for individual portions or party favors.',
    isSeasonal: false,
  },
];

// Add-on options
export const addOns = [
  {
    id: 'veggie',
    name: 'Veggie Platter with Dip',
    price: '+$35',
    description: 'Fresh seasonal vegetables with house-made dip.',
  },
  {
    id: 'upgrade',
    name: 'Extra Cheese/Meat Upgrade',
    price: '+$40',
    description: 'Additional premium selections of artisanal cheeses and cured meats.',
  },
  {
    id: 'styling',
    name: 'Custom Theme/Elevated Styling',
    price: '+$50+',
    description: 'Personalized decorative elements and thematic presentation.',
  },
  {
    id: 'singles',
    name: 'Charcuterie Singles',
    price: '$12 each',
    description: 'Individual charcuterie portions, perfect for grab-and-go or party favors.',
  },
];