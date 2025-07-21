'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function AIRevolution() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent-blue uppercase tracking-wider">
            Industry Transformation
          </span>
          <h2 className="mt-2 text-heading-2 text-text-primary">
            The AI Revolution Has Already Started
          </h2>
          <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
            From 101 to 601+ documented AI implementations in just 12 months. While you're reading this, 
            your competition might already be automating.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="card text-center">
            <div className="text-3xl font-bold text-text-primary mb-2">50%</div>
            <div className="text-sm text-text-secondary">
              of gym members quit within their first year - the exact problem AI solves
            </div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-text-primary mb-2">40 min</div>
            <div className="text-sm text-text-secondary">
              saved per process when 50,000+ employees at TELUS implemented AI
            </div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-text-primary mb-2">10,000+</div>
            <div className="text-sm text-text-secondary">
              hours saved annually by Toyota with AI automation
            </div>
          </div>
        </motion.div>

        {/* Industry Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary-secondary rounded-lg p-8 border border-border mb-8"
        >
          <h3 className="text-heading-3 text-text-primary mb-6">
            Who's Already Using AI Automation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-text-primary mb-3">
                Fitness & Wellness Industry
              </h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-text-primary">Major Athletic Apparel Brand:</strong> Built unified data platform for personalized member experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-text-primary">Global Fitness Equipment Company:</strong> AI virtual trainers increasing member engagement
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-text-primary">Sports Training Apps:</strong> Personalized coaching delivered at scale through AI
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-3">
                Customer Service Leaders
              </h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-text-primary">Major Pizza Chain:</strong> Predictive ordering reducing wait times
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-text-primary">Electronics Retailer:</strong> 30-90 seconds saved per customer call
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-text-primary">Healthcare Company:</strong> 5 hours saved per employee weekly
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 bg-accent-blue/5 rounded-lg border-l-4 border-accent-blue"
        >
          <blockquote className="text-text-primary italic">
            "Organizations of all sizes are implementing AI and putting it into production across their work, 
            doing so at a speed rarely seen with new technology."
          </blockquote>
          <cite className="block mt-2 text-sm text-text-secondary not-italic">
            - Industry Report, 2025
          </cite>
        </motion.div>
      </div>
    </section>
  )
} 