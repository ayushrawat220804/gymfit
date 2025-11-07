import Link from 'next/link'

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl text-gray-300">
            Evidence-based programs designed for real results. Choose what fits your goals and experience level.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Program Types</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Each program is designed with specific goals in mind. I'll help you choose the right one based on 
              your experience level, available time, and objectives. All programs can be customized to your 
              equipment access and exercise preferences.
            </p>
          </div>

          {/* Bro Split */}
          <div className="mb-16 bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Bro Split</h3>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                Intermediate
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Goal</h4>
                <p className="text-gray-700 mb-6">
                  Maximum muscle isolation and volume per muscle group. Ideal for intermediate lifters who can 
                  handle higher training frequency per muscle.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Who It's For</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Intermediate to advanced lifters (6+ months experience)</li>
                  <li>Those with 5-6 days per week available</li>
                  <li>Goal: Maximum hypertrophy and muscle definition</li>
                  <li>Prefer training each muscle group once per week</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Pros & Cons</h4>
                <div className="mb-4">
                  <p className="font-semibold text-green-700 mb-2">✓ Pros:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>High volume per muscle group</li>
                    <li>Allows full recovery between sessions</li>
                    <li>Great for muscle isolation</li>
                    <li>Flexible scheduling</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">✗ Cons:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Requires 5-6 training days</li>
                    <li>Less frequency per muscle (once/week)</li>
                    <li>May not be optimal for beginners</li>
                    <li>Can lead to overtraining if volume is too high</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Sample Weekly Schedule</h4>
              <div className="grid md:grid-cols-6 gap-4 text-sm">
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Monday</div>
                  <div className="text-gray-700 mt-1">Chest</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Tuesday</div>
                  <div className="text-gray-700 mt-1">Back</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Wednesday</div>
                  <div className="text-gray-700 mt-1">Shoulders</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Thursday</div>
                  <div className="text-gray-700 mt-1">Arms</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Friday</div>
                  <div className="text-gray-700 mt-1">Legs</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Sat/Sun</div>
                  <div className="text-gray-700 mt-1">Rest</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Sample Chest Workout</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between items-center">
                  <span><strong>Barbell Bench Press:</strong> 4 sets × 6-8 reps</span>
                </li>
                <li className="flex justify-between items-center">
                  <span><strong>Incline Dumbbell Press:</strong> 3 sets × 8-10 reps</span>
                </li>
                <li className="flex justify-between items-center">
                  <span><strong>Cable Flyes:</strong> 3 sets × 12-15 reps</span>
                </li>
                <li className="flex justify-between items-center">
                  <span><strong>Dips:</strong> 3 sets × 10-12 reps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Push/Pull/Legs */}
          <div className="mb-16 bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Push/Pull/Legs (PPL)</h3>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                Recommended
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Goal</h4>
                <p className="text-gray-700 mb-6">
                  Balanced muscle development with higher training frequency. Each muscle group trained twice 
                  per week for optimal growth.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Who It's For</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Beginner to intermediate lifters (3+ months experience)</li>
                  <li>Those with 3-6 days per week available</li>
                  <li>Goal: Balanced muscle growth and strength</li>
                  <li>Want efficient, time-effective training</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Pros & Cons</h4>
                <div className="mb-4">
                  <p className="font-semibold text-green-700 mb-2">✓ Pros:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Higher frequency per muscle (2x/week)</li>
                    <li>More efficient than bro split</li>
                    <li>Works with 3 or 6 days per week</li>
                    <li>Evidence-based for muscle growth</li>
                    <li>Better for beginners</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">✗ Cons:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Less volume per session than bro split</li>
                    <li>Requires careful recovery management</li>
                    <li>Can be demanding on 6-day schedule</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Sample Weekly Schedule (6-Day)</h4>
              <div className="grid md:grid-cols-6 gap-4 text-sm">
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Monday</div>
                  <div className="text-gray-700 mt-1">Push</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Tuesday</div>
                  <div className="text-gray-700 mt-1">Pull</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Wednesday</div>
                  <div className="text-gray-700 mt-1">Legs</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Thursday</div>
                  <div className="text-gray-700 mt-1">Push</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Friday</div>
                  <div className="text-gray-700 mt-1">Pull</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Saturday</div>
                  <div className="text-gray-700 mt-1">Legs</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Sunday: Rest Day
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Sample Push Day Workout</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Barbell Bench Press:</strong> 4 sets × 6-8 reps</li>
                <li><strong>Overhead Press:</strong> 3 sets × 8-10 reps</li>
                <li><strong>Incline Dumbbell Press:</strong> 3 sets × 10-12 reps</li>
                <li><strong>Lateral Raises:</strong> 3 sets × 12-15 reps</li>
                <li><strong>Tricep Dips:</strong> 3 sets × 10-12 reps</li>
                <li><strong>Tricep Pushdowns:</strong> 3 sets × 12-15 reps</li>
              </ul>
            </div>
          </div>

          {/* Full Body */}
          <div className="mb-16 bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Full Body</h3>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Beginner
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Goal</h4>
                <p className="text-gray-700 mb-6">
                  Build a solid foundation of strength and muscle. Perfect for beginners or those with limited 
                  time. Trains all major muscle groups in each session.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Who It's For</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Complete beginners (0-3 months experience)</li>
                  <li>Those with 2-3 days per week available</li>
                  <li>Goal: Build strength and muscle foundation</li>
                  <li>Prefer simpler, less complex routines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Pros & Cons</h4>
                <div className="mb-4">
                  <p className="font-semibold text-green-700 mb-2">✓ Pros:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Perfect for beginners</li>
                    <li>Only requires 2-3 days per week</li>
                    <li>High frequency per muscle (3x/week)</li>
                    <li>Simple and easy to follow</li>
                    <li>Great for building movement patterns</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">✗ Cons:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Less volume per muscle per session</li>
                    <li>Can be limiting for advanced lifters</li>
                    <li>Longer sessions if doing full body</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Sample Weekly Schedule</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Monday</div>
                  <div className="text-gray-700 mt-1">Full Body A</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Wednesday</div>
                  <div className="text-gray-700 mt-1">Full Body B</div>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <div className="font-semibold text-primary-600">Friday</div>
                  <div className="text-gray-700 mt-1">Full Body C</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Tuesday, Thursday, Saturday, Sunday: Rest Days
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Sample Full Body Workout A</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Squats:</strong> 3 sets × 8-10 reps</li>
                <li><strong>Bench Press:</strong> 3 sets × 8-10 reps</li>
                <li><strong>Bent-Over Rows:</strong> 3 sets × 8-10 reps</li>
                <li><strong>Overhead Press:</strong> 3 sets × 10-12 reps</li>
                <li><strong>Romanian Deadlifts:</strong> 3 sets × 10-12 reps</li>
                <li><strong>Planks:</strong> 3 sets × 30-60 seconds</li>
              </ul>
            </div>
          </div>

          {/* Customization Note */}
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Customization Options</h3>
            <p className="text-gray-700 mb-4">
              All programs can be customized based on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Exercise Selection:</strong> Swap exercises based on equipment availability or preferences</li>
              <li><strong>Equipment Levels:</strong> Adapt for home gym, commercial gym, or minimal equipment</li>
              <li><strong>Training Frequency:</strong> Adjust days per week to fit your schedule</li>
              <li><strong>Volume & Intensity:</strong> Modify sets and reps based on your recovery capacity</li>
            </ul>
          </div>

          {/* Recommendation */}
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">My Recommendation</h3>
            <p className="text-lg leading-relaxed mb-4">
              For most people, <strong>Push/Pull/Legs (PPL)</strong> offers the best balance of frequency, 
              volume, and efficiency. It's backed by research showing that training each muscle group 2x per 
              week is optimal for growth.
            </p>
            <p className="text-lg leading-relaxed">
              However, if you're a complete beginner, start with <strong>Full Body</strong> to build a solid 
              foundation. If you're advanced and have 5-6 days available, <strong>Bro Split</strong> can work 
              well for maximum volume.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-primary-300">
              Not sure which one is right for you? <Link href="/contact" className="underline font-semibold">Get in touch</Link> and I'll help you choose based on your specific situation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

