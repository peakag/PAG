'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, Mail, User, Building, ArrowLeft, AlertCircle, CheckCircle, Search, TrendingUp, Map, Check, X, Star, Users, Shield } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { supabase, BookingSubmission } from '@/lib/supabase'
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

    // Phone validation (required)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
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
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
          padding: '120px 0 80px 0' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Back to Home Button */}
              <motion.a
                href="/"
            className="inline-flex items-center gap-2 transition-colors duration-200 mb-8"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
            style={{ 
              textDecoration: 'none', 
              display: 'inline-block',
              color: '#1840BA',
              fontWeight: 500
            }}
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </motion.a>

          <div className="text-center">
            {/* Main Heading */}
              <motion.h1
              initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                fontSize: '48px',
                color: '#1A1A1A',
                fontWeight: 700,
                maxWidth: '900px',
                margin: '0 auto 24px auto',
                lineHeight: '1.1'
              }}
            >
              Let's Automate Your Operations Together
              </motion.h1>
              
            {/* Subheading */}
              <motion.p
              initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: '#4A5568',
                maxWidth: '700px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6'
              }}
            >
              Get a free 30-minute strategy session to identify your biggest automation opportunities
            </motion.p>

            {/* Primary CTA */}
            <motion.a
              href="#booking-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: '#1840BA',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(24, 64, 186, 0.4), 0 0 40px rgba(24, 64, 186, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)',
                animation: 'pulse-glow 2s ease-in-out infinite alternate',
                display: 'inline-block'
              }}
              whileHover={{
                backgroundColor: '#0F2B70',
                transform: 'translateY(-1px)',
                boxShadow: '0 0 30px rgba(24, 64, 186, 0.6), 0 0 60px rgba(24, 64, 186, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Free Strategy Call
            </motion.a>
          </div>
        </div>
      </section>

      {/* What We'll Cover Section */}
      <section style={{ background: '#FFFFFF', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            What We'll Cover in 30 Minutes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
                style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '32px 24px'
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  background: '#1840BA',
                  borderRadius: '50%',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Search size={32} style={{ color: '#FFFFFF' }} />
                </div>
              </div>
              <h3 style={{
                fontSize: '24px',
                color: '#1A1A1A',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Automation Audit
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                We'll identify your top 3 time-wasters and show you exactly how to automate them
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '32px 24px'
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  background: '#1840BA',
                  borderRadius: '50%',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={32} style={{ color: '#FFFFFF' }} />
                </div>
              </div>
              <h3 style={{
                fontSize: '24px',
                color: '#1A1A1A',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                ROI Projection
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                Get specific numbers on potential savings and implementation timeline
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
              style={{
                background: '#F8F9FA',
                borderRadius: '12px',
                padding: '32px 24px'
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  background: '#1840BA',
                  borderRadius: '50%',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Map size={32} style={{ color: '#FFFFFF' }} />
                </div>
              </div>
              <h3 style={{
                fontSize: '24px',
                color: '#1A1A1A',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Custom Roadmap
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6'
              }}>
                Walk away with a clear plan, whether you work with us or implement yourself
              </p>
            </motion.div>
          </div>
        </div>
      </section>





      {/* Calendar/Booking Section */}
      <section id="booking-form" style={{ background: '#FFFFFF', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              Share Your Information
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4A5568',
              marginBottom: '0'
            }}>
              Please provide some quick details so we can prepare for your custom strategy session
            </p>
          </motion.div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '16px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EF4444' }}>
                        <AlertCircle size={16} />
                        <span style={{ fontSize: '14px' }}>{submitError}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <User size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.firstName ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.firstName ? '#EF4444' : '#E5E7EB'}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <User size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.lastName ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.lastName ? '#EF4444' : '#E5E7EB'}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <Mail size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.email ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.email ? '#EF4444' : '#E5E7EB'}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <Phone size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.phone ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.phone ? '#EF4444' : '#E5E7EB'}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Gym Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <Building size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Gym Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.gymName}
                        onChange={(e) => handleInputChange('gymName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.gymName ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.gymName ? '#EF4444' : '#E5E7EB'}
                        placeholder="Your Gym Name"
                      />
                      {errors.gymName && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.gymName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <Users size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Gym Size *
                      </label>
                      <select
                        required
                        value={formData.gymSize}
                        onChange={(e) => handleInputChange('gymSize', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.gymSize ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.gymSize ? '#EF4444' : '#E5E7EB'}
                      >
                        <option value="">Select gym size</option>
                        <option value="0-100">0-100 members</option>
                        <option value="101-300">101-300 members</option>
                        <option value="301-500">301-500 members</option>
                        <option value="501-1000">501-1000 members</option>
                        <option value="1000+">1000+ members</option>
                      </select>
                      {errors.gymSize && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.gymSize}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <Calendar size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Preferred Date *
                      </label>
                      <DatePicker
                        selected={formData.preferredDate ? parseISO(formData.preferredDate) : null}
                        onChange={date => handleInputChange('preferredDate', date && isValid(date) ? date.toISOString().split('T')[0] : '')}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                        className={`w-full p-3 bg-white ${errors.preferredDate ? 'border border-red-500' : 'border border-gray-200'} rounded-lg text-[16px] text-[#1A1A1A] outline-none`}
                        placeholderText="Select a date"
                        required
                        autoComplete="off"
                        showPopperArrow={false}
                      />
                      {errors.preferredDate && (
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1A1A1A',
                        marginBottom: '8px'
                      }}>
                        <Clock size={16} style={{ display: 'inline', marginRight: '8px', color: '#1840BA' }} />
                        Preferred Time *
                      </label>
                      <select
                        required
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: '#FFFFFF',
                          border: errors.preferredTime ? '1px solid #EF4444' : '1px solid #E5E7EB',
                          borderRadius: '8px',
                          color: '#1A1A1A',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                        onBlur={(e) => e.target.style.borderColor = errors.preferredTime ? '#EF4444' : '#E5E7EB'}
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
                        <p style={{
                          color: '#EF4444',
                          fontSize: '14px',
                          marginTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <AlertCircle size={14} />
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#1A1A1A',
                      marginBottom: '8px'
                    }}>
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        color: '#1A1A1A',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        resize: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#1840BA'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      placeholder="Tell us about your current challenges, goals, or any specific questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      background: '#1840BA',
                      color: 'white',
                      padding: '16px 32px',
                      fontSize: '18px',
                      fontWeight: 600,
                      border: 'none',
                      borderRadius: '8px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: 'all 0.2s ease',
                      boxShadow: isSubmitting ? 'none' : '0 0 20px rgba(24, 64, 186, 0.4), 0 0 40px rgba(24, 64, 186, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)',
                      animation: isSubmitting ? 'none' : 'pulse-glow 2s ease-in-out infinite alternate'
                    }}
                    whileHover={!isSubmitting ? {
                      backgroundColor: '#0F2B70',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 0 30px rgba(24, 64, 186, 0.6), 0 0 60px rgba(24, 64, 186, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)'
                    } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Scheduling Call...' : 'Book Your Free Strategy Call'}
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

          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section style={{ background: '#F8F9FA', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            Join Gym Owners Who've Transformed Their Operations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#F59E0B', fill: '#F59E0B', display: 'inline', marginRight: '2px' }} />
                ))}
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6',
                fontStyle: 'italic',
                marginBottom: '16px'
              }}>
                "The strategy call alone saved me 5 hours a week. They showed me automations I didn't even know existed."
              </p>
              <p style={{
                fontSize: '14px',
                color: '#6B7280',
                fontWeight: 500
              }}>
                - Gym Owner
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
                style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#F59E0B', fill: '#F59E0B', display: 'inline', marginRight: '2px' }} />
                ))}
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6',
                fontStyle: 'italic',
                marginBottom: '16px'
              }}>
                "No pushy sales, just genuine help. They gave me a roadmap I could implement myself."
              </p>
              <p style={{
                  fontSize: '14px',
                color: '#6B7280',
                fontWeight: 500
              }}>
                - Studio Owner
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #E5E7EB'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#F59E0B', fill: '#F59E0B', display: 'inline', marginRight: '2px' }} />
                ))}
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4A5568',
                lineHeight: '1.6',
                fontStyle: 'italic',
                marginBottom: '16px'
              }}>
                "Within a week of our call, I had my first automation running. Game changer."
              </p>
              <p style={{
                fontSize: '14px',
                color: '#6B7280',
                fontWeight: 500
              }}>
                - Fitness Center Director
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: '#FFFFFF', padding: '60px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '48px',
              textAlign: 'center'
            }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                q: "Is this really free?",
                a: "Yes, 100% free with no strings attached. We believe in providing value first."
              },
              {
                q: "Will this be a pushy sales call?",
                a: "Not at all. We'll show you what's possible and you decide if you want help implementing."
              },
              {
                q: "What if I'm not tech-savvy?",
                a: "Perfect! We specialize in making automation simple for non-technical gym owners."
              },
              {
                q: "How should I prepare?",
                a: "Just come with an open mind and maybe a list of your biggest operational headaches."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#F8F9FA',
                  borderRadius: '8px',
                  padding: '24px'
                }}
              >
                <h4 style={{
                  fontSize: '18px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}>
                  {faq.q}
                </h4>
                <p style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ background: '#F8F9FA', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#1A1A1A',
              fontWeight: 700,
              marginBottom: '32px'
            }}
          >
            Ready to Transform Your Gym Operations?
          </motion.h2>
          
          <motion.a
            href="#booking-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: '#1840BA',
              color: 'white',
              padding: '20px 40px',
              fontSize: '20px',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 0 20px rgba(24, 64, 186, 0.4), 0 0 40px rgba(24, 64, 186, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)',
              animation: 'pulse-glow 2s ease-in-out infinite alternate'
            }}
            whileHover={{
              backgroundColor: '#0F2B70',
              transform: 'translateY(-1px)',
              boxShadow: '0 0 30px rgba(24, 64, 186, 0.6), 0 0 60px rgba(24, 64, 186, 0.3), 0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Free Strategy Call
          </motion.a>

          {/* Trust Badges */}
          <div style={{ 
            marginTop: '48px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '32px', 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
              <Shield size={20} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '14px', color: '#6B7280' }}>SSL Secured</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
              <CheckCircle size={20} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '14px', color: '#6B7280' }}>No Commitment Required</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 