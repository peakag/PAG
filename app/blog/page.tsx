'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../../lib/supabase'

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
    date: 'August 1, 2025',
    readTime: '8 min read',
    author: 'Peak Automation Team',
    featured: true
  },
  {
    slug: 'member-behavior-patterns',
    title: 'Why 50% of Gym Members Quit (And the 3 Patterns That Predict It)',
    summary: 'Our analysis of 50,000+ member behaviors revealed three critical patterns that predict gym cancellations with 89% accuracy. Discover the Anchor Day theory and other warning signs.',
    date: 'August 4, 2025',
    readTime: '6 min read',
    author: 'Peak Automation Team'
  },
  {
    slug: 'automation-competitive-advantage',
    title: 'The Gym Automation Revolution: Why Early Adopters Will Dominate 2025',
    summary: 'The fitness industry is splitting into two groups: gyms using automation to thrive, and manual operators struggling to survive. The window for competitive advantage is closing fast.',
    date: 'August 8, 2025',
    readTime: '10 min read',
    author: 'Peak Automation Team'
  }
]

export default function Blog() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Please enter a valid email address')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubmitStatus('error')
      setSubmitMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email: email.trim().toLowerCase(),
            subscribed_at: new Date().toISOString(),
            source: 'blog'
          }
        ])

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          setSubmitStatus('success')
          setSubmitMessage('You are already subscribed to our newsletter!')
        } else {
          throw error
        }
      } else {
        setSubmitStatus('success')
        setSubmitMessage('Successfully subscribed! Thank you for joining our newsletter.')
      }
      
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setSubmitStatus('error')
      setSubmitMessage('Failed to subscribe. Please try again later.')
    } finally {
      setIsSubmitting(false)
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    }
  }

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
          {/* Back to Home Button */}
          <motion.a
            href="/"
            style={{ 
              textDecoration: 'none', 
              display: 'inline-block',
              color: '#3B82F6',
              fontWeight: 500,
              marginBottom: '32px'
            }}
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.a>
          
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
          
          {/* Newsletter Signup Section */}
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
              Stay Ahead with Weekly Insights
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto 32px auto'
            }}>
              Get the latest gym automation trends, industry insights, and proven strategies delivered to your inbox every week.
            </p>
            
            {/* Email Signup Form */}
            <motion.form
              onSubmit={handleNewsletterSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                maxWidth: '400px',
                margin: '0 auto'
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '8px',
                  border: submitStatus === 'error' ? '2px solid #EF4444' : '2px solid #E5E7EB',
                  fontSize: '16px',
                  outline: 'none',
                  background: '#FFFFFF',
                  color: '#000000',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'all 0.2s ease',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}
                onFocus={(e) => {
                  if (submitStatus !== 'error') {
                    e.target.style.border = '2px solid #3B82F6'
                  }
                }}
                onBlur={(e) => {
                  if (submitStatus !== 'error') {
                    e.target.style.border = '2px solid #E5E7EB'
                  }
                }}
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#9CA3AF' : '#3B82F6',
                  color: '#FFFFFF',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}
                whileHover={!isSubmitting ? {
                  backgroundColor: '#2563EB',
                  transform: 'translateY(-2px)'
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Subscribing...' : 'Stay Updated'}
                {!isSubmitting && <ArrowRight size={16} />}
              </motion.button>
              
              {/* Status Message */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    background: submitStatus === 'success' ? '#F0FDF4' : '#FEF2F2',
                    color: submitStatus === 'success' ? '#059669' : '#DC2626',
                    border: submitStatus === 'success' ? '1px solid #D1FAE5' : '1px solid #FECACA',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  {submitMessage}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
