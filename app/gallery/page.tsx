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
    src: '/images/progress-1.jpg',
    alt: 'Asim Negi transformation - Month 3',
    date: 'Month 3',
    weight: '165 lbs',
    bmi: '23.5',
    milestone: 'First visible muscle definition'
  },
  {
    id: 2,
    src: '/images/progress-2.jpg',
    alt: 'Asim Negi transformation - Month 6',
    date: 'Month 6',
    weight: '170 lbs',
    bmi: '24.2',
    milestone: 'Significant strength gains'
  },
  {
    id: 3,
    src: '/images/progress-3.jpg',
    alt: 'Asim Negi transformation - Month 9',
    date: 'Month 9',
    weight: '172 lbs',
    bmi: '24.5',
    milestone: 'Major body composition change'
  },
  {
    id: 4,
    src: '/images/progress-4.jpg',
    alt: 'Asim Negi transformation - Month 12',
    date: 'Month 12',
    weight: '175 lbs',
    bmi: '24.9',
    milestone: 'One year transformation complete'
  },
  {
    id: 5,
    src: '/images/progress-5.jpg',
    alt: 'Asim Negi current physique',
    date: 'Current',
    weight: '175 lbs',
    bmi: '24.9',
    milestone: 'Maintained and improved'
  }
]

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Progress Gallery</h1>
          <p className="text-xl text-gray-300">
            Real transformation, real results. See the journey from start to current.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                    <div className="font-semibold text-lg mb-1">{photo.date}</div>
                    <div className="text-sm text-gray-200">{photo.milestone}</div>
                  </div>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Weight: <strong className="text-gray-900">{photo.weight}</strong></span>
                    <span>BMI: <strong className="text-gray-900">{photo.bmi}</strong></span>
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
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-4xl w-full relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative w-full h-[600px]">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 bg-gray-900 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedPhoto.date}</h3>
                <p className="text-gray-300 mb-4">{selectedPhoto.milestone}</p>
                <div className="flex space-x-6 text-sm">
                  <div>
                    <span className="text-gray-400">Weight:</span>{' '}
                    <span className="font-semibold">{selectedPhoto.weight}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">BMI:</span>{' '}
                    <span className="font-semibold">{selectedPhoto.bmi}</span>
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


