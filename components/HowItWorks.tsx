'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Download, Calendar } from 'lucide-react'

const phases = [
  {
    number: "01",
    title: "Seamless Integration",
    timeline: "Week 1",
    description: "Our platform integrates directly with Mindbody, Glofox, and 15+ major gym management systems. One-click authorization syncs your member data, attendance history, and payment records. Your data remains secure with enterprise-grade encryption throughout the process.",
    outcomes: [
      "Complete data synchronization",
      "Historical pattern analysis begins",
      "Zero manual data entry required"
    ]
  },
  {
    number: "02",
    title: "Intelligent Analysis",
    timeline: "Week 2",
    description: "Our machine learning algorithms analyze thousands of data points to understand your unique member behaviors. The system identifies patterns, risk indicators, and optimal intervention timing specific to your gym's member base.",
    outcomes: [
      "Predictive models calibrated to your gym",
      "Risk scoring for every member",
      "Customized retention strategies developed"
    ]
  },
  {
    number: "03",
    title: "Automated Engagement",
    timeline: "Week 3",
    description: "Your personalized retention system goes live. At-risk members receive perfectly timed interventions — from friendly check-ins to special offers. Every message is personalized based on member history and preferences.",
    outcomes: [
      "Automated campaigns activated",
      "First at-risk members engaged",
      "Real-time response tracking begins"
    ]
  },
  {
    number: "04",
    title: "Continuous Optimization",
    timeline: "Week 4 & Beyond",
    description: "Monitor your retention improvements through comprehensive dashboards. Our AI continuously learns from results, optimizing message timing, content, and channel selection for increasingly better outcomes.",
    outcomes: [
      "30% average churn reduction",
      "ROI tracking and reporting",
      "Ongoing strategy refinement"
    ]
  }
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="how-it-works" 
      className="bg-black relative overflow-hidden"
      style={{ 
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(65, 105, 225, 0.05) 0%, transparent 100px)'
      }}
    >
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
            IMPLEMENTATION PROCESS
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
            From Setup to Success in 30 Days
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
            A proven four-phase implementation that integrates seamlessly with your existing operations. No disruption. No downtime. Just results.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <motion.div
              className="w-full bg-white/10"
              style={{ height: '100%' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Phases */}
          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0
              const stepRef = useRef(null)
              const stepInView = useInView(stepRef, { once: true, margin: "-50px" })

              return (
                <motion.div
                  key={phase.number}
                  ref={stepRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-16`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-blue-600 rounded-full z-10" />

                  {/* Phase Card */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '32px',
                        maxWidth: '500px',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderColor: 'rgba(65, 105, 225, 0.2)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Phase Number */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: '#4169E1',
                          background: 'rgba(65, 105, 225, 0.1)',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          display: 'inline-block',
                          marginBottom: '16px'
                        }}
                      >
                        {phase.number}
                      </div>

                      {/* Phase Title */}
                      <h3
                        style={{
                          fontSize: '24px',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          marginBottom: '8px'
                        }}
                      >
                        {phase.title}
                      </h3>

                      {/* Timeline */}
                      <div
                        style={{
                          fontSize: '14px',
                          color: '#4169E1',
                          fontWeight: 600,
                          marginBottom: '16px'
                        }}
                      >
                        {phase.timeline}
                      </div>

                      {/* Phase Description */}
                      <p
                        style={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.6)',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}
                      >
                        {phase.description}
                      </p>

                      {/* Key Outcomes */}
                      <div>
                        <h4
                          style={{
                            fontSize: '14px',
                            color: '#FFFFFF',
                            fontWeight: 600,
                            marginBottom: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Key Outcomes:
                        </h4>
                        <ul className="space-y-2">
                          {phase.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check size={16} style={{ color: '#10B981', marginTop: '2px', flexShrink: 0 }} />
                              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden w-4 h-4 bg-black border-2 border-blue-600 rounded-full my-4" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '48px',
              maxWidth: '700px',
              margin: '0 auto'
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
              Ready to Transform Your Retention?
            </h3>
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '32px'
              }}
            >
              Join leading gyms that have already automated their member retention and secured predictable revenue growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                style={{
                  background: '#4169E1',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(65, 105, 225, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'center'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 30px rgba(65, 105, 225, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar size={20} />
                Schedule Implementation Call
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Check size={16} style={{ color: '#10B981' }} />
                <span>No IT resources required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} style={{ color: '#10B981' }} />
                <span>Works with your current systems</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 