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
    { name: 'Features', href: '#features', isAnchor: true },
    { name: 'Our Process', href: '#how-it-works', isAnchor: true },
    { name: 'ROI Calculator', href: '#roi-calculator', isAnchor: true },
    { name: 'About Us', href: '/about', isAnchor: false }
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
              {user && (
                <a
                  href="/dashboard"
                  className="text-white/90 hover:text-[#4169E1] font-semibold text-sm tracking-[0.01em] transition-all duration-300 ease-in-out relative group px-3 py-2 rounded-md"
                  style={{ fontWeight: 600 }}
                >
                  Dashboard
                </a>
              )}
            </div>

            {/* Desktop Auth Buttons/User */}
            <div className="hidden md:block">
              {!user ? (
                <motion.a 
                  href="/login"
                  className="bg-[#4169E1] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(65,105,225,0.6)] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  style={{ fontWeight: 600, textDecoration: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Client Login
                </motion.a>
              ) : (
                <div className="relative inline-block">
                  <button
                    ref={avatarRef}
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-[#4169E1]/20 transition-colors border border-white/10 focus:outline-none"
                  >
                    <UserCircle className="text-white" size={28} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 mt-2 w-56 bg-black border border-[rgba(255,255,255,0.08)] rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <a href="/dashboard" className="flex items-center gap-2 px-5 py-3 text-white/90 hover:bg-[#4169E1]/10 transition">
                          <LayoutDashboard size={18} /> Dashboard
                        </a>
                        <a href="/account" className="flex items-center gap-2 px-5 py-3 text-white/90 hover:bg-[#4169E1]/10 transition">
                          <Settings size={18} /> Account Settings
                        </a>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 px-5 py-3 w-full text-left text-red-400 hover:bg-red-500/10 transition"
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
                {user && (
                  <a
                    href="/dashboard"
                    className="flex items-center justify-between w-full rounded-lg hover:bg-[#4169E1]/10 transition-all duration-300 text-left group mobile-nav-item mt-2"
                  >
                    <span className="text-white font-semibold text-base group-hover:text-[#4169E1] transition-colors duration-300">
                      Dashboard
                    </span>
                  </a>
                )}
              </div>

              {/* Mobile Auth/User */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                {!user ? (
                  <motion.a 
                    href="/login"
                    className="w-full bg-[#4169E1] text-white px-6 py-4 rounded-md font-semibold text-base transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(65,105,225,0.6)] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                    style={{ fontWeight: 600, textDecoration: 'none' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Client Login
                  </motion.a>
                ) : (
                  <div className="relative w-full flex justify-end">
                    <button
                      ref={avatarRef}
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-[#4169E1]/20 transition-colors border border-white/10 focus:outline-none"
                    >
                      <UserCircle className="text-white" size={28} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-0 mt-2 w-56 bg-black border border-[rgba(255,255,255,0.08)] rounded-lg shadow-lg z-50 overflow-hidden"
                        >
                          <a href="/dashboard" className="flex items-center gap-2 px-5 py-3 text-white/90 hover:bg-[#4169E1]/10 transition">
                            <LayoutDashboard size={18} /> Dashboard
                          </a>
                          <a href="/account" className="flex items-center gap-2 px-5 py-3 text-white/90 hover:bg-[#4169E1]/10 transition">
                            <Settings size={18} /> Account Settings
                          </a>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-3 w-full text-left text-red-400 hover:bg-red-500/10 transition"
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