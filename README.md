# Charcuterie de Paris

A luxury event service website for a Parisian-inspired charcuterie business in Orlando, Florida.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Scheduling:** Calendly Embed

## Features

- ✨ Elegant Parisian-inspired design
- 📱 Fully responsive
- 🎨 Beautiful animations and transitions
- 📅 Integrated Calendly booking
- 🖼️ Image-first gallery
- 📦 Package showcase with pricing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd charcuterie-de-paris
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your gallery images:**
   - Place your charcuterie board images in `public/images/gallery/`
   - Name them: `board-1.jpg`, `board-2.jpg`, etc.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
charcuterie-de-paris/
├── public/
│   └── images/
│       └── gallery/          # Your product images go here
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Root layout with header/footer
│   │   ├── page.jsx          # Homepage
│   │   ├── packages/         # Packages page
│   │   ├── event-inquiry/    # Calendly booking page
│   │   ├── gallery/          # Gallery page
│   │   └── about/            # About/Contact page
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── PackageCard.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── CalendlyEmbed.jsx
│   └── lib/
│       └── data.js           # Package data and navigation
└── tailwind.config.js        # Tailwind configuration
```

## Customization

### Update Contact Information

Edit `src/components/Footer.jsx` to update:
- Email address
- Phone number
- Business hours

### Modify Packages

Edit `src/lib/data.js` to:
- Change package names, prices, or descriptions
- Add or remove packages
- Update add-on pricing

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  cream: '#FAF7F2',
  ivory: '#FFFEF9',
  charcoal: '#2C2C2C',
  gold: '#C9A961',
  // Add your custom colors
}
```

### Update Calendly Link

Replace the Calendly URL in:
- `src/components/CalendlyEmbed.jsx`

Current link: `https://calendly.com/charcuteriedeparis/charcuterie-event-inquiry`

## Adding Images

### Gallery Images

1. Resize your images to optimize for web (recommended: 1200px width)
2. Save as `.jpg` files
3. Place in `public/images/gallery/`
4. Name them sequentially: `board-1.jpg`, `board-2.jpg`, etc.

The gallery will automatically display all images listed in `src/app/gallery/page.jsx`.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## Pages Overview

- **Home (`/`)**: Hero section with CTA buttons and "How It Works"
- **Packages (`/packages`)**: All package options with pricing and add-ons
- **Event Inquiry (`/event-inquiry`)**: Calendly booking embed
- **Gallery (`/gallery`)**: Grid of charcuterie board images
- **About (`/about`)**: Business story, contact info, and FAQ

## Important Notes

- This is **NOT** an e-commerce site - no shopping cart or checkout
- All inquiries go through Calendly
- Requires 48-hour advance notice (mentioned on site)
- Copy is finalized and should not be changed

## Support

For issues or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

Copyright © 2026 Charcuterie de Paris. All rights reserved.
