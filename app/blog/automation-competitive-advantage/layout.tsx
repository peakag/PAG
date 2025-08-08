import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Gym Automation Revolution: Why Early Adopters Will Dominate 2025 | Peak Automation Group',
  description: 'The fitness industry is splitting into two groups: gyms using automation to thrive, and manual operators struggling to survive. Here\'s why the window for competitive advantage is closing fast.',
  keywords: 'gym automation, fitness business automation, competitive advantage gyms, AI gym management, fitness industry future',
  openGraph: {
    title: 'The Gym Automation Revolution: Why Early Adopters Will Dominate 2025',
    description: 'The fitness industry is splitting into automated winners and manual losers. The window for competitive advantage is closing.',
    type: 'article',
    publishedTime: '2025-08-08T00:00:00.000Z',
    authors: ['Peak Automation Team'],
    images: [
      {
        url: '/og-blog-automation-revolution.jpg',
        width: 1200,
        height: 630,
        alt: 'The Gym Automation Revolution: Why Early Adopters Will Dominate 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Gym Automation Revolution: Why Early Adopters Will Dominate 2025',
    description: 'The fitness industry is splitting into automated winners and manual losers.',
    images: ['/og-blog-automation-revolution.jpg']
  },
  alternates: {
    canonical: 'https://peakautomationgroup.com/blog/automation-competitive-advantage'
  }
}

export default function AutomationCompetitiveAdvantageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Gym Automation Revolution: Why Early Adopters Will Dominate 2025',
    description: 'Analysis of how automation creates competitive advantages in the fitness industry',
    image: 'https://peakautomationgroup.com/og-blog-automation-revolution.jpg',
    author: {
      '@type': 'Organization',
      name: 'Peak Automation Group',
      url: 'https://peakautomationgroup.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Peak Automation Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://peakautomationgroup.com/logo.png'
      }
    },
    datePublished: '2025-08-08T00:00:00.000Z',
    dateModified: '2025-08-08T00:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://peakautomationgroup.com/blog/automation-competitive-advantage'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
