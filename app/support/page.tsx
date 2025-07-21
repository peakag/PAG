'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Clock, MessageCircle, Phone, MapPin, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Support() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Support Page Content */}
      <section 
        className="bg-black relative overflow-hidden"
        style={{ padding: '120px 0 100px 0' }}
      >
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.a
                href="/"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </motion.a>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="h1"
                style={{
                  marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Contact Support
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-text"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Need help with your Peak Automation Group system? Our support team is here to help 
                you maximize your member retention results.
              </motion.p>
            </div>

            {/* Support Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Email Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(65, 105, 225, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}
                >
                  <Mail size={32} className="text-blue-400" />
                </div>
                
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}
                >
                  Email Support
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}
                >
                  Get detailed help with technical issues, account questions, or general inquiries. 
                  We typically respond within 2-4 hours during business hours.
                </p>
                
                <motion.a
                  href="mailto:support@peakautomationgroup.com"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  support@peakautomationgroup.com
                  <Mail size={16} />
                </motion.a>
              </motion.div>

              {/* Phone Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}
                >
                  <Phone size={32} className="text-green-400" />
                </div>
                
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}
                >
                  Phone Support
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}
                >
                  Speak directly with our support team for urgent issues or complex questions. 
                  Available during business hours for immediate assistance.
                </p>
                
                <motion.a
                  href="tel:+1-555-123-4567"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  (555) 123-4567
                  <Phone size={16} />
                </motion.a>
              </motion.div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: '16px'
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 193, 7, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Clock size={24} className="text-yellow-400" />
                </div>
                
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: '16px'
                    }}
                  >
                    Business Hours
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4
                        style={{
                          fontSize: '16px',
                          color: '#FFFFFF',
                          fontWeight: 500,
                          marginBottom: '8px'
                        }}
                      >
                        Support Hours
                      </h4>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'rgba(255, 255, 255, 0.7)',
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
                          fontSize: '16px',
                          color: '#FFFFFF',
                          fontWeight: 500,
                          marginBottom: '8px'
                        }}
                      >
                        Emergency Support
                      </h4>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'rgba(255, 255, 255, 0.7)',
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

            {/* Support Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: '16px'
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '24px',
                  textAlign: 'center'
                }}
              >
                What's Included in Your Support
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}
                    >
                      24/7 System Monitoring
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5'
                      }}
                    >
                      Proactive monitoring and automatic issue detection
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}
                    >
                      Dedicated Account Manager
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5'
                      }}
                    >
                      Personal support contact for your gym
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}
                    >
                      Quarterly Business Reviews
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5'
                      }}
                    >
                      Regular check-ins to optimize performance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}
                    >
                      Staff Training Support
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5'
                      }}
                    >
                      Ongoing training for new team members
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}
                    >
                      Custom Integration Help
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5'
                      }}
                    >
                      Assistance with third-party integrations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}
                    >
                      Performance Optimization
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.5'
                      }}
                    >
                      Continuous improvement recommendations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 5vw, 3rem)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(65, 105, 225, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <MessageCircle size={32} className="text-blue-400" />
              </div>
              
              <h3
                style={{
                  fontSize: '24px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Need More Help?
              </h3>
              
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                  maxWidth: '500px',
                  margin: '0 auto 32px'
                }}
              >
                Can't find what you're looking for? Schedule a strategy call with our team 
                to get personalized support and optimization recommendations.
              </p>
              
              <motion.a
                href="/book-call"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Strategy Call
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 