'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Tag, ArrowRight } from 'lucide-react';
import { blogPosts, getAllCategories, searchBlogPosts, getBlogPostsByCategory } from '@/lib/blog-data';
import { BlogCard } from '@/components/blog';

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const categories = getAllCategories();

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === 'All'
      ? blogPosts
      : getBlogPostsByCategory(selectedCategory);

    if (searchQuery) {
      posts = searchBlogPosts(searchQuery).filter(post =>
        selectedCategory === 'All' || post.category === selectedCategory
      );
    }

    return posts;
  }, [searchQuery, selectedCategory]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

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
              <Tag size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300">Shopify Development Blog</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Insights for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shopify Success
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Expert tips, proven strategies, and actionable insights to help you build better Shopify stores, increase conversions, and grow your e-commerce business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-900/50 border border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              >
                {displayedPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </motion.div>

              {/* Load More Button */}
              {hasMorePosts && (
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={loadMore}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    Load More Articles
                  </motion.button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Optimize Your Store?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Get expert insights and proven strategies delivered to your inbox. Join 10,000+ Shopify developers and store owners.
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
                    Explore Free Tools
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