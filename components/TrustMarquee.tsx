'use client'

import React from 'react'

const gymNames = [
  'Fit Factory',
  'Iron Paradise',
  'Studio45',
  'Powerhouse Fitness',
  'Balance Yoga',
  'Flex Nation',
  'Peak Performance',
  'CoreStrength Studio',
  'Velocity Athletics',
  'BlueWave Fitness',
  'Elevate Gym',
  'Titan Barbell',
  'Zenith Pilates',
  'Momentum Martial Arts',
  'Fusion CrossFit',
  'Pulse Cycling',
  'Summit HIIT',
  'Gravity Climbing',
  'Endurance Lab',
  'Synergy Studio'
]

export default function TrustMarquee() {
  // Duplicate list twice so translateX -50% lines up seamlessly  
  const list = [...gymNames, ...gymNames]

  return (
    <div className="relative py-4 mx-auto overflow-hidden rounded-full" style={{ maxWidth: '900px', background: 'transparent' }}>
      {/* Gradients to create edge fades */}
      <div className="fade-left pointer-events-none absolute left-0 top-0 h-full rounded-l-full" style={{ width: '120px' }} />
      <div className="fade-right pointer-events-none absolute right-0 top-0 h-full rounded-r-full" style={{ width: '120px' }} />

      <div className="overflow-hidden rounded-full">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap" style={{ willChange: 'transform', minWidth: 'max-content' }}>
          {list.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              style={{
                fontSize: '14px',
                color: '#4A5568',
                fontWeight: 500,
                whiteSpace: 'nowrap'
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        
        /* Ensure animation works on mobile */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 80s linear infinite;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
            -webkit-animation: marquee 80s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
        .fade-left {
          background: linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0) 100%);
        }
        .fade-right {
          background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0) 100%);
        }
      `}</style>
    </div>
  )
}
