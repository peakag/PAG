'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { AlertTriangle, CheckCircle, Clock, Users, DollarSign, TrendingDown, Zap, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

export default function ProblemSolution() {
  const sectionRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const [particlesInit, setParticlesInit] = useState(false)

  // Initialize particles engine
  const particlesInitCallback = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
    setParticlesInit(true)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const createParticles = (count: number, type: 'problem' | 'solution'): JSX.Element[] => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={`particle ${type === 'problem' ? 'particle-red' : 'particle-blue'}`}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${10 + Math.random() * 20}s`
        }}
      />
    ))
  }

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    // Simple fade-in animation for problem items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-4')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all problem items
    const problemItems = document.querySelectorAll('.problem-item')
    problemItems.forEach((item) => {
      item.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700')
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
          
          {/* Problem Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-12 lg:p-16 bg-gradient-to-br from-white to-red-50 lg:rounded-l-2xl"
          >
            {/* Problem Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {isMounted && createParticles(15, 'problem')}
            </div>
            
            <div className="relative z-10 text-center mb-8">
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#1A1A1A',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}
              >
                Your Gym Operations Are Breaking
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                Manual processes fragment your operations, steal time, and kill member retention
              </p>
            </div>

            {/* Problem Visual */}
            <div className="relative z-10">
              {/* Scattered Icons Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: AlertTriangle, color: '#EF4444', label: 'Missed Follow-ups' },
                  { icon: Clock, color: '#F59E0B', label: 'Time Waste' },
                  { icon: Users, color: '#3B82F6', label: 'Member Churn' },
                  { icon: DollarSign, color: '#10B981', label: 'Lost Revenue' },
                  { icon: TrendingDown, color: '#8B5CF6', label: 'Declining Growth' },
                  { icon: AlertTriangle, color: '#EF4444', label: 'Manual Errors' },
                  { icon: Clock, color: '#F59E0B', label: 'Slow Response' },
                  { icon: Users, color: '#3B82F6', label: 'Poor Engagement' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="problem-item group hover:scale-110 transition-all duration-300"
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '16px',
                      border: '1px solid #E5E7EB',
                      textAlign: 'center',
                      position: 'relative'
                    }}
                  >
                    <div
                      className="animate-pulse"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 8px',
                        color: '#FFFFFF',
                        animationDelay: `${idx * 0.5}s`
                      }}
                    >
                      <item.icon size={16} />
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: '#6B7280',
                        fontWeight: '500'
                      }}
                    >
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>


            </div>
          </motion.div>

          {/* Solution Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-12 lg:p-16 bg-gradient-to-br from-gray-900 to-gray-800 lg:rounded-r-2xl overflow-hidden"
          >
            {/* Animated Background Lines and Dots */}
            <div className="absolute inset-0 z-0">
              <Particles
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
                init={particlesInitCallback}
                loaded={particlesLoaded}
                options={{
                    background: {
                      color: {
                        value: "transparent",
                      },
                    },
                    fullScreen: {
                      enable: false,
                    },
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: false,
                        },
                        onHover: {
                          enable: false,
                        },
                        resize: true,
                      },
                    },
                    particles: {
                      color: {
                        value: ["#FFFFFF", "#E5E7EB"],
                      },
                      links: {
                        color: "#FFFFFF",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1.2,
                        triangles: {
                          enable: false,
                        },
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                          default: "bounce",
                        },
                        random: true,
                        speed: 0.8,
                        straight: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200,
                        },
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 1000,
                        },
                        value: 40,
                      },
                      opacity: {
                        value: 0.4,
                        random: {
                          enable: true,
                          minimumValue: 0.1,
                        },
                        animation: {
                          enable: true,
                          speed: 1,
                          minimumValue: 0.1,
                          sync: false,
                        },
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: { min: 1, max: 3 },
                        random: {
                          enable: true,
                          minimumValue: 1,
                        },
                        animation: {
                          enable: true,
                          speed: 2,
                          minimumValue: 0.5,
                          sync: false,
                        },
                      },
                    },
                    detectRetina: true,
                  }}
                />
            </div>
            
            {/* Solution Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {isMounted && createParticles(12, 'solution')}
            </div>
            
            <div className="relative z-10 text-center mb-8">
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}
              >
                Automation Fixes Everything
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}
              >
                With intelligent automation handling everything, your gym runs on autopilot
              </p>
            </div>

            {/* Solution Visual */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative h-64 w-64 sm:h-72 sm:w-72 mx-auto mb-8"
              >
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-pulse">
                    <Image
                      src="/pag-logo.png"
                      alt="Peak Automation Group Logo"
                      width={140}
                      height={37}
                      style={{
                        height: '37px',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>

                {/* Orbiting Elements - Outer Ring */}
                <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                                            {/* Orbit Item 1 - Analytics */}
                        <div className="absolute top-1/2 left-1/2 orbit-animation-1">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-xl">📊</span>
                          </div>
                        </div>
                        
                        {/* Orbit Item 2 - Payments */}
                        <div className="absolute top-1/2 left-1/2 orbit-animation-2">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-xl">💰</span>
                          </div>
                        </div>
                        
                        {/* Orbit Item 3 - Members */}
                        <div className="absolute top-1/2 left-1/2 orbit-animation-3">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-xl">👥</span>
                          </div>
                        </div>
                        
                        {/* Orbit Item 4 - Growth */}
                        <div className="absolute top-1/2 left-1/2 orbit-animation-4">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-xl">📈</span>
                          </div>
                        </div>
                  </div>
                </div>

                {/* Inner Orbiting Ring */}
                <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-1/2 orbit-animation-reverse-1">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 orbit-animation-reverse-2">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Pulse Rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border border-blue-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 border border-blue-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                </div>
              </motion.div>

              {/* System Labels */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-8 justify-center max-w-xs mx-auto">
                <div className="flex items-center justify-center gap-2">
                  <span>📊</span> <span>Analytics</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>💰</span> <span>Payments</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>👥</span> <span>Members</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>📈</span> <span>Growth</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 text-center mt-8"
            >
              <motion.a
                href="/book-call"
                className="group hover:scale-105 hover:shadow-xl transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  color: '#1A1A1A',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
                whileHover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started 
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginTop: '8px'
                }}
              >
                Join 200+ gyms running on autopilot
              </p>
            </motion.div>
          </motion.div>
        </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-up {
          0% {
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100%) translateX(50px);
            opacity: 0;
          }
        }
        @keyframes float-diagonal {
          0% {
            transform: translate(0, 100%);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate(50px, -100%);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        @keyframes orbit-reverse {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg) translateX(80px) rotate(360deg);
          }
        }
        .orbit-animation-1 {
          animation: orbit 20s linear infinite;
          animation-delay: 0s;
        }
        .orbit-animation-2 {
          animation: orbit 20s linear infinite;
          animation-delay: -5s;
        }
        .orbit-animation-3 {
          animation: orbit 20s linear infinite;
          animation-delay: -10s;
        }
        .orbit-animation-4 {
          animation: orbit 20s linear infinite;
          animation-delay: -15s;
        }
        .orbit-animation-reverse-1 {
          animation: orbit-reverse 15s linear infinite;
          animation-delay: 0s;
        }
        .orbit-animation-reverse-2 {
          animation: orbit-reverse 15s linear infinite;
          animation-delay: -7.5s;
        }
        @media (max-width: 768px) {
          @keyframes orbit {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg) translateX(60px) rotate(-360deg);
            }
          }
          @keyframes orbit-reverse {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(50px) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(-360deg) translateX(50px) rotate(360deg);
            }
          }
          /* Force animations on mobile */
          .orbit-animation-1 {
            animation: orbit 20s linear infinite !important;
            animation-delay: 0s !important;
            transform: translate(-50%, -50%);
            will-change: transform;
            -webkit-animation: orbit 20s linear infinite !important;
            -webkit-animation-delay: 0s !important;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          .orbit-animation-2 {
            animation: orbit 20s linear infinite !important;
            animation-delay: -5s !important;
            transform: translate(-50%, -50%);
            will-change: transform;
            -webkit-animation: orbit 20s linear infinite !important;
            -webkit-animation-delay: -5s !important;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          .orbit-animation-3 {
            animation: orbit 20s linear infinite !important;
            animation-delay: -10s !important;
            transform: translate(-50%, -50%);
            will-change: transform;
            -webkit-animation: orbit 20s linear infinite !important;
            -webkit-animation-delay: -10s !important;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          .orbit-animation-4 {
            animation: orbit 20s linear infinite !important;
            animation-delay: -15s !important;
            transform: translate(-50%, -50%);
            will-change: transform;
            -webkit-animation: orbit 20s linear infinite !important;
            -webkit-animation-delay: -15s !important;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          .orbit-animation-reverse-1 {
            animation: orbit-reverse 15s linear infinite !important;
            animation-delay: 0s !important;
            transform: translate(-50%, -50%);
            will-change: transform;
            -webkit-animation: orbit-reverse 15s linear infinite !important;
            -webkit-animation-delay: 0s !important;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          .orbit-animation-reverse-2 {
            animation: orbit-reverse 15s linear infinite !important;
            animation-delay: -7.5s !important;
            transform: translate(-50%, -50%);
            will-change: transform;
            -webkit-animation: orbit-reverse 15s linear infinite !important;
            -webkit-animation-delay: -7.5s !important;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          /* Ensure pulse animations work on mobile */
          .animate-ping {
            animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite !important;
            -webkit-animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite !important;
          }
          
          /* Mobile-specific optimizations for better visibility */
          .relative {
            overflow: visible !important;
          }
          
          /* Ensure orbit containers are properly sized on mobile */
          .absolute.top-1\\/2.left-1\\/2.w-full.h-full {
            min-height: 256px !important;
            min-width: 256px !important;
          }
          
          /* Enhanced mobile performance */
          .orbit-animation-1 > div,
          .orbit-animation-2 > div,
          .orbit-animation-3 > div,
          .orbit-animation-4 > div,
          .orbit-animation-reverse-1 > div,
          .orbit-animation-reverse-2 > div {
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
        }
        
        /* Override any motion-reduce preferences on mobile for these specific animations */
        @media (max-width: 768px) and (prefers-reduced-motion: reduce) {
          .orbit-animation-1,
          .orbit-animation-2,
          .orbit-animation-3,
          .orbit-animation-4,
          .orbit-animation-reverse-1,
          .orbit-animation-reverse-2 {
            animation: none !important;
          }
          
          .orbit-animation-1 {
            animation: orbit 20s linear infinite !important;
            animation-delay: 0s !important;
          }
          .orbit-animation-2 {
            animation: orbit 20s linear infinite !important;
            animation-delay: -5s !important;
          }
          .orbit-animation-3 {
            animation: orbit 20s linear infinite !important;
            animation-delay: -10s !important;
          }
          .orbit-animation-4 {
            animation: orbit 20s linear infinite !important;
            animation-delay: -15s !important;
          }
          .orbit-animation-reverse-1 {
            animation: orbit-reverse 15s linear infinite !important;
            animation-delay: 0s !important;
          }
          .orbit-animation-reverse-2 {
            animation: orbit-reverse 15s linear infinite !important;
            animation-delay: -7.5s !important;
          }
        }
        .particle {
          position: absolute;
          pointer-events: none;
          will-change: transform;
        }
        .particle-red {
          width: 6px;
          height: 6px;
          background: #ef4444;
          border-radius: 50%;
          animation: float-up 15s linear infinite;
          opacity: 0.6;
          box-shadow: 0 0 4px rgba(239, 68, 68, 0.3);
        }
        .particle-blue {
          width: 5px;
          height: 5px;
          background: #3b82f6;
          border-radius: 50%;
          animation: float-diagonal 12s linear infinite;
          opacity: 0.5;
          box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  )
}
