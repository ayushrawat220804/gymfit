import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">My Transformation Story</h1>
          <p className="text-xl text-gray-300">
            From zero to GymFit — here's how I did it, and how you can too.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Starting Point</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Like many of you, I started from absolute zero. No gym experience, no knowledge of nutrition, 
                and honestly, no idea where to begin. I was frustrated with how I looked and felt, but every 
                attempt to "get fit" ended in confusion and giving up.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The turning point came when I realized I needed a system, not just random workouts. I dove deep 
                into learning about training principles, nutrition science, and what actually works versus what's 
                just marketing hype.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                My transformation wasn't overnight. It took consistent effort, trial and error, and learning from 
                mistakes. I tried different training splits, experimented with nutrition approaches, and gradually 
                built both my physique and my knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the years, I've helped over 100 people transform their bodies using the same principles that 
                worked for me. The key? Keeping it simple, evidence-based, and sustainable.
              </p>
            </div>

            <div className="mb-12 bg-gray-50 p-8 rounded-lg border-l-4 border-primary-600">
              <p className="text-xl text-gray-800 italic font-medium">
                "If I can do this from zero, you can too. The only difference between where you are and where you 
                want to be is a solid plan and consistent action."
              </p>
            </div>

            {/* Stats */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Current Stats & Milestones</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">5'10"</div>
                  <div className="text-sm text-gray-600">Height</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">175 lbs</div>
                  <div className="text-sm text-gray-600">Current Weight</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">5+ Years</div>
                  <div className="text-sm text-gray-600">Training Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Clients Transformed</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">My Training Philosophy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I believe in evidence-based training that respects your time, your body, and your goals. No 
                gimmicks, no shortcuts that don't work, and no one-size-fits-all approach.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Progressive Overload:</strong> The foundation of all muscle growth</li>
                <li><strong>Recovery Matters:</strong> You don't grow in the gym, you grow when you rest</li>
                <li><strong>Nutrition is 70%:</strong> You can't out-train a bad diet</li>
                <li><strong>Consistency Over Intensity:</strong> Small daily actions compound into big results</li>
                <li><strong>Honest Guidance:</strong> I'll tell you what works and what doesn't, even if it's not what you want to hear</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Credentials & Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over 5 years of hands-on training experience, I've studied under various coaches, completed 
                multiple certifications in strength training and nutrition, and most importantly, I've tested 
                everything I teach on myself first.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My approach combines scientific principles with real-world practicality. I understand that not 
                everyone has access to a fully equipped gym, unlimited time, or a personal chef. That's why my 
                programs are designed to work with what you have, where you are.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

