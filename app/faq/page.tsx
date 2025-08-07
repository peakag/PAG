'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // General Questions
  {
    question: "What is Peak Automation Group?",
    answer: "Peak Automation Group specializes in implementing intelligent automation systems for gyms and fitness businesses. We help gym owners save 20+ hours per week and increase revenue through proven AI-powered solutions that handle everything from lead follow-up to member retention.",
    category: "General"
  },
  {
    question: "What automation systems do you offer?",
    answer: "We implement 10 core automation systems: Smart Lead Follow-Up, Member Retention Radar, Payment Recovery System, Operations Dashboard, Smart Class Optimizer, Equipment Maintenance Tracker, Personalized Member Messaging, Revenue Intelligence, Staff Workflow Automation, and Competitive Analytics.",
    category: "General"
  },
  {
    question: "How is this different from gym management software?",
    answer: "We don't build software—we implement and configure existing proven automation tools specifically for gym operations. Think of us as automation architects who take the best AI tools available and make them work seamlessly for your specific fitness business needs.",
    category: "General"
  },

  // Implementation & Setup
  {
    question: "How long does implementation take?",
    answer: "Most gyms have their automation systems up and running within 30 days. This includes initial consultation, system setup, staff training, and optimization. We handle all the technical work so there's minimal disruption to your daily operations.",
    category: "Implementation"
  },
  {
    question: "Do I need to change my current software?",
    answer: "No, our automation systems integrate with your existing gym management software including MindBody, Zen Planner, ClubReady, Glofox, and others. We work alongside your current systems to enhance their capabilities.",
    category: "Implementation"
  },
  {
    question: "What training do you provide?",
    answer: "We provide comprehensive training for your entire team, including system operation, best practices, and ongoing optimization strategies. Training includes initial setup sessions, documentation, and quarterly check-ins to ensure maximum value.",
    category: "Implementation"
  },

  // Results & ROI
  {
    question: "When will I see results?",
    answer: "Most gym owners start seeing time savings within the first week as automations begin handling routine tasks. Measurable business improvements typically appear within 30-60 days, with full ROI realized within 60-90 days.",
    category: "Results"
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our clients typically save 20+ hours per week, see 40% improvements in lead conversion rates, 35% reduction in member churn, and 85% recovery rate on failed payments. These improvements compound over time for significant revenue increases.",
    category: "Results"
  },
  {
    question: "Do you guarantee results?",
    answer: "Yes, we offer a 90-day performance guarantee. If you don't see measurable improvements in efficiency and business metrics within 90 days, we'll continue working with you at no additional cost until you do.",
    category: "Results"
  },

  // Investment & Pricing
  {
    question: "How much does automation implementation cost?",
    answer: "Our automation solutions are priced based on your gym's size and specific needs. Most implementations range from $297-$497 per month and include setup, training, ongoing optimization, and support. The typical ROI is 3-5x within the first year.",
    category: "Pricing"
  },
  {
    question: "Are there setup fees or hidden costs?",
    answer: "No hidden fees. Our pricing is transparent and includes everything: consultation, implementation, training, ongoing support, and system optimization. The only additional costs would be for custom integrations beyond our standard offerings.",
    category: "Pricing"
  },
  {
    question: "What if the automation doesn't work for my gym?",
    answer: "You can discontinue service with 30 days' notice. However, we're confident in our results—most clients expand their automation usage rather than reduce it. Our 90-day guarantee ensures you'll see measurable value.",
    category: "Pricing"
  },

  // Support & Technical
  {
    question: "What support do you provide?",
    answer: "We provide 24/7 system monitoring, dedicated account management, quarterly business reviews, unlimited email support, and emergency assistance for critical issues. Your success is our priority.",
    category: "Support"
  },
  {
    question: "Is my business data secure?",
    answer: "Absolutely. We use enterprise-grade security protocols and are fully compliant with data protection regulations. Your data is encrypted, securely stored, and never shared. We maintain the highest standards of data security.",
    category: "Support"
  },
  {
    question: "What happens if there's a technical issue?",
    answer: "Our systems include 24/7 monitoring and automatic alerts. Issues are typically resolved within minutes, and we provide backup systems to ensure your operations continue smoothly. Our technical team is always available for critical support.",
    category: "Support"
  },

  // Business Impact
  {
    question: "How will automation affect my staff workload?",
    answer: "Automation significantly reduces staff workload by handling routine tasks automatically. Your team can focus on high-value activities like member relationships, personal training, and business growth while systems handle lead follow-up, payment issues, and member communications.",
    category: "Business Impact"
  },
  {
    question: "Will automation work for my type of gym?",
    answer: "Our automation systems work for all types of fitness facilities: traditional gyms, CrossFit boxes, yoga studios, martial arts schools, boutique fitness, and specialty centers. We customize each implementation to match your unique business model and culture.",
    category: "Business Impact"
  },
  {
    question: "Can automation help with staff management?",
    answer: "Yes, our Staff Workflow Automation system handles scheduling optimization, task assignment, performance tracking, and communication automation. This reduces administrative overhead and helps your team operate more efficiently.",
    category: "Business Impact"
  }
]

const categories = ["All", "General", "Implementation", "Results", "Pricing", "Support", "Business Impact"]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory)

  // FAQ Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
          padding: '120px 0 80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Back to Home Button */}
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 transition-colors duration-200 mb-8"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
            style={{ 
              textDecoration: 'none', 
              display: 'inline-block',
              color: '#1840BA',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.a>
          
          <div className="text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: '48px',
                color: '#1A1A1A',
                fontWeight: 700,
                maxWidth: '900px',
                margin: '0 auto 24px auto',
                lineHeight: '1.1'
              }}
            >
              Frequently Asked Questions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: '#4A5568',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              Everything you need to know about our automation systems and how we help gym owners save time and increase revenue.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section 
        style={{ 
          background: '#FFFFFF',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3
                      style={{
                        fontSize: '18px',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        lineHeight: '1.5'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} style={{ color: '#4A5568' }} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          borderTop: '1px solid #E5E7EB',
                          padding: '0 24px'
                        }}
                      >
                        <div
                          style={{
                            padding: '24px 0',
                            fontSize: '16px',
                            color: '#4A5568',
                            lineHeight: '1.7'
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{ 
          background: '#F8F9FA',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                color: '#1A1A1A',
                fontWeight: 700,
                marginBottom: '16px'
              }}
            >
              Still Have Questions?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                color: '#4A5568',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6'
              }}
            >
              Can't find what you're looking for? Schedule a strategy call with our team to get personalized answers and see how automation can transform your gym.
            </motion.p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="/book-call"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
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
                Book a Strategy Call
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/solutions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: '#1840BA',
                  color: '#FFFFFF'
                }}
                style={{
                  background: 'transparent',
                  color: '#1840BA',
                  border: '2px solid #1840BA',
                  padding: '14px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 