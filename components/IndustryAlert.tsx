'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AlertCircle, ArrowRight } from 'lucide-react'

export default function IndustryAlert() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 800px)
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 max-w-sm bg-white rounded-lg shadow-medium border border-border p-4 z-40 hidden lg:block"
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-text-primary">Industry Update</h4>
              <p className="text-xs text-text-secondary mt-1">
                The fitness industry reports 50% first-year member dropout rates. 
                Leading gyms are already using AI to solve this $240K annual problem.
              </p>
              <button className="text-xs text-accent-blue font-medium mt-2 hover:text-blue-700 transition-colors flex items-center group">
                See how we help
                <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 