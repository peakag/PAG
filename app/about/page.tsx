'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  // About page structured data
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peak Automation Group",
    "description": "AI-powered retention system for gyms to reduce member churn by 30% in 90 days",
    "url": "https://peakautomationgroup.com",
    "logo": "https://peakautomationgroup.com/pag-logo.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/peak-automation-group"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gym Retention Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Member Retention System",
            "description": "Reduce gym member churn by 30% in 90 days"
          }
        }
      ]
    }
  }

  return (
    <main className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
          padding: '120px 0 80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Back to Home Button */}
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 transition-colors duration-200 mb-8"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
            style={{ 
              textDecoration: 'none', 
              display: 'inline-block',
              color: '#1840BA',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.a>
          
          <div className="text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: '48px',
                color: '#1A1A1A',
                fontWeight: 700,
                maxWidth: '900px',
                margin: '0 auto 24px auto',
                lineHeight: '1.1'
              }}
            >
              We're on a Mission to Give Gym Owners Their Lives Back
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: '#4A5568',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              Peak Automation Group helps fitness businesses thrive through intelligent automation, so owners can focus on their passion instead of paperwork.
            </motion.p>
          </div>
        </div>
      </section>



      {/* What We Do Section */}
      <section 
        style={{ 
          background: '#F8F9FA',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                color: '#1A1A1A',
                fontWeight: 700,
                marginBottom: '32px',
                textAlign: 'center'
              }}
            >
              Automation Architects for the Fitness Industry
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#4A5568',
                marginBottom: '32px'
              }}
            >
              <p style={{ marginBottom: '24px' }}>
                We're not another software company. We're automation specialists who understand the unique challenges of running a fitness business.
              </p>
              
              <p>
                We take the best AI and automation tools available—the same ones used by Fortune 500 companies—and configure them specifically for gyms. No coding, no complex software to learn, just systems that work from day one.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#4A5568',
                listStyle: 'none',
                padding: 0
              }}
            >
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#1840BA', fontWeight: 'bold', marginRight: '12px' }}>•</span>
                Expert implementation of 10+ automation systems
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#1840BA', fontWeight: 'bold', marginRight: '12px' }}>•</span>
                Integration with your existing software
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#1840BA', fontWeight: 'bold', marginRight: '12px' }}>•</span>
                Full training and ongoing optimization
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#1840BA', fontWeight: 'bold', marginRight: '12px' }}>•</span>
                ROI-focused approach to every solution
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section 
        style={{ 
          background: '#FFFFFF',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            The Peak Automation Difference
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '32px 24px'
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Industry Expertise
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                We speak gym, not tech. Every solution is designed around real fitness business workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '32px 24px'
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Proven Systems
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                We only implement tools that have been tested and proven across hundreds of gyms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '32px 24px'
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Partnership Approach
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                We're not vendors, we're partners in your success with ongoing support and optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        style={{ 
          background: '#F8F9FA',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            What Drives Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px 24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                Results First
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                If it doesn't improve your bottom line, we don't recommend it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px 24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                Simplicity
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                Powerful automation doesn't have to be complicated.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px 24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                Transparency
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                No hidden fees, no surprises, just clear ROI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px 24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                Continuous Innovation
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                We stay ahead of the curve so you don't have to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section 
        style={{ 
          background: '#FFFFFF',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            The Team Behind Your Automation
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kevin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              {/* Headshot */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #1840BA'
                }}>
                  <Image
                    src="/kevin-headshot-v2.jpg"
                    alt="Kevin - Co-Founder of Peak Automation Group"
                    width={150}
                    height={150}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                    priority
                  />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Kevin
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: '#1840BA',
                    fontWeight: 500,
                    marginBottom: '24px'
                  }}
                >
                  Co-Founder
                </p>

                <blockquote
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4A5568',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                    borderLeft: '3px solid #1840BA',
                    paddingLeft: '16px'
                  }}
                >
                  "Having been a college athlete, I understand the dedication it takes to transform lives through fitness. Our mission is to give that same time and energy back to gym owners by eliminating the operational burden that keeps them from their true calling."
                </blockquote>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}
                >
                  Former college hockey player bringing competitive excellence to gym automation
                </p>
              </div>
            </motion.div>

            {/* Alex */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              {/* Headshot */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #1840BA'
                }}>
                  <Image
                    src="/alex-PAG.jpg"
                    alt="Alex - Co-Founder of Peak Automation Group"
                    width={150}
                    height={150}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    priority
                  />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Alex
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: '#1840BA',
                    fontWeight: 500,
                    marginBottom: '24px'
                  }}
                >
                  Co-Founder
                </p>

                <blockquote
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4A5568',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                    borderLeft: '3px solid #1840BA',
                    paddingLeft: '16px'
                  }}
                >
                  "Every gym owner starts their business to help people, not to spend nights doing paperwork. We leverage cutting-edge AI to handle the business side, so gym owners can focus on what they do best—changing lives."
                </blockquote>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}
                >
                  Technology strategist with deep connections in enterprise automation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section 
        style={{ 
          background: '#FFFFFF',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                color: '#1A1A1A',
                fontWeight: 700,
                marginBottom: '32px'
              }}
            >
              Ready to Transform Your Gym Operations?
            </motion.h2>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="/book-call"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#1840BA',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(24, 64, 186, 0.4), 0 0 40px rgba(24, 64, 186, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)',
                  animation: 'pulse-glow 2s ease-in-out infinite alternate'
                }}
                whileHover={{
                  backgroundColor: '#0F2B70',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 0 30px rgba(24, 64, 186, 0.6), 0 0 60px rgba(24, 64, 186, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book a FREE Strategy Call
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/solutions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: '#1840BA',
                  color: '#FFFFFF'
                }}
                style={{
                  background: 'transparent',
                  color: '#1840BA',
                  border: '2px solid #1840BA',
                  padding: '14px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 