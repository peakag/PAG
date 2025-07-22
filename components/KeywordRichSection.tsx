'use client'

import { motion } from 'framer-motion'

export default function KeywordRichSection() {
  return (
    <section 
      className="bg-black relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(65, 105, 225, 0.05) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              lineHeight: '1.2'
            }}
          >
            Ready to Stop Losing Members?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Join hundreds of gym owners who've already reduced member churn by 30% with our AI-powered retention software. Get your free consultation today.
          </motion.p>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(65, 105, 225, 0.1), rgba(123, 158, 255, 0.05))',
            border: '1px solid rgba(65, 105, 225, 0.2)',
            borderRadius: '16px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            textAlign: 'center'
          }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-call"
              style={{
                background: 'linear-gradient(135deg, #4169E1, #7B9EFF)',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(65, 105, 225, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Schedule Free Demo
            </a>
            <a
              href="/faq"
              style={{
                border: '1px solid rgba(65, 105, 225, 0.3)',
                color: '#4169E1',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(65, 105, 225, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              View FAQ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 