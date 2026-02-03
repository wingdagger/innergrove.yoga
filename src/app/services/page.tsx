import Link from 'next/link';

export const metadata = {
  title: 'Services - InnerGrove Yoga',
  description: 'Explore yoga and wellness services offered at InnerGrove including private sessions, group classes, and workshops.',
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Private One-on-One Sessions',
      description: 'Personalized yoga instruction tailored to your specific needs, goals, and experience level.',
      details: [
        'Custom practice sequences',
        'Detailed alignment guidance',
        'Injury rehabilitation support',
        'Flexible scheduling'
      ],
      icon: '🧘'
    },
    {
      id: 2,
      title: 'Small Group Classes',
      description: 'Intimate group sessions with personalized attention and community support.',
      details: [
        'Limited class size (max 8 people)',
        'Regular weekly schedules',
        'Beginner to advanced levels',
        'Supportive community environment'
      ],
      icon: '👥'
    },
    {
      id: 3,
      title: 'Corporate Wellness',
      description: 'On-site or virtual yoga and wellness programs for businesses and organizations.',
      details: [
        'Custom program design',
        'Flexible scheduling',
        'Stress reduction focus',
        'Employee wellness benefits'
      ],
      icon: '🏢'
    },
    {
      id: 4,
      title: 'Workshops & Intensives',
      description: 'Specialized workshops on specific topics and in-depth practice intensives.',
      details: [
        'Focused skill development',
        'Deeper exploration of yoga philosophy',
        'Seasonal offerings',
        'Special event programs'
      ],
      icon: '📚'
    },
    {
      id: 5,
      title: 'Wellness Consultations',
      description: 'Holistic guidance for integrating yoga and mindfulness into your daily life.',
      details: [
        'Personalized wellness plans',
        'Lifestyle guidance',
        'Nutritional considerations',
        'Mindfulness coaching'
      ],
      icon: '💆'
    },
    {
      id: 6,
      title: 'Online Sessions',
      description: 'Connect with InnerGrove from anywhere with live or recorded video sessions.',
      details: [
        'Live video classes',
        'Recorded practice library',
        'Global accessibility',
        'Convenient scheduling'
      ],
      icon: '📱'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yoga Services</h1>
          <p className="text-xl text-green-50">Find the perfect practice for your journey</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-500 p-6 text-center">
                <span className="text-5xl">{service.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing & Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Single Session</h3>
              <p className="text-gray-600 mb-4">Perfect for trying out private sessions</p>
              <p className="text-4xl font-bold text-green-700 mb-6">$<span className="text-5xl">80</span></p>
              <p className="text-gray-600 mb-6">60-minute private session</p>
              <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition font-semibold">
                Book Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-green-700 shadow-lg">
              <div className="mb-4">
                <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Package - 4 Sessions</h3>
              <p className="text-gray-600 mb-4">Best for regular practice</p>
              <p className="text-4xl font-bold text-green-700 mb-2">$<span className="text-5xl">300</span></p>
              <p className="text-gray-600 mb-6">Valid for 2 months</p>
              <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition font-semibold">
                Book Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Unlimited</h3>
              <p className="text-gray-600 mb-4">For committed practitioners</p>
              <p className="text-4xl font-bold text-green-700 mb-6">$<span className="text-5xl">400</span></p>
              <p className="text-gray-600 mb-6">Unlimited monthly sessions</p>
              <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Get Started</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Me</h3>
                <p className="text-gray-600">Reach out through the contact form or email to discuss your needs and goals.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600">We'll have a conversation to understand your background, any injuries or limitations, and what you hope to achieve.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Program</h3>
                <p className="text-gray-600">I'll design a customized yoga practice and wellness plan tailored to your unique needs.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Begin Your Practice</h3>
                <p className="text-gray-600">Start your sessions and experience the transformative power of personalized yoga instruction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-700 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 text-green-50">
            Take the first step toward a healthier, more balanced life. Reach out today to schedule your consultation.
          </p>
          <Link href="/contact" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
