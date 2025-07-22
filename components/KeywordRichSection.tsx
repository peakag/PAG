'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react'

const localBenefits = [
  {
    icon: MapPin,
    title: "Atlanta-Based Support",
    description: "Local implementation and ongoing support from our Atlanta team. We understand Georgia's fitness market dynamics and regulations."
  },
  {
    icon: Users,
    title: "Georgia Gym Network",
    description: "Join our network of successful Georgia gyms using our AI gym retention software. Share best practices and proven strategies."
  },
  {
    icon: TrendingUp,
    title: "Southeast Market Expertise",
    description: "Specialized knowledge of the competitive Southeast fitness market. Our software adapts to regional member behaviors and preferences."
  },
  {
    icon: Shield,
    title: "Georgia Compliance",
    description: "Full compliance with Georgia business regulations and data protection laws. Your member data stays secure and compliant."
  }
]

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
            Georgia's Leading Fitness Retention System
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
            Stop gym member churn with Atlanta's most advanced AI gym retention software. Our fitness retention system is specifically designed for Georgia gym owners who want to protect their member base and grow their revenue.
          </motion.p>
        </div>

        {/* Local Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {localBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(65, 105, 225, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(65, 105, 225, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <benefit.icon size={24} className="text-blue-400" />
              </div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.5'
                }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
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
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            Ready to Stop Losing Members?
          </h3>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}
          >
            Join hundreds of Atlanta gym owners who've already reduced member churn by 30% with our AI gym retention software. Get your free consultation today.
          </p>
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
              <ArrowRight size={18} />
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