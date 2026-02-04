export const metadata = {
  title: 'Writings - Inner Grove Yoga',
  description: 'Download writings about yoga, wellness, and living a meaningful life.',
};

export default function Writings() {
  const writings = [
    {
      title: 'Why?',
      description: 'My internal knowings on why I am gay.',
      fileName: 'Why.pdf',
    },
    {
      title: 'Near Death Experiences and their Relationships to Yoga',
      description: 'Exploring the connections between near-death experiences and yoga practice.',
      fileName: 'NDEs and their Relationships to Yoga - v2.pdf',
    },
    {
      title: 'Thoughts on The Power of Now',
      description: 'Reflections on presence, mindfulness, and living in the present moment.',
      fileName: 'ThoughtsOnPowerOfNow.pdf',
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Writings</h1>
          <p className="text-xl text-green-50">Thoughts on yoga, wellness, and meaningful living</p>
        </div>
      </div>

      {/* Writings Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {writings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Coming soon...</p>
            <p className="text-gray-500">I'm working on sharing my thoughts and insights about yoga and wellness. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {writings.map((writing, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{writing.title}</h2>
                <p className="text-gray-600 mb-6">{writing.description}</p>
                <a
                  href={`/${writing.fileName}`}
                  download
                  className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  <span>📥</span>
                  <span className="ml-2">Download PDF</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
