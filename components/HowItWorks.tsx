'use client'

import { motion } from 'framer-motion'
import { Search, Settings, Users, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Discovery Audit",
    timeline: "Day 1-3",
    description: "We analyze your current operations, identify bottlenecks, and map out which systems will have the biggest impact on your bottom line.",
    icon: Search
  },
  {
    number: "02",
    title: "Custom Configuration",
    timeline: "Day 4-14",
    description: "We configure and connect the right automation tools to your existing software. No disruption, no learning curve for your team.",
    icon: Settings
  },
  {
    number: "03",
    title: "Team Training",
    timeline: "Day 15-21",
    description: "Your staff learns to monitor the systems through simple dashboards. Most processes run automatically without any input needed.",
    icon: Users
  },
  {
    number: "04",
    title: "Optimization & Scale",
    timeline: "Day 22+",
    description: "We continuously optimize based on data and add new automations as your gym grows. You see ROI within the first month.",
    icon: TrendingUp
  }
]

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      style={{ 
        background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
        paddingTop: 'clamp(60px, 8vw, 80px)',
        paddingBottom: 'clamp(60px, 8vw, 80px)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1A1A1A',
              fontWeight: 600,
              marginBottom: '16px',
              lineHeight: '1.2'
            }}
          >
            From Overwhelmed to Automated in 30 Days
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: '#4A5568',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Our proven implementation process ensures zero disruption to your operations
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div 
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-200"
            style={{ 
              marginLeft: '12.5%',
              marginRight: '12.5%',
              width: '75%'
            }}
          />

          {/* Steps Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '32px',
              marginBottom: '48px'
            }}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  
                  {/* Step Card */}
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '32px 24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        background: '#F0F7FF',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px auto'
                      }}
                    >
                      <IconComponent size={24} style={{ color: '#3F92FA' }} />
                    </div>

                    {/* Step Number */}
                    <div
                      style={{
                        fontSize: '48px',
                        color: '#3F92FA',
                        fontWeight: 700,
                        marginBottom: '16px',
                        lineHeight: '1'
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '24px',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Timeline */}
                    <div
                      style={{
                        fontSize: '14px',
                        color: '#1840BA',
                        fontWeight: 500,
                        marginBottom: '16px'
                      }}
                    >
                      {step.timeline}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#4A5568',
                        lineHeight: 1.6,
                        flex: 1
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: '48px' }}
        >
          <p
            style={{
              fontSize: '18px',
              color: '#1A1A1A',
              marginBottom: '24px',
              fontWeight: 500
            }}
          >
            Most gyms see results within the first week
          </p>
          <motion.a
            href="/book-call"
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
            Start Your Automation Journey
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 