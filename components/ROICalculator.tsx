'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import { DollarSign, Users, TrendingUp, Calendar, AlertCircle } from 'lucide-react'

interface CalculatorInputs {
  members: number
  monthlyFee: number
  retentionRate: number
}

interface CalculatorResults {
  currentRevenue: number
  improvedRevenue: number
  revenueIncrease: number
  annualSavings: number
}

// Animated Number Component
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const formatted = useTransform(rounded, (latest) => {
    return prefix + latest.toLocaleString() + suffix
  })

  useEffect(() => {
    const animation = animate(count, value, { duration: 1.5, ease: "easeOut" })
    return animation.stop
  }, [value, count])

  return <motion.span>{formatted}</motion.span>
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    members: 500,
    monthlyFee: 50,
    retentionRate: 60
  })

  const [displayInputs, setDisplayInputs] = useState<{ [key: string]: string }>({
    members: '500',
    monthlyFee: '50',
    retentionRate: '60'
  })

  const [results, setResults] = useState<CalculatorResults>({
    currentRevenue: 0,
    improvedRevenue: 0,
    revenueIncrease: 0,
    annualSavings: 0
  })

  const calculateROI = (inputs: CalculatorInputs): CalculatorResults => {
    const { members, monthlyFee, retentionRate } = inputs
    
    // If any input is 0 or invalid, return zero results
    if (members <= 0 || monthlyFee <= 0 || retentionRate <= 0) {
      return {
        currentRevenue: 0,
        improvedRevenue: 0,
        revenueIncrease: 0,
        annualSavings: 0
      }
    }
    
    // Calculate current annual revenue (with current retention rate)
    const currentRevenue = members * monthlyFee * 12 * (retentionRate / 100)
    
    // Calculate improved retention rate (20% improvement, capped at 95%)
    const improvedRetentionRate = Math.min(retentionRate + 20, 95)
    
    // Calculate improved annual revenue (with improved retention rate)
    const improvedRevenue = members * monthlyFee * 12 * (improvedRetentionRate / 100)
    
    // Calculate revenue increase (additional revenue from improved retention)
    const revenueIncrease = improvedRevenue - currentRevenue
    
    // Annual savings is the additional revenue from improved retention
    const annualSavings = revenueIncrease
    
    return {
      currentRevenue: Math.round(currentRevenue),
      improvedRevenue: Math.round(improvedRevenue),
      revenueIncrease: Math.round(revenueIncrease),
      annualSavings: Math.round(annualSavings)
    }
  }

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    // Update display value (can be empty)
    setDisplayInputs(prev => ({ ...prev, [field]: value }))
    
    // Update actual input value (only if valid number)
    const numValue = parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      setInputs(prev => ({ ...prev, [field]: numValue }))
    } else {
      // Set to 0 for calculation purposes when invalid
      setInputs(prev => ({ ...prev, [field]: 0 }))
    }
  }

  // Update results when inputs change
  useEffect(() => {
    const newResults = calculateROI(inputs)
    setResults(newResults)
  }, [inputs])

  return (
    <section 
      id="roi-calculator" 
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
            CALCULATOR
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
            Calculate Your Potential ROI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text"
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: 'clamp(2rem, 5vw, 3rem)'
            }}
          >
            See how much additional revenue improved retention could generate for your gym
          </motion.p>
        </div>

        {/* Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 space-responsive max-w-7xl mx-auto">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '32px'
                }}
              >
                Your Gym Details
              </h3>

              <div className="space-y-6">
                {/* Number of Members */}
                <div>
                  <label
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Number of Members
                  </label>
                  <div className="relative">
                    <Users size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={displayInputs.members}
                      onChange={(e) => handleInputChange('members', e.target.value)}
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '12px 16px 12px 48px',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4169E1'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder="500"
                      min="1"
                    />
                  </div>
                </div>

                {/* Average Monthly Fee */}
                <div>
                  <label
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Average Monthly Fee
                  </label>
                  <div className="relative">
                    <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={displayInputs.monthlyFee}
                      onChange={(e) => handleInputChange('monthlyFee', e.target.value)}
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '12px 16px 12px 48px',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4169E1'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder="50"
                      min="1"
                    />
                  </div>
                </div>

                {/* Current Retention Rate */}
                <div>
                  <label
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                      marginBottom: '8px',
                      display: 'block'
                    }}
                  >
                    Current Retention Rate (%)
                  </label>
                  <div className="relative">
                    <TrendingUp size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={displayInputs.retentionRate}
                      onChange={(e) => handleInputChange('retentionRate', e.target.value)}
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '12px 16px 12px 48px',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4169E1'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder="60"
                      min="1"
                      max="100"
                    />
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      marginTop: '8px'
                    }}
                  >
                    Industry average is 60-70%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              style={{
                background: 'rgba(65, 105, 225, 0.05)',
                border: '1px solid rgba(65, 105, 225, 0.2)',
                borderRadius: '16px',
                padding: '40px'
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '32px'
                }}
              >
                Your Revenue Analysis
              </h3>

              {/* Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 193, 7, 0.1)',
                  border: '1px solid rgba(255, 193, 7, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <AlertCircle size={20} className="text-yellow-400" />
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0
                  }}
                >
                  <strong>Note:</strong> These are estimates based on industry averages. Your actual results may vary based on your specific implementation and market conditions.
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Current Annual Revenue */}
                <motion.div
                  key={`current-${results.currentRevenue}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '24px'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4
                      style={{
                        fontSize: '18px',
                        color: '#FFFFFF',
                        fontWeight: 600
                      }}
                    >
                      Current Annual Revenue
                    </h4>
                    <DollarSign size={24} className="text-gray-400" />
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#FFFFFF'
                    }}
                  >
                    <AnimatedNumber value={results.currentRevenue} prefix="$" />
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      marginTop: '8px'
                    }}
                  >
                    Based on {inputs.retentionRate}% retention rate
                  </p>
                </motion.div>

                {/* Improved Annual Revenue */}
                <motion.div
                  key={`improved-${results.improvedRevenue}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'rgba(65, 105, 225, 0.1)',
                    border: '1px solid rgba(65, 105, 225, 0.2)',
                    borderRadius: '12px',
                    padding: '24px'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4
                      style={{
                        fontSize: '18px',
                        color: '#FFFFFF',
                        fontWeight: 600
                      }}
                    >
                      Improved Annual Revenue
                    </h4>
                    <TrendingUp size={24} className="text-blue-400" />
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #4169E1, #7B9EFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    <AnimatedNumber value={results.improvedRevenue} prefix="$" />
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      marginTop: '8px'
                    }}
                  >
                    With 20% better retention
                  </p>
                </motion.div>

                {/* Potential Annual Savings */}
                <motion.div
                  key={`savings-${results.annualSavings}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '12px',
                    padding: '24px'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4
                      style={{
                        fontSize: '18px',
                        color: '#FFFFFF',
                        fontWeight: 600
                      }}
                    >
                      Potential Annual Savings
                    </h4>
                    <DollarSign size={24} className="text-green-400" />
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #10B981, #34D399)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    <AnimatedNumber value={Math.abs(results.annualSavings)} prefix="$" /> (<AnimatedNumber value={Math.abs(results.annualSavings / 12)} prefix="$" />/month)
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      marginTop: '8px'
                    }}
                  >
                    Additional revenue from improved retention
                  </p>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '20px',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}
                  >
                    Ready to Get Your Custom Quote?
                  </h4>
                  
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '24px'
                    }}
                  >
                    Our pricing scales with your results. Get a personalized package based on your gym's specific needs.
                  </p>

                  <motion.a
                    href="/book-call"
                    style={{
                      background: '#4169E1',
                      color: '#FFFFFF',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(65, 105, 225, 0.3)',
                      textDecoration: 'none'
                    }}
                    whileHover={{
                      boxShadow: '0 8px 30px rgba(65, 105, 225, 0.5)',
                      transform: 'translateY(-2px)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    Schedule Pricing Call
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 