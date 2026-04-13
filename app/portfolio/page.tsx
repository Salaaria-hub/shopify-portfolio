'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Code,
  TrendingUp,
  Zap,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  BarChart3,
  Globe,
  Smartphone,
  ShoppingCart,
  Clock,
  DollarSign,
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

const caseStudies = [
  {
    id: 1,
    title: 'Luxury Fashion Brand - E-commerce Store',
    category: 'Shopify Development',
    problem: 'Store conversion rate was only 1.2% with slow loading times and poor mobile experience',
    solution: 'Complete theme redesign with custom Liquid templates, optimized images, and mobile-first responsive design',
    results: [
      { metric: '+340%', label: 'Conversion Rate', icon: TrendingUp },
      { metric: '85%', label: 'Faster Load Time', icon: Zap },
      { metric: '$2.1M', label: 'Annual Revenue', icon: DollarSign },
    ],
    image: '/api/placeholder/600/400',
    technologies: ['Shopify Liquid', 'JavaScript', 'CSS Grid', 'Web Vitals'],
    liveUrl: '#',
    caseStudyUrl: '#',
    featured: true,
    testimonial: {
      quote: "Our conversion rate tripled and we're now hitting 7-figure annual revenue. The attention to detail was incredible.",
      author: "Sarah Chen",
      role: "CEO, LuxeStyle Co.",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    id: 2,
    title: 'Subscription Box App - Custom Shopify Integration',
    category: 'App Development',
    problem: 'Manual subscription management was causing 40% customer churn and operational overhead',
    solution: 'Built custom Shopify app with automated billing, inventory sync, and customer management dashboard',
    results: [
      { metric: '-60%', label: 'Customer Churn', icon: Users },
      { metric: '95%', label: 'Automation Rate', icon: Target },
      { metric: '10K+', label: 'Active Subscribers', icon: BarChart3 },
    ],
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Shopify API', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    caseStudyUrl: '#',
    featured: false,
    testimonial: {
      quote: "This app transformed our business. We went from drowning in manual work to fully automated operations.",
      author: "Mike Rodriguez",
      role: "Founder, BoxCraft",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    id: 3,
    title: 'Enterprise Store - Performance Optimization',
    category: 'Performance Optimization',
    problem: 'Site was losing $50K/month due to 8-second load times and poor Core Web Vitals scores',
    solution: 'Comprehensive optimization including code splitting, image optimization, CDN setup, and database tuning',
    results: [
      { metric: '94%', label: 'Lighthouse Score', icon: Award },
      { metric: '-75%', label: 'Load Time', icon: Clock },
      { metric: '+150%', label: 'Organic Traffic', icon: Globe },
    ],
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Image Optimization', 'CDN', 'Database Tuning'],
    liveUrl: '#',
    caseStudyUrl: '#',
    featured: false,
    testimonial: {
      quote: "The performance improvements were game-changing. Our bounce rate dropped 40% overnight.",
      author: "Jennifer Park",
      role: "CTO, EnterpriseShop",
      avatar: "/api/placeholder/40/40"
    }
  },
  {
    id: 4,
    title: 'Dropshipping Store - Mobile App Integration',
    category: 'Shopify Development',
    problem: 'Mobile users were abandoning carts at 65% rate due to poor mobile checkout experience',
    solution: 'Custom mobile-optimized checkout flow with one-click purchasing and progressive web app features',
    results: [
      { metric: '+280%', label: 'Mobile Conversions', icon: Smartphone },
      { metric: '-45%', label: 'Cart Abandonment', icon: ShoppingCart },
      { metric: '4.9★', label: 'App Store Rating', icon: Star },
    ],
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Shopify API', 'PWA', 'Mobile UX'],
    liveUrl: '#',
    caseStudyUrl: '#',
    featured: false,
    testimonial: {
      quote: "Mobile conversions skyrocketed. Our app users now convert at 3x the rate of web visitors.",
      author: "David Kim",
      role: "Founder, DropShipPro",
      avatar: "/api/placeholder/40/40"
    }
  },
];

const testimonials = [
  {
    quote: "Working with this developer transformed our entire business. The attention to detail and technical expertise is unmatched.",
    author: "Emma Thompson",
    role: "CEO, FashionForward",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    quote: "Delivered exactly what we needed, on time and within budget. The results speak for themselves - 300% revenue growth.",
    author: "Marcus Johnson",
    role: "Founder, TechStart",
    avatar: "/api/placeholder/60/60",
    rating: 5
  },
  {
    quote: "Professional, reliable, and incredibly skilled. Our Shopify store now performs better than ever imagined.",
    author: "Lisa Chen",
    role: "Director, E-commerce, GlobalBrands",
    avatar: "/api/placeholder/60/60",
    rating: 5
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur mb-8">
              <Award size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300">Proven Results Portfolio</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Case Studies That{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Real projects, real impact. See how I've helped Shopify merchants and developers achieve extraordinary results through strategic development and optimization.
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
                  Get Free Audit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:border-gray-600 bg-gray-900/50 backdrop-blur transition-all"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Highlight */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Success Story</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A luxury fashion brand that went from struggling to 7-figure success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur border border-gray-700 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                    <span className="text-blue-400 font-medium">Shopify Development</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">LuxeStyle Co. - Complete Store Transformation</h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Transformed a struggling fashion brand into a high-converting e-commerce powerhouse with custom Shopify development.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">+340%</div>
                      <div className="text-sm text-gray-400">Conversion Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">$2.1M</div>
                      <div className="text-sm text-gray-400">Annual Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">85%</div>
                      <div className="text-sm text-gray-400">Faster Loading</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {['Shopify Liquid', 'JavaScript', 'CSS Grid', 'Web Vitals'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    >
                      View Case Study
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl font-semibold hover:border-gray-600 transition-all"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Store Screenshot</span>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    LIVE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Detailed breakdowns of successful projects with measurable results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative p-6">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                    <span className="text-xs font-medium text-blue-400">{study.category}</span>
                  </div>

                  {/* Project Image */}
                  <div className="aspect-video bg-gray-800 rounded-lg mb-6 border border-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-gray-400">Project Screenshot</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h3>

                  {/* Problem → Solution → Result */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <Target size={16} />
                        Problem
                      </h4>
                      <p className="text-gray-400 text-sm">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                        <Zap size={16} />
                        Solution
                      </h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp size={16} />
                        Results
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, i) => {
                          const Icon = result.icon;
                          return (
                            <div key={i} className="text-center">
                              <Icon size={20} className="text-green-400 mx-auto mb-1" />
                              <div className="text-lg font-bold text-green-400">{result.metric}</div>
                              <div className="text-xs text-gray-400">{result.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={study.caseStudyUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm"
                    >
                      View Case Study
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href={study.liveUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-lg font-medium hover:border-gray-600 transition-all text-sm"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </Link>
                  </div>

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">★</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-300 italic mb-2">"{study.testimonial.quote}"</p>
                          <div className="text-xs text-gray-400">
                            {study.testimonial.author}, {study.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What clients say about working together
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-gray-700 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm text-gray-400">★</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur p-8 sm:p-12 overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want Similar Results?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Get a free audit of your Shopify store and discover opportunities to boost conversions, speed, and revenue.
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
                    Get Free Audit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:border-gray-600 bg-gray-900/50 backdrop-blur transition-all"
                  >
                    Try Free Tools
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}