'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowRight, Play, BarChart3, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ParticlesBackground from './ParticlesBackground'
import TrustMarquee from './TrustMarquee'

// Animated Number Component
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const formatted = useTransform(rounded, (latest) => {
    return prefix + latest.toLocaleString() + suffix
  })

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" })
    return animation.stop
  }, [value, count])

  return <motion.span>{formatted}</motion.span>
}

// Floating Particle Component
function FloatingParticle({ delay = 0, duration = 20, size = 4, opacity = 0.03 }: { 
  delay?: number, 
  duration?: number, 
  size?: number, 
  opacity?: number 
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: '#4169E1',
        borderRadius: '50%',
        opacity: opacity
      }}
      animate={{
        y: [-20, -100, -20],
        x: [0, 30, 0],
        opacity: [opacity, opacity * 2, opacity]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
}

// Gradient Orb Component
function GradientOrb({ 
  size = 300, 
  color1 = "#4169E1", 
  color2 = "#7B9EFF", 
  x = "50%", 
  y = "50%",
  delay = 0 
}: { 
  size?: number, 
  color1?: string, 
  color2?: string, 
  x?: string, 
  y?: string,
  delay?: number 
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${color1}20, ${color2}10, transparent)`,
        borderRadius: '50%',
        filter: 'blur(40px)',
        opacity: 0.05
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.05, 0.08, 0.05],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
}

// Circuit Board Pattern Component
function CircuitBoardPattern() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.08,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, #4169E1 2px, transparent 2px),
          radial-gradient(circle at 80% 70%, #7B9EFF 2px, transparent 2px),
          radial-gradient(circle at 40% 80%, #4169E1 2px, transparent 2px),
          radial-gradient(circle at 90% 20%, #7B9EFF 2px, transparent 2px),
          radial-gradient(circle at 10% 90%, #4169E1 2px, transparent 2px),
          radial-gradient(circle at 70% 10%, #7B9EFF 2px, transparent 2px)
        `,
        backgroundSize: '200px 200px, 150px 150px, 180px 180px, 120px 120px, 160px 160px, 140px 140px',
        backgroundPosition: '0 0, 50px 50px, 100px 100px, 25px 75px, 75px 25px, 125px 125px'
      }}
    >
      {/* Circuit Lines */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15
        }}
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal Circuit Lines */}
        <motion.path
          d="M0 100 L300 100 L350 150 L450 150 L500 100 L800 100 L850 150 L950 150 L1000 100 L1200 100"
          stroke="#4169E1"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0 300 L200 300 L250 250 L350 250 L400 300 L600 300 L650 250 L750 250 L800 300 L1200 300"
          stroke="#7B9EFF"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d="M0 500 L400 500 L450 450 L550 450 L600 500 L1000 500 L1050 450 L1150 450 L1200 500"
          stroke="#4169E1"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        <motion.path
          d="M0 700 L150 700 L200 650 L300 650 L350 700 L500 700 L550 650 L650 650 L700 700 L1200 700"
          stroke="#7B9EFF"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 6 }}
        />

        {/* Vertical Circuit Lines */}
        <motion.path
          d="M100 0 L100 200 L150 250 L150 350 L100 400 L100 600 L150 650 L150 750 L100 800"
          stroke="#4169E1"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.path
          d="M400 0 L400 150 L450 200 L450 300 L400 350 L400 550 L450 600 L450 700 L400 750 L400 800"
          stroke="#7B9EFF"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 3 }}
        />
        <motion.path
          d="M700 0 L700 100 L750 150 L750 250 L700 300 L700 500 L750 550 L750 650 L700 700 L700 800"
          stroke="#4169E1"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <motion.path
          d="M1000 0 L1000 200 L1050 250 L1050 350 L1000 400 L1000 600 L1050 650 L1050 750 L1000 800"
          stroke="#7B9EFF"
          strokeWidth="2"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 7 }}
        />

        {/* Circuit Nodes */}
        <circle cx="300" cy="100" r="4" fill="#4169E1" opacity="0.4">
          <motion.animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="600" cy="300" r="4" fill="#7B9EFF" opacity="0.4">
          <motion.animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="4s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        <circle cx="900" cy="500" r="4" fill="#4169E1" opacity="0.4">
          <motion.animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="5s"
            repeatCount="indefinite"
            begin="2s"
          />
        </circle>
        <circle cx="400" cy="700" r="4" fill="#7B9EFF" opacity="0.4">
          <motion.animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.5s"
            repeatCount="indefinite"
            begin="3s"
          />
        </circle>
      </svg>
    </div>
  )
}

