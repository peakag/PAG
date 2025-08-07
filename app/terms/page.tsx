"use client";

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  const getCurrentDate = () => {
    return 'August 5, 2025';
  };

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Navigation />
      {/* Terms of Service Content */}
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
                Terms of Service
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
                {/* Section 1 - Acceptance of Terms */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '0'
                }}>
                  1. Acceptance of Terms
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  These Terms of Service ("Terms") govern your use of Peak Automation Group LLC's ("Company," "we," "our," or "us") automation services for gym and fitness businesses. By accessing our website or using our services, you agree to be bound by these Terms.
                </p>

                {/* Section 2 - Description of Services */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  2. Description of Services
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Peak Automation Group LLC provides automation implementation services for fitness businesses, including but not limited to:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Lead follow-up automation</li>
                  <li style={{ marginBottom: '8px' }}>Member retention systems</li>
                  <li style={{ marginBottom: '8px' }}>Payment processing automation</li>
                  <li style={{ marginBottom: '8px' }}>Operations dashboard setup</li>
                  <li style={{ marginBottom: '8px' }}>Class scheduling optimization</li>
                  <li style={{ marginBottom: '8px' }}>Custom automation workflows</li>
                </ul>
                <p style={{ marginBottom: '32px' }}>
                  We implement and configure third-party tools and do not provide proprietary software.
                </p>

                {/* Section 3 - Acceptable Use */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  3. Acceptable Use
                </h2>
                
                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  You agree to:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Provide accurate business information</li>
                  <li style={{ marginBottom: '8px' }}>Maintain security of your account credentials</li>
                  <li style={{ marginBottom: '8px' }}>Use services only for lawful business purposes</li>
                  <li style={{ marginBottom: '8px' }}>Cooperate with implementation requirements</li>
                  <li style={{ marginBottom: '8px' }}>Maintain necessary third-party accounts and subscriptions</li>
                </ul>

                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  You agree NOT to:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Misrepresent your business or authority</li>
                  <li style={{ marginBottom: '8px' }}>Use services for illegal activities</li>
                  <li style={{ marginBottom: '8px' }}>Attempt to reverse-engineer our configurations</li>
                  <li style={{ marginBottom: '8px' }}>Resell or redistribute our services without permission</li>
                  <li style={{ marginBottom: '8px' }}>Interfere with service operations</li>
                </ul>

                {/* Section 4 - Account Responsibilities */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  4. Account Responsibilities
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  You are responsible for:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Maintaining confidentiality of account access</li>
                  <li style={{ marginBottom: '8px' }}>All activities under your account</li>
                  <li style={{ marginBottom: '8px' }}>Providing accurate and current information</li>
                  <li style={{ marginBottom: '8px' }}>Backing up your data</li>
                  <li style={{ marginBottom: '8px' }}>Maintaining compatible systems and software</li>
                </ul>

                {/* Section 5 - Payment Terms */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  5. Payment Terms
                </h2>
                
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Services are billed monthly or as agreed</li>
                  <li style={{ marginBottom: '8px' }}>Payment is due upon receipt of invoice</li>
                  <li style={{ marginBottom: '8px' }}>Late payments may incur service suspension</li>
                  <li style={{ marginBottom: '8px' }}>No refunds for partial months of service</li>
                  <li style={{ marginBottom: '8px' }}>Client responsible for third-party tool subscriptions</li>
                  <li style={{ marginBottom: '8px' }}>Prices subject to change with 30 days notice</li>
                </ul>

                {/* Section 6 - Intellectual Property Rights */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  6. Intellectual Property Rights
                </h2>

                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  Peak Automation Group LLC Property:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Automation workflows and configurations</li>
                  <li style={{ marginBottom: '8px' }}>Implementation methodologies</li>
                  <li style={{ marginBottom: '8px' }}>Documentation and training materials</li>
                  <li style={{ marginBottom: '8px' }}>Company trademarks and branding</li>
                </ul>

                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  Client Property:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Your business data</li>
                  <li style={{ marginBottom: '8px' }}>Your customer information</li>
                  <li style={{ marginBottom: '8px' }}>Your branding and content</li>
                  <li style={{ marginBottom: '8px' }}>Your operational data</li>
                </ul>

                {/* Section 7 - Confidentiality */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  7. Confidentiality
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Both parties agree to maintain confidentiality of:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Business operations data</li>
                  <li style={{ marginBottom: '8px' }}>Proprietary methodologies</li>
                  <li style={{ marginBottom: '8px' }}>Customer information</li>
                  <li style={{ marginBottom: '8px' }}>Pricing and financial information</li>
                  <li style={{ marginBottom: '8px' }}>Strategic plans and processes</li>
                </ul>

                {/* Section 8 - Disclaimers and Warranties */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  8. Disclaimers and Warranties
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Services provided "AS IS" without warranties of any kind. We do not guarantee:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Specific revenue increases</li>
                  <li style={{ marginBottom: '8px' }}>Specific member retention rates</li>
                  <li style={{ marginBottom: '8px' }}>Uninterrupted service availability</li>
                  <li style={{ marginBottom: '8px' }}>Compatibility with all systems</li>
                  <li style={{ marginBottom: '8px' }}>Specific business outcomes</li>
                </ul>
                <p style={{ marginBottom: '32px' }}>
                  We DO guarantee our best efforts in implementing proven automation systems.
                </p>

                {/* Section 9 - Limitation of Liability */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  9. Limitation of Liability
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Peak Automation Group LLC's total liability shall not exceed the amount paid for services in the past 3 months. We are not liable for:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Lost profits or revenue</li>
                  <li style={{ marginBottom: '8px' }}>Data loss or corruption</li>
                  <li style={{ marginBottom: '8px' }}>Third-party service failures</li>
                  <li style={{ marginBottom: '8px' }}>Indirect or consequential damages</li>
                  <li style={{ marginBottom: '8px' }}>Business interruptions</li>
                </ul>

                {/* Section 10 - Indemnification */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  10. Indemnification
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  You agree to indemnify Peak Automation Group LLC from claims arising from:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Your use of the services</li>
                  <li style={{ marginBottom: '8px' }}>Violation of these Terms</li>
                  <li style={{ marginBottom: '8px' }}>Violation of applicable laws</li>
                  <li style={{ marginBottom: '8px' }}>Infringement of third-party rights</li>
                  <li style={{ marginBottom: '8px' }}>Your business operations</li>
                </ul>

                {/* Section 11 - Termination */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  11. Termination
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Either party may terminate with 30 days written notice.
                </p>
                
                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  Immediate termination may occur for:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Non-payment</li>
                  <li style={{ marginBottom: '8px' }}>Material breach of Terms</li>
                  <li style={{ marginBottom: '8px' }}>Illegal activities</li>
                  <li style={{ marginBottom: '8px' }}>Insolvency or bankruptcy</li>
                </ul>

                <p style={{ marginBottom: '12px', fontWeight: 600 }}>
                  Upon termination:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Access to services ends</li>
                  <li style={{ marginBottom: '8px' }}>Outstanding payments become due</li>
                  <li style={{ marginBottom: '8px' }}>Client data returned upon request</li>
                  <li style={{ marginBottom: '8px' }}>Confidentiality obligations continue</li>
                </ul>

                {/* Section 12 - Data Handling */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  12. Data Handling
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  We process data according to our Privacy Policy. You retain ownership of your data. We maintain the right to use anonymized, aggregated data for service improvement.
                </p>

                {/* Section 13 - Changes to Terms */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  13. Changes to Terms
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  We may modify these Terms with 30 days notice via email or website announcement. Continued use constitutes acceptance of modified Terms.
                </p>

                {/* Section 14 - Governing Law */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  14. Governing Law
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  These Terms are governed by the laws of Georgia, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Fulton County, Georgia.
                </p>

                {/* Section 15 - Third-Party Services */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  15. Third-Party Services
                </h2>
                
                <p style={{ marginBottom: '12px' }}>
                  Our services integrate with third-party platforms. We are not responsible for third-party:
                </p>
                <ul style={{ marginBottom: '32px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Service availability</li>
                  <li style={{ marginBottom: '8px' }}>Terms and policies</li>
                  <li style={{ marginBottom: '8px' }}>Data handling practices</li>
                  <li style={{ marginBottom: '8px' }}>Service changes or discontinuation</li>
                </ul>

                {/* Section 16 - Entire Agreement */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  16. Entire Agreement
                </h2>
                
                <p style={{ marginBottom: '32px' }}>
                  These Terms constitute the entire agreement between you and Peak Automation Group LLC regarding our services and supersede all prior agreements.
                </p>

                {/* Section 17 - Contact Information */}
                <h2 style={{
                  fontSize: '20px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  marginBottom: '16px',
                  marginTop: '40px'
                }}>
                  17. Contact Information
                </h2>
                
                <div style={{ marginBottom: '32px' }}>
                  <p style={{ marginBottom: '8px' }}><strong>Peak Automation Group LLC</strong></p>
                  <p style={{ marginBottom: '8px' }}>3390 Peachtree Road NE, Suite 320</p>
                  <p style={{ marginBottom: '8px' }}>Atlanta, GA, 30326, USA</p>
                  <p style={{ marginBottom: '8px' }}>Email: legal@peakautomationgroup.com</p>
                  <p style={{ marginBottom: '8px' }}>Website: peakautomationgroup.com</p>
                </div>
                <p style={{ marginBottom: '32px' }}>
                  For questions about these Terms, please contact us at the above email.
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
                  <strong>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
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