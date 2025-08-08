import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why 50% of Gym Members Quit (And the 3 Patterns That Predict It) | Peak Automation Group',
  description: 'Our analysis of 50,000+ member behaviors revealed three critical patterns that predict gym cancellations with 89% accuracy. Discover the Anchor Day theory and other warning signs.',
  keywords: 'gym member behavior patterns, member retention prediction, gym churn patterns, fitness member psychology, gym cancellation prediction',
  openGraph: {
    title: 'Why 50% of Gym Members Quit (And the 3 Patterns That Predict It)',
    description: 'The hidden behavioral patterns that predict gym member cancellations with 89% accuracy',
    type: 'article',
    publishedTime: '2025-08-04T00:00:00.000Z',
    authors: ['Peak Automation Team'],
    images: [
      {
        url: '/og-blog-behavior-patterns.jpg',
        width: 1200,
        height: 630,
        alt: 'Why 50% of Gym Members Quit (And the 3 Patterns That Predict It)'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why 50% of Gym Members Quit (And the 3 Patterns That Predict It)',
    description: 'The 3 patterns that predict gym member churn with 89% accuracy',
    images: ['/og-blog-behavior-patterns.jpg']
  },
  alternates: {
    canonical: 'https://peakautomationgroup.com/blog/member-behavior-patterns'
  }
}

export default function MemberBehaviorPatternsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Why 50% of Gym Members Quit (And the 3 Patterns That Predict It)',
    description: 'Analysis of behavioral patterns that predict gym member churn',
    image: 'https://peakautomationgroup.com/og-blog-behavior-patterns.jpg',
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
    datePublished: '2025-08-04T00:00:00.000Z',
    dateModified: '2025-08-04T00:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://peakautomationgroup.com/blog/member-behavior-patterns'
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
