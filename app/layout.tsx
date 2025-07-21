import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from "../components/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://peakautomationgroup.com'),
  title: 'Peak Automation Group - Stop Gym Member Churn with AI',
  description: 'Reduce member churn by 30% in 90 days. AI-powered retention system for Atlanta gyms. Free audit available.',
  keywords: 'gym retention, member churn, fitness automation, gym software Atlanta',
  authors: [{ name: 'Peak Automation Group' }],
  openGraph: {
    title: 'Peak Automation Group - Stop Gym Member Churn with AI',
    description: 'Reduce member churn by 30% in 90 days. AI-powered retention system for Atlanta gyms.',
    url: 'https://peakautomationgroup.com',
    siteName: 'Peak Automation Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peak Automation Group - Stop Gym Member Churn with AI',
    description: 'Reduce member churn by 30% in 90 days. AI-powered retention system for Atlanta gyms.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Peak Automation Group",
              "description": "AI-powered retention system for gyms",
              "url": "https://peakautomationgroup.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "serviceType": "Gym Management Software",
              "areaServed": "Atlanta, GA"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 