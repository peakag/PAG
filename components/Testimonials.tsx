'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Owner, CrossFit Gym",
    content: "I never realized how much we were missing until we started with PAG. Suddenly, the little things that used to slip through the cracks just... stopped slipping. Our members feel more connected, and I finally feel like I'm ahead of the game instead of always catching up.",
    rating: 5,
    metrics: {
      label: "Members Retained",
      value: "6"
    }
  },
  {
    name: "Mike Chen",
    role: "Manager, Fitness Center",
    content: "Working with Kevin and Alessandro changed the way we run our gym. We started seeing patterns in our business that we never noticed before, and fixing them was easier than I expected. Our team is less stressed, and our members are sticking around longer.",
    rating: 5,
    metrics: {
      label: "Churn Reduction",
      value: "25%"
    }
  },
  {
    name: "Lisa Rodriguez",
    role: "CEO, Strength Training Facility",
    content: "I used to spend hours every week worrying about cancellations. Now, I get a heads-up before problems even start. It's like having an extra set of eyes on my business, and it's freed me up to focus on my members.",
    rating: 5,
    metrics: {
      label: "Revenue Saved",
      value: "$800/mo"
    }
  },
  {
    name: "David Thompson",
    role: "Owner, Personal Training Studio",
    content: "I thought we were doing everything right, but PAG showed us a few blind spots that made a huge difference. Our members are happier, and I feel like I have a real partner in growing my business.",
    rating: 5,
    metrics: {
      label: "Satisfaction Score",
      value: "+15%"
    }
  }
]

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative overflow-hidden"
      style={{ padding: '100px 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)' }}
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
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            SUCCESS STORIES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1A1A1A',
              fontWeight: 600,
              marginBottom: '16px',
              lineHeight: '1.2',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            Hear From Our Clients
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: '#4A5568',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            Real results from real gym owners who transformed their member retention with PAG.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="responsive-grid-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{
                background: '#F8F9FA',
                borderColor: 'rgba(65, 105, 225, 0.2)',
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Quote Icon Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  opacity: 0.03,
                  transform: 'scale(3)'
                }}
              >
                <Quote size={48} style={{ color: '#4169E1' }} />
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{ color: '#FBBF24', fill: '#FBBF24' }}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}
              >
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4
                    style={{
                      fontSize: '18px',
                      color: '#1A1A1A',
                      fontWeight: 600,
                      marginBottom: '4px',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#6B7280',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-16">
          <motion.a
            href="/testimonials"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
            Read More
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  )
} 