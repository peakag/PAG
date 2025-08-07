import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Peak Automation Group',
  description: 'Insights, tips, and strategies for gym automation, member retention, and business growth from Peak Automation Group.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
