import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Terms of Service Content */}
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
                Terms of Service
              </h1>
              
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '8px'
                }}
              >
                <strong>Effective Date:</strong> {currentDate}
              </div>
              
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                <strong>Last Updated:</strong> {currentDate}
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
                  1. Acceptance of Terms
                </h2>
                
                <p style={{ marginBottom: '24px' }}>
                  By accessing or using Peak Automation Group's AI-powered member retention platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our Service.
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
                  2. Description of Service
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  Peak Automation Group provides an AI-driven platform that:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Analyzes gym member behavior patterns</li>
                  <li style={{ marginBottom: '8px' }}>Predicts member churn risk</li>
                  <li style={{ marginBottom: '8px' }}>Automates member engagement campaigns</li>
                  <li style={{ marginBottom: '8px' }}>Provides retention analytics and reporting</li>
                  <li style={{ marginBottom: '8px' }}>Integrates with existing gym management systems</li>
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
                  3. Account Registration
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
                  Eligibility
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  You must be at least 18 years old and authorized to enter binding contracts on behalf of your business.
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
                  Account Security
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  You are responsible for:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Maintaining the confidentiality of your account credentials</li>
                  <li style={{ marginBottom: '8px' }}>All activities that occur under your account</li>
                  <li style={{ marginBottom: '8px' }}>Notifying us immediately of any unauthorized access</li>
                  <li style={{ marginBottom: '8px' }}>Ensuring your account information is accurate and current</li>
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
                  4. Acceptable Use Policy
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  You agree NOT to:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Use the Service for any illegal or unauthorized purpose</li>
                  <li style={{ marginBottom: '8px' }}>Violate any laws in your jurisdiction</li>
                  <li style={{ marginBottom: '8px' }}>Transmit any malicious code or viruses</li>
                  <li style={{ marginBottom: '8px' }}>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li style={{ marginBottom: '8px' }}>Interfere with or disrupt the Service or servers</li>
                  <li style={{ marginBottom: '8px' }}>Use the Service to send spam or unsolicited communications</li>
                  <li style={{ marginBottom: '8px' }}>Resell or redistribute the Service without written permission</li>
                  <li style={{ marginBottom: '8px' }}>Use the Service to collect or store sensitive health information</li>
                  <li style={{ marginBottom: '8px' }}>Violate the privacy rights of gym members</li>
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
                  5. Data and Privacy
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
                  Your Data
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>You retain all rights to your gym and member data</li>
                  <li style={{ marginBottom: '8px' }}>You grant us a license to use this data solely to provide the Service</li>
                  <li style={{ marginBottom: '8px' }}>You are responsible for obtaining necessary consents from gym members</li>
                  <li style={{ marginBottom: '8px' }}>You must comply with all applicable privacy laws</li>
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
                  Data Processing
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>We process data according to your instructions</li>
                  <li style={{ marginBottom: '8px' }}>We implement appropriate security measures</li>
                  <li style={{ marginBottom: '8px' }}>We will not sell or share your data with third parties</li>
                  <li style={{ marginBottom: '8px' }}>Our data practices are detailed in our Privacy Policy</li>
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
                  6. Intellectual Property
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
                  Our Property
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Peak Automation Group owns all rights to:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>The Service and its original content</li>
                  <li style={{ marginBottom: '8px' }}>Features, functionality, and design</li>
                  <li style={{ marginBottom: '8px' }}>Trademarks, logos, and brand elements</li>
                  <li style={{ marginBottom: '8px' }}>Proprietary algorithms and AI models</li>
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
                  Your Property
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  You retain ownership of:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Your gym's data and content</li>
                  <li style={{ marginBottom: '8px' }}>Your trademarks and branding</li>
                  <li style={{ marginBottom: '8px' }}>Any content you upload to the Service</li>
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
                  License Grant
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  You grant us a limited license to use your content as necessary to provide the Service.
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
                  7. Payment Terms
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
                  Billing
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Subscription fees are billed monthly in advance</li>
                  <li style={{ marginBottom: '8px' }}>All fees are in USD unless otherwise specified</li>
                  <li style={{ marginBottom: '8px' }}>Prices are subject to change with 30 days notice</li>
                  <li style={{ marginBottom: '8px' }}>You authorize automatic recurring payments</li>
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
                  No Refunds
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>All payments are non-refundable</li>
                  <li style={{ marginBottom: '8px' }}>No refunds for partial months of service</li>
                  <li style={{ marginBottom: '8px' }}>You may cancel future billing at any time</li>
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
                  Late Payments
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Overdue amounts may incur late fees</li>
                  <li style={{ marginBottom: '8px' }}>We may suspend service for non-payment</li>
                  <li style={{ marginBottom: '8px' }}>You remain responsible for fees during suspension</li>
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
                  8. Service Level and Support
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
                  Availability
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>We strive for 99.9% uptime but do not guarantee uninterrupted service</li>
                  <li style={{ marginBottom: '8px' }}>Scheduled maintenance will be communicated in advance</li>
                  <li style={{ marginBottom: '8px' }}>We are not liable for third-party service interruptions</li>
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
                  Support
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Support level depends on your subscription plan</li>
                  <li style={{ marginBottom: '8px' }}>Standard support is provided via email</li>
                  <li style={{ marginBottom: '8px' }}>Priority and phone support available for higher tiers</li>
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
                  9. Disclaimers and Limitations
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
                  No Warranties
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
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
                  No Guarantee of Results
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We do not guarantee:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Specific retention improvements</li>
                  <li style={{ marginBottom: '8px' }}>Prevention of all member cancellations</li>
                  <li style={{ marginBottom: '8px' }}>Accuracy of AI predictions</li>
                  <li style={{ marginBottom: '8px' }}>Compatibility with all systems</li>
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
                  Limitation of Liability
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEAK AUTOMATION GROUP SHALL NOT BE LIABLE FOR:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Any indirect, incidental, special, or consequential damages</li>
                  <li style={{ marginBottom: '8px' }}>Loss of profits, data, or business opportunities</li>
                  <li style={{ marginBottom: '8px' }}>Damages exceeding the fees paid in the preceding 12 months</li>
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
                  10. Indemnification
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  You agree to indemnify and hold harmless Peak Automation Group from any claims, damages, or expenses arising from:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Your use of the Service</li>
                  <li style={{ marginBottom: '8px' }}>Your violation of these Terms</li>
                  <li style={{ marginBottom: '8px' }}>Your violation of any third-party rights</li>
                  <li style={{ marginBottom: '8px' }}>Your gym members' claims related to your use of the Service</li>
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
                  11. Termination
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
                  By You
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>You may cancel your subscription at any time</li>
                  <li style={{ marginBottom: '8px' }}>Cancellation takes effect at the end of the current billing period</li>
                  <li style={{ marginBottom: '8px' }}>No refunds for unused time</li>
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
                  By Us
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  We may terminate or suspend your account immediately for:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Violation of these Terms</li>
                  <li style={{ marginBottom: '8px' }}>Non-payment</li>
                  <li style={{ marginBottom: '8px' }}>Illegal or harmful activities</li>
                  <li style={{ marginBottom: '8px' }}>At our sole discretion with 30 days notice</li>
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
                  Effect of Termination
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Your access to the Service will cease</li>
                  <li style={{ marginBottom: '8px' }}>We may delete your data after 30 days</li>
                  <li style={{ marginBottom: '8px' }}>Provisions that should survive will remain in effect</li>
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
                  12. Modifications
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
                  To Terms
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>We may modify these Terms at any time</li>
                  <li style={{ marginBottom: '8px' }}>Material changes will be notified via email</li>
                  <li style={{ marginBottom: '8px' }}>Continued use constitutes acceptance of changes</li>
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
                  To Service
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>We may modify or discontinue features</li>
                  <li style={{ marginBottom: '8px' }}>We will attempt to notify of significant changes</li>
                  <li style={{ marginBottom: '8px' }}>We are not liable for modifications or discontinuations</li>
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
                  13. General Provisions
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
                  Governing Law
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  These Terms are governed by the laws of the State of Georgia, United States, without regard to its conflict of law principles. You agree that any legal action or proceeding relating to these Terms or the Service shall be brought exclusively in the state or federal courts located in Fulton County, Georgia.
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
                  Dispute Resolution
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>First, parties will attempt good faith resolution through direct communication</li>
                  <li style={{ marginBottom: '8px' }}>If unresolved within 30 days, binding arbitration in Alpharetta, Georgia</li>
                  <li style={{ marginBottom: '8px' }}>Arbitration will be conducted under the Commercial Arbitration Rules of the American Arbitration Association</li>
                  <li style={{ marginBottom: '8px' }}>Each party bears its own attorneys' fees and costs</li>
                  <li style={{ marginBottom: '8px' }}>Small claims court actions in Fulton County are permitted for qualifying disputes</li>
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
                  Severability
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  If any provision is deemed invalid or unenforceable by a court of competent jurisdiction in Georgia, the remaining provisions shall continue in full force and effect.
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
                  Entire Agreement
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  These Terms constitute the entire agreement between you and Peak Automation Group regarding the Service and supersede all prior agreements and understandings.
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
                  Assignment
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations freely.
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
                  Force Majeure
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  Neither party shall be liable for any delay or failure to perform due to causes beyond reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or governmental actions.
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
                  Waiver
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
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
                  Notice
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Legal notices shall be sent to:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>For Peak Automation Group: legal@peakautomationgroup.com</li>
                  <li style={{ marginBottom: '8px' }}>For You: The email address associated with your account</li>
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
                  14. Contact Information
                </h2>
                
                <p style={{ marginBottom: '16px' }}>
                  For questions about these Terms of Service:
                </p>
                
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ marginBottom: '8px' }}><strong>Peak Automation Group</strong></p>
                  <p style={{ marginBottom: '8px' }}>Email: legal@peakautomationgroup.com</p>
                  <p style={{ marginBottom: '8px' }}>Address: 225 Tidwell Dr. Alpharetta, GA 30004</p>
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
                  15. Additional Legal Notices
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
                  DMCA Compliance
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  Peak Automation Group respects intellectual property rights and will respond to valid DMCA takedown notices sent to legal@peakautomationgroup.com.
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
                  Georgia-Specific Consumer Rights
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  Georgia residents may have additional rights under Georgia consumer protection laws. Nothing in these Terms limits any rights you may have under applicable Georgia state law.
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
                  Export Compliance
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations maintained by the U.S. Department of Commerce.
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
                  16. Additional Terms for Specific Features
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
                  API Access
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Requires separate API agreement</li>
                  <li style={{ marginBottom: '8px' }}>Subject to rate limits and usage restrictions</li>
                  <li style={{ marginBottom: '8px' }}>Must not be used to compete with our Service</li>
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
                  White Label Services
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>Requires separate white label agreement</li>
                  <li style={{ marginBottom: '8px' }}>Additional fees and terms apply</li>
                  <li style={{ marginBottom: '8px' }}>Strict branding guidelines must be followed</li>
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
                  Data Export
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '8px' }}>You may request data export at any time</li>
                  <li style={{ marginBottom: '8px' }}>Exports provided in standard formats</li>
                  <li style={{ marginBottom: '8px' }}>Reasonable fees may apply for large exports</li>
                </ul>

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
                  <strong>By using Peak Automation Group's Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms are entered into in Alpharetta, GA, and you consent to the exclusive jurisdiction of Georgia courts for any disputes arising from these Terms or your use of the Service.</strong>
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