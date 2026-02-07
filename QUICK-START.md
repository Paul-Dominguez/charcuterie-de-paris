# 🚀 Quick Start Guide - Charcuterie de Paris Website

## What You Have

A complete, production-ready Next.js website with:
- ✅ All pages built (Home, Packages, Gallery, Event Inquiry, About)
- ✅ Calendly integration for bookings
- ✅ Your actual charcuterie images included
- ✅ Parisian luxury design
- ✅ Mobile responsive
- ✅ Clean, maintainable code

## Get Started in 3 Steps

### Step 1: Open in VS Code

1. Download the `charcuterie-de-paris` folder
2. Open VS Code
3. File → Open Folder → Select `charcuterie-de-paris`

### Step 2: Install Dependencies

Open the terminal in VS Code (View → Terminal) and run:

```bash
npm install
```

This will install all required packages (takes 1-2 minutes).

### Step 3: Start the Development Server

In the same terminal, run:

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

🎉 That's it! Your website is now running!

---

## What to Customize

### 1. Contact Information

**File:** `src/components/Footer.jsx`

Change:
- Email address
- Phone number
- Location details

**File:** `src/app/about/page.jsx`

Update the contact section with your real information.

### 2. Calendly Link

**File:** `src/components/CalendlyEmbed.jsx`

Replace this URL with your actual Calendly link:
```
https://calendly.com/charcuteriedeparis/charcuterie-event-inquiry
```

### 3. Colors (Optional)

**File:** `tailwind.config.js`

Current colors:
- cream: '#FAF7F2'
- ivory: '#FFFEF9'
- charcoal: '#2C2C2C'
- gold: '#C9A961'

Change these if you want different colors.

### 4. Instagram Handle

**File:** `src/app/gallery/page.jsx` and `src/components/Footer.jsx`

Update `@charcuteriedeparis` to your actual Instagram handle.

---

## File Structure Overview

```
charcuterie-de-paris/
├── public/
│   └── images/
│       ├── gallery/          # Your 10 charcuterie board images
│       └── logo.png          # Your logo
├── src/
│   ├── app/                  # All pages
│   │   ├── page.jsx          # Homepage
│   │   ├── packages/         # Packages page
│   │   ├── event-inquiry/    # Calendly booking
│   │   ├── gallery/          # Photo gallery
│   │   └── about/            # About & contact
│   ├── components/           # Reusable components
│   └── lib/
│       └── data.js           # Package prices & data
└── package.json              # Dependencies
```

---

## Key Features

### 📱 Mobile Responsive
- Works perfectly on phones, tablets, and desktops
- Hamburger menu on mobile

### 🎨 Animations
- Smooth fade-ins using Framer Motion
- Hover effects on images and buttons
- Professional transitions

### 📅 Calendly Integration
- Embedded booking form
- No need for custom backend
- Handles all scheduling automatically

### 🖼️ Gallery
- All 10 of your product images included
- Hover zoom effect
- Grid layout

---

## Common Tasks

### Add More Gallery Images

1. Add images to `public/images/gallery/`
2. Name them: `board-11.jpg`, `board-12.jpg`, etc.
3. Edit `src/app/gallery/page.jsx`
4. Add the new paths to the `galleryImages` array

### Change Package Pricing

**File:** `src/lib/data.js`

Edit the `packages` array to change names, prices, or descriptions.

### Update Add-On Prices

**File:** `src/lib/data.js`

Edit the `addOns` array.

---

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized version in the `.next` folder.

---

## Deployment Options

### Option 1: Vercel (Easiest - Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Vercel automatically detects Next.js and deploys everything.

### Option 2: Netlify

1. Build: `npm run build`
2. Deploy the project to Netlify
3. Point to the `.next` folder

---

## Troubleshooting

### Images Not Showing?

Make sure the images are in:
```
public/images/gallery/board-1.jpg
public/images/gallery/board-2.jpg
etc.
```

### Port 3000 Already in Use?

Kill the process:
```bash
lsof -ti:3000 | xargs kill -9
```

Or use a different port:
```bash
npm run dev -- -p 3001
```

### Calendly Not Loading?

Make sure you:
1. Have a real Calendly account
2. Updated the link in `CalendlyEmbed.jsx`
3. Published your Calendly event

---

## Need Help?

### Resources:
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion/)

### Common Issues:
- Most issues are solved by running `npm install` again
- Make sure you're using Node.js 18 or higher
- Check the browser console (F12) for errors

---

## What's Next?

1. ✅ Customize contact information
2. ✅ Set up your real Calendly account
3. ✅ Test on mobile devices
4. ✅ Deploy to Vercel
5. ✅ Share your website!

---

**Congratulations!** You now have a beautiful, professional website for your charcuterie business. 🎉

For questions, check the README.md file in your project folder.
