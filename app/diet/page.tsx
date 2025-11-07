import Link from 'next/link'

export default function Diet() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Diet & Nutrition</h1>
          <p className="text-xl text-gray-300">
            Nutrition is 70% of your results. Learn how to fuel your body for maximum performance and transformation.
          </p>
        </div>
      </section>

      {/* BMR & Calorie Targets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Understanding BMR & Calorie Targets</h2>
          
          <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">What is BMR?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Basal Metabolic Rate (BMR)</strong> is the number of calories your body burns at rest to 
              maintain basic physiological functions like breathing, circulation, and cell production. It's the 
              minimum energy needed to keep you alive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is your BMR multiplied by your activity 
              level. This is the total calories you burn in a day.
            </p>
          </div>

          <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">How to Calculate BMR</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I use the <strong>Mifflin-St Jeor Equation</strong>, which is the most accurate formula:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-800 font-mono text-sm mb-2">
                <strong>For Men:</strong> BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
              </p>
              <p className="text-gray-800 font-mono text-sm">
                <strong>For Women:</strong> BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Then multiply by your activity level:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Sedentary (little/no exercise):</strong> BMR × 1.2</li>
              <li><strong>Lightly active (1-3 days/week):</strong> BMR × 1.375</li>
              <li><strong>Moderately active (3-5 days/week):</strong> BMR × 1.55</li>
              <li><strong>Very active (6-7 days/week):</strong> BMR × 1.725</li>
              <li><strong>Extra active (physical job + exercise):</strong> BMR × 1.9</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <Link href="/tools" className="text-primary-600 font-semibold hover:underline">
                Use our BMR calculator
              </Link> to get your exact numbers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Setting Calorie Targets</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">For Fat Loss (Cut):</h4>
                <p className="text-gray-700 mb-2">
                  <strong>TDEE - 300 to 500 calories</strong> (deficit of 10-20%)
                </p>
                <p className="text-gray-600 text-sm">
                  Example: If your TDEE is 2500 calories, aim for 2000-2200 calories per day. This creates a 
                  sustainable deficit that preserves muscle while losing fat.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">For Muscle Gain (Bulk):</h4>
                <p className="text-gray-700 mb-2">
                  <strong>TDEE + 300 to 500 calories</strong> (surplus of 10-20%)
                </p>
                <p className="text-gray-600 text-sm">
                  Example: If your TDEE is 2500 calories, aim for 2800-3000 calories per day. This provides 
                  enough energy for muscle growth without excessive fat gain.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">For Maintenance:</h4>
                <p className="text-gray-700 mb-2">
                  <strong>TDEE ± 0 calories</strong> (maintain current weight)
                </p>
                <p className="text-gray-600 text-sm">
                  Eat at your TDEE to maintain your current body composition. Useful for recomp phases or 
                  taking a break from cutting/bulking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Sample Meal Plans</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Bulk Meal Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                BULK
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Muscle Gain Plan</h3>
              <p className="text-gray-600 mb-4 text-sm">~3000 calories, 180g protein</p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Breakfast (700 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 4 whole eggs + 2 slices bread</li>
                    <li>• 1 banana + 1 glass milk</li>
                    <li>• 1 scoop whey protein</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Lunch (800 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 200g chicken breast</li>
                    <li>• 200g rice + vegetables</li>
                    <li>• 1 cup curd</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snack (400 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 50g sattu + 1 banana</li>
                    <li>• Handful of nuts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dinner (800 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 200g fish/chicken</li>
                    <li>• 200g rice + dal</li>
                    <li>• Vegetables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Post-Workout (300 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 1 scoop whey protein</li>
                    <li>• 1 banana</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Maintenance Meal Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                MAINTENANCE
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Maintenance Plan</h3>
              <p className="text-gray-600 mb-4 text-sm">~2500 calories, 150g protein</p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Breakfast (600 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 3 whole eggs + 2 slices bread</li>
                    <li>• 1 glass milk</li>
                    <li>• 1 apple</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Lunch (700 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 150g chicken breast</li>
                    <li>• 150g rice + vegetables</li>
                    <li>• 1 cup curd</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snack (300 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 30g sattu + 1 banana</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dinner (700 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 150g fish/chicken</li>
                    <li>• 150g rice + dal</li>
                    <li>• Vegetables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Post-Workout (200 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 1 scoop whey protein</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cut Meal Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                CUT
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fat Loss Plan</h3>
              <p className="text-gray-600 mb-4 text-sm">~2000 calories, 150g protein</p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Breakfast (500 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 2 whole eggs + 1 slice bread</li>
                    <li>• 1 glass milk</li>
                    <li>• 1 apple</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Lunch (600 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 150g chicken breast</li>
                    <li>• 100g rice + vegetables</li>
                    <li>• 1 cup curd</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snack (200 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 30g sattu</li>
                    <li>• Green tea</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dinner (600 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 150g fish/chicken</li>
                    <li>• 100g rice + dal</li>
                    <li>• Vegetables (more)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Post-Workout (100 cal)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 1 scoop whey protein</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Meals for Non-Cooks */}
          <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Can't Cook? No Problem</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here are simple, no-cook options that still hit your protein and calorie targets:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Simple Protein Sources:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Whey protein shakes (2-3 scoops/day)</li>
                  <li>• Boiled eggs (6-8 eggs/day)</li>
                  <li>• Rotisserie chicken (pre-cooked)</li>
                  <li>• Greek yogurt/curd (2-3 cups/day)</li>
                  <li>• Sattu (50-100g/day)</li>
                  <li>• Canned tuna/sardines</li>
                  <li>• Paneer (cottage cheese)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Simple Carb Sources:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Bread (whole wheat)</li>
                  <li>• Rice (pre-cooked or instant)</li>
                  <li>• Oats (overnight oats)</li>
                  <li>• Bananas, apples</li>
                  <li>• Sweet potatoes (microwave)</li>
                  <li>• Ready-to-eat meals (check labels)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protein Targets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Protein Targets & Examples</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">How Much Protein Do You Need?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For muscle growth and recovery, aim for <strong>0.8-1g of protein per pound of body weight</strong> 
              (or 1.8-2.2g per kg). For a 175lb person, that's approximately <strong>140-175g of protein per day</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              During a cut, you may want to go slightly higher (1-1.2g per lb) to preserve muscle mass.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">How to Get 120-150g Protein Daily:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">2 scoops whey protein</span>
                  <span className="font-semibold text-gray-900">~50g</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">200g chicken breast</span>
                  <span className="font-semibold text-gray-900">~60g</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">2 cups curd (Greek yogurt)</span>
                  <span className="font-semibold text-gray-900">~20g</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">50g sattu</span>
                  <span className="font-semibold text-gray-900">~12g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">4 whole eggs</span>
                  <span className="font-semibold text-gray-900">~24g</span>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">Total</span>
                    <span className="text-primary-600 font-bold text-lg">~166g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Daily Protein Examples</h3>
            <div className="space-y-4 text-gray-700">
              <p><strong>Whey Protein:</strong> 1-2 scoops post-workout = 25-50g protein</p>
              <p><strong>Chicken Breast:</strong> 150-200g = 45-60g protein</p>
              <p><strong>Sattu:</strong> 50-100g mixed with water/milk = 12-24g protein</p>
              <p><strong>Curd/Yogurt:</strong> 2-3 cups = 20-30g protein</p>
              <p><strong>Eggs:</strong> 4-6 whole eggs = 24-36g protein</p>
              <p><strong>Fish:</strong> 150-200g = 35-50g protein</p>
              <p><strong>Paneer:</strong> 100g = 18-20g protein</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Supplements</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Whey Protein</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What it is:</strong> A fast-digesting protein derived from milk. It's convenient, 
              high-quality, and helps meet daily protein targets.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>When to take:</strong> Post-workout (within 30-60 minutes) or anytime you need a 
              quick protein boost. It's not magic—it's just convenient food.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Dosage:</strong> 1-2 scoops (25-50g protein) per day. More isn't better—you still 
              need whole foods for micronutrients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">BCAAs (Branched-Chain Amino Acids)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What they are:</strong> Three essential amino acids (leucine, isoleucine, valine) 
              that play a role in muscle protein synthesis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Do you need them?</strong> If you're eating enough protein (0.8-1g per lb bodyweight), 
              you're already getting enough BCAAs. They're not essential, but can be useful during fasted 
              training or if you train early morning without food.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Bottom line:</strong> Nice to have, not necessary. Save your money if you're already 
              hitting protein targets.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-red-900">⚠️ Steroids: The Honest Truth</h3>
            <p className="text-red-800 leading-relaxed mb-4">
              <strong>I do not recommend or provide guidance on steroid use.</strong> Here's why:
            </p>
            <ul className="list-disc list-inside text-red-800 space-y-2 mb-4">
              <li><strong>Health Risks:</strong> Liver damage, heart problems, hormonal imbalances, mood 
              disorders, and long-term health consequences</li>
              <li><strong>Legal Issues:</strong> Many steroids are illegal without a prescription</li>
              <li><strong>Dependency:</strong> Can lead to psychological and physical dependence</li>
              <li><strong>Not Sustainable:</strong> Results are temporary without continued use</li>
            </ul>
            <p className="text-red-800 leading-relaxed mb-4">
              <strong>Safe Alternatives:</strong> Focus on proper training, nutrition, sleep, and recovery. 
              These are the real foundations of transformation. Supplements like creatine, whey protein, and 
              basic vitamins can support your goals safely.
            </p>
            <p className="text-red-900 font-semibold text-lg">
              <strong>⚠️ IMPORTANT:</strong> Consult a healthcare professional before starting any new 
              supplements or considering steroid use. This website does not provide medical advice, 
              diagnosis, or treatment. Information provided is for educational purposes only.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Other Safe Supplements</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Creatine Monohydrate</h4>
                <p className="text-sm">5g per day. Proven to increase strength and muscle mass. Safe and effective.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Multivitamin</h4>
                <p className="text-sm">Fill nutritional gaps. Not a replacement for whole foods, but useful insurance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Vitamin D3</h4>
                <p className="text-sm">Important for immune function and bone health. Many people are deficient.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Omega-3 (Fish Oil)</h4>
                <p className="text-sm">Anti-inflammatory benefits. Good for heart health and recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


