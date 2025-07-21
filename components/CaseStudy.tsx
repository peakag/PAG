'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Users, TrendingUp, DollarSign } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Owner, Fitness First Atlanta",
    company: "Fitness First Atlanta",
    image: "/testimonials/sarah-chen.jpg",
    quote: "Peak Automation Group transformed our retention strategy. We went from losing 30% of members annually to retaining 92% of them. The AI predictions are incredibly accurate.",
    metrics: {
      retention: "92%",
      improvement: "+22%",
      revenue: "$180K"
    },
    rating: 5
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "General Manager, PowerHouse Gym",
    company: "PowerHouse Gym",
    image: "/testimonials/mike-rodriguez.jpg",
    quote: "The automated campaigns saved us 15 hours per week while improving member satisfaction. Our team can now focus on what they do best - helping members achieve their goals.",
    metrics: {
      retention: "88%",
      improvement: "+18%",
      revenue: "$142K"
    },
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Park",
    role: "CEO, Elite Fitness Center",
    company: "Elite Fitness Center",
    image: "/testimonials/jennifer-park.jpg",
    quote: "The analytics helped us optimize our pricing strategy and increase average member value by $127/month. Peak's insights are game-changing for gym owners.",
    metrics: {
      retention: "90%",
      improvement: "+20%",
      revenue: "$210K"
    },
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner, CrossFit Revolution",
    company: "CrossFit Revolution",
    image: "/testimonials/david-thompson.jpg",
    quote: "We implemented Peak's system and saw immediate results. Our member engagement increased by 40% and we're on track to save $200K this year alone.",
    metrics: {
      retention: "94%",
      improvement: "+24%",
      revenue: "$195K"
    },
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Manager, Iron Works Gym",
    company: "Iron Works Gym",
    image: "/testimonials/lisa-martinez.jpg",
    quote: "The predictive analytics are spot-on. We can now identify at-risk members before they leave and intervene proactively. It's like having a crystal ball for member retention.",
    metrics: {
      retention: "89%",
      improvement: "+19%",
      revenue: "$165K"
    },
    rating: 5
  }
]

export default function CaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="case-studies" className="section-padding bg-black relative overflow-hidden">
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 blue-gradient-overlay opacity-20"></div>
      
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-600/30"
          >
            <Users size={16} />
            <span>Trusted by Leading Gyms</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight"
          >
            Real Results from Real Gyms
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            See how gym owners across Atlanta are transforming their retention rates and boosting revenue with our AI-powered platform.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-premium border border-gray-800"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
                <Quote size={32} className="text-blue-400" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-8 max-w-4xl mx-auto">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-gray-400" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg font-semibold text-white">{currentTestimonial.name}</div>
                  <div className="text-gray-300">{currentTestimonial.role}</div>
                  <div className="text-sm text-gray-400">{currentTestimonial.company}</div>
                </div>
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp size={24} className="text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{currentTestimonial.metrics.retention}</div>
                <div className="text-sm text-gray-300">Retention Rate</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp size={24} className="text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{currentTestimonial.metrics.improvement}</div>
                <div className="text-sm text-gray-300">Improvement</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <DollarSign size={24} className="text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{currentTestimonial.metrics.revenue}</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      index === currentIndex 
                        ? 'bg-blue-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-premium border border-gray-800">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how Peak Automation Group can transform your gym's retention rates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-premium hover:shadow-blue-glow transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 min-h-[44px] flex items-center justify-center">
                Start Free Trial
                <TrendingUp size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 shadow-premium hover:shadow-white-glow transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/20 min-h-[44px] flex items-center justify-center hover:border-white/40">
                Schedule Demo
                <Users size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 