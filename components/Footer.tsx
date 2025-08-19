'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { supabase } from '../lib/supabase'

const footerLinks = {
  solutions: [
    { name: 'Smart Lead Follow-Up', href: '/solutions#lead-followup' },
    { name: 'Member Retention Radar', href: '/solutions#retention-radar' },
    { name: 'Payment Recovery System', href: '/solutions#payment-recovery' },
    { name: 'Operations Dashboard', href: '/solutions#operations-dashboard' },
    { name: 'Smart Class Optimizer', href: '/solutions#class-optimizer' },
    { name: 'View All Systems', href: '/solutions', isViewAll: true }
  ],
  resources: [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Book a FREE Strategy Call', href: '/book-call' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support', href: '/support' }
  ]
}

export default function Footer() {
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
            source: 'footer'
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
        
        // Track Meta Pixel Subscribe conversion for new subscriptions
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Subscribe', {
            content_name: 'Newsletter Subscription',
            content_category: 'Newsletter',
            value: 0,
            currency: 'USD'
          })
        }
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
    <>
      <style jsx>{`
        @media (min-width: 1280px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr 1.2fr !important;
          }
        }
      `}</style>
      <footer style={{ background: '#1A1A1A' }}>
      {/* Main Footer Content */}
      <div style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
          {/* Schema Markup for LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Peak Automation Group",
                "description": "Gym automation and fitness automation solutions with AI-powered gym management systems",
                "url": "https://peakautomationgroup.com",
                "logo": "https://peakautomationgroup.com/pag-logo.png",
                "sameAs": [
                  "https://linkedin.com/company/peak-automation-group-llc"
                ],
                "serviceType": "Gym Automation Software",
                "areaServed": "United States",
                "keywords": "gym automation, fitness automation, gym management AI, member retention software"
              })
            }}
          />

          {/* Footer Columns */}
          <div 
            style={{
              display: 'grid',
              gap: '48px',
              marginBottom: '64px'
            }}
            className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {/* Column 1 - Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/pag-logo.png"
                  alt="Peak Automation Group - Gym Automation Solutions"
                  width={120}
                  height={32}
                  style={{
                    height: '32px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '16px',
                  color: '#9CA3AF',
                  fontWeight: 500,
                  marginBottom: '12px'
                }}
                                     >
                         Smart systems, better business.
                       </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#9CA3AF',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}
              >
                We implement intelligent automation systems that help gym owners save 20+ hours weekly and increase revenue through proven AI-powered solutions.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/company/peak-automation-group-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: '#3F92FA' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    color: '#9CA3AF',
                    cursor: 'pointer'
                  }}
                  aria-label="Follow Peak Automation Group on LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="/support"
                  whileHover={{ color: '#3F92FA' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    color: '#9CA3AF',
                    cursor: 'pointer'
                  }}
                  aria-label="Contact Peak Automation Group Support"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Column 2 - Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                Our Systems
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {footerLinks.solutions.map((link) => (
                  <li key={link.name} style={{ marginBottom: '16px' }}>
                    <motion.a
                      href={link.href}
                      style={{
                        fontSize: '15px',
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'color 0.2s ease',
                        padding: '4px 0'
                      }}
                      whileHover={{ color: '#3F92FA' }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                      {link.isViewAll && <ArrowRight size={14} />}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                Resources
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {footerLinks.resources.map((link) => (
                  <li key={link.name} style={{ marginBottom: '16px' }}>
                    <motion.a
                      href={link.href}
                      style={{
                        fontSize: '15px',
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        padding: '4px 0',
                        display: 'inline-block'
                      }}
                      whileHover={{ color: '#3F92FA' }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 - Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {footerLinks.company.map((link) => (
                  <li key={link.name} style={{ marginBottom: '16px' }}>
                    <motion.a
                      href={link.href}
                      style={{
                        fontSize: '15px',
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        padding: '4px 0',
                        display: 'inline-block'
                      }}
                      whileHover={{ color: '#3F92FA' }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 5 - Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}
              >
                Stay Updated
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  color: '#9CA3AF',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}
              >
                Stay ahead with weekly AI and automation business insights. Get the latest trends and strategies in artificial intelligence.
              </p>
              <motion.form
                onSubmit={handleNewsletterSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: submitStatus === 'error' ? '1px solid #EF4444' : '1px solid #374151',
                    fontSize: '14px',
                    outline: 'none',
                    background: '#2D2D2D',
                    color: '#FFFFFF',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting ? '#6B7280' : '#1840BA',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  whileHover={!isSubmitting ? {
                    backgroundColor: '#0F2B70',
                    transform: 'translateY(-1px)'
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
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
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      background: submitStatus === 'success' ? '#065F46' : '#7F1D1D',
                      color: '#FFFFFF'
                    }}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle size={14} />
                    ) : (
                      <AlertCircle size={14} />
                    )}
                    {submitMessage}
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid #374151',
          padding: '32px 0'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
          <div className="flex justify-center items-center">
            <div
              style={{
                fontSize: '14px',
                color: '#9CA3AF'
              }}
            >
              © 2025 Peak Automation Group LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
} 