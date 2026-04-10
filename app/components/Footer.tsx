import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Shopify Tools</h3>
            <p className="mt-2 text-gray-600">Free tools for Shopify developers to enhance their stores.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Tools</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/tools/image-optimizer" className="text-gray-600 hover:text-gray-900">Image Optimizer</Link></li>
              <li><Link href="/tools/pdf-merger" className="text-gray-600 hover:text-gray-900">PDF Merger</Link></li>
              <li><Link href="/tools/code-formatter" className="text-gray-600 hover:text-gray-900">Code Formatter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Affiliates</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shopify Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Hosting Solutions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-gray-600">
          <p>&copy; 2024 Shopify Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}