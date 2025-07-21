'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, Shield, Calendar, Zap, Target } from 'lucide-react'

export default function Pricing() {
  return (
    <section 
      id="pricing" 
      className="bg-black relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4169E1'
            }}
          >
            INVESTMENT
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h2"
            style={{
              marginBottom: 'clamp(1rem, 3vw, 1.25rem)'
            }}
          >
            Pricing Built Around Your Gym's Success
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text"
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: '1.7'
            }}
          >
            Every gym is unique. Your retention solution should be too. We create custom packages based on your member count, goals, and growth trajectory.
          </motion.p>
        </div>

        {/* Main Content - Value Proposition Box */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(65, 105, 225, 0.05)',
              border: '1px solid rgba(65, 105, 225, 0.2)',
              borderRadius: '16px',
              padding: '48px',
              textAlign: 'center'
            }}
          >
            <h3
              style={{
                fontSize: '32px',
                color: '#FFFFFF',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              Your Investment Scales with Your Results
            </h3>
            
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '40px'
              }}
            >
              Our pricing reflects the value we deliver — typically 10x ROI within 90 days
            </p>

            {/* Value Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div
                  style={{
                    background: 'rgba(65, 105, 225, 0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <Users size={32} className="text-blue-400" />
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontWeight: 500
                  }}
                >
                  Packages from 100 to 10,000+ members
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div
                  style={{
                    background: 'rgba(65, 105, 225, 0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <TrendingUp size={32} className="text-blue-400" />
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontWeight: 500
                  }}
                >
                  Pay only for the features you need
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div
                  style={{
                    background: 'rgba(65, 105, 225, 0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <Shield size={32} className="text-blue-400" />
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#FFFFFF',
                    fontWeight: 500
                  }}
                >
                  Transparent pricing with no hidden fees
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <div className="mb-8">
              <h4
                style={{
                  fontSize: '28px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                Get Your Custom Quote
              </h4>
              
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '32px'
                }}
              >
                Takes 2 minutes. No obligations. Immediate response.
              </p>

              <div className="flex justify-center mb-6">
                <motion.a
                  href="/book-call"
                  style={{
                    background: '#4169E1',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(65, 105, 225, 0.3)',
                    textDecoration: 'none'
                  }}
                  whileHover={{
                    boxShadow: '0 8px 30px rgba(65, 105, 225, 0.5)',
                    transform: 'translateY(-2px)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  Discuss Your Investment
                </motion.a>
              </div>

              <p
                style={{
                  fontSize: '16px',
                  color: '#10B981',
                  fontWeight: 500
                }}
              >
                Join 20+ gyms already transforming their retention
              </p>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
} 