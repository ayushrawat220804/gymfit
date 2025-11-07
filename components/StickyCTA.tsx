'use client'

import Link from 'next/link'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:block hidden">
      <Link
        href="/contact"
        className="bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-700 transition-all transform hover:scale-105 flex items-center space-x-2 font-semibold"
      >
        <span>Get My Free Plan</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  )
}
