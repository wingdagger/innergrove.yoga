export const metadata = {
  title: 'Disclaimer - Inner Grove Yoga',
  description: 'Legal disclaimers, privacy policy, and terms of use for Inner Grove LLC.',
};

export default function Disclaimer() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer & Legal</h1>
          <p className="text-xl text-green-50">Important information about our services and policies</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          {/* Medical Disclaimer */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Disclaimer</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The yoga instruction and wellness guidance provided by Inner Grove LLC is not intended as a substitute for professional medical advice, diagnosis, or treatment. Yoga is a complementary wellness practice and should not replace medical care.
              </p>
              <p>
                Before beginning any yoga practice, particularly if you have pre-existing health conditions, injuries, or are pregnant, please consult with a qualified healthcare provider. Always listen to your body and work within your limits.
              </p>
              <p>
                Inner Grove LLC and Joshua Allen assume no responsibility for injuries or health conditions that may arise from the practice of yoga. Participants engage in all activities at their own risk and assume full responsibility for their physical and mental well-being.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">Information We Collect</h3>
              <p>
                When you submit the contact form on our website, we collect your name, email address, phone number, and message. This information is submitted directly to Formspree, our third-party email service provider.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">How We Use Your Information</h3>
              <p>
                Your contact information is used solely to respond to your inquiry and communicate about yoga services. We do not sell, share, or use your information for any other purpose.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Data Security</h3>
              <p>
                We protect your information using industry-standard security practices. However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Third-Party Services</h3>
              <p>
                Our website uses Formspree to process contact form submissions. Please review Formspree's privacy policy for additional information about how they handle your data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Contact Us About Privacy</h3>
              <p>
                If you have questions about our privacy practices, please reach out using our contact form.
              </p>
            </div>
          </div>

          {/* Terms of Use */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">Waiver Requirement</h3>
              <p>
                Participation in yoga sessions requires completion of a waiver form. By signing the waiver, you acknowledge the risks involved in yoga practice and assume full responsibility for your safety and well-being.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Use of Website</h3>
              <p>
                This website and its content are provided for informational purposes only. You agree to use this website in compliance with all applicable laws and regulations. Unauthorized access or use of this website is prohibited.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Intellectual Property</h3>
              <p>
                All content on this website, including text, images, and designs, is the property of Inner Grove LLC and protected by copyright law. Reproduction or distribution without permission is prohibited.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Limitation of Liability</h3>
              <p>
                Inner Grove LLC and Joshua Allen shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or participation in yoga services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Continued use of this website constitutes acceptance of any changes.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these disclaimers or our policies, please reach out using our contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
