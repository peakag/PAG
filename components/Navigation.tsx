'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, UserCircle, LogOut, Settings, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import { useAuth } from './AuthProvider'

export default function Navigation() {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const avatarRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
    { name: 'Our Systems', href: '/solutions', isAnchor: false },
    { name: 'Results', href: '/testimonials', isAnchor: false },
    { name: 'About', href: '/about', isAnchor: false },
    { name: 'Blog', href: '/blog', isAnchor: false }
  ]

  const handleNavClick = (item: any, e: React.MouseEvent) => {
    if (item.isAnchor) {
      e.preventDefault()
      if (window.location.pathname !== '/') {
        window.location.href = '/' + item.href
      } else {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    window.location.href = '/';
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
        style={{
          height: '72px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
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
                className="ml-3 text-black font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '32px',
                  fontFamily: 'system-ui, Inter, sans-serif'
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
                  className="text-[#1A1A1A] hover:text-[#3F92FA] font-medium transition-all duration-200 ease-in-out relative group"
                  style={{ 
                    fontFamily: 'system-ui, Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3F92FA] transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
              {user && (
                <a
                  href="/dashboard"
                  className="text-[#1A1A1A] hover:text-[#3F92FA] font-medium transition-all duration-200 ease-in-out relative group px-3 py-2 rounded-md"
                  style={{ 
                    fontFamily: 'system-ui, Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  Dashboard
                </a>
              )}
            </div>

            {/* Desktop Auth Buttons/User */}
            <div className="hidden md:block">
              {!user ? (
                <motion.a 
                  href="/book-call"
                  style={{ 
                    background: '#1840BA',
                    color: 'white',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
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
                  Get Started
                </motion.a>
              ) : (
                <div className="relative inline-block">
                  <button
                    ref={avatarRef}
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 focus:outline-none"
                  >
                    <UserCircle className="text-gray-600" size={28} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <a href="/dashboard" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
                          <LayoutDashboard size={18} /> Dashboard
                        </a>
                        <a href="/account" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
                          <Settings size={18} /> Account Settings
                        </a>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 px-5 py-3 w-full text-left text-red-600 hover:bg-red-50 transition"
                        >
                          <LogOut size={18} /> Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 mobile-tap-target"
              aria-label="Toggle mobile menu"
              style={{ minHeight: '48px' }}
            >
              <div className="flex flex-col space-y-1">
                <div className={`w-6 h-0.5 bg-[#1840BA] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-[#1840BA] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-[#1840BA] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
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
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-l border-gray-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
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
                    className="ml-2 text-black font-semibold tracking-tight"
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      lineHeight: '28px',
                      fontFamily: 'system-ui, Inter, sans-serif'
                    }}
                  >
                    Peak Automation Group
                  </span>
                </a>
                <button
                  onClick={closeMobileMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-600" />
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
                    className="flex items-center justify-between w-full rounded-lg hover:bg-gray-100 transition-all duration-300 text-left group mobile-nav-item"
                    style={{ minHeight: '48px' }}
                  >
                    <span className="text-[#1A1A1A] font-medium text-base group-hover:text-[#3F92FA] transition-colors duration-300">
                      {item.name}
                    </span>
                    <ArrowRight size={20} className="text-gray-500 group-hover:text-[#3F92FA] group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
                {user && (
                  <a
                    href="/dashboard"
                    className="flex items-center justify-between w-full rounded-lg hover:bg-gray-100 transition-all duration-300 text-left group mobile-nav-item mt-2"
                    style={{ minHeight: '48px' }}
                  >
                    <span className="text-[#1A1A1A] font-medium text-base group-hover:text-[#3F92FA] transition-colors duration-300">
                      Dashboard
                    </span>
                  </a>
                )}
              </div>

              {/* Mobile Auth/User */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                {!user ? (
                  <motion.a 
                    href="/book-call"
                    className="w-full block text-center"
                    style={{ 
                      background: '#1840BA',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontSize: '16px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
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
                    Get Started
                  </motion.a>
                ) : (
                  <div className="relative w-full flex justify-end">
                    <button
                      ref={avatarRef}
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 focus:outline-none"
                    >
                      <UserCircle className="text-gray-600" size={28} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
                        >
                          <a href="/dashboard" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
                            <LayoutDashboard size={18} /> Dashboard
                          </a>
                          <a href="/account" className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
                            <Settings size={18} /> Account Settings
                          </a>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-3 w-full text-left text-red-600 hover:bg-red-50 transition"
                          >
                            <LogOut size={18} /> Sign Out
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 