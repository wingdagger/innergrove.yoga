export const metadata = {
  title: 'About - InnerGrove Yoga',
  description: 'Learn about the instructor, background, and philosophy at InnerGrove Yoga.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-green-50">Discover my yoga journey and philosophy</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome. I'm the instructor at InnerGrove, and I'm thrilled to share my passion for yoga and wellness with you.
              </p>
              <p>
                My journey with yoga began {/* Add your journey details here */} as a personal practice for healing and self-discovery. 
                Over the years, what started as a personal practice evolved into a deep commitment to helping others experience 
                the transformative power of yoga.
              </p>
              <p>
                Through years of dedicated study and practice, I've developed a unique approach to instruction that honors 
                both traditional yoga wisdom and modern wellness science. I believe that yoga is not one-size-fits-all—each 
                person's body, mind, and spirit are unique, and their practice should be too.
              </p>
              <p>
                At InnerGrove, I'm committed to creating a safe, welcoming space where you can explore your practice at your 
                own pace, free from judgment and full of support.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-green-700 to-teal-600 rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Areas of Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧘</span>
                  <span>Hatha & Vinyasa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🕉️</span>
                  <span>Pranayama & Meditation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💪</span>
                  <span>Strength & Alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">☮️</span>
                  <span>Holistic Wellness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Philosophy</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              I believe that yoga is a path to wholeness—not perfection. It's about connecting with yourself, 
              understanding your body's wisdom, and cultivating peace from within.
            </p>
            <p>
              Every practice is an opportunity to listen, learn, and grow. Whether you're seeking physical strength, 
              mental clarity, emotional healing, or spiritual connection, yoga offers something profound for everyone.
            </p>
            <p>
              My role as an instructor is to guide, support, and empower you on your journey. I'm here to help you 
              discover what feels right for your unique body and life circumstances.
            </p>
          </div>
        </div>

        {/* Qualifications */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Qualifications & Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yoga Certification</h3>
              <p className="text-gray-600">200-Hour Yoga Teacher Training</p>
              <p className="text-sm text-gray-500">Add certification details</p>
            </div>
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years of Experience</h3>
              <p className="text-gray-600">Add your years of teaching experience</p>
              <p className="text-sm text-gray-500">Working with diverse populations and experience levels</p>
            </div>
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuing Education</h3>
              <p className="text-gray-600">Ongoing study and specialized trainings</p>
              <p className="text-sm text-gray-500">Add your specializations and continuing education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
