import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Charcuterie de Paris | Luxury Charcuterie Boards',
  description: 'Paris-inspired charcuterie boards thoughtfully curated for celebrations, brunches, and social events in Orlando, Florida.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
