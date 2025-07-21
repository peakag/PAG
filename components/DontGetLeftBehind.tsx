'use client'

import { motion } from 'framer-motion'

export default function DontGetLeftBehind() {
  return (
    <section className="section-padding bg-primary-secondary border-y border-border">
      <div className="container-max text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-heading-2 text-text-primary mb-4"
        >
          While You're Thinking About It, Your Competition is Doing It
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <div className="card text-center">
            <div className="text-2xl font-bold text-accent-blue">6X</div>
            <div className="text-sm text-text-secondary mt-1">
              Growth in AI adoption in 12 months
            </div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-accent-blue">$13,202</div>
            <div className="text-sm text-text-secondary mt-1">
              Lost per employee annually to manual tasks
            </div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-accent-blue">40%</div>
            <div className="text-sm text-text-secondary mt-1">
              Of work time wasted on automatable tasks
            </div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-text-secondary"
        >
          Major fitness brands are already using AI. Independent gyms that don't adapt will struggle to compete.
        </motion.p>
      </div>
    </section>
  )
} 