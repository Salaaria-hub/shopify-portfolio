'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Bookmark } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data';
import { BlogPost } from '@/lib/blog-data';
import { TableOfContents, AffiliateCTA, ReadingProgress, BlogCard } from '@/components/blog';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    const updateActiveSection = () => {
      const headings = document.querySelectorAll('h2, h3');
      let currentSection = '';

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = heading.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', updateReadingProgress);
    window.addEventListener('scroll', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ReadingProgress progress={readingProgress} />

      {/* Header */}
      <header className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                post.category === 'CRO' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                post.category === 'Performance' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              }`}>
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <TableOfContents toc={post.tableOfContents} activeSection={activeSection} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              {/* Featured Image */}
              <div className="aspect-video bg-gray-800 rounded-xl mb-8 relative overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <div
                className="prose-headings:scroll-mt-24 prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-gray-700 prose-blockquote:text-gray-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-ul:text-gray-300 prose-ol:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Inline CTA */}
              <AffiliateCTA type="inline" />

              {/* End CTA */}
              <AffiliateCTA type="end" />
            </motion.article>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <User size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{post.author.name}</div>
                    <div className="text-sm text-gray-400">{post.author.bio}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

          {/* Related Posts */}
          <section className="py-16 border-t border-gray-800 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 3)
                  .map((relatedPost, index) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                  ))}
              </div>
            </div>
          </section>
    </div>
  );
}