import Link from 'next/link';
import { Code, Palette, Zap, Shield, BarChart, Smartphone, Wrench, Rocket, Puzzle } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Shopify Development',
    description: 'Tailored Shopify themes and apps built to your specifications.',
    features: ['Custom theme development', 'App integration', 'API development', 'Performance optimization']
  },
  {
    icon: Palette,
    title: 'Theme Customization',
    description: 'Transform your store with custom designs and branding.',
    features: ['UI/UX design', 'Brand integration', 'Responsive design', 'Cross-browser compatibility']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your store and improve conversion rates.',
    features: ['Core Web Vitals optimization', 'Image optimization', 'Code minification', 'CDN setup']
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Keep your store secure and up-to-date.',
    features: ['Security audits', 'Regular updates', 'Backup solutions', 'Monitoring setup']
  },
  {
    icon: BarChart,
    title: 'Analytics & SEO',
    description: 'Improve visibility and track performance.',
    features: ['SEO optimization', 'Analytics setup', 'Conversion tracking', 'Performance monitoring']
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure perfect mobile shopping experiences.',
    features: ['Mobile-first design', 'Touch optimization', 'Performance tuning', 'App-like experience']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional Shopify development services to take your e-commerce business to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* AdSense Header Ad */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 mb-8">
          <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2">Header Ad - 728x90</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Replace with AdSense code</p>
            <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-2 block">
              {/* AdSense Header Ad Code Here */}
            </code>
          </div>
        </div>

        {/* Quick Fixes Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Quick Fixes & Technical Services</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Don’t need a full website? I offer hourly and task-based services for bug fixes, speed audits, and custom coding. Contact me for a quick quote!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Shopify Bug Fixing & Troubleshooting</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Starting at $49</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Is your theme layout broken? Or maybe a button isn't working? I will identify and fix specific CSS, Liquid, or JavaScript errors that are hurting your store's user experience.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-1">What's Included:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Console error cleanup</li>
                  <li>Mobile responsiveness fixes</li>
                  <li>Broken link repairs</li>
                </ul>
                <p className="mt-2 font-medium">Delivery: Quick 24-48 hour turnaround.</p>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lightning Fast Speed Optimization</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Starting at $199</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Slow stores lose customers. I will optimize your theme code, compress assets, and remove bloated scripts to improve your Google PageSpeed Insights score and decrease load times.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-1">What's Included:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Image lazy-loading</li>
                  <li>App script audit</li>
                  <li>Liquid code minification</li>
                </ul>
                <p className="mt-2 font-medium">Benefit: Better SEO ranking and higher conversion rates.</p>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white">
                  <Puzzle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Custom Liquid Section & Feature Building</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Starting at $149</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Need a unique feature that your theme doesn't provide? I build custom, reusable Liquid sections (like custom sliders, FAQ blocks, or product tabs) that you can manage directly from the Shopify Theme Editor.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-1">What's Included:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fully editable schema settings</li>
                  <li>Clean code</li>
                  <li>Seamless theme integration</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Seamless App Integration & Configuration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Starting at $99</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Don't let messy app installs ruin your code. I will professionally install and configure third-party apps (Reviews, Wishlists, Bundles) and ensure they match your theme's styling perfectly.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-1">What's Included:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Conflict resolution with existing apps</li>
                  <li>Custom CSS styling for app widgets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Complete Project Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Starter Plan</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">Basic Setup</p>
              <p className="text-4xl font-bold text-blue-600 mb-4">$499</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">Perfect for small stores & beginners.</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6 text-left">
                <li>• Theme Customization</li>
                <li>• Basic App Integration</li>
                <li>• Mobile Responsive Design</li>
                <li>• 15 Days Post-Launch Support</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="text-center p-6 border-2 border-blue-500 rounded-lg relative bg-blue-50/40 dark:bg-blue-950/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Professional Plan</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">Growth</p>
              <p className="text-4xl font-bold text-blue-600 mb-4">$1,249</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">Best for established businesses looking to scale.</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6 text-left">
                <li>• Custom Theme Development</li>
                <li>• Advanced App Setup (Wishlist, Rewards, etc.)</li>
                <li>• Speed & SEO Optimization</li>
                <li>• 60 Days Support</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Choose Professional
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Contact for custom quotes or INR-based billing options for Indian clients.
          </p>
        </div>

        {/* AdSense In-Content Ad */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 my-8">
          <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2">In-Content Ad - 300x250</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Replace with AdSense code</p>
            <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-2 block">
              {/* AdSense In-Content Ad Code Here */}
            </code>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}