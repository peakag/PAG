import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from "../components/AuthProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://peakautomationgroup.com'),
  title: {
    default: 'Peak Automation Group - Stop Gym Member Churn with AI',
    template: '%s | Peak Automation Group'
  },
  description: 'Reduce member churn by 30% in 90 days. AI-powered retention system for Atlanta gyms. Free audit available.',
  keywords: [
    'gym retention',
    'member churn',
    'fitness automation',
    'gym software Atlanta',
    'gym management',
    'member retention',
    'fitness business',
    'gym technology'
  ],
  authors: [{ name: 'Peak Automation Group' }],
  creator: 'Peak Automation Group',
  publisher: 'Peak Automation Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peakautomationgroup.com',
    siteName: 'Peak Automation Group',
    title: 'Peak Automation Group - Stop Gym Member Churn with AI',
    description: 'Reduce member churn by 30% in 90 days. AI-powered retention system for Atlanta gyms. Free audit available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Automation Group - AI-Powered Gym Retention',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@peakautomation',
    creator: '@peakautomation',
    title: 'Peak Automation Group - Stop Gym Member Churn with AI',
    description: 'Reduce member churn by 30% in 90 days. AI-powered retention system for Atlanta gyms.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://peakautomationgroup.com',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Peak Automation Group",
              "description": "AI-powered retention system for gyms to reduce member churn by 30% in 90 days",
              "url": "https://peakautomationgroup.com",
              "logo": "https://peakautomationgroup.com/pag-logo.png",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://linkedin.com/company/peak-automation-group",
                "https://twitter.com/peakautomation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Gym Retention Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered Member Retention System",
                      "description": "Reduce gym member churn by 30% in 90 days"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
} 