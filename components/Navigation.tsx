'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              GymFit
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                About
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Programs
              </Link>
              <Link href="/diet" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Diet & Nutrition
              </Link>
              <Link href="/tools" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Calculators
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition">
                Gallery
              </Link>
              <Link href="/contact" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition">
                Get Free Plan
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Overlay) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-0 left-0 right-0 mx-auto max-w-md bg-white rounded-b-2xl shadow-2xl">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="text-2xl font-bold text-primary-600">GymFit</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-primary-600 p-2"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/programs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium">
              Programs
            </Link>
            <Link href="/diet" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium">
              Diet & Nutrition
            </Link>
            <Link href="/tools" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium">
              Calculators
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-primary-600 rounded-md text-base font-medium">
              Gallery
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-primary-600 text-white rounded-md text-base font-medium">
              Get Free Plan
            </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

