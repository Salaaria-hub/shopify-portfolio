import Link from 'next/link';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Store Redesign',
    description: 'Complete Shopify theme redesign with custom functionality and improved conversion rates.',
    image: '/api/placeholder/400/300',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Shopify Development'
  },
  {
    id: 2,
    title: 'Custom Shopify App',
    description: 'Inventory management app with real-time sync and automated reorder features.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'Shopify API', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'App Development'
  },
  {
    id: 3,
    title: 'Performance Optimization',
    description: 'Improved site speed by 60% through code optimization and image compression.',
    image: '/api/placeholder/400/300',
    technologies: ['JavaScript', 'Web Vitals', 'Image Optimization'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Performance'
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my work in Shopify development, custom apps, and performance optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  >
                    <Code size={16} className="mr-1" />
                    Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss how I can help bring your Shopify vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}