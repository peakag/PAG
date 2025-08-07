import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Peak Automation Group',
  description: 'Custom automation pricing tailored to your gym\'s needs. One-time installation fee plus ongoing 24/7 support and maintenance. Calculate your ROI with our proven systems.',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
