'use client'

import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  Target, 
  Magnet, 
  Shield, 
  BarChart3, 
  TrendingUp 
} from 'lucide-react'

// Floating Particle Component
function FloatingParticle({ delay = 0, duration = 20, size = 4, opacity = 0.02 }: { 
  delay?: number, 
  duration?: number, 
  size?: number, 
  opacity?: number 
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: '#4169E1',
        borderRadius: '50%',
        opacity: opacity
      }}
      animate={{
        y: [-20, -100, -20],
        x: [0, 30, 0],
        opacity: [opacity, opacity * 2, opacity]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
}

const features = [
  {
    icon: AlertTriangle,
    title: "AI-Powered Early Warning System",
    subtitle: "Predict Member Churn 21 Days Early",
    description: "Our gym member retention software tracks 47 behavioral signals using advanced AI algorithms. From missed classes to app engagement patterns, we identify at-risk members before they decide to cancel. Stop gym member churn before it starts."
  },
  {
    icon: Target,
    title: "Intelligent Member Tracking",
    subtitle: "Find Every At-Risk Member",
    description: "Our AI gym retention system monitors every check-in, payment, and interaction. Unlike traditional gym software, Atlanta fitness businesses using our platform catch disengagement on day 3, not month 3. No more invisible member losses."
  },
  {
    icon: Magnet,
    title: "Automated Retention Campaigns",
    subtitle: "Bring Members Back Automatically",
    description: "Stop crafting generic retention emails. Our fitness retention system sends personalized messages at the perfect time — whether it's a workout reminder, coach check-in, or limited-time offer. Each member gets what actually works for them."
  },
  {
    icon: Shield,
    title: "Payment Failure Prevention",
    subtitle: "Protect Your Revenue Stream",
    description: "Expired cards and failed payments kill gym revenue. Our gym member retention software catches payment issues 14 days early, sends smart reminders, and updates payment info automatically. Keep your recurring revenue flowing."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    subtitle: "Track Retention Success Daily",
    description: "Stop guessing what works. Our comprehensive dashboard shows who's at risk, who's been saved, and exactly how much money you're keeping. Every retention win tracked. Every dollar saved counted. ROI proven daily."
  },
  {
    icon: TrendingUp,
    title: "Revenue Maximization Engine",
    subtitle: "Turn Saves Into Upsells",
    description: "Members you save are 3x more likely to upgrade. Our AI gym retention software identifies perfect moments to suggest personal training, premium memberships, or add-ons. Save them today, upsell them tomorrow, watch revenue soar."
  }
]

export default function Features() {
  return (
    <section 
      id="features" 
      className="bg-black relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.8}
            duration={20 + Math.random() * 15}
            size={2 + Math.random() * 4}
            opacity={0.015 + Math.random() * 0.02}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              lineHeight: '1.2'
            }}
          >
            AI Gym Retention Software Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Our comprehensive gym member retention software combines AI technology with proven strategies to stop member churn before it impacts your Atlanta fitness business.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="responsive-grid-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '32px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(65, 105, 225, 0.2)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(65, 105, 225, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={24} style={{ color: '#4169E1' }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '8px',
                    flexShrink: 0
                  }}
                >
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <h4
                  style={{
                    fontSize: '14px',
                    color: '#4169E1',
                    fontWeight: 600,
                    marginBottom: '16px',
                    flexShrink: 0,
                    letterSpacing: '0.02em'
                  }}
                >
                  {feature.subtitle}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.6',
                    flex: 1
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Keyword-Rich Section */}
      <div className="container-max mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}
              >
                Atlanta's Premier Gym Software for Member Retention
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}
              >
                As Georgia's leading fitness retention system provider, we understand the unique challenges Atlanta gym owners face. Our AI gym retention software is specifically designed for the competitive fitness market in the Southeast.
              </p>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}
              >
                Whether you're running a CrossFit box in Buckhead, a yoga studio in Midtown, or a traditional gym in Marietta, our gym member retention software adapts to your specific needs and member demographics.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/about"
                  style={{
                    background: 'linear-gradient(135deg, #4169E1, #7B9EFF)',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 500,
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
                  Learn About Our Team
                </a>
                <a
                  href="/book-call"
                  style={{
                    border: '1px solid rgba(65, 105, 225, 0.3)',
                    color: '#4169E1',
                    padding: '12px 24px',
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
                  Schedule Free Demo
                </a>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                Why Atlanta Gym Owners Choose Our Retention Software:
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                {[
                  'Local Atlanta support and implementation',
                  'Understanding of Georgia fitness market dynamics',
                  'Integration with popular Southeast gym software',
                  'Proven results with Atlanta-area gyms',
                  'Compliance with Georgia business regulations'
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '1rem'
                    }}
                  >
                    <span
                      style={{
                        color: '#10B981',
                        marginRight: '0.75rem',
                        fontSize: '1.25rem'
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 