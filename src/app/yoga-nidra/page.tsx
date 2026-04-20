import Link from 'next/link';

export const metadata = {
  title: 'Yoga Nidra Sessions - Inner Grove Yoga',
  description: 'Private and group Yoga Nidra sessions in Raleigh, Durham, and Chapel Hill, NC area. Transform your practice with guided yogic sleep.',
};

export default function YogaNidra() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yoga Nidra Sessions</h1>
          <p className="text-xl text-green-50">Guided yogic sleep for deep relaxation and restoration</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* About Yoga Nidra */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Yoga Nidra?</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Yoga Nidra, also known as "yogic sleep," is a guided meditation practice that takes you into a state of deep relaxation while maintaining full awareness.    During a Yoga Nidra session, you'll lie comfortably while I guide you through a series of body awareness, breathing, and visualization practices. The practice will shift your nervous system into a parasympathetic state, creating a deep sense of relaxation.  From this relaxed state, you can access deeper levels of consciousness and tap into your inner wisdom.  Additionally, Yoga Nidra offerings many benefits for physical, mental, emotional, and spiritual well-being.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Yoga Nidra</h2>
          <div className="bg-green-50 rounded-lg p-8">
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Access to intuitive wisdom and inner knowing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Deep relaxation and stress relief</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Improved sleep quality and reduced insomnia</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Relief from anxiety and emotional tension</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Enhanced mental clarity and focus</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Activation of the body's natural healing response</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Reduced physical tension and muscle pain</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 font-bold mr-3">•</span>
                <span>Greater emotional resilience and well-being</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Offerings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Session Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-green-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Private Sessions</h3>
              <p className="text-gray-700 text-lg mb-4">
                45-minute personalized Yoga Nidra session for 1-2 people.
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-4">$75 for 1 person, $100 for 2 people.</p>
              <p className="text-gray-600">
                Sessions held at at my home in Durham, NC.  Mats and props are provided.
              </p>
            </div>

            <div className="border-2 border-green-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Group Sessions</h3>
              <p className="text-gray-700 text-lg mb-4">
                Shared Yoga Nidra sessions for groups in the Triangle area.
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-4">Price varies by group size and location.</p>
              <p className="text-gray-600">
                Ideal for studios, wellness centers, and community groups.  Mats and props are not provided.
              </p>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Area</h2>
          <p className="text-gray-700 text-lg">
            I offer Yoga Nidra sessions throughout the Raleigh, Durham, and Chapel Hill (Triangle), NC area. Private sessions are held at my home in Durham, NC.  Group sessions can be held at your location or arranged at a mutually convenient space.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-700 to-teal-600 rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Experience Deep Rest?</h2>
          <p className="text-lg mb-8 text-green-50">
            Get in touch to schedule your Yoga Nidra session or discuss group offerings.
          </p>
          <Link href="/contact" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