// Dashboard Preview Component for Hero
function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        background: 'linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        boxShadow: `
          0 20px 40px rgba(0, 0, 0, 0.4),
          0 0 80px rgba(65, 105, 225, 0.15)
        `,
        overflow: 'hidden',
        width: '100%',
        maxWidth: '600px',
        height: '400px',
        transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
        position: 'relative'
      }}
      whileHover={{
        transform: 'perspective(1000px) rotateY(-3deg) rotateX(1deg) scale(1.02)',
        boxShadow: `
          0 30px 60px rgba(0, 0, 0, 0.5),
          0 0 100px rgba(65, 105, 225, 0.2)
        `
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}
      />

      {/* Dashboard Header */}
      <div
        style={{
          height: '40px',
          background: 'rgba(0, 0, 0, 0.6)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image
            src="/pag-logo.png"
            alt="Peak Automation Group"
            width={120}
            height={28}
            style={{
              height: '28px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#10B981',
                animation: 'pulse 2s infinite'
              }}
            />
            <span style={{ color: '#10B981', fontSize: '10px', fontWeight: '500' }}>
              Live
            </span>
          </div>
          
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4169E1, #7B9EFF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '10px',
              fontWeight: '600'
            }}
          >
            JD
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div style={{ padding: '16px', height: 'calc(100% - 40px)', display: 'flex', flexDirection: 'column' }}>
        {/* Top Row - Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {/* Member Retention Card */}
          <div
            style={{
              background: 'rgba(65, 105, 225, 0.05)',
              border: '1px solid rgba(65, 105, 225, 0.2)',
              borderRadius: '6px',
              padding: '12px',
              position: 'relative'
            }}
          >
            <div style={{ color: '#8B8B8B', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
              Retention Rate
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              87.3%
            </div>
            <div style={{ color: '#10B981', fontSize: '10px', fontWeight: '500' }}>
              ↑ 20.1%
            </div>
          </div>

          {/* Revenue Saved Card */}
          <div
            style={{
              background: 'rgba(65, 105, 225, 0.05)',
              border: '1px solid rgba(65, 105, 225, 0.2)',
              borderRadius: '6px',
              padding: '12px',
              position: 'relative'
            }}
          >
            <div style={{ color: '#8B8B8B', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
              Revenue Saved
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              $24.5K
            </div>
            <div style={{ color: '#10B981', fontSize: '10px', fontWeight: '500' }}>
              ↑ 18.2%
            </div>
          </div>

          {/* Active Members Card */}
          <div
            style={{
              background: 'rgba(65, 105, 225, 0.05)',
              border: '1px solid rgba(65, 105, 225, 0.2)',
              borderRadius: '6px',
              padding: '12px',
              position: 'relative'
            }}
          >
            <div style={{ color: '#8B8B8B', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
              Check-ins Today
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              1,892
            </div>
            <div style={{ color: '#10B981', fontSize: '10px', fontWeight: '500' }}>
              +12%
            </div>
          </div>
        </div>

        {/* Middle Row - Chart and Activity */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '16px', flex: 1 }}>
          {/* Main Chart Section */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '6px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
              Member Activity Trend
            </div>
            
            {/* Chart Bars */}
            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', flex: 1, paddingBottom: '12px' }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                const height = Math.random() * 40 + 20
                return (
                  <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                    <div
                      style={{
                        width: '100%',
                        height: `${height}px`,
                        background: 'linear-gradient(to top, #4169E1, #7B9EFF)',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)'
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(65, 105, 225, 0.3)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '9px' }}>
                      {day}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Activity Feed Section */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '6px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
              Recent Actions
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              {[
                { action: 'Re-engagement sent to Sarah M.', time: '2m ago', status: 'success' },
                { action: 'Risk alert: 3 members inactive', time: '15m ago', status: 'warning' },
                { action: 'Weekly report generated', time: '1h ago', status: 'info' }
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1 }}>
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: item.status === 'success' ? '#10B981' : item.status === 'warning' ? '#F59E0B' : '#4169E1',
                        flexShrink: 0
                      }}
                    />
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '10px', lineHeight: '1.2' }}>
                      {item.action}
                    </span>
                  </div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '9px', flexShrink: 0 }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Performance Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#10B981',
                animation: 'pulse 2s infinite'
              }}
            />
            <span style={{ color: '#10B981', fontSize: '10px', fontWeight: '500' }}>
              Real-time sync
            </span>
          </div>
          
          <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '10px' }}>
            Last updated: 2 sec ago
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-glow {
          0% { 
            box-shadow: 0 0 20px rgba(24, 64, 186, 0.4), 0 0 40px rgba(24, 64, 186, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          100% { 
            box-shadow: 0 0 25px rgba(24, 64, 186, 0.6), 0 0 50px rgba(24, 64, 186, 0.3), 0 4px 15px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </motion.div>
  )
}

export default function Hero() {
  // Mobile detection (safe, client-only)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Reduced motion detection
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Particles Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0
        }}
      >
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="container-max relative z-10">
        <div className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
          {/* Hero Text Content */}
          <div>
            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0, ...(isMobile ? {} : { y: 15 }) }}
              animate={{ opacity: 1, ...(isMobile ? {} : { y: 0 }) }}
              transition={{ duration: prefersReducedMotion ? 0.1 : (isMobile ? 0.3 : 0.5), delay: 0.05 }}
              style={{ marginTop: '12px', marginBottom: '16px' }}
            >
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={20}
                    style={{ color: '#FBBF24', fill: '#FBBF24' }}
                  />
                ))}
                <span style={{ fontSize: isMobile ? '14px' : '16px', color: '#4A5568', fontWeight: 500 }}>
                  5.0 from 38 reviews
                </span>
              </div>
            </motion.div>
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, ...(isMobile ? {} : { y: 30 }) }}
              animate={{ opacity: 1, ...(isMobile ? {} : { y: 0 }) }}
              transition={{ duration: prefersReducedMotion ? 0.1 : (isMobile ? 0.4 : 0.8), delay: 0.1 }}
              className="mx-auto mb-6 font-bold text-center text-gray-900"
              style={{
                position: 'relative',
                zIndex: 2,
                fontSize: 'clamp(26px, 7vw, 48px)',
                lineHeight: 1.1,
                maxWidth: 'min(900px, 92vw)',
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
                paddingLeft: isMobile ? 16 : 0,
                paddingRight: isMobile ? 16 : 0
              }}
            >
              Your Manual Systems Are Killing Your Gym's Growth
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, ...(isMobile ? {} : { y: 20 }) }}
              animate={{ opacity: 1, ...(isMobile ? {} : { y: 0 }) }}
              transition={{ duration: prefersReducedMotion ? 0.1 : (isMobile ? 0.3 : 0.6), delay: 0.3 }}
              style={{
                fontSize: 'clamp(15px, 4.2vw, 20px)',
                lineHeight: 1.6,
                color: '#4A5568',
                marginBottom: '32px',
                maxWidth: 'min(700px, 90vw)',
                textAlign: 'center',
                margin: '0 auto',
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
                paddingLeft: isMobile ? 16 : 0,
                paddingRight: isMobile ? 16 : 0
              }}
            >
              We implement intelligent automation systems that handle your follow-ups, fill your classes, and run your operations—so you can do what you love: transform lives.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, ...(isMobile ? {} : { y: 20 }) }}
              animate={{ opacity: 1, ...(isMobile ? {} : { y: 0 }) }}
              transition={{ duration: prefersReducedMotion ? 0.1 : (isMobile ? 0.3 : 0.6), delay: 0.5 }}
              className="flex items-center justify-center mb-6" style={{ marginTop: '24px' }}
            >
              <motion.a
                href="/book-call"
                style={{
                  background: '#1840BA',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
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
                Book a Strategy Call
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, ...(isMobile ? {} : { y: 20 }) }}
              animate={{ opacity: 1, ...(isMobile ? {} : { y: 0 }) }}
              transition={{ duration: prefersReducedMotion ? 0.1 : (isMobile ? 0.3 : 0.6), delay: 0.7 }}
              className="text-center"
              style={{ marginTop: isMobile ? '40px' : '100px', marginBottom: '24px' }}
            >
              <p
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  margin: 0,
                  fontWeight: 400
                }}
              >
                Trusted by fitness studios and multi-location gyms nationwide
              </p>
            </motion.div>

            {/* Scrolling Trust Marquee */}
            <div style={{ marginTop: '40px', marginBottom: '60px' }}>
              <TrustMarquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 