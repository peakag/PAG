import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import ROICalculator from '@/components/ROICalculator'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <ROICalculator />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
} 