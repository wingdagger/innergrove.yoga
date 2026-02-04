'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-700">
              InnerGrove
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-700 transition text-2xl">
              🏠
            </Link>
            <Link href="/writings" className="text-gray-700 hover:text-green-700 transition">
              Writings
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-700 transition">
              Contact
            </Link>
            <a href="https://forms.gle/xQbjwUUwVGPWFtxS6" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-700 transition">
              Waiver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-700 text-xl">
              🏠
            </Link>
            <Link href="/writings" className="block px-3 py-2 text-gray-700 hover:text-green-700">
              Writings
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-700">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-700">
              Contact
            </Link>
            <a href="https://forms.gle/xQbjwUUwVGPWFtxS6" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-700 hover:text-green-700">
              Waiver
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
