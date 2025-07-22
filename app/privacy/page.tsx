"use client";

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      {/* Back to Home Button */}
      <motion.a
        href="/"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8 ml-2 mt-2 absolute left-0 top-0 z-20"
        whileHover={{ x: -4 }}
        transition={{ duration: 0.2 }}
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </motion.a>
      
      {/* Privacy Policy Content */}
      <section 
        className="bg-black relative overflow-hidden"
        style={{ padding: '120px 0 100px 0' }}
      >
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1
                style={{
                  fontSize: '48px',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Privacy Policy
              </h1>
              
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '8px'
                }}
              >
                <strong>Effective Date:</strong> July 21, 2025
              </div>
              
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                <strong>Last Updated:</strong> July 21, 2025
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '48px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.7'
                }}
              >
                <h2
                  style={{
                    fontSize: '32px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '24px',
                    marginTop: '0'
                  }}
                >
                  Introduction
                </h2>
                
                <p style={{ marginBottom: '24px' }}>
                  Peak Automation Group ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered member retention platform and services.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Information We Collect
                </h2>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  Information You Provide Directly
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Account Information:</strong> Name, email address, phone number, business name, and billing information</li>
                  <li style={{ marginBottom: '8px' }}><strong>Gym Data:</strong> Member information, attendance records, payment histories, and engagement metrics</li>
                  <li style={{ marginBottom: '8px' }}><strong>Communications:</strong> Information you provide when contacting our support team or sales representatives</li>
                </ul>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  Information Collected Automatically
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Usage Data:</strong> How you interact with our platform, features used, and performance metrics</li>
                  <li style={{ marginBottom: '8px' }}><strong>Technical Data:</strong> IP address, browser type, device information, and operating system</li>
                  <li style={{ marginBottom: '8px' }}><strong>Cookies:</strong> We use cookies to enhance your experience and analyze platform usage</li>
                </ul>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  Information From Integrated Systems
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Third-Party Platforms:</strong> Data synced from your gym management systems (Mindbody, Glofox, etc.)</li>
                  <li style={{ marginBottom: '8px' }}><strong>Analytics Data:</strong> Aggregated performance metrics and behavioral patterns</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  How We Use Your Information
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  We use collected information to:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Provide and maintain our AI retention services</li>
                  <li style={{ marginBottom: '8px' }}>Analyze member behavior patterns and predict churn risk</li>
                  <li style={{ marginBottom: '8px' }}>Send automated engagement campaigns on your behalf</li>
                  <li style={{ marginBottom: '8px' }}>Generate analytics reports and insights</li>
                  <li style={{ marginBottom: '8px' }}>Improve our platform and develop new features</li>
                  <li style={{ marginBottom: '8px' }}>Communicate with you about your account and services</li>
                  <li style={{ marginBottom: '8px' }}>Ensure platform security and prevent fraud</li>
                  <li style={{ marginBottom: '8px' }}>Comply with legal obligations</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Data Sharing and Disclosure
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  We do not sell, rent, or trade your personal information. We may share information only in these circumstances:
                </p>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  Service Providers
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We work with trusted third-party services for:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Cloud hosting and data storage (Google Cloud Platform)</li>
                  <li style={{ marginBottom: '8px' }}>Payment processing (Stripe)</li>
                  <li style={{ marginBottom: '8px' }}>Communication services (for automated messaging)</li>
                  <li style={{ marginBottom: '8px' }}>Analytics and monitoring</li>
                </ul>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  Legal Requirements
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  We may disclose information when required by law, court order, or government request.
                </p>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  Business Transfers
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  In the event of a merger, acquisition, or sale of assets, information may be transferred to the acquiring entity.
                </p>

                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '16px',
                    marginTop: '32px'
                  }}
                >
                  With Consent
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  Any other sharing of data will only occur with your explicit consent.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Data Security
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  We use appropriate safeguards to protect your information, including:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>SSL encryption for data transmission</li>
                  <li style={{ marginBottom: '8px' }}>Encrypted storage for sensitive data</li>
                  <li style={{ marginBottom: '8px' }}>Limited access through authentication protocols</li>
                  <li style={{ marginBottom: '8px' }}>Regular internal reviews and employee data protection training</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Data Retention
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  We retain your personal information as long as needed to fulfill the services or as required by law.
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Account and gym data: Duration of service + 3 years</li>
                  <li style={{ marginBottom: '8px' }}>Communication and usage data: Up to 3 years</li>
                  <li style={{ marginBottom: '8px' }}>Users may request deletion at any time, subject to legal retention requirements</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Your Privacy Rights (Nationwide)
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  As a U.S. resident, you may:
                </p>
                <ul style={{ marginBottom: '16px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Request access to your personal data</li>
                  <li style={{ marginBottom: '8px' }}>Request corrections or updates</li>
                  <li style={{ marginBottom: '8px' }}>Request deletion of your information</li>
                  <li style={{ marginBottom: '8px' }}>Request to limit use of your information for marketing</li>
                  <li style={{ marginBottom: '8px' }}>Opt out of promotional communications</li>
                </ul>
                
                <p style={{ marginBottom: '24px' }}>
                  To exercise your rights, contact: <strong>privacy@peakautomationgroup.com</strong>
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  California Privacy Rights
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  California residents have additional rights under the CCPA:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Right to know what personal information we collect</li>
                  <li style={{ marginBottom: '8px' }}>Right to know if we sell or share personal information (we do not)</li>
                  <li style={{ marginBottom: '8px' }}>Right to opt-out of sale (not applicable as we don't sell data)</li>
                  <li style={{ marginBottom: '8px' }}>Right to non-discrimination for exercising privacy rights</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Georgia Consumer Privacy
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  Currently, Georgia does not have a comprehensive privacy law like California. However, we voluntarily extend similar protections, including:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Transparency in data use</li>
                  <li style={{ marginBottom: '8px' }}>No sale of personal data</li>
                  <li style={{ marginBottom: '8px' }}>Respect for deletion and access requests</li>
                  <li style={{ marginBottom: '8px' }}>Reasonable data security measures</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Federal Compliance
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  This policy also aligns with U.S. federal regulations such as:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>CAN-SPAM Act (for marketing emails)</li>
                  <li style={{ marginBottom: '8px' }}>Children's Online Privacy Protection Act (COPPA)</li>
                  <li style={{ marginBottom: '8px' }}>Federal Trade Commission (FTC) consumer privacy guidelines</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  International Users
                </h2>
                
                <p style={{ marginBottom: '24px' }}>
                  If you access our services from outside the U.S., your data may be transferred to and processed in the United States. We implement appropriate safeguards for such international transfers.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Children's Privacy
                </h2>
                
                <p style={{ marginBottom: '24px' }}>
                  Our services are not intended for individuals under 18. We do not knowingly collect information from children. If we discover such data, we will promptly delete it.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Third-Party Links
                </h2>
                
                <p style={{ marginBottom: '24px' }}>
                  Our platform may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies separately.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Changes to This Policy
                </h2>
                
                <p style={{ marginBottom: '24px' }}>
                  We may update this policy periodically. We will notify you of material changes via email or platform notification. Continued use after changes constitutes acceptance.
                </p>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Contact Information
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  For questions, concerns, or requests regarding this Privacy Policy:
                </p>
                
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ marginBottom: '8px' }}><strong>Peak Automation Group</strong></p>
                  <p style={{ marginBottom: '8px' }}>Email: privacy@peakautomationgroup.com</p>
                  <p style={{ marginBottom: '8px' }}>Address: 225 Tidwell Dr. Alpharetta, Georgia 30004</p>
                </div>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Compliance
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  This policy is designed to comply with:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>General Data Protection Regulation (GDPR)</li>
                  <li style={{ marginBottom: '8px' }}>California Consumer Privacy Act (CCPA)</li>
                  <li style={{ marginBottom: '8px' }}>Georgia Personal Identity Protection Act</li>
                  <li style={{ marginBottom: '8px' }}>Other applicable federal and state data protection laws</li>
                </ul>

                <h2
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '20px',
                    marginTop: '40px'
                  }}
                >
                  Cookie Policy
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  We use cookies to enhance functionality and understand usage:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Essential Cookies:</strong> Enable platform operations</li>
                  <li style={{ marginBottom: '8px' }}><strong>Analytics Cookies:</strong> Help improve the platform</li>
                  <li style={{ marginBottom: '8px' }}><strong>Preference Cookies:</strong> Remember user settings</li>
                  <li style={{ marginBottom: '8px' }}><strong>Marketing Cookies:</strong> Measure advertising performance</li>
                </ul>
                
                <p style={{ marginBottom: '24px' }}>
                  You can adjust cookie preferences via your browser settings.
                </p>

                <hr 
                  style={{ 
                    border: 'none', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                    margin: '40px 0' 
                  }} 
                />

                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  <strong>By using our platform, you acknowledge that you have read and understood this Privacy Policy.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 