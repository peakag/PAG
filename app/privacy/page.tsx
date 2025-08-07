"use client";

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  const getCurrentDate = () => {
    return 'August 5, 2025';
  };

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Navigation />
      {/* Privacy Policy Content */}
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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '48px',
                  color: '#1A1A1A',
                  fontWeight: 700,
                  marginBottom: '16px',
                  lineHeight: '1.1'
                }}
              >
                Privacy Policy
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: '18px',
                  color: '#6B7280',
                  marginBottom: '8px'
                }}
              >
                <strong>Effective Date:</strong> {getCurrentDate()}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '16px',
                  color: '#6B7280'
                }}
              >
                Peak Automation Group LLC
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '48px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <div
                style={{
                  fontSize: '16px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                {/* Section 1 - Introduction */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '0'
                }}>
                  Introduction
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  Peak Automation Group LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (peakautomationgroup.com) and use our automation services for gym and fitness businesses.
                </p>

                {/* Section 2 - Information We Collect */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Information We Collect
                </h2>

                <h3 style={{
                  fontSize: '18px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px',
                  marginTop: '24px'
                }}>
                  Personal Information:
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Name and contact information (email, phone number)</li>
                  <li style={{ marginBottom: '8px' }}>Business information (gym name, location, size)</li>
                  <li style={{ marginBottom: '8px' }}>Payment and billing information</li>
                  <li style={{ marginBottom: '8px' }}>Communication preferences</li>
                  <li style={{ marginBottom: '8px' }}>Usage data and analytics</li>
                </ul>

                <h3 style={{
                  fontSize: '18px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '12px',
                  marginTop: '24px'
                }}>
                  Gym Operations Data (when providing services):
                </h3>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Member statistics (anonymized)</li>
                  <li style={{ marginBottom: '8px' }}>Operational metrics for automation setup</li>
                  <li style={{ marginBottom: '8px' }}>Integration data from connected platforms</li>
                  <li style={{ marginBottom: '8px' }}>Performance metrics for ROI tracking</li>
                </ul>

                {/* Section 3 - How We Use Your Information */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  How We Use Your Information
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  We use collected information to:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Provide and manage automation services</li>
                  <li style={{ marginBottom: '8px' }}>Configure and optimize your automation systems</li>
                  <li style={{ marginBottom: '8px' }}>Process payments and maintain accounts</li>
                  <li style={{ marginBottom: '8px' }}>Send service updates and important notices</li>
                  <li style={{ marginBottom: '8px' }}>Provide customer support</li>
                  <li style={{ marginBottom: '8px' }}>Generate anonymized analytics and insights</li>
                  <li style={{ marginBottom: '8px' }}>Improve our services and develop new features</li>
                  <li style={{ marginBottom: '8px' }}>Comply with legal obligations</li>
                </ul>

                {/* Section 4 - Data Sharing */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  How We Share Your Information
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  We may share your information with:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Third-party automation tools we configure for you (Make.com, Zapier, etc.)</li>
                  <li style={{ marginBottom: '8px' }}>Payment processors for billing</li>
                  <li style={{ marginBottom: '8px' }}>Analytics providers for service improvement</li>
                  <li style={{ marginBottom: '8px' }}>Professional advisors and legal authorities when required</li>
                  <li style={{ marginBottom: '8px' }}>Business partners with your explicit consent</li>
                </ul>

                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  We NEVER:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Sell your personal information</li>
                  <li style={{ marginBottom: '8px' }}>Share your gym's operational data with competitors</li>
                  <li style={{ marginBottom: '8px' }}>Use your data for purposes unrelated to our services</li>
                </ul>

                {/* Section 5 - Data Security */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Data Security
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  We implement industry-standard security measures including:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>SSL encryption for data transmission</li>
                  <li style={{ marginBottom: '8px' }}>Secure cloud storage with encryption at rest</li>
                  <li style={{ marginBottom: '8px' }}>Regular security audits and updates</li>
                  <li style={{ marginBottom: '8px' }}>Limited access controls for staff</li>
                  <li style={{ marginBottom: '8px' }}>Secure API connections with integrated platforms</li>
                </ul>

                {/* Section 6 - Your Rights */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Your Rights and Choices
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  You have the right to:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Access your personal information</li>
                  <li style={{ marginBottom: '8px' }}>Correct inaccurate data</li>
                  <li style={{ marginBottom: '8px' }}>Request deletion of your data</li>
                  <li style={{ marginBottom: '8px' }}>Opt-out of marketing communications</li>
                  <li style={{ marginBottom: '8px' }}>Export your data in a portable format</li>
                  <li style={{ marginBottom: '8px' }}>Restrict processing of your information</li>
                </ul>

                {/* Section 7 - Cookies */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Cookies and Tracking
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  We use cookies and similar technologies to:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Maintain session state</li>
                  <li style={{ marginBottom: '8px' }}>Remember your preferences</li>
                  <li style={{ marginBottom: '8px' }}>Analyze website usage</li>
                  <li style={{ marginBottom: '8px' }}>Improve user experience</li>
                </ul>
                <p style={{ marginBottom: '32px' }}>
                  You can control cookies through your browser settings.
                </p>

                {/* Section 8 - Third-Party Services */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Third-Party Services
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Our automation services integrate with various third-party platforms. Each platform has its own privacy policy:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Your gym management software</li>
                  <li style={{ marginBottom: '8px' }}>Payment processors</li>
                  <li style={{ marginBottom: '8px' }}>Communication platforms</li>
                  <li style={{ marginBottom: '8px' }}>Analytics tools</li>
                </ul>
                <p style={{ marginBottom: '32px' }}>
                  We recommend reviewing their privacy policies.
                </p>

                {/* Section 9 - Data Retention */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Data Retention
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  We retain your information for as long as necessary to:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Provide our services</li>
                  <li style={{ marginBottom: '8px' }}>Comply with legal obligations</li>
                  <li style={{ marginBottom: '8px' }}>Resolve disputes</li>
                  <li style={{ marginBottom: '8px' }}>Enforce agreements</li>
                </ul>
                <p style={{ marginBottom: '32px' }}>
                  Account data is retained for 3 years after service termination unless deletion is requested.
                </p>

                {/* Section 10 - Children's Privacy */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Children's Privacy
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  Our services are not directed to individuals under 18. We do not knowingly collect information from children.
                </p>

                {/* Section 11 - Updates */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Updates to This Policy
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  We may update this Privacy Policy periodically. We will notify you of material changes via email or website notice.
                </p>

                {/* Section 12 - Contact */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  Contact Us
                </h2>
                
                <div style={{ marginBottom: '32px' }}>
                  <p style={{ marginBottom: '8px' }}><strong>Peak Automation Group LLC</strong></p>
                  <p style={{ marginBottom: '8px' }}>3390 Peachtree Road NE, Suite 320</p>
                  <p style={{ marginBottom: '8px' }}>Atlanta, GA, 30326, USA</p>
                  <p style={{ marginBottom: '8px' }}>Email: privacy@peakautomationgroup.com</p>
                  <p style={{ marginBottom: '8px' }}>Website: peakautomationgroup.com</p>
                </div>
                <p style={{ marginBottom: '32px' }}>
                  For privacy concerns or data requests, please contact us at the above email.
                </p>

                {/* California Residents */}
                <h2 style={{
                  fontSize: '24px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  California Residents
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  California residents may have additional rights under the CCPA. Contact us for more information.
                </p>

                <hr style={{ 
                  border: 'none', 
                  borderTop: '1px solid #E5E7EB', 
                  margin: '40px 0' 
                }} />

                <p style={{ 
                  fontSize: '14px', 
                  color: '#6B7280', 
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  <strong>By using our services, you acknowledge that you have read and understood this Privacy Policy.</strong>
                </p>
              </div>
          </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 