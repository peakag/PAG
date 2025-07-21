import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Peak Automation Group - AI-Powered Gym Retention',
  description: 'Learn how Peak Automation Group is revolutionizing gym member retention with AI technology. Meet our team and discover our mission to save every preventable member loss.'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 