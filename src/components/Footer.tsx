import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Inner Grove LLC</h3>
            <p className="text-sm text-gray-400 mb-3">Personalized Yoga Instruction & Wellness</p>
            <p className="text-gray-300">Discover the transformative power of personalized yoga instruction and wellness guidance.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-green-400 transition">About</Link></li>
              <li><a href="https://forms.gle/xQbjwUUwVGPWFtxS6" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition">Waiver</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Contact</h4>
            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 mb-4">
            © {currentYear} Inner Grove LLC. All rights reserved.
          </p>
          <p className="text-center text-sm text-gray-500">
            <Link href="/disclaimer" className="hover:text-gray-300 transition">
              Disclaimer & Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
