import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from "../components/AuthProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://peakautomationgroup.com'),
  title: {
    default: '10 Gym Automation Systems That Run Your Fitness Business on Autopilot | Peak Automation Group',
    template: '%s | Peak Automation Group'
  },
  description: 'Transform your gym operations with 10 intelligent automation systems. From member retention to payment processing, run your fitness business on autopilot while you focus on growth.',
  keywords: [
    'gym automation systems',
    'fitness business automation',
    'gym management software',
    'automated gym operations',
    'fitness center automation',
    'gym member retention',
    'automated payment processing',
    'gym marketing automation',
    'fitness business efficiency',
    'gym technology solutions',
    'automated gym workflows'
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
    title: '10 Gym Automation Systems That Run Your Fitness Business on Autopilot | Peak Automation Group',
    description: 'Transform your gym operations with 10 intelligent automation systems. From member retention to payment processing, run your fitness business on autopilot while you focus on growth.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Automation Group - 10 Gym Automation Systems for Fitness Business Efficiency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@peakautomation',
    creator: '@peakautomation',
    title: '10 Gym Automation Systems That Run Your Fitness Business on Autopilot | Peak Automation Group',
    description: 'Transform your gym operations with 10 intelligent automation systems. From member retention to payment processing, run your fitness business on autopilot while you focus on growth.',
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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1480934379760024');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1480934379760024&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Peak Automation Group Gym Automation Systems",
              "description": "10 intelligent automation systems that transform gym operations - from member retention to payment processing, run your fitness business on autopilot",
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
                "description": "Comprehensive gym automation platform with 10 intelligent systems for complete fitness business optimization",
                "url": "https://peakautomationgroup.com",
                "logo": "https://peakautomationgroup.com/pag-logo.png",
                "foundingDate": "2024",
                "address": {
                  "@type": "PostalAddress",
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
                "Automated member retention system",
                "Smart payment processing and recovery",
                "Intelligent marketing automation",
                "Real-time performance analytics",
                "Automated customer communication",
                "Integrated gym management platform",
                "Staff productivity optimization",
                "Automated class scheduling system",
                "Member engagement automation",
                "Comprehensive reporting dashboard"
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
        <SpeedInsights />
      </body>
    </html>
  )
} 