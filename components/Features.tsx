'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const automationSystems = [
  {
    title: "Smart Lead Follow-Up",
    description: "Never miss another trial signup. Automated sequences nurture leads until they convert.",
    keyBenefit: "Convert more trials to members"
  },
  {
    title: "Member Retention Radar",
    description: "Spot at-risk members before they even think about canceling.",
    keyBenefit: "Reduce churn predictively"
  },
  {
    title: "Payment Recovery System",
    description: "Failed payments get resolved automatically with smart retry logic.",
    keyBenefit: "Recover lost revenue instantly"
  },
  {
    title: "Operations Dashboard",
    description: "All your metrics in one place. No more spreadsheet juggling.",
    keyBenefit: "Make data-driven decisions"
  },
  {
    title: "Smart Class Optimizer",
    description: "Fill classes based on member preferences and historical patterns.",
    keyBenefit: "Maximize class attendance"
  },
  {
    title: "Equipment Maintenance Tracker",
    description: "Prevent breakdowns with automated maintenance scheduling.",
    keyBenefit: "Zero equipment downtime"
  },
  {
    title: "Personalized Member Messaging",
    description: "Send the right message at the right time to every member.",
    keyBenefit: "Scale personal touch"
  },
  {
    title: "Revenue Intelligence",
    description: "Identify upsell opportunities and optimize pricing automatically.",
    keyBenefit: "Increase per-member value"
  },
  {
    title: "Staff Workflow Automation",
    description: "Eliminate repetitive tasks so your team can focus on members.",
    keyBenefit: "Boost team productivity"
  },
  {
    title: "Competitive Analytics",
    description: "Track your performance against market benchmarks.",
    keyBenefit: "Stay ahead of competition"
  }
]

export default function Features() {
  return (
    <section 
      id="features" 
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
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
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1A1A1A',
              fontWeight: 600,
              marginBottom: '16px',
              lineHeight: '1.2'
            }}
          >
            10 Systems That Run Your Gym on Autopilot
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: '#4A5568',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Each system integrates with your existing software and starts working in days, not months
          </motion.p>
        </div>

        {/* Automation Systems Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {automationSystems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{
                boxShadow: '0 4px 12px rgba(24, 64, 186, 0.1)',
                transform: 'translateY(-2px)'
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}
              >
                {system.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: 1.5,
                  marginBottom: '12px',
                  flex: 1
                }}
              >
                {system.description}
              </p>

              {/* Key Benefit */}
              <div
                style={{
                  fontSize: '14px',
                  color: '#1840BA',
                  fontWeight: 500
                }}
              >
                {system.keyBenefit}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
            Ready to automate your gym operations?
          </p>
          <motion.a
            href="/solutions"
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
            Learn More
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 