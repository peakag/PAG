import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Analysis | Peak Automation Group Blog',
  description: 'Data-driven insights on gym member retention, automation strategies, and industry trends that help fitness businesses thrive.',
  keywords: 'gym automation, member retention, fitness industry insights, gym management, Peak Automation Group blog',
  openGraph: {
    title: 'Insights & Analysis | Peak Automation Group Blog',
    description: 'Data-driven insights on gym member retention, automation strategies, and industry trends.',
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Automation Group Blog'
      }
    ]
  },
  alternates: {
    canonical: 'https://peakautomationgroup.com/blog'
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}