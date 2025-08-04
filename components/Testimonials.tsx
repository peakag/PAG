'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 