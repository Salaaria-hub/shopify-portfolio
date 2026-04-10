export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Empowering Shopify developers with free tools and resources.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe that every Shopify developer should have access to high-quality tools
            that help them build better stores faster. Our platform provides free, easy-to-use
            tools for image optimization, PDF manipulation, code formatting, and more.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Image optimization tools for faster store loading</li>
            <li>PDF manipulation utilities</li>
            <li>Code formatting and beautification</li>
            <li>Performance analysis tools</li>
            <li>Security checking utilities</li>
            <li>Automation helpers for routine tasks</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have suggestions for new tools or need help? Visit our{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-700">
              contact page
            </a>{" "}
            to reach out.
          </p>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16 bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">AdSense Placeholder - Replace with actual AdSense code</p>
        </div>
      </div>
    </div>
  );
}