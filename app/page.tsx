import Link from "next/link";
import { ArrowRight, Image, FileText, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Free Tools for Shopify Developers
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your Shopify store with our collection of free developer tools.
              Compress images, merge PDFs, format code, and more.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Tools
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <Image className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Image Compressor</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Compress and optimize images for faster Shopify store loading.</p>
              <Link href="/tools/image-compressor" className="text-blue-600 hover:text-blue-700 font-medium">
                Try it now →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <FileText className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PDF Merger</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Combine multiple PDF files into one document.</p>
              <Link href="/tools/pdf-merger" className="text-green-600 hover:text-green-700 font-medium">
                Try it now →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <Code className="text-purple-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Profit Calculator</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Calculate profits for your Shopify products.</p>
              <Link href="/tools/profit-calculator" className="text-purple-600 hover:text-purple-700 font-medium">
                Try it now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">AdSense Placeholder - Replace with actual AdSense code</p>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Recommended Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Start Shopify Store</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Launch your e-commerce business with Shopify.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Start Now →</a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Try Pro Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Access premium tools for advanced Shopify development.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Upgrade →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
