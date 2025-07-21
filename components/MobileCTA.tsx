'use-client'

import { ArrowRight } from 'lucide-react'

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <button className="group w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-premium hover:shadow-blue-glow transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 min-h-[44px] flex items-center justify-center">
        Start Free Trial
        <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
} 