'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "We went from spending 3 hours daily on admin work to maybe 30 minutes. The automated follow-ups alone have saved us from losing dozens of members. This has completely changed how we run our gym.",
    name: "Sarah M.",
    title: "Owner, Boutique Fitness Studio",
    highlight: "Saved 15+ hours weekly"
  },
  {
    id: 2,
    quote: "The payment recovery system paid for itself in the first week. We're now recovering 95% of failed payments automatically. I wish we had implemented this years ago.",
    name: "Mike T.",
    title: "CrossFit Gym Owner",
    highlight: "95% payment recovery rate"
  },
  {
    id: 3,
    quote: "Our lead conversion went from 20% to over 60% just by implementing automated follow-ups. The system responds to inquiries instantly, even at 2 AM. It's like having the perfect salesperson who never sleeps.",
    name: "Jennifer R.",
    title: "Yoga Studio Owner",
    highlight: "3x conversion improvement"
  },
  {
    id: 4,
    quote: "I can finally take vacations without worrying. Everything runs automatically - member check-ins, class scheduling, payment processing. Peak Automation gave me my life back.",
    name: "David L.",
    title: "Multi-Location Gym Owner",
    highlight: "Fully automated operations"
  },
  {
    id: 5,
    quote: "The ROI tracking dashboard shows me exactly where my money is going and what's working. I make better decisions and caught issues I didn't even know existed.",
    name: "Amanda K.",
    title: "Personal Training Studio",
    highlight: "Data-driven growth"
  },
  {
    id: 6,
    quote: "Implementation was seamless. No downtime, no learning curve for my staff. Within 30 days, we had 10 different automations running smoothly. The support has been incredible.",
    name: "Chris P.",
    title: "Fitness Center Director",
    highlight: "30-day implementation"
  }
]

const metrics = [
  {
    value: "20+ Hours",
    label: "Saved weekly per gym"
  },
  {
    value: "60-90 Days",
    label: "To positive ROI"
  },
  {
    value: "95%",
    label: "Payment recovery rate"
  },
  {
    value: "3x",
    label: "Average lead conversion increase"
  }
]

export default function Testimonials() {
  // Testimonials page structured data
  const testimonialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peak Automation Group",
    "description": "Gym automation and fitness automation solutions with proven results",
    "url": "https://peakautomationgroup.com",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewBody": testimonial.quote,
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  }

  return (
    <main style={{ background: '#F8F9FA', minHeight: '100vh' }}>
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
              Gym Owners Love Working With Peak Automation
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
              See how automation is transforming fitness businesses nationwide
            </motion.p>
          </div>
        </div>
      </section>

      {/* Results Metrics Section */}
      <section 
        style={{ 
          background: '#FFFFFF',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            The Numbers Speak for Themselves
          </motion.h2>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px'
            }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                style={{
                  background: '#F8F9FA',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  border: '1px solid #E5E7EB'
                }}
              >
                <div
                  style={{
                    fontSize: '36px',
                    color: '#1840BA',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: '#4A5568',
                    lineHeight: '1.5'
                  }}
                >
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        style={{ 
          background: '#F8F9FA',
          padding: '80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: '24px'
            }}
            className="lg:grid-cols-2 md:grid-cols-1"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(24, 64, 186, 0.1)'
                }}
              >
                {/* Quote Icon Background */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    opacity: 0.2,
                    transform: 'scale(2)'
                  }}
                >
                  <Quote size={24} style={{ color: '#3F92FA' }} />
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '18px',
                    color: '#4A5568',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                    fontStyle: 'italic'
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author Info and Highlight */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h4
                      style={{
                        fontSize: '18px',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        marginBottom: '4px'
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#6B7280'
                      }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                  
                  <div
                    style={{
                      background: '#1840BA',
                      color: '#FFFFFF',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {testimonial.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{ 
          background: '#FFFFFF',
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
              Ready to Join These Success Stories?
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
              See how much time and money you could save
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
