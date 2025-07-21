'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Our Process', href: '#how-it-works' },
    { name: 'ROI Calculator', href: '#roi-calculator' }
  ],
  resources: [
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/book-call' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-black relative">
      {/* Main Footer Content */}
      <div 
        className="container-max"
        style={{ 
          padding: '80px 0 60px 0',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >


        {/* Footer Columns */}
        <div className="responsive-grid-3 lg:grid-cols-5">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
              <Image
                src="/pag-logo.png"
                alt="Peak Automation Group"
                width={120}
                height={32}
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: '1.6',
                marginBottom: '24px'
              }}
            >
              AI-powered retention system for gyms. Stop losing revenue.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#linkedin"
                whileHover={{ color: '#4169E1' }}
                transition={{ duration: 0.2 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer'
                }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#twitter"
                whileHover={{ color: '#4169E1' }}
                transition={{ duration: 0.2 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 - Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      lineHeight: '2.5',
                      textDecoration: 'none',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    whileHover={{ color: '#FFFFFF' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      lineHeight: '2.5',
                      textDecoration: 'none',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    whileHover={{ color: '#FFFFFF' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      lineHeight: '2.5',
                      textDecoration: 'none',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    whileHover={{ color: '#FFFFFF' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5 - Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      lineHeight: '2.5',
                      textDecoration: 'none',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    whileHover={{ color: '#FFFFFF' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '32px 0'
        }}
      >
        <div className="container-max" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.4)'
              }}
            >
              © 2024 Peak Automation Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 