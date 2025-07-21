'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  const navItems = [
    { name: 'Features', href: '#features', isAnchor: true },
    { name: 'Our Process', href: '#how-it-works', isAnchor: true },
    { name: 'ROI Calculator', href: '#roi-calculator', isAnchor: true },
    { name: 'About Us', href: '/about', isAnchor: false }
  ]

  const handleNavClick = (item: any, e: React.MouseEvent) => {
    if (item.isAnchor) {
      e.preventDefault()
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        window.location.href = '/' + item.href
      } else {
        // If we're already on home page, just scroll to section
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    // For non-anchor links (like About Us), let the default behavior handle it
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-black/80 backdrop-blur-[20px]'
        }`}
        style={{
          height: '72px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="container-max h-full">
          <div className="flex items-center justify-between h-full padding-responsive">
            {/* Logo */}
            <motion.a 
              href="/"
              className="flex items-center cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
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
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
              <span 
                className="ml-3 text-white font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '32px'
                }}
              >
                Peak Automation Group
              </span>
            </motion.a>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-white/70 hover:text-white font-medium text-sm tracking-[0.01em] transition-all duration-300 ease-in-out relative group"
                  style={{ fontWeight: 500 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <motion.a 
                href="/login"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(65,105,225,0.6)] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                style={{ fontWeight: 500, textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Client Portal
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 mobile-tap-target"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-[20px] z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-[20px] z-50 md:hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-l border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <a 
                  href="/"
                  onClick={() => closeMobileMenu()}
                  className="flex items-center"
                >
                  <Image
                    src="/pag-logo.png"
                    alt="Peak Automation Group"
                    width={100}
                    height={28}
                    style={{
                      height: '28px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                  <span 
                    className="ml-2 text-white font-semibold tracking-tight"
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      lineHeight: '28px'
                    }}
                  >
                    Peak Automation Group
                  </span>
                </a>
                <button
                  onClick={closeMobileMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col p-6 space-responsive">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(item, e)
                      closeMobileMenu()
                    }}
                    className="flex items-center justify-between w-full rounded-lg hover:bg-white/10 transition-all duration-300 text-left group mobile-nav-item"
                  >
                    <span className="text-white font-medium text-base group-hover:text-blue-400 transition-colors duration-300">
                      {item.name}
                    </span>
                    <ArrowRight size={20} className="text-white/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <motion.a 
                  href="/login"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-md font-medium text-base transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(65,105,225,0.6)] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  style={{ fontWeight: 500, textDecoration: 'none' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Client Portal
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 