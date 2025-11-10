'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  id: number
  src: string
  alt: string
  date: string
  weight: string
  bmi: string
  milestone: string
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/image-1.jpg',
    alt: 'Asim Negi transformation - Month 3',
    date: 'Month 3',
    weight: '165 lbs',
    bmi: '23.5',
    milestone: 'First visible muscle definition'
  },
  {
    id: 2,
    src: '/images/image-2.jpg',
    alt: 'Asim Negi transformation - Month 6',
    date: 'Month 6',
    weight: '170 lbs',
    bmi: '24.2',
    milestone: 'Significant strength gains'
  },
  {
    id: 3,
    src: '/images/image-3.jpg',
    alt: 'Asim Negi transformation - Month 9',
    date: 'Month 9',
    weight: '172 lbs',
    bmi: '24.5',
    milestone: 'Major body composition change'
  },
  {
    id: 4,
    src: '/images/image-4.jpg',
    alt: 'Asim Negi transformation - Month 12',
    date: 'Month 12',
    weight: '175 lbs',
    bmi: '24.9',
    milestone: 'One year transformation complete'
  },
  {
    id: 5,
    src: '/images/image-6.jpg',
    alt: 'Asim Negi transformation - Month 15',
    date: 'Month 15',
    weight: '175 lbs',
    bmi: '24.9',
    milestone: 'Maintained and improved'
  },
  {
    id: 6,
    src: '/images/image-6-current.jpg',
    alt: 'Asim Negi current physique',
    date: 'Current',
    weight: '175 lbs',
    bmi: '24.9',
    milestone: 'Latest transformation'
  }
]

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Transformation Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Real transformation, real results. See the journey from start to current.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
                onClick={() => setSelectedPhoto(photo)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    <div className="font-bold text-xl mb-2 drop-shadow-lg">{photo.date}</div>
                    <div className="text-sm text-gray-200 font-medium">{photo.milestone}</div>
                  </div>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">Weight: <span className="text-gray-900">{photo.weight}</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">BMI: <span className="text-gray-900">{photo.bmi}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-5xl w-full relative animate-scaleIn">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(null)
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 transition-all duration-200 hover:scale-110 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="relative w-full h-[70vh] min-h-[500px] bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {selectedPhoto.date}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">{selectedPhoto.milestone}</p>
                  </div>
                </div>
                <div className="flex space-x-8 pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-600/20 rounded-lg p-3">
                      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">Weight</span>
                      <span className="font-bold text-xl">{selectedPhoto.weight}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-600/20 rounded-lg p-3">
                      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm block">BMI</span>
                      <span className="font-bold text-xl">{selectedPhoto.bmi}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


