'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, DollarSign, Zap, TrendingUp, Clock, Shield, Users, BarChart3, Calculator, Star } from 'lucide-react'

export default function Pricing() {
  return (
    <>
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
              Custom Pricing for Your Success
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: '#4A5568',
                maxWidth: '700px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Transparent pricing tailored to your gym's size, needs, and growth goals. No hidden fees, just proven ROI.
            </motion.p>

            {/* Primary CTA */}
            <motion.a
              href="/book-call"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: '#1840BA',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(24, 64, 186, 0.4), 0 0 40px rgba(24, 64, 186, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)',
                animation: 'pulse-glow 2s ease-in-out infinite alternate',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              whileHover={{
                backgroundColor: '#0F2B70',
                transform: 'translateY(-1px)',
                boxShadow: '0 0 30px rgba(24, 64, 186, 0.6), 0 0 60px rgba(24, 64, 186, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Custom Quote
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '16px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                color: '#4A5568',
                maxWidth: '600px',
                margin: '0 auto',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Every gym is unique. Our pricing reflects your specific needs, size, and automation requirements.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Installation Fee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Zap size={32} style={{ color: '#1840BA', marginRight: '16px' }} />
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  One-Time Installation
                </h3>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6',
                marginBottom: '24px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                Custom setup fee based on your gym's complexity and system requirements. Includes full integration, testing, and staff training.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Complete system integration',
                  'Data migration & setup',
                  'Staff training sessions',
                  'Testing & optimization',
                  'Go-live support'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: '#4A5568',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  }}>
                    <CheckCircle size={16} style={{ color: '#10B981', marginRight: '12px', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Monthly Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '2px solid #1840BA',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 25px rgba(24, 64, 186, 0.15)',
                position: 'relative'
              }}
            >
              {/* Popular Badge */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1840BA',
                color: 'white',
                padding: '6px 20px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                ONGOING SUPPORT
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <Shield size={32} style={{ color: '#1840BA', marginRight: '16px' }} />
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  Monthly Maintenance
                </h3>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6',
                marginBottom: '24px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                Comprehensive 24/7 support and maintenance to keep your systems running perfectly. Includes updates, monitoring, and optimization.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '24/7 system monitoring',
                  'Automatic updates & patches',
                  'Performance optimization',
                  'Priority technical support',
                  'Monthly reporting & insights',
                  'Feature enhancements'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: '#4A5568',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  }}>
                    <CheckCircle size={16} style={{ color: '#10B981', marginRight: '12px', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section style={{ background: '#F8F9FA', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '16px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Investment That Pays for Itself
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                color: '#4A5568',
                maxWidth: '700px',
                margin: '0 auto',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Our automation systems typically pay for themselves within 3-6 months through increased retention and operational efficiency.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Average ROI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <TrendingUp size={48} style={{ color: '#10B981', margin: '0 auto 16px auto' }} />
              <h3 style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#10B981',
                marginBottom: '8px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                300%+
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                Average ROI within first year
              </p>
            </motion.div>

            {/* Time Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Clock size={48} style={{ color: '#1840BA', margin: '0 auto 16px auto' }} />
              <h3 style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#1840BA',
                marginBottom: '8px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                20+ hrs
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                Saved per week in operations
              </p>
            </motion.div>

            {/* Revenue Increase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <DollarSign size={48} style={{ color: '#F59E0B', margin: '0 auto 16px auto' }} />
              <h3 style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#F59E0B',
                marginBottom: '8px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                15-25%
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                Average revenue increase
              </p>
            </motion.div>
          </div>

          {/* ROI Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#1A1A1A',
              marginBottom: '24px',
              textAlign: 'center',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}>
              How Your Investment Pays Off
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1840BA',
                  marginBottom: '16px',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  Cost Savings
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Reduced staff overtime costs',
                    'Lower member churn rates',
                    'Decreased payment processing fees',
                    'Minimized missed opportunities'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '12px',
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    }}>
                      <CheckCircle size={16} style={{ color: '#10B981', marginRight: '12px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1840BA',
                  marginBottom: '16px',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  Revenue Growth
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Improved member retention rates',
                    'Increased lead conversion',
                    'Better payment collection',
                    'Enhanced member experience'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '12px',
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    }}>
                      <CheckCircle size={16} style={{ color: '#10B981', marginRight: '12px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '16px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              Why We Use Custom Pricing
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Gym Size Matters',
                description: 'A 100-member studio has different needs than a 1,000-member facility.'
              },
              {
                icon: BarChart3,
                title: 'System Complexity',
                description: 'Number of integrations and automation systems affects implementation scope.'
              },
              {
                icon: Calculator,
                title: 'Current Setup',
                description: 'Your existing software and processes influence integration requirements.'
              },
              {
                icon: Star,
                title: 'Growth Goals',
                description: 'We scale our solutions to match your expansion and revenue targets.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#F8F9FA',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center'
                }}
              >
                <item.icon size={48} style={{ color: '#1840BA', margin: '0 auto 16px auto' }} />
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  marginBottom: '12px',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#4A5568',
                  lineHeight: '1.6',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#1840BA', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '16px',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            Ready to Get Your Custom Quote?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '18px',
              color: '#E5E7EB',
              maxWidth: '600px',
              margin: '0 auto 32px auto',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            Schedule a strategy call to discuss your specific needs and get a personalized pricing proposal.
          </motion.p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="/book-call"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                color: '#1840BA',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              whileHover={{
                transform: 'translateY(-1px)',
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book Strategy Call
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="/solutions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: '#FFFFFF'
              }}
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '2px solid rgba(255, 255, 255, 0.3)',
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
              View Our Systems
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
