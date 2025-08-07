'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "Will automation work with my existing gym management software?",
    answer: "Yes. We integrate with all major platforms including MindBody, Glofox, Zen Planner, Club OS, and more. Our systems enhance what you already have rather than replacing it."
  },
  {
    id: 2,
    question: "How long does implementation really take?",
    answer: "Most gyms have their first automations running within 7 days. Full implementation typically takes 30 days, with zero downtime to your operations."
  },
  {
    id: 3,
    question: "Do I need technical skills to use these systems?",
    answer: "Not at all. We handle all the technical setup. Your team just needs to know how to read a dashboard and click buttons. We provide full training and ongoing support."
  },
  {
    id: 4,
    question: "What if something breaks or stops working?",
    answer: "We monitor all systems 24/7 and fix issues before you notice them. You also get dedicated support and we guarantee 99.9% uptime."
  },
  {
    id: 5,
    question: "How do I know which automations my gym needs?",
    answer: "We start with a free automation audit to identify your biggest time-wasters and revenue leaks. You only implement what makes sense for your specific situation."
  },
  {
    id: 6,
    question: "Can I start with just one automation and add more later?",
    answer: "Absolutely. Most gyms start with 1-2 core systems like lead follow-up or payment recovery, then expand as they see results."
  },
  {
    id: 7,
    question: "What's the actual ROI on automation?",
    answer: "Most gyms recover their investment within 60-90 days through time savings and recovered revenue. Use our ROI calculator to see your specific projections."
  },
  {
    id: 8,
    question: "Will automation make my gym feel less personal?",
    answer: "Actually the opposite. Automation handles repetitive tasks so your staff has MORE time for meaningful member interactions. Members get faster responses and more consistent communication."
  },
  {
    id: 9,
    question: "How is this different from hiring a VA or more staff?",
    answer: "Automation works 24/7, never calls in sick, and costs less than one part-time employee. Plus, it scales instantly as you grow without additional cost."
  },
  {
    id: 10,
    question: "What if I want to change or cancel services?",
    answer: "No long-term contracts required. You can adjust or pause services anytime with 30 days notice. We earn your business month after month."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section 
      id="faq" 
      style={{ 
        background: '#FFFFFF',
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
              lineHeight: '1.2',
              textAlign: 'center'
            }}
          >
            Frequently Asked Questions
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
              lineHeight: '1.6',
              textAlign: 'center'
            }}
          >
            Everything you need to know about automating your gym
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id)
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  borderBottom: '1px solid #E5E7EB',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent',
                  borderRadius: '8px'
                }}
                onClick={() => toggleItem(faq.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8F9FA'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {/* Question */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '18px',
                      color: '#1A1A1A',
                      fontWeight: 600,
                      lineHeight: '1.4',
                      margin: 0,
                      flex: 1
                    }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ 
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: isOpen ? '#1840BA' : '#6B7280'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <Plus size={20} />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{
                        overflow: 'hidden',
                        marginTop: '16px'
                      }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#4A5568',
                          maxWidth: '90%',
                          margin: 0
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            Still have questions?
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
              cursor: 'pointer'
            }}
            whileHover={{
              backgroundColor: '#0F2B70',
              transform: 'translateY(-1px)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Talk to an Automation Expert
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 