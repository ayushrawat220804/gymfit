'use client'

import { useState } from 'react'

export default function Tools() {
  const [bmiData, setBmiData] = useState({
    height: '',
    weight: '',
    bmi: null as number | null,
    category: ''
  })

  const [bmrData, setBmrData] = useState({
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    activity: '1.2',
    bmr: null as number | null,
    tdee: null as number | null,
    calories: null as number | null,
    protein: null as number | null,
    macros: {
      protein: null as number | null,
      carbs: null as number | null,
      fats: null as number | null
    }
  })

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault()
    const heightInMeters = parseFloat(bmiData.height) / 100
    const weightInKg = parseFloat(bmiData.weight)
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmi = weightInKg / (heightInMeters * heightInMeters)
      let category = ''
      
      if (bmi < 18.5) category = 'Underweight'
      else if (bmi < 25) category = 'Normal weight'
      else if (bmi < 30) category = 'Overweight'
      else category = 'Obese'
      
      setBmiData({ ...bmiData, bmi: parseFloat(bmi.toFixed(1)), category })
    }
  }

  const calculateBMR = (e: React.FormEvent) => {
    e.preventDefault()
    const age = parseFloat(bmrData.age)
    const heightInCm = parseFloat(bmrData.height)
    const weightInKg = parseFloat(bmrData.weight)
    const activity = parseFloat(bmrData.activity)
    
    if (age > 0 && heightInCm > 0 && weightInKg > 0) {
      // Mifflin-St Jeor Equation
      let bmr = 0
      if (bmrData.gender === 'male') {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5
      } else {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161
      }
      
      const tdee = bmr * activity
      const proteinGrams = weightInKg * 2.2 // 1g per lb bodyweight
      
      // Calculate macros (30% protein, 40% carbs, 30% fats for maintenance)
      const proteinCalories = proteinGrams * 4
      const remainingCalories = tdee - proteinCalories
      const fatCalories = remainingCalories * 0.3
      const carbCalories = remainingCalories * 0.7
      
      const macros = {
        protein: Math.round(proteinGrams),
        carbs: Math.round(carbCalories / 4),
        fats: Math.round(fatCalories / 9)
      }
      
      setBmrData({
        ...bmrData,
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        calories: Math.round(tdee),
        protein: macros.protein,
        macros
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">BMI & BMR Calculators</h1>
          <p className="text-xl text-gray-300">
            Calculate your Body Mass Index, Basal Metabolic Rate, and daily calorie needs.
          </p>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* BMI Calculator */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">BMI Calculator</h2>
              <form onSubmit={calculateBMI} className="space-y-4">
                <div>
                  <label htmlFor="bmi-height" className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="bmi-height"
                    required
                    value={bmiData.height}
                    onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="175"
                  />
                </div>
                <div>
                  <label htmlFor="bmi-weight" className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="bmi-weight"
                    required
                    value={bmiData.weight}
                    onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="75"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  Calculate BMI
                </button>
              </form>

              {bmiData.bmi !== null && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {bmiData.bmi}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-4">
                      {bmiData.category}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="mb-2"><strong>BMI Categories:</strong></p>
                      <p>Underweight: &lt; 18.5</p>
                      <p>Normal weight: 18.5 - 24.9</p>
                      <p>Overweight: 25 - 29.9</p>
                      <p>Obese: ≥ 30</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BMR Calculator */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">BMR & TDEE Calculator</h2>
              <form onSubmit={calculateBMR} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bmr-age" className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      id="bmr-age"
                      required
                      value={bmrData.age}
                      onChange={(e) => setBmrData({ ...bmrData, age: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label htmlFor="bmr-gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      id="bmr-gender"
                      required
                      value={bmrData.gender}
                      onChange={(e) => setBmrData({ ...bmrData, gender: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="bmr-height" className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="bmr-height"
                    required
                    value={bmrData.height}
                    onChange={(e) => setBmrData({ ...bmrData, height: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="175"
                  />
                </div>
                <div>
                  <label htmlFor="bmr-weight" className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="bmr-weight"
                    required
                    value={bmrData.weight}
                    onChange={(e) => setBmrData({ ...bmrData, weight: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="75"
                  />
                </div>
                <div>
                  <label htmlFor="bmr-activity" className="block text-sm font-medium text-gray-700 mb-2">
                    Activity Level
                  </label>
                  <select
                    id="bmr-activity"
                    required
                    value={bmrData.activity}
                    onChange={(e) => setBmrData({ ...bmrData, activity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="1.2">Sedentary (little/no exercise)</option>
                    <option value="1.375">Lightly active (1-3 days/week)</option>
                    <option value="1.55">Moderately active (3-5 days/week)</option>
                    <option value="1.725">Very active (6-7 days/week)</option>
                    <option value="1.9">Extra active (physical job + exercise)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                >
                  Calculate BMR & TDEE
                </button>
              </form>

              {bmrData.bmr !== null && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg space-y-4">
                  <div className="text-center border-b pb-4">
                    <div className="text-sm text-gray-600 mb-1">Basal Metabolic Rate</div>
                    <div className="text-3xl font-bold text-primary-600">
                      {bmrData.bmr} calories/day
                    </div>
                  </div>
                  <div className="text-center border-b pb-4">
                    <div className="text-sm text-gray-600 mb-1">Total Daily Energy Expenditure</div>
                    <div className="text-3xl font-bold text-primary-600">
                      {bmrData.tdee} calories/day
                    </div>
                  </div>
                  <div className="text-center border-b pb-4">
                    <div className="text-sm text-gray-600 mb-1">Recommended Daily Protein</div>
                    <div className="text-2xl font-bold text-primary-600">
                      {bmrData.protein}g
                    </div>
                  </div>
                  {bmrData.macros.protein && (
                    <div className="pt-4">
                      <div className="text-sm font-semibold text-gray-800 mb-3">Suggested Macro Split:</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Protein:</span>
                          <span className="font-semibold text-gray-900">{bmrData.macros.protein}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Carbs:</span>
                          <span className="font-semibold text-gray-900">{bmrData.macros.carbs}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Fats:</span>
                          <span className="font-semibold text-gray-900">{bmrData.macros.fats}g</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t text-xs text-gray-600">
                        <p><strong>For Fat Loss:</strong> Eat {Math.round((bmrData.tdee || 0) - 500)} calories/day</p>
                        <p><strong>For Muscle Gain:</strong> Eat {Math.round((bmrData.tdee || 0) + 500)} calories/day</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


