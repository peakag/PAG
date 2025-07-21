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
    title: "The Early Warning System",
    subtitle: "Your 21-Day Crystal Ball",
    description: "Forget finding out when they cancel. Know 3 weeks before they even decide. Our AI tracks 47 behavioral signals — from missed classes to app opens — and alerts you the moment someone starts slipping. Sarah missed spin class twice? We're already on it."
  },
  {
    icon: Target,
    title: "The Ghost Hunter",
    subtitle: "Finds Every MIA Member",
    description: "That member who \"just stopped coming\"? We catch them on day 3, not month 3. Our AI monitors every check-in, spots patterns you'd never see, and triggers saves before they become statistics. No more invisible losses."
  },
  {
    icon: Magnet,
    title: "The Win-Back Machine",
    subtitle: "Brings Them Back (Automatically)",
    description: "Stop crafting desperate \"we miss you\" emails. Our AI sends the perfect message at the perfect time — whether it's a workout reminder, a coach check-in, or a limited-time offer. Each member gets what actually works for them. You don't lift a finger."
  },
  {
    icon: Shield,
    title: "The Revenue Protector",
    subtitle: "Never Lose Another Payment",
    description: "Expired cards killed $2,400 of your revenue last month. Our AI catches them 14 days early, sends smart reminders, and updates payment info automatically. Your recurring revenue stays recurring. Period."
  },
  {
    icon: BarChart3,
    title: "The Success Scorecard",
    subtitle: "Know Everything. In Real-Time.",
    description: "Stop guessing what works. See who's at risk, who's saved, and exactly how much money you're keeping. Every retention win tracked. Every dollar saved counted. ROI proven daily. Numbers don't lie."
  },
  {
    icon: TrendingUp,
    title: "The Profit Maximizer",
    subtitle: "Turn Saves Into Upsells",
    description: "Members you save are 3x more likely to upgrade. Our AI identifies perfect moments to suggest personal training, premium memberships, or add-ons. Save them today. Upsell them tomorrow. Watch revenue soar."
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
        
        {/* Subtle Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.005) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.005) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              color: '#4169E1',
              fontWeight: 600
            }}
          >
            THE PEAK SYSTEM
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
            Catch Them Before They Cancel
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text"
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
                            Our AI agents work 24/7 to save every at-risk member. No manual work. No missed warnings. Just pure retention on autopilot.
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
    </section>
  )
} 