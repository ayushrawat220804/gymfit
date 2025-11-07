export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Medical Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-6">
            <p className="text-red-900 font-semibold text-lg">
              ⚠️ IMPORTANT: This website does not provide medical advice, diagnosis, or treatment. 
              Information provided is for educational purposes only.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">General Disclaimer</h2>
            <p>
              The content on this website, including but not limited to text, graphics, images, 
              and other material, is for informational and educational purposes only. It is not 
              intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              Always seek the advice of your physician or other qualified health provider with any 
              questions you may have regarding a medical condition or before starting any new 
              exercise program, diet, or supplement regimen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Exercise Disclaimer</h2>
            <p>
              Before beginning any exercise program, consult with a healthcare professional to 
              ensure you are healthy enough to participate. Exercise is not without risks, and 
              this or any other exercise program may result in injury.
            </p>
            <p>
              By voluntarily participating in any exercise program, you assume the risk of any 
              resulting injury. The exercises and programs provided are suggestions only and may 
              not be suitable for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nutrition Disclaimer</h2>
            <p>
              The meal plans and nutrition information provided are general guidelines and may 
              not be suitable for everyone. Individual nutritional needs vary based on age, 
              gender, activity level, medical conditions, and other factors.
            </p>
            <p>
              Consult with a registered dietitian or healthcare provider before making significant 
              changes to your diet, especially if you have medical conditions such as diabetes, 
              heart disease, or food allergies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Supplement Disclaimer</h2>
            <p>
              The supplement information provided is for educational purposes only. Supplements 
              are not regulated by the FDA in the same way as medications, and their safety and 
              efficacy may not be established.
            </p>
            <p>
              <strong>Consult a healthcare professional before starting any new supplement regimen.</strong> 
              Do not exceed recommended dosages, and be aware of potential interactions with 
              medications or medical conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-900">Steroid Warning</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="mb-4">
                <strong>This website does not recommend, endorse, or provide guidance on the use 
                of anabolic steroids or other performance-enhancing drugs.</strong>
              </p>
              <p className="mb-4">
                Steroid use can lead to serious health risks including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Liver damage and liver disease</li>
                <li>Cardiovascular problems (heart attack, stroke)</li>
                <li>Hormonal imbalances and infertility</li>
                <li>Mood disorders and psychological dependence</li>
                <li>Legal consequences (many steroids are illegal without prescription)</li>
                <li>Long-term health complications</li>
              </ul>
              <p>
                <strong>If you are considering steroid use, consult a healthcare professional 
                immediately.</strong> There are safe, legal, and effective alternatives to 
                achieve your fitness goals through proper training, nutrition, and recovery.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Results Disclaimer</h2>
            <p>
              Individual results may vary. The transformation stories and testimonials featured 
              on this website are individual experiences and may not be typical. Results depend 
              on various factors including genetics, adherence to programs, diet, exercise, and 
              other lifestyle factors.
            </p>
            <p>
              There is no guarantee that you will achieve similar results. Always consult with 
              a healthcare professional before starting any new fitness or nutrition program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">No Liability</h2>
            <p>
              By using this website and any information provided, you acknowledge that you are 
              doing so at your own risk. The website owner, Asim Negi, and GymFit disclaim any 
              liability for any injury, loss, or damage that may result from the use of 
              information provided on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
            <p>
              If you have any questions about this disclaimer, please contact us through the 
              contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


