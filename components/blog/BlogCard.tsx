import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, User, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  className?: string;
}

export default function BlogCard({ post, index = 0, className = '' }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 ${className}`}
    >
      {/* Featured Image */}
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            post.category === 'CRO' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
            post.category === 'Performance' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
          }`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:gap-3"
        >
          Read More
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}