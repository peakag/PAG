'use client'

import Head from 'next/head'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Head>
        <title>Blog - Peak Automation Group</title>
        <meta name="description" content="Insights, tips, and strategies for gym automation, member retention, and business growth from Peak Automation Group." />
        <meta property="og:title" content="Blog - Peak Automation Group" />
        <meta property="og:description" content="Insights, tips, and strategies for gym automation, member retention, and business growth from Peak Automation Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peakautomationgroup.com/blog" />
        <meta property="og:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <meta name="twitter:title" content="Blog - Peak Automation Group" />
        <meta name="twitter:description" content="Insights, tips, and strategies for gym automation, member retention, and business growth from Peak Automation Group." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://peakautomationgroup.com/og-image.jpg" />
      </Head>
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
          padding: '120px 0 80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: '48px',
                color: '#1A1A1A',
                fontWeight: 700,
                maxWidth: '800px',
                margin: '0 auto 24px auto',
                lineHeight: '1.1',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Blog
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: '#4A5568',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Coming Soon
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
