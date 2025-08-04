'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Target, Users, Zap, Linkedin, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutUs() {
  // About page structured data
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peak Automation Group",
    "description": "AI-powered retention system for gyms to reduce member churn by 30% in 90 days",
    "url": "https://peakautomationgroup.com",
    "logo": "https://peakautomationgroup.com/pag-logo.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/peak-automation-group"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gym Retention Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Member Retention System",
            "description": "Reduce gym member churn by 30% in 90 days"
          }
        }
      ]
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Head>
        <title>About Us - Peak Automation Group</title>
        <meta name="description" content="Meet the team behind Peak Automation Group. We're on a mission to save every gym from losing another member to preventable churn." />
        <meta property="og:title" content="About Us - Peak Automation Group" />
        <meta property="og:description" content="Meet the team behind Peak Automation Group. We're on a mission to save every gym from losing another member to preventable churn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peakautomationgroup.com/about" />
        <meta property="og:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <meta name="twitter:title" content="About Us - Peak Automation Group" />
        <meta name="twitter:description" content="Meet the team behind Peak Automation Group. We're on a mission to save every gym from losing another member to preventable churn." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://peakautomationgroup.com/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutStructuredData)
          }}
        />
      </Head>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="bg-black relative overflow-hidden"
        style={{ padding: '120px 0 80px 0' }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(65, 105, 225, 0.1) 0%, transparent 70%)'
          }}
        />
        <div className="container-max relative z-10">
          {/* Back to Home Button */}
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.a>
          
                    <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4169E1',
                fontWeight: 600,
                marginBottom: '24px'
              }}
            >
              ABOUT US
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: '48px',
                color: '#FFFFFF',
                fontWeight: 600,
                maxWidth: '800px',
                margin: '0 auto 24px auto',
                lineHeight: '1.1'
              }}
            >
              The Team Behind Your Retention Revolution
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '600px',
                margin: '0 auto 60px auto',
                lineHeight: '1.6'
              }}
            >
              We're on a mission to save every gym from losing another member to preventable churn.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        className="bg-black"
        style={{ padding: '80px 0' }}
      >
        <div className="container-max">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                color: '#FFFFFF',
                fontWeight: 600,
                marginBottom: '32px'
              }}
            >
              Born from Frustration, Built for Results
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              <p style={{ marginBottom: '24px' }}>
                Peak Automation Group started when we noticed something shocking: gyms were losing $240,000 annually to member churn, yet had no idea who was about to quit until it was too late.
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                We watched gym owners pour their hearts into creating amazing fitness experiences, only to see members silently slip away. The worst part? Most of these losses were completely preventable.
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                That's when we decided to combine cutting-edge AI technology with deep fitness industry knowledge to create the first truly intelligent member retention system. One that works 24/7, catches at-risk members before they leave, and automatically brings them back.
              </p>
              
              <p>
                Today, we're proud to help gyms across the country transform their retention rates from 50% to 85%+, turning what was once their biggest weakness into their greatest competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section 
        className="bg-black"
        style={{ padding: '60px 0' }}
      >
        <div className="container-max">
          <div 
            style={{
              background: 'rgba(65, 105, 225, 0.05)',
              border: '1px solid rgba(65, 105, 225, 0.1)',
              borderRadius: '16px',
              padding: '60px',
              margin: '60px 0'
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '32px',
                color: '#FFFFFF',
                fontWeight: 600,
                marginBottom: '24px',
                textAlign: 'center'
              }}
            >
              Our Mission
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '20px',
                color: '#FFFFFF',
                fontWeight: 500,
                marginBottom: '48px',
                textAlign: 'center',
                lineHeight: '1.5'
              }}
            >
              To empower every gym owner with AI technology that makes member retention automatic, predictable, and profitable — so they can focus on what they do best: changing lives through fitness.
            </motion.p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <Target size={32} color="#4169E1" />
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}
                >
                  Results Obsessed
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6'
                  }}
                >
                  We measure our success by your retained members and protected revenue. If you don't see results, we haven't done our job.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <Users size={32} color="#4169E1" />
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}
                >
                  Member First
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6'
                  }}
                >
                  Every automation, every message, every intervention is designed to help members achieve their fitness goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <Zap size={32} color="#4169E1" />
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}
                >
                  Effortlessly Powerful
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6'
                  }}
                >
                  Complex AI technology made simple. Set it up once, then let it work while you focus on growing your business.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section 
        className="bg-black"
        style={{ padding: '80px 0' }}
      >
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              color: '#FFFFFF',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            Meet Our Co-Founders
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kevin Bite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '40px'
              }}
            >
              {/* Headshot */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(65, 105, 225, 0.3)'
                }}>
                  <Image
                    src="/kevin-PAG.jpg"
                    alt="Kevin Bite - Co-Founder of Peak Automation Group"
                    width={200}
                    height={200}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    priority
                  />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Kevin Bite
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4169E1',
                    fontWeight: 500,
                    marginBottom: '24px'
                  }}
                >
                  Co-Founder
                </p>

                <div
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '24px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Kevin co-founded Peak Automation Group after a conversation with a gym owner friend who was losing 20 members a month but had no idea why. With experience building automation systems and a passion for fitness, Kevin realized the retention problem wasn't about effort — it was about timing and data.
                  </p>
                  
                  <p style={{ marginBottom: '16px', fontStyle: 'italic' }}>
                    "I kept hearing the same story: gym owners spending their weekends calling no-shows and sending 'we miss you' emails that never worked. Meanwhile, the data showing who was about to quit was right there in their systems — they just couldn't see it. That's when I knew AI could solve this. We built Peak to handle all the retention work automatically, so gym owners can focus on what they actually signed up for: changing lives through fitness."
                  </p>
                  
                  <p>
                    Today, Kevin leads product development and ensures every feature solves a real problem gym owners face daily.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Alessandro Fumo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '40px'
              }}
            >
                             {/* Headshot */}
               <div style={{ marginBottom: '24px' }}>
                 <div style={{
                   width: '200px',
                   height: '200px',
                   borderRadius: '50%',
                   overflow: 'hidden',
                   border: '3px solid rgba(65, 105, 225, 0.3)'
                 }}>
                   <Image
                     src="/alex-PAG.jpg"
                     alt="Alessandro Fumo - Co-Founder of Peak Automation Group"
                     width={200}
                     height={200}
                     style={{
                       width: '100%',
                       height: '100%',
                       objectFit: 'cover'
                     }}
                     priority
                   />
                 </div>
               </div>
              
              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: '24px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    marginBottom: '8px'
                  }}
                >
                  Alessandro Fumo
                </h3>
                
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4169E1',
                    fontWeight: 500,
                    marginBottom: '24px'
                  }}
                >
                  Co-Founder
                </p>

                <div
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '24px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Alessandro joined Peak Automation Group after spending years in financial analysis watching businesses leak revenue through preventable inefficiencies. When Kevin showed him that gyms were losing $240K annually to member churn, he saw an opportunity to apply financial discipline to fitness retention.
                  </p>
                  
                  <p style={{ marginBottom: '16px', fontStyle: 'italic' }}>
                    "The numbers were insane. Gyms track every dollar spent on equipment but had no idea they were losing $1,800 per canceled member. I became obsessed with building a platform that shows exactly where money is walking out the door and how to stop it. Now our clients can see their retention ROI in real-time — down to the penny. That transparency changes everything."
                  </p>
                  
                  <p>
                    As Co-Founder, Alessandro ensures Peak's platform delivers undeniable financial results, from ROI tracking to predictive revenue modeling that helps gyms plan with confidence.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section 
        className="bg-black"
        style={{ padding: '80px 0' }}
      >
        <div className="container-max">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                color: '#FFFFFF',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              Ready to Transform Your Retention?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6'
              }}
            >
              Join the growing community of gym owners who never worry about churn again.
            </motion.p>

            <motion.a
              href="/book-call"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(65, 105, 225, 0.4)'
              }}
              style={{
                background: '#4169E1',
                color: '#FFFFFF',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Start Your Transformation
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 