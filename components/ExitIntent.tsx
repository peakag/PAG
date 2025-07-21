'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, Download, CheckCircle } from 'lucide-react'

export default function ExitIntent() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already seen or dismissed the popup in this session
    const hasSeenPopup = sessionStorage.getItem('exitIntentSeen')
    
    if (!hasSeenPopup) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !isVisible && !isSubmitted) {
          setIsVisible(true)
          // Mark as seen immediately when it appears
          sessionStorage.setItem('exitIntentSeen', 'true')
        }
      }

      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible, isSubmitted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email captured:', email)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    // Mark as dismissed so it won't show again this session
    sessionStorage.setItem('exitIntentSeen', 'true')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg shadow-medium max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors p-1"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download size={24} className="text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Wait! Get Our Free Gym Retention Checklist
                  </h3>
                  <p className="text-text-secondary">
                    Discover the 7 proven strategies that helped 20+ Atlanta gyms reduce member churn by 30% in 90 days.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Get Free Checklist
                  </button>
                </form>

                <p className="text-xs text-text-secondary text-center mt-4">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Check Your Email!
                </h3>
                <p className="text-text-secondary mb-4">
                  Your free Gym Retention Checklist is on its way. We've also included a special offer for Peak's retention system.
                </p>
                <button
                  onClick={handleClose}
                  className="btn-primary"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 