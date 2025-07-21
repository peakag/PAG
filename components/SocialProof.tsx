'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Users, TrendingUp, CheckCircle } from 'lucide-react'

const notifications = [
  {
    id: 1,
    gym: 'CrossFit Buckhead',
    action: 'just saved 3 members',
    time: '2 minutes ago'
  },
  {
    id: 2,
    gym: 'F45 Midtown',
    action: 'reduced churn by 35%',
    time: '5 minutes ago'
  },
  {
    id: 3,
    gym: 'Orangetheory Sandy Springs',
    action: 'retained 12 members this month',
    time: '8 minutes ago'
  },
  {
    id: 4,
    gym: 'Planet Fitness Marietta',
    action: 'improved retention by 28%',
    time: '12 minutes ago'
  },
  {
    id: 5,
    gym: 'LA Fitness Perimeter',
    action: 'saved $15,600 in revenue',
    time: '15 minutes ago'
  }
]

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentNotification(prev => (prev + 1) % notifications.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNotification}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-border rounded-lg shadow-medium p-4 max-w-xs"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-accent-green" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-text-primary">
                    {notifications[currentNotification].gym}
                  </div>
                  <div className="text-sm text-accent-green font-medium">
                    {notifications[currentNotification].action}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {notifications[currentNotification].time}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 