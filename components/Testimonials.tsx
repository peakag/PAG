'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Owner, CrossFit Gym",
    content: "We've been using Peak Automation for about 3 months now. The AI identified 8 members who were likely to cancel, and we were able to reach out to them proactively. So far, we've retained 6 of those members. The automated follow-ups are saving us time too.",
    rating: 5,
    metrics: {
      label: "Members Retained",
      value: "6"
    }
  },
  {
    name: "Mike Chen",
    role: "Manager, Fitness Center",
    content: "The platform helped us spot patterns we were missing. We've reduced our monthly churn from 8% to 6% in the first quarter. The dashboard makes it easy to see which members need attention.",
    rating: 5,
    metrics: {
      label: "Churn Reduction",
      value: "25%"
    }
  },
  {
    name: "Lisa Rodriguez",
    role: "CEO, Strength Training Facility",
    content: "We're a smaller gym with 120 members, so every retention counts. Peak Automation helped us identify 5 at-risk members last month. We reached out with personalized offers and kept 4 of them. That's $800/month in revenue we would have lost.",
    rating: 5,
    metrics: {
      label: "Revenue Saved",
      value: "$800/mo"
    }
  },
  {
    name: "David Thompson",
    role: "Owner, Personal Training Studio",
    content: "The setup was surprisingly easy. Within the first month, we started seeing alerts about members who hadn't been in for a while. We've been able to intervene early and our member satisfaction scores are trending up.",
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
              color: '#4169E1'
            }}
          >
            TESTIMONIALS
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
            What Our Clients Say
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
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{
                background: 'rgba(255, 255, 255, 0.04)',
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
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontStyle: 'italic'
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
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: '4px'
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* Metrics Badge */}
                <motion.div
                  style={{
                    background: 'rgba(65, 105, 225, 0.1)',
                    border: '1px solid rgba(65, 105, 225, 0.2)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    textAlign: 'center'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#4169E1',
                      fontWeight: 600
                    }}
                  >
                    {testimonial.metrics.value}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    {testimonial.metrics.label}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 