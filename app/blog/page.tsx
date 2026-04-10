import Link from "next/link";
import { Calendar, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Optimizing Images for Shopify Stores",
    excerpt: "Learn how to compress images without losing quality to improve your store's loading speed.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Best Practices for Shopify Theme Development",
    excerpt: "Discover the essential practices for building maintainable and performant Shopify themes.",
    author: "Jane Smith",
    date: "2024-01-10",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Automating Shopify Store Maintenance",
    excerpt: "Use scripts and tools to automate routine maintenance tasks for your Shopify store.",
    author: "Mike Johnson",
    date: "2024-01-05",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights and tips for Shopify developers and store owners.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16 bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">AdSense Placeholder - Replace with actual AdSense code</p>
        </div>
      </div>
    </div>
  );
}