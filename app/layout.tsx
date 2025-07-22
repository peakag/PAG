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
    default: 'AI Gym Member Retention Software | Stop Churn | Peak Automation Group',
    template: '%s | Peak Automation Group'
  },
  description: 'Stop losing $240K/year to member churn. AI-powered retention software that predicts and prevents gym member cancellations. 30% churn reduction guaranteed.',
  keywords: [
    'gym member retention software',
    'AI gym retention',
    'stop gym member churn',
    'gym software Atlanta',
    'fitness retention system Georgia',
    'gym retention',
    'member churn',
    'fitness automation',
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
    title: 'AI Gym Member Retention Software | Stop Churn | Peak Automation Group',
    description: 'Stop losing $240K/year to member churn. AI-powered retention software that predicts and prevents gym member cancellations. 30% churn reduction guaranteed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Automation Group - AI-Powered Gym Member Retention Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@peakautomation',
    creator: '@peakautomation',
    title: 'AI Gym Member Retention Software | Stop Churn | Peak Automation Group',
    description: 'Stop losing $240K/year to member churn. AI-powered retention software that predicts and prevents gym member cancellations. 30% churn reduction guaranteed.',
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
              "@type": "SoftwareApplication",
              "name": "Peak Automation Group Gym Member Retention Software",
              "description": "AI-powered gym member retention software that predicts and prevents member cancellations, reducing churn by 30% in 90 days",
              "url": "https://peakautomationgroup.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "297",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "297",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M"
                }
              },
              "provider": {
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
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "AI-powered member retention prediction",
                "Early warning system for at-risk members",
                "Automated retention campaigns",
                "Payment failure prevention",
                "Real-time analytics dashboard",
                "Integration with existing gym software"
              ],
              "screenshot": "https://peakautomationgroup.com/dashboard-preview.jpg",
              "softwareVersion": "2.0",
              "releaseNotes": "Latest version includes enhanced AI prediction algorithms and improved dashboard analytics"
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