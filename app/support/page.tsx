'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Clock, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


export default function Support() {
  return (
    <main className="min-h-screen bg-white">
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
              We're Here to Help You Succeed
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
              Get expert support for your automation systems with dedicated account management and 24/7 monitoring.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
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
            How We Can Help
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: '#F0F7FF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
              >
                <Mail size={32} style={{ color: '#1840BA' }} />
              </div>
              
              <h3
                style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Email Support
              </h3>
              
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}
              >
                Get detailed help with technical issues, account questions, or general inquiries. 
                We typically respond within 2-4 hours during business hours.
              </p>
              
              <motion.a
                href="mailto:support@peakautomationgroup.com"
                className="inline-flex items-center gap-2 transition-colors duration-200 font-medium"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  color: '#1840BA',
                  textDecoration: 'none'
                }}
              >
                support@peakautomationgroup.com
                <Mail size={16} />
              </motion.a>
            </motion.div>

            {/* Priority Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: '#F0F7FF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
              >
                <MessageCircle size={32} style={{ color: '#1840BA' }} />
              </div>
              
              <h3
                style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Priority Support
              </h3>
              
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}
              >
                Need immediate assistance? Schedule a strategy call with our team for personalized support and optimization recommendations.
              </p>
              
              <motion.a
                href="/book-call"
                style={{
                  background: '#1840BA',
                  color: 'white',
                  padding: '12px 24px',
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
                Book a Strategy Call
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section 
        style={{ 
          background: '#F8F9FA',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '48px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: '#F0F7FF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock size={24} style={{ color: '#1840BA' }} />
              </div>
              
              <div>
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '24px'
                  }}
                >
                  Support Hours
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4
                      style={{
                        fontSize: '18px',
                        color: '#1A1A1A',
                        fontWeight: 500,
                        marginBottom: '12px'
                      }}
                    >
                      Standard Support
                    </h4>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#4A5568',
                        lineHeight: '1.6'
                      }}
                    >
                      Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                      Saturday: 9:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h4
                      style={{
                        fontSize: '18px',
                        color: '#1A1A1A',
                        fontWeight: 500,
                        marginBottom: '12px'
                      }}
                    >
                      Emergency Support
                    </h4>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#4A5568',
                        lineHeight: '1.6'
                      }}
                    >
                      Critical system issues: 24/7<br />
                      Response time: Within 30 minutes<br />
                      Contact: support@peakautomationgroup.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Features Section */}
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
            What's Included in Your Support
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} style={{ color: '#10B981', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h4
                  style={{
                    fontSize: '18px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  24/7 System Monitoring
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  Proactive monitoring and automatic issue detection
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} style={{ color: '#10B981', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h4
                  style={{
                    fontSize: '18px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Dedicated Account Manager
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  Personal support contact for your gym
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} style={{ color: '#10B981', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h4
                  style={{
                    fontSize: '18px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Quarterly Business Reviews
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  Regular check-ins to optimize performance
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} style={{ color: '#10B981', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h4
                  style={{
                    fontSize: '18px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Staff Training Support
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  Ongoing training for new team members
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} style={{ color: '#10B981', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h4
                  style={{
                    fontSize: '18px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Custom Integration Help
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  Assistance with third-party integrations
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} style={{ color: '#10B981', marginTop: '4px', flexShrink: 0 }} />
              <div>
                <h4
                  style={{
                    fontSize: '18px',
                    color: '#1A1A1A',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Performance Optimization
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  Continuous improvement recommendations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{ 
          background: '#F8F9FA',
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
                marginBottom: '16px'
              }}
            >
              Still Need Help?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                color: '#4A5568',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6'
              }}
            >
              Can't find what you're looking for? Schedule a strategy call with our team for personalized support and optimization recommendations.
            </motion.p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="/book-call"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                Book a Strategy Call
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/solutions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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