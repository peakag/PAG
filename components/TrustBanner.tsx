'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign } from 'lucide-react'

export default function TrustBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-primary-secondary border-b border-border py-3"
    >
      <div className="container-max">
        <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
          <span className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-accent-blue" />
            AI implementations grew <strong className="text-text-primary mx-1">6X</strong> in just one year
          </span>
          <span className="hidden md:flex items-center">
            <Clock className="w-4 h-4 mr-2 text-accent-blue" />
            Businesses waste <strong className="text-text-primary mx-1">40%</strong> of time on manual tasks
          </span>
          <span className="hidden lg:flex items-center">
            <DollarSign className="w-4 h-4 mr-2 text-accent-blue" />
            <strong className="text-text-primary mx-1">$13,202</strong> lost per employee annually
          </span>
        </div>
      </div>
    </motion.div>
  )
} 