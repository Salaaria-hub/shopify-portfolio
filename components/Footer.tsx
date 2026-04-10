import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">ShopifyDev</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional Shopify development services and free tools for e-commerce success.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/tools/image-compressor" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Image Compressor</Link></li>
              <li><Link href="/tools/pdf-merger" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">PDF Merger</Link></li>
              <li><Link href="/tools/profit-calculator" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Profit Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Custom Development</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Theme Customization</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">App Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2024 ShopifyDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;