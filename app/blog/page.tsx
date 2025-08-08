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

'use client'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  summary: string
  date: string
  readTime: string
  author: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: 'gym-churn-crisis',
    title: 'The $4.2 Billion Problem Hiding in Plain Sight',
    summary: 'After analyzing financial data from 200+ gyms across 15 states, we discovered something shocking: 73% of gym owners can predict new members, but only 12% can predict cancellations.',
    date: 'December 15, 2024',
    readTime: '8 min read',
    author: 'Peak Automation Team',
    featured: true
  }
]

export default function Blog() {
  return (
    <main style={{ 
      background: '#FFFFFF', 
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 100%)',
          padding: '120px 0 80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center' }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: '48px',
                color: '#000000',
                fontWeight: 700,
                maxWidth: '800px',
                margin: '0 auto 24px auto',
                lineHeight: '1.1'
              }}
            >
              Insights & Analysis
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}
            >
              Data-driven insights on gym member retention, automation strategies, and industry trends that help fitness businesses thrive.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px'
          }}>
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {post.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: '#3B82F6',
                    color: '#FFFFFF',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}>
                    Featured
                  </div>
                )}
                
                <Link 
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#000000',
                    marginBottom: '16px',
                    lineHeight: '1.3',
                    paddingRight: '60px'
                  }}>
                    {post.title}
                  </h2>
                  
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}>
                    {post.summary}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                    fontSize: '14px',
                    color: '#6B7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      color: '#6B7280',
                      fontWeight: 500
                    }}>
                      By {post.author}
                    </span>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#3B82F6',
                      fontSize: '14px',
                      fontWeight: 600,
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '8px'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '4px'
                    }}>
                      Read Article
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          
          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              textAlign: 'center',
              marginTop: '80px',
              padding: '48px 32px',
              background: '#F7F7F7',
              borderRadius: '12px'
            }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#000000',
              marginBottom: '16px'
            }}>
              More Insights Coming Soon
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              We're continuously analyzing gym industry data and automation strategies. Subscribe to our newsletter to get the latest insights delivered to your inbox.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#3B82F6',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 600,
                marginTop: '24px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2563EB'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3B82F6'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Stay Updated
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
