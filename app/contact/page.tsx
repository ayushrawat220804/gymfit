'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    currentWeight: '',
    height: '',
    preferredProgram: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        goal: '',
        currentWeight: '',
        height: '',
        preferredProgram: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Plan</h1>
          <p className="text-xl text-gray-300">
            Fill out the form below and I'll send you a personalized 7-day starter plan based on your goals.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
              <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
              <p className="text-green-700">
                I've received your information. Check your email for your free 7-day starter plan within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Goal *
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    required
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select your goal</option>
                    <option value="muscle-gain">Build Muscle / Bulk</option>
                    <option value="fat-loss">Lose Fat / Cut</option>
                    <option value="strength">Increase Strength</option>
                    <option value="recomposition">Body Recomposition</option>
                    <option value="general-fitness">General Fitness</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currentWeight" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Weight (lbs) *
                    </label>
                    <input
                      type="number"
                      id="currentWeight"
                      name="currentWeight"
                      required
                      value={formData.currentWeight}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="175"
                    />
                  </div>

                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                      Height (inches) *
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      required
                      value={formData.height}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="70"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredProgram" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Program
                  </label>
                  <select
                    id="preferredProgram"
                    name="preferredProgram"
                    value={formData.preferredProgram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">I'm not sure yet</option>
                    <option value="full-body">Full Body (Beginner)</option>
                    <option value="ppl">Push/Pull/Legs (Recommended)</option>
                    <option value="bro-split">Bro Split (Advanced)</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Tell me about your fitness experience, available equipment, or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition transform hover:scale-105"
                >
                  Get My Free 7-Day Plan
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive email communications. We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          )}

          {/* Alternative CTA removed as per request */}
        </div>
      </section>
    </div>
  )
}

