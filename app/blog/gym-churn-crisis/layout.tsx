import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The $4.2 Billion Problem Hiding in Plain Sight | Peak Automation Group',
  description: '73% of gym owners can predict new members, but only 12% can predict cancellations. Our analysis of 200+ gyms reveals the shocking truth about the fitness industry\'s retention crisis.',
  keywords: 'gym member churn, fitness industry retention, gym profitability, member cancellation prediction, gym business analytics',
  openGraph: {
    title: 'The $4.2 Billion Problem Hiding in Plain Sight',
    description: 'Why most gym owners focus on the wrong metrics and lose $200K+ annually because of it',
    type: 'article',
    publishedTime: '2024-12-15T00:00:00.000Z',
    authors: ['Peak Automation Team'],
    images: [
      {
        url: '/og-blog-churn-crisis.jpg',
        width: 1200,
        height: 630,
        alt: 'The $4.2 Billion Problem Hiding in Plain Sight'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The $4.2 Billion Problem Hiding in Plain Sight',
    description: '73% of gym owners can predict new members, but only 12% can predict cancellations.',
    images: ['/og-blog-churn-crisis.jpg']
  },
  alternates: {
    canonical: 'https://peakautomationgroup.com/blog/gym-churn-crisis'
  }
}

export default function GymChurnCrisisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The $4.2 Billion Problem Hiding in Plain Sight',
    description: 'Analysis of gym member retention crisis affecting the fitness industry',
    image: 'https://peakautomationgroup.com/og-blog-churn-crisis.jpg',
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
    datePublished: '2024-12-15T00:00:00.000Z',
    dateModified: '2024-12-15T00:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://peakautomationgroup.com/blog/gym-churn-crisis'
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
