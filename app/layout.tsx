import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GymFit — Asim Negi | Personal Fitness Portfolio & Training Plans',
  description: 'Transform your fitness with Asim Negi\'s proven training system. Get personalized workout plans, diet guidance, BMI/BMR calculators, and real transformation results. Evidence-based training for beginners and intermediate lifters.',
  keywords: 'fitness transformation, personal workout plan, BMR calculator, bro split, push pull legs, fat loss plan, Asim Negi, GymFit',
  openGraph: {
    title: 'GymFit — Asim Negi | Personal Fitness Portfolio & Training Plans',
    description: 'Transform your fitness with proven training systems and personalized plans.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Asim Negi",
              "jobTitle": "Fitness Trainer & Transformation Coach",
              "url": "https://gymfit.com",
              "sameAs": [
                "https://instagram.com/asimnegi",
                "https://facebook.com/asimnegi"
              ],
              "knowsAbout": ["Fitness Training", "Nutrition", "Body Transformation", "Strength Training"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}

