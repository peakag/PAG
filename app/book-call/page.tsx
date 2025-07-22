'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, Mail, User, Building, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { supabase, BookingSubmission } from '@/lib/supabase'
import Head from 'next/head'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { parseISO, isValid } from 'date-fns'

export default function BookCall() {
  // Book Call page structured data
  const bookCallStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Peak Automation Group Consultation",
    "description": "Book a free consultation to learn how our AI-powered retention system can reduce your gym's member churn by 30% in 90 days",
    "provider": {
      "@type": "Organization",
      "name": "Peak Automation Group",
      "url": "https://peakautomationgroup.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": "Gym Retention Consultation",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free consultation call"
    }
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gymName: '',
    gymSize: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.gymName.trim()) newErrors.gymName = 'Gym name is required'
    if (!formData.gymSize) newErrors.gymSize = 'Please select gym size'
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required'
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required'

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const submissionData: BookingSubmission = {
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        gym_name: formData.gymName.trim(),
        gym_size: formData.gymSize,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        additional_notes: formData.additionalNotes.trim() || null
      }

      const { error } = await supabase
        .from('booking_submissions')
        .insert([submissionData])

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(error.message || 'Failed to submit booking request')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Head>
        <title>Book a Strategy Call - Peak Automation Group</title>
        <meta name="description" content="Schedule your free 30-minute strategy call to learn how Peak Automation Group can reduce your gym's member churn by 30% in 90 days." />
        <meta property="og:title" content="Book a Strategy Call - Peak Automation Group" />
        <meta property="og:description" content="Schedule your free 30-minute strategy call to learn how Peak Automation Group can reduce your gym's member churn by 30% in 90 days." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peakautomationgroup.com/book-call" />
        <meta property="og:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <meta name="twitter:title" content="Book a Strategy Call - Peak Automation Group" />
        <meta name="twitter:description" content="Schedule your free 30-minute strategy call to learn how Peak Automation Group can reduce your gym's member churn by 30% in 90 days." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bookCallStructuredData)
          }}
        />
      </Head>
      <Navigation />
      
      {/* Booking Page Content */}
      <section 
        className="bg-black relative overflow-hidden"
        style={{ padding: '120px 0 100px 0' }}
      >
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.a
                href="/"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </motion.a>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="h1"
                style={{
                  marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Schedule Your Strategy Call
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-text"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Let's discuss how Peak Automation Group can help you stop losing members and start growing revenue. 
                Book a 30-minute strategy call to see your gym's retention potential.
              </motion.p>
            </div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 5vw, 3rem)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                    >
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertCircle size={16} />
                        <span className="text-sm">{submitError}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <User size={16} className="inline mr-2" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.firstName ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <User size={16} className="inline mr-2" />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.lastName ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <Mail size={16} className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <Phone size={16} className="inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Gym Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <Building size={16} className="inline mr-2" />
                        Gym Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.gymName}
                        onChange={(e) => handleInputChange('gymName', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.gymName ? 'border-red-500' : 'border-gray-700'
                        }`}
                        placeholder="Your Gym Name"
                      />
                      {errors.gymName && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.gymName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Gym Size *
                      </label>
                      <select
                        required
                        value={formData.gymSize}
                        onChange={(e) => handleInputChange('gymSize', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.gymSize ? 'border-red-500' : 'border-gray-700'
                        }`}
                      >
                        <option value="">Select gym size</option>
                        <option value="0-100">0-100 members</option>
                        <option value="101-300">101-300 members</option>
                        <option value="301-500">301-500 members</option>
                        <option value="501-1000">501-1000 members</option>
                        <option value="1000+">1000+ members</option>
                      </select>
                      {errors.gymSize && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.gymSize}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <Calendar size={16} className="inline mr-2" />
                        Preferred Date *
                      </label>
                      <DatePicker
                        selected={formData.preferredDate ? parseISO(formData.preferredDate) : null}
                        onChange={date => handleInputChange('preferredDate', date && isValid(date) ? date.toISOString().split('T')[0] : '')}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-200 ${errors.preferredDate ? 'border-red-500' : 'border-gray-700'}`}
                        placeholderText="Select a date"
                        required
                        autoComplete="off"
                        showPopperArrow={false}
                      />
                      {errors.preferredDate && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        <Clock size={16} className="inline mr-2" />
                        Preferred Time *
                      </label>
                      <select
                        required
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-200 ${
                          errors.preferredTime ? 'border-red-500' : 'border-gray-700'
                        }`}
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                      {errors.preferredTime && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your current challenges, goals, or any specific questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Scheduling Call...' : 'Schedule Strategy Call'}
                  </motion.button>
                </form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '2px solid #10B981',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px'
                    }}
                  >
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  
                  <h3
                    style={{
                      fontSize: '24px',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: '16px'
                    }}
                  >
                    Call Scheduled Successfully!
                  </h3>
                  
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: '1.6',
                      marginBottom: '32px'
                    }}
                  >
                    Thank you for scheduling your strategy call. We've sent a confirmation email to {formData.email} with calendar details and preparation materials.
                  </p>
                  
                  <motion.a
                    href="/"
                    className="btn-secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Return to Home
                  </motion.a>
                </motion.div>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: '1.6'
                }}
              >
                <strong>What to expect:</strong> A 30-minute strategy call where we'll analyze your gym's retention challenges, 
                discuss potential solutions, and provide a customized action plan. No sales pitch — just valuable insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 