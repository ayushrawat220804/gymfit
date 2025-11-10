import Link from 'next/link'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center overflow-hidden">
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  From Zero to GymFit — Real Results, Real Plans.
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transform your body with proven training systems. Build strength, burn fat, and keep the gains with simple, honest guidance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-primary-600/50 overflow-hidden"
                >
                  <span className="relative z-10">Get My Free Plan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center backdrop-blur-sm hover:border-white"
                >
                  My Story
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-400 mb-2">4+</div>
                  <div className="text-sm text-gray-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-400 mb-2">100+</div>
                  <div className="text-sm text-gray-400 font-medium">Transformations</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-400 mb-2">3</div>
                  <div className="text-sm text-gray-400 font-medium">Program Types</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 ring-2 ring-primary-600/20 rounded-2xl z-0 group-hover:ring-primary-600/40 transition-all duration-300"></div>
                <Image
                  src="/images/hero-physique.jpg"
                  alt="Asim Negi transformation physique"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <p className="text-sm font-medium text-gray-200">Real Results • Real People • Real Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your body and achieve your fitness goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary-200">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized workout plans tailored to your goals, experience level, and available equipment.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary-200">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">BMI & BMR Calculators</h3>
              <p className="text-gray-600 leading-relaxed">
                Science-based tools to calculate your calorie needs and track your progress accurately.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary-200">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Diet Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Practical meal plans and nutrition strategies that fit your lifestyle and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-100 leading-relaxed">
            Get a free 7-day starter plan customized to your goals and current fitness level.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20"
          >
            Get Your Free Plan Now
          </Link>
        </div>
      </section>
    </div>
  )
}

