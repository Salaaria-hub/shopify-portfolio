import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface AffiliateCTAProps {
  type: 'inline' | 'end';
  className?: string;
}

export default function AffiliateCTA({ type, className = '' }: AffiliateCTAProps) {
  if (type === 'inline') {
    return (
      <div className={`my-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <ExternalLink size={24} className="text-blue-400" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Recommended Tool</h3>
            <p className="text-gray-300 mb-3">
              Speed up your development with our premium Shopify tools and templates.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
            >
              Explore Tools <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-12 p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Implement These Strategies?</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Get access to premium tools, templates, and expert consultation to accelerate your Shopify success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Get Expert Help
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:border-gray-600 bg-gray-900/50 backdrop-blur transition-all"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}