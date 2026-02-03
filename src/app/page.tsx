import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-teal-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome to InnerGrove
              </h1>
              <p className="text-xl mb-8 text-green-50">
                Transform your body, mind, and spirit through personalized yoga instruction and wellness guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition text-center">
                  About
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-full h-screen rounded-lg shadow-xl overflow-hidden">
              <img
                src="/innergrove.yoga/hero-image.jpeg"
                alt="InnerGrove Yoga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose InnerGrove?</h2>
            <p className="text-xl text-gray-600">Personalized instruction tailored to your unique journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-green-700">🧘</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Practice</h3>
              <p className="text-gray-600">Custom yoga practices designed specifically for your body, goals, and experience level.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-green-700">💆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Wellness</h3>
              <p className="text-gray-600">Integrate yoga, mindfulness, and wellness guidance into your daily life for lasting transformation.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-green-700">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Guidance</h3>
              <p className="text-gray-600">Learn from an experienced instructor dedicated to your growth and wellbeing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey Today</h2>
          <p className="text-xl mb-8 text-green-50">
            Discover how personalized yoga can transform your life. Reach out to learn more about services and get started with a consultation.
          </p>
          <Link href="/contact" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block">
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
