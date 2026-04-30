'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Code2,
  Image as ImageIcon,
  FileText,
  Calculator,
  CheckCircle,
  Sparkles,
  GitBranch,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const tools = [
  {
    icon: ImageIcon,
    title: 'Image Tools',
    description: 'Compress, resize, and convert images instantly.',
    color: 'from-blue-500 to-blue-600',
    link: '/tools/image-compressor',
  },
  {
    icon: FileText,
    title: 'PDF Tools',
    description: 'Merge, split, and compress PDF documents.',
    color: 'from-green-500 to-green-600',
    link: '/tools/pdf-merger',
  },
  {
    icon: Calculator,
    title: 'Business Tools',
    description: 'Calculate profits, discounts, and product descriptions.',
    color: 'from-purple-500 to-purple-600',
    link: '/tools/profit-calculator',
  },
];

const stats = [
  { number: '8+', label: 'Years Shopify', icon: Zap },
  { number: '150+', label: 'Projects Delivered', icon: TrendingUp },
  { number: '500K+', label: 'Tools Used Monthly', icon: Users },
];

const portfolio = [
  {
    name: 'E-commerce Store',
    description: 'Custom Shopify theme with 300%+ ROI',
    tag: 'Theme Development',
  },
  {
    name: 'App Integration',
    description: 'Seamless third-party app setup & config',
    tag: 'App Development',
  },
  {
    name: 'Performance Optimization',
    description: 'Improved Core Web Vitals by 85%',
    tag: 'Optimization',
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/50 backdrop-blur mb-8">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">AI-Powered Tools for Shopify Growth</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Elite Solutions Built for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shopify Success
              </span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stop losing revenue to slow load times and confusing checkout flows. As a proven Conversion Rate Expert and specialized eCommerce engineer, I provide premium tools and bespoke Custom Shopify Theme development services designed specifically to scale direct-to-consumer (DTC) brands. Whether you need an elite Headless Shopify architecture or advanced Shopify Speed Optimization, you've found the right partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
                >
                  Get Started Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-600 bg-white dark:bg-gray-900/50 backdrop-blur transition-all"
                >
                  Custom Services
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-3 gap-4 max-w-md mx-auto"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur"
                  >
                    <Icon size={20} className="text-blue-400 mb-2 mx-auto" />
                    <p className="text-2xl font-bold">{stat.number}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by the Global Shopify Community</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From ambitious solo entrepreneurs launching their first store to elite enterprise teams managing millions in revenue, top-tier developers and merchants rely on my custom tools, Headless Shopify builds, and advanced Shopify Speed Optimization strategies daily.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { title: 'Always Free', desc: 'Access core tools without ever paying' },
              { title: 'Lightning Fast', desc: 'Client-side processing, zero servers' },
              { title: 'Privacy First', desc: 'No data collection, completely secure' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <CheckCircle size={24} className="text-green-400 mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Tools, Zero Learning Curve</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Simple, elegantly designed interfaces that solve real, complex e-commerce problems. These utilities are built to perfectly complement your Custom Shopify Theme and require absolutely zero setup. Use them immediately to push your store's performance to the maximum limit.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div key={i} variants={fadeInUp}>
                  <Link href={tool.link}>
                    <div className="group relative h-full p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/80 transition-all duration-300 cursor-pointer overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${tool.color}`}
                      ></div>

                      <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} className="text-white" />
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                          {tool.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-400 mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {tool.description}
                        </p>

                        <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                          <span className="text-sm font-medium">Explore</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Explore All 11 Tools
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven eCommerce Results</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real, data-driven projects that generated massive financial impact. See exactly what I have delivered for ambitious merchants and scaling developers utilizing cutting-edge Conversion Rate Expert techniques and bespoke liquid engineering.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/80 transition-all duration-300 group"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-4">
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-400">{item.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{item.name}</h3>
                <p className="text-gray-700 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View Full Portfolio
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section for Hiring */}
      <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white dark:from-gray-900/80 to-gray-100 dark:to-gray-900/40 backdrop-blur p-8 sm:p-12 overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Elite Custom Development?</h2>
              <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                If your store is suffering from low conversions, it's time to bring in a Conversion Rate Expert. From comprehensive Custom Shopify Theme building from scratch and advanced third-party app integration, to elite Shopify Speed Optimization and Headless Shopify architectures, I deliver bulletproof enterprise-grade eCommerce solutions that dramatically increase your bottom-line revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
                  >
                    Get a Quote
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-600 bg-white dark:bg-gray-900/50 backdrop-blur transition-all"
                  >
                    View Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Affiliate/Resources Section */}
      <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Highly Recommended Resources</h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I only recommend the absolute best. Leverage these curated industry partnerships, elite apps, and premium platforms specifically chosen to help you build, optimize, and aggressively scale your Shopify business without wasting time.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.a
              href="https://shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/80 transition-all group"
            >
              <GitBranch size={24} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                Launch Your Shopify Store
              </h3>
              <p className="text-gray-700 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-4">
                Start selling online with the leading e-commerce platform. Get 3 months for $1/month.
              </p>
              <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium transition-colors flex items-center gap-2">
                Start for $1
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="https://apps.shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/80 transition-all group"
            >
              <Code2 size={24} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                Discover Shopify Apps
              </h3>
              <p className="text-gray-700 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-4">
                Extend functionality with thousands of integrations. Find the perfect app for your store.
              </p>
              <span className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium transition-colors flex items-center gap-2">
                Explore Apps
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Don't let another customer abandon their cart due to slow speeds. Start by leveraging my free optimization tools to boost your store's performance today, and seamlessly scale up to my advanced, premium custom services when you are ready to completely dominate your eCommerce niche.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
              >
                Access All Tools
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
