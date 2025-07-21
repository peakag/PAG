'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, Shield } from 'lucide-react'

const socialProofItems = [
  {
    icon: Star,
    text: "Trusted by 20+ Atlanta gyms",
    color: "text-yellow-400"
  },
  {
    icon: TrendingUp,
    text: "Average 90% retention rate",
    color: "text-green-400"
  },
  {
    icon: Users,
    text: "10,000+ members retained",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    text: "SOC 2 compliant & secure",
    color: "text-purple-400"
  },
  {
    icon: Star,
    text: "4.9/5 customer satisfaction",
    color: "text-yellow-400"
  },
  {
    icon: TrendingUp,
    text: "$2.4M+ revenue saved",
    color: "text-green-400"
  },
  {
    icon: Users,
    text: "30-day free trial",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    text: "90-day money-back guarantee",
    color: "text-purple-400"
  }
]

export default function SocialProofTicker() {
  return (
    <section className="py-8 bg-gray-900 border-t border-gray-800 overflow-hidden">
      <div className="relative">
        {/* First row */}
        <div className="flex items-center space-x-8 scroll-animation">
          {[...socialProofItems, ...socialProofItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 flex-shrink-0"
            >
              <item.icon size={20} className={item.color} />
              <span className="text-white font-medium text-sm whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Second row (reverse direction) */}
        <div className="flex items-center space-x-8 scroll-animation mt-6" style={{ animationDirection: 'reverse' }}>
          {[...socialProofItems, ...socialProofItems].map((item, index) => (
            <div
              key={`reverse-${index}`}
              className="flex items-center space-x-3 flex-shrink-0"
            >
              <item.icon size={20} className={item.color} />
              <span className="text-gray-300 font-medium text-sm whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
} 