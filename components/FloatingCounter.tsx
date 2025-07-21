'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp } from 'lucide-react'

export default function FloatingCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [savings, setSavings] = useState(478293)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setSavings(prev => prev + Math.floor(Math.random() * 1000) + 100)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-6 z-40"
        >
          <div className="bg-white border border-border rounded-lg shadow-medium p-4 max-w-xs">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <TrendingUp size={20} className="text-accent-green" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-text-primary">
                  Gyms using Peak have saved
                </div>
                <div className="text-lg font-bold text-accent-green">
                  ${savings.toLocaleString()}
                </div>
                <div className="text-xs text-text-secondary">
                  this month
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 