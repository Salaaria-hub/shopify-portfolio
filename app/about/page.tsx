export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About the Expert</h1>
          <p className="text-xl text-gray-600">
            Empowering brands and Shopify developers with high-performance eCommerce solutions.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Mission & Expertise</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            As a dedicated Conversion Rate Expert and specialized eCommerce developer, my mission is to bridge the gap between stunning aesthetic design and deep, data-driven functionality. I believe that every Shopify store should not just look beautiful, but act as a highly optimized, relentless sales engine. The modern eCommerce landscape is incredibly competitive, and brands can no longer rely on slow, clunky templates. By focusing heavily on Shopify Speed Optimization, advanced UX psychology, and flawless Custom Liquid execution, I empower direct-to-consumer (DTC) brands to reach their maximum revenue potential without continuously inflating their ad spend.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you are a startup needing a robust Custom Shopify Theme built entirely from the ground up, or an established enterprise looking to transition into a hyper-fast Headless Shopify architecture, I provide the precise technical foundation required for massive scalability. I also believe in giving back to the community; that is why this platform hosts a suite of free, professional-grade tools—ranging from image compressors to advanced code formatters—specifically built to help other developers and merchants build better stores faster.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Offer: Core Services & Tools</h2>
          <ul className="list-disc list-inside text-gray-600 mb-10 space-y-3">
            <li><strong>Bespoke Development:</strong> Building every Custom Shopify Theme from scratch to ensure pixel-perfect brand alignment and zero code bloat.</li>
            <li><strong>Advanced Shopify Speed Optimization:</strong> Eliminating heavy apps, lazy-loading assets, and minifying code to guarantee lightning-fast Core Web Vitals.</li>
            <li><strong>Conversion Rate Optimization (CRO):</strong> Implementing proven psychological triggers, seamless checkout flows, and trust-building UI elements as your dedicated Conversion Rate Expert.</li>
            <li><strong>Enterprise Solutions:</strong> Engineering complex Headless Shopify builds utilizing frameworks like Next.js and Hydrogen for ultimate performance.</li>
            <li><strong>Free Developer Utilities:</strong> Open-access image optimization tools, PDF manipulation utilities, and secure code formatting for the entire Shopify community.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Optimization Process</h2>
          <div className="space-y-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Technical Audit & Discovery</h3>
              <p className="text-gray-600">I conduct a forensic analysis of your current theme, identifying exactly where your users drop off and where your backend code is failing your Google PageSpeed scores. No stone is left unturned in finding your revenue leaks.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Strategic Execution & Refactoring</h3>
              <p className="text-gray-600">From writing clean Custom Liquid to implementing advanced Headless setups, I rebuild the problematic architecture while ensuring 100% compliance with strict Shopify 2.0 standards for maximum longevity.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Continuous A/B Testing & Refinement</h3>
              <p className="text-gray-600">True optimization never ends. I continuously test new layouts, monitor user recordings, and tweak interface elements to guarantee an ongoing, measurable increase in your overall conversion rates.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h4 className="font-bold text-gray-900">Do you work with existing themes or only build from scratch?</h4>
              <p className="text-gray-600 mt-1">I am highly flexible. I can deeply optimize and customize an existing premium template, or design a highly specific Custom Shopify Theme entirely from a blank canvas depending on your brand's specific needs and budget.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">What makes you a Conversion Rate Expert?</h4>
              <p className="text-gray-600 mt-1">My expertise comes from years of deeply analyzing user heatmaps, conducting rigorous A/B split tests, and utilizing psychological sales triggers to systematically turn significantly higher percentages of traffic into loyal, paying customers.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Is a Headless Shopify architecture right for my brand?</h4>
              <p className="text-gray-600 mt-1">If your brand requires sub-second instantaneous page loads, highly complex custom omnichannel integrations, and complete frontend freedom that traditional themes cannot provide, a Headless Shopify build is the ultimate enterprise solution.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Ready to dramatically increase your store's revenue or have suggestions for new free tools? Visit my{" "}
            <a href="/contact" className="text-blue-600 font-bold hover:text-blue-800 underline transition-colors">
              contact page
            </a>{" "}
            to start a strategic conversation today.
          </p>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16 bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center rounded-lg">
          <p className="text-gray-500">AdSense Placeholder - Replace with actual AdSense code</p>
        </div>
      </div>
    </div>
  );
}