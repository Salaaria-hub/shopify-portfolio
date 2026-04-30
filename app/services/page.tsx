import Link from 'next/link';
import { Code, Palette, Zap, Shield, BarChart, Smartphone, Wrench, Rocket, Puzzle } from 'lucide-react';

export const metadata = {
  title: 'Shopify Speed Optimization & Custom Shopify Theme Development',
  description: 'Hire a proven Conversion Rate Expert for Headless Shopify builds, Custom Shopify Themes, and advanced Shopify Speed Optimization services.',
};

const services = [
  {
    icon: Code,
    title: 'Custom Shopify Theme Development',
    description: 'Stand out from the competition with a robust Custom Shopify Theme built from the ground up. I engineer pixel-perfect, highly scalable architectures tailored explicitly to your unique brand identity and advanced functional requirements.',
    features: ['Bespoke theme development', 'Shopify 2.0 compliance', 'Advanced Liquid API integration', 'Seamless third-party app synchronization']
  },
  {
    icon: Palette,
    title: 'Headless Shopify Architecture',
    description: 'Take your enterprise to the next level with a cutting-edge Headless Shopify build. By decoupling the frontend presentation layer from the backend commerce engine, we achieve unparalleled customization and instantaneous load times.',
    features: ['Next.js & Hydrogen builds', 'Instant page transitions', 'Custom CMS integrations', 'Ultimate mobile app-like experiences']
  },
  {
    icon: Zap,
    title: 'Advanced Shopify Speed Optimization',
    description: 'A slow store actively kills your sales. I implement elite Shopify Speed Optimization techniques to drastically reduce load times. Faster stores directly improve Google SEO rankings, lower bounce rates, and significantly boost overall revenue.',
    features: ['Lazy-loading & script deferral', 'Core Web Vitals dominance', 'Advanced asset compression', 'Main-thread work minimization']
  },
  {
    icon: Shield,
    title: 'Security & Backend Maintenance',
    description: 'Protect your valuable customer data and ensure continuous uptime. I act as your technical partner, providing proactive security audits, bug-free codebase maintenance, and rapid response support during high-traffic sales events.',
    features: ['Rigorous security audits', 'Routine code updates', 'Automated backup solutions', '24/7 uptime monitoring setup']
  },
  {
    icon: BarChart,
    title: 'Conversion Rate Expert Consulting',
    description: 'Stop guessing and start converting. As a dedicated Conversion Rate Expert, I utilize deep data analytics, user session recordings, and psychological design principles to systematically turn more of your daily traffic into paying customers.',
    features: ['Frictionless checkout flows', 'A/B testing implementation', 'Advanced heatmap analytics', 'Trust-building UI enhancements']
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Optimization',
    description: 'With the majority of eCommerce traffic originating from mobile devices, a flawless smartphone experience is mandatory. I design highly intuitive, touch-optimized interfaces that make mobile shopping effortless and highly rewarding.',
    features: ['Mobile-first design principles', 'Touch target optimization', 'Responsive layout testing', 'App-like navigation structures']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From comprehensive Custom Shopify Theme builds to elite Shopify Speed Optimization, I provide the enterprise-grade technical expertise required to scale your e-commerce business to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* AdSense Header Ad */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 mb-8 rounded-xl">
          <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 mb-2">Header Ad - 728x90</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Replace with AdSense code</p>
          </div>
        </div>

        {/* Quick Fixes Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-8 sm:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Quick Fixes & Technical Services</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
            Don’t need a massive full-scale website rebuild? I offer hourly and highly specific task-based services for emergency bug fixes, deep performance audits, and bespoke custom coding. Contact me today for a rapid, transparent quote!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800/50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-sm">
                  <Wrench className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Shopify Bug Fixing & Troubleshooting</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">Starting at $49</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                Is your theme layout unpredictably broken? Or maybe an Add to Cart button isn't firing correctly? I will swiftly identify and permanently fix specific CSS, Custom Liquid, or JavaScript errors that are actively hurting your store's user experience and sales.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800/50 p-4 rounded-xl">
                <p className="font-bold text-gray-900 dark:text-white mb-2">What's Included:</p>
                <ul className="list-disc list-inside space-y-1.5 mb-3">
                  <li>Developer console error cleanup</li>
                  <li>Mobile responsiveness layout fixes</li>
                  <li>Broken navigational link repairs</li>
                </ul>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Delivery: Quick 24-48 hour turnaround.</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800/50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-sm">
                  <Rocket className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lightning Fast Speed Optimization</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">Starting at $199</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                Slow stores hemorrhage paying customers. I will aggressively optimize your theme code, intelligently compress large assets, and selectively remove bloated third-party scripts to immediately improve your Google PageSpeed Insights score and decrease bounce rates.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800/50 p-4 rounded-xl">
                <p className="font-bold text-gray-900 dark:text-white mb-2">What's Included:</p>
                <ul className="list-disc list-inside space-y-1.5 mb-3">
                  <li>Advanced image & iframe lazy-loading</li>
                  <li>Comprehensive App script waterfall audit</li>
                  <li>Deep Custom Liquid code minification</li>
                </ul>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Benefit: Better SEO ranking & massive CRO lift.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800/50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-sm">
                  <Puzzle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Custom Liquid Section Building</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">Starting at $149</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                Need a highly unique, brand-specific feature that your generic theme simply doesn't provide? I build custom, infinitely reusable Liquid sections (like bespoke product sliders, interactive FAQ blocks, or dynamic meta-field grids) that you can easily manage.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800/50 p-4 rounded-xl">
                <p className="font-bold text-gray-900 dark:text-white mb-2">What's Included:</p>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>Fully editable JSON schema settings</li>
                  <li>Immaculately clean, commented code</li>
                  <li>Seamless native theme integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-200 dark:border-blue-800/50 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-sm">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Seamless App Integration & Setup</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">Starting at $99</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                Don't let messy, automated app installs completely ruin your clean code structure. I will professionally install, configure, and deeply integrate third-party apps (Reviews, complex Bundles, Subscriptions) and ensure they match your theme's styling flawlessly.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800/50 p-4 rounded-xl">
                <p className="font-bold text-gray-900 dark:text-white mb-2">What's Included:</p>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>Complex conflict resolution with existing code</li>
                  <li>Pixel-perfect custom CSS styling for widgets</li>
                  <li>Complete removal of old, dead app scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-8 sm:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Complete Project Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-center p-8 sm:p-10 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter Plan</h3>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-gray-400 dark:text-gray-500 mb-6">Foundation</p>
              <p className="text-5xl font-black text-gray-900 dark:text-white mb-6">$499</p>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300 mb-8 px-4">Perfect for emerging small stores and ambitious beginners wanting a professional edge.</p>
              <ul className="text-base font-medium text-gray-700 dark:text-gray-300 space-y-4 mb-10 text-left bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Deep Theme Customization</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Essential App Integrations</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Flawless Mobile Responsive Design</li>
                <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> 15 Days Priority Post-Launch Support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
              >
                Get Started
              </Link>
            </div>

            <div className="text-center p-8 sm:p-10 border-2 border-blue-600 rounded-2xl relative bg-blue-50/30 dark:bg-blue-900/10 shadow-xl shadow-blue-900/5">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 shadow-sm">
                <span className="bg-blue-600 text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-full">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional Plan</h3>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-blue-500 mb-6">Massive Growth</p>
              <p className="text-5xl font-black text-blue-600 mb-6">$1,249</p>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300 mb-8 px-4">The ultimate package for established businesses looking to scale aggressively.</p>
              <ul className="text-base font-medium text-gray-700 dark:text-gray-300 space-y-4 mb-10 text-left bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <li className="flex items-center"><span className="text-blue-600 text-lg mr-3">★</span> Full Custom Theme Development</li>
                <li className="flex items-center"><span className="text-blue-600 text-lg mr-3">★</span> Advanced App Logic & Setup</li>
                <li className="flex items-center"><span className="text-blue-600 text-lg mr-3">★</span> Elite Speed & SEO Optimization</li>
                <li className="flex items-center"><span className="text-blue-600 text-lg mr-3">★</span> 60 Days VIP Technical Support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Choose Professional
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 py-3 rounded-lg border border-gray-100 dark:border-gray-800 inline-block px-6">
            Contact me directly for highly customized quotes or flexible INR-based billing options for Indian clients.
          </p>
        </div>

        {/* AdSense In-Content Ad */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 my-8 rounded-xl">
          <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 mb-2">In-Content Ad - 300x250</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Replace with AdSense code</p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center max-w-2xl mx-auto py-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Stop losing customers to slow load times and confusing checkouts. Let's discuss your project and architect an incredibly profitable digital storefront together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
          >
            Start Your Growth Project Today
          </Link>
        </div>
      </div>
    </div>
  );
}