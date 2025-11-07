export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rahul S.',
      goal: 'Muscle Gain',
      result: 'Gained 15 lbs of muscle in 6 months',
      text: 'Asim\'s program was exactly what I needed. The PPL split worked perfectly for my schedule, and the meal plan made it easy to hit my protein targets. Real results, no BS.',
      rating: 5
    },
    {
      name: 'Priya M.',
      goal: 'Fat Loss',
      result: 'Lost 20 lbs in 4 months',
      text: 'I tried everything before this. Asim\'s honest approach and evidence-based guidance finally worked. The diet plan was practical and sustainable. Highly recommend!',
      rating: 5
    },
    {
      name: 'Amit K.',
      goal: 'Body Recomposition',
      result: 'Transformed body composition in 8 months',
      text: 'The calculators helped me understand my calorie needs, and the custom program fit my home gym setup. Asim responds quickly and actually cares about your progress.',
      rating: 5
    },
    {
      name: 'Sneha R.',
      goal: 'Strength & Muscle',
      result: 'Increased all lifts by 40% in 6 months',
      text: 'As a beginner, I was overwhelmed. Asim\'s full-body program was perfect to start. Now I\'m on PPL and seeing consistent gains. The supplement guidance saved me money too.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Client Results</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Real transformations from real people following the GymFit system
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Goal:</span> {testimonial.goal} • <span className="font-medium">Result:</span> {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


