'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "How quickly can I see results with Peak Automation?",
    answer: "Most gyms see measurable improvements within the first 30 days. Our AI begins analyzing your member data immediately and starts sending personalized retention campaigns within the first week. You'll typically see a 15-25% reduction in churn within the first quarter."
  },
  {
    id: 2,
    question: "What gym management systems do you integrate with?",
    answer: "We integrate with all major gym management platforms including MindBody, Zen Planner, ClubReady, Wodify, and custom systems via API. Our team handles the entire integration process, ensuring a seamless setup without disrupting your existing operations."
  },
  {
    id: 3,
    question: "How does the AI predict which members are at risk?",
    answer: "Our AI analyzes hundreds of data points including attendance patterns, payment history, engagement with communications, and behavioral indicators. It uses machine learning algorithms to identify members showing early warning signs of churn, allowing you to intervene before they cancel."
  },
  {
    id: 4,
    question: "Can I customize the automated campaigns?",
    answer: "Absolutely. While our AI creates personalized content automatically, you have full control over messaging, timing, and campaign strategies. You can edit any automated message, add your brand voice, and set specific triggers for different member segments."
  },
  {
    id: 5,
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including dedicated onboarding, 24/7 technical support, monthly strategy calls, and ongoing optimization. Our team works closely with you to ensure you're getting maximum value from the platform and achieving your retention goals."
  },
  {
    id: 6,
    question: "Is there a long-term contract or setup fee?",
    answer: "No setup fees and no long-term contracts. We offer month-to-month billing with a 90-day money-back guarantee. You can cancel anytime with no penalties. We're confident you'll see results quickly, which is why we offer such flexible terms."
  },
  {
    id: 7,
    question: "How secure is my member data?",
    answer: "We take data security extremely seriously. All data is encrypted in transit and at rest, we're SOC 2 Type II compliant, and we follow strict GDPR guidelines. We never share or sell your data, and you maintain full ownership of all member information."
  },
  {
    id: 8,
    question: "Can Peak Automation work for small gyms?",
    answer: "Yes, our platform is designed to scale from small boutique gyms to large chains. The AI becomes more effective with more data, but even gyms with 50-100 members see significant improvements. Our pricing is structured to be accessible for gyms of all sizes."
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
      className="bg-black relative overflow-hidden"
      style={{ padding: '100px 0' }}
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
              textAlign: 'center'
            }}
          >
            FAQ
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h2"
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(1rem, 3vw, 1.25rem)'
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.5)',
              textAlign: 'center',
              marginBottom: '64px'
            }}
          >
            Find answers to common questions about our automation platform
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
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '24px 0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderLeft: isOpen ? '2px solid #4169E1' : 'none',
                  paddingLeft: isOpen ? '16px' : '0'
                }}
                onClick={() => toggleItem(faq.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = isOpen ? '#4169E1' : 'rgba(65, 105, 225, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = isOpen ? '#4169E1' : 'transparent'
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
                      color: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
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
                      color: isOpen ? '#4169E1' : 'rgba(255, 255, 255, 0.4)'
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
                          lineHeight: '1.7',
                          color: 'rgba(255, 255, 255, 0.6)',
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
          style={{ marginTop: '64px' }}
        >
          <h3
            style={{
              fontSize: '32px',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            Still have questions?
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '32px'
            }}
          >
            Our team is here to help you get started
          </p>
          <motion.a
            href="/support"
            style={{
              background: '#4169E1',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            whileHover={{
              boxShadow: '0 8px 30px rgba(65, 105, 225, 0.4)',
              transform: 'translateY(-2px)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 