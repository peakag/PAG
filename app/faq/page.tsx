'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowLeft, MessageCircle, Clock, Shield, Users, DollarSign, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Head from 'next/head'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // General Questions
  {
    question: "What is Peak Automation Group?",
    answer: "Peak Automation Group is a specialized automation company that helps gym owners stop losing members and start growing revenue through intelligent member retention systems. We use advanced automation technology to identify at-risk members and implement proactive retention strategies.",
    category: "General"
  },
  {
    question: "How does your system work?",
    answer: "Our system integrates with your existing gym management software to monitor member behavior patterns. When it detects signs of potential churn (like decreased attendance, missed payments, or lack of engagement), it automatically triggers personalized retention campaigns including check-ins, special offers, and re-engagement strategies.",
    category: "General"
  },
  {
    question: "What makes you different from other gym software?",
    answer: "Unlike generic gym management software, we focus specifically on member retention through predictive analytics and automated interventions. Our system doesn't just track data—it actively prevents member loss by identifying at-risk members before they cancel and implementing targeted retention strategies.",
    category: "General"
  },

  // Implementation & Setup
  {
    question: "How long does it take to implement your system?",
    answer: "Most gyms are up and running with our system within 2-3 weeks. This includes software integration, staff training, and initial setup. We handle all the technical integration with your existing systems, so there's minimal disruption to your daily operations.",
    category: "Implementation"
  },
  {
    question: "Do I need to change my existing gym management software?",
    answer: "No, you don't need to change your existing software. Our system integrates with most popular gym management platforms including MindBody, Zen Planner, ClubReady, and others. We work alongside your current systems to enhance member retention without disrupting your workflow.",
    category: "Implementation"
  },
  {
    question: "What kind of training do you provide?",
    answer: "We provide comprehensive training for your entire team, including managers and front desk staff. Training covers system operation, interpreting retention alerts, and best practices for member engagement. We also offer ongoing support and quarterly check-ins to ensure you're maximizing the system's potential.",
    category: "Implementation"
  },

  // Results & ROI
  {
    question: "How quickly will I see results?",
    answer: "Most gyms see measurable improvements in member retention within 30-60 days of implementation. Early results typically include reduced cancellation rates and increased member engagement. Full ROI is typically realized within 3-6 months as retention improvements compound.",
    category: "Results"
  },
  {
    question: "What kind of retention improvements can I expect?",
    answer: "Our clients typically see 20-40% improvements in member retention rates. This translates to significant revenue increases—for example, a gym with 500 members at $50/month could save $30,000-$60,000 annually in prevented cancellations alone.",
    category: "Results"
  },
  {
    question: "Do you guarantee results?",
    answer: "Yes, we offer a 90-day performance guarantee. If you don't see measurable improvements in member retention within 90 days of full implementation, we'll work with you to optimize the system or provide additional support at no extra cost.",
    category: "Results"
  },

  // Pricing & Plans
  {
    question: "How much does your system cost?",
    answer: "Our pricing is based on your gym's size and specific needs, starting at $297/month for smaller gyms. We offer flexible plans that scale with your business, and all plans include full implementation, training, and ongoing support. Most gyms see ROI within the first 3 months.",
    category: "Pricing"
  },
  {
    question: "Are there any hidden fees or setup costs?",
    answer: "No hidden fees. Our pricing is transparent and includes everything you need: software integration, staff training, initial setup, and ongoing support. The only additional cost would be if you request custom integrations or advanced features beyond our standard offering.",
    category: "Pricing"
  },
  {
    question: "Can I cancel if it's not working for me?",
    answer: "Yes, you can cancel at any time with 30 days' notice. However, we're confident you'll see value quickly—most gyms choose to expand their usage rather than cancel. We also offer a 90-day performance guarantee to ensure you're satisfied with the results.",
    category: "Pricing"
  },

  // Technical & Support
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including 24/7 system monitoring, dedicated account management, quarterly business reviews, and unlimited email/phone support during business hours. We also offer emergency support for critical issues.",
    category: "Support"
  },
  {
    question: "Is my member data secure?",
    answer: "Absolutely. We use enterprise-grade security protocols and are fully compliant with data protection regulations. Your member data is encrypted, securely stored, and we never share or sell your information. We're also HIPAA compliant for any health-related data.",
    category: "Support"
  },
  {
    question: "What happens if there's a technical issue?",
    answer: "Our system includes 24/7 monitoring and automatic fail-safes. If any issues arise, our technical team is immediately notified and typically resolves problems within minutes. We also provide backup systems to ensure your retention campaigns continue running smoothly.",
    category: "Support"
  },

  // Member Experience
  {
    question: "How do members respond to the automated communications?",
    answer: "Members typically respond very positively because our communications are personalized and genuinely helpful. We focus on providing value rather than just sales pitches—checking in on their fitness goals, offering support, and providing relevant resources. Response rates are typically 3-5x higher than generic marketing emails.",
    category: "Member Experience"
  },
  {
    question: "Can I customize the messages and timing?",
    answer: "Yes, you have full control over message content, timing, and frequency. You can use our proven templates or create completely custom messages. You can also set different communication preferences for different member segments or adjust based on your gym's unique culture.",
    category: "Member Experience"
  },
  {
    question: "Will this feel impersonal to my members?",
    answer: "Quite the opposite. Our system enables more personal, timely interactions that would be impossible to manage manually. Members receive relevant, helpful communications at the right moments, making them feel more valued and connected to your gym. Many members actually comment on how much more personal the experience feels.",
    category: "Member Experience"
  },

  // Business Impact
  {
    question: "How will this affect my staff's workload?",
    answer: "Our system actually reduces staff workload by automating routine retention tasks. Instead of manually tracking at-risk members, your staff can focus on high-value activities like personal training, member relationships, and business growth. The system handles the heavy lifting of member monitoring and initial outreach.",
    category: "Business Impact"
  },
  {
    question: "Can this help with new member onboarding?",
    answer: "Yes, our system includes specialized onboarding sequences that help new members integrate into your gym community. This includes welcome messages, orientation resources, and early engagement strategies that significantly improve new member retention rates.",
    category: "Business Impact"
  },
  {
    question: "Will this work for my specific type of gym?",
    answer: "Our system is designed to work with all types of fitness facilities including traditional gyms, CrossFit boxes, yoga studios, martial arts schools, and specialty fitness centers. We customize the retention strategies and communication style to match your gym's unique culture and member base.",
    category: "Business Impact"
  }
]

const categories = ["All", "General", "Implementation", "Results", "Pricing", "Support", "Member Experience", "Business Impact"]

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
    <main className="min-h-screen bg-black">
      <Head>
        <title>Frequently Asked Questions - Peak Automation Group</title>
        <meta name="description" content="Everything you need to know about Peak Automation Group and how we help gym owners stop losing members and start growing revenue." />
        <meta property="og:title" content="Frequently Asked Questions - Peak Automation Group" />
        <meta property="og:description" content="Everything you need to know about Peak Automation Group and how we help gym owners stop losing members and start growing revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peakautomationgroup.com/faq" />
        <meta property="og:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <meta name="twitter:title" content="Frequently Asked Questions - Peak Automation Group" />
        <meta name="twitter:description" content="Everything you need to know about Peak Automation Group and how we help gym owners stop losing members and start growing revenue." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
      </Head>
      <Navigation />
      
      {/* FAQ Page Content */}
      <section 
        className="bg-black relative overflow-hidden"
        style={{ padding: '120px 0 100px 0' }}
      >
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.a
                href="/"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </motion.a>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="h1"
                style={{
                  marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Frequently Asked Questions
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-text"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Everything you need to know about Peak Automation Group and how we help gym owners 
                stop losing members and start growing revenue.
              </motion.p>
            </div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3
                      style={{
                        fontSize: '16px',
                        color: '#FFFFFF',
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
                      <ChevronDown size={20} className="text-white/60" />
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
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '0 24px'
                        }}
                      >
                        <div
                          style={{
                            padding: '24px 0',
                            fontSize: '16px',
                            color: 'rgba(255, 255, 255, 0.8)',
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

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 5vw, 3rem)',
                marginTop: '64px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(65, 105, 225, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <MessageCircle size={32} className="text-blue-400" />
              </div>
              
              <h3
                style={{
                  fontSize: '24px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Still Have Questions?
              </h3>
              
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                  maxWidth: '500px',
                  margin: '0 auto 32px'
                }}
              >
                Can't find what you're looking for? Schedule a strategy call with our team 
                to get personalized answers and see how we can help your gym.
              </p>
              
              <motion.a
                href="/book-call"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Strategy Call
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 