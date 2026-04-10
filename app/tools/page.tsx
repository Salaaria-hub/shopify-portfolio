import Link from "next/link";
import { Image, FileText, Calculator, Search } from "lucide-react";

const tools = [
  {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Compress and optimize images for faster loading",
    icon: Image,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900",
  },
  {
    id: "image-resizer",
    name: "Image Resizer",
    description: "Resize images to specific dimensions",
    icon: Image,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900",
  },
  {
    id: "jpg-png-converter",
    name: "JPG ↔ PNG Converter",
    description: "Convert between JPG and PNG formats",
    icon: Image,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900",
  },
  {
    id: "pdf-merger",
    name: "PDF Merger",
    description: "Combine multiple PDF files into one",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900",
  },
  {
    id: "pdf-splitter",
    name: "PDF Splitter",
    description: "Split PDF files into separate documents",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900",
  },
  {
    id: "pdf-compressor",
    name: "PDF Compressor",
    description: "Reduce PDF file size",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900",
  },
  {
    id: "profit-calculator",
    name: "Profit Calculator",
    description: "Calculate profits for Shopify products",
    icon: Calculator,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900",
  },
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    description: "Calculate discount prices and savings",
    icon: Calculator,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900",
  },
  {
    id: "product-description-generator",
    name: "Product Description Generator",
    description: "Generate compelling product descriptions",
    icon: Calculator,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900",
  },
];

export default function ToolsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Developer Tools</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Free tools designed specifically for Shopify developers to streamline their workflow and improve store performance.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={tool.color} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
              </Link>
            );
          })}
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

        {/* Recently Used Tools */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recently Used</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300">No recently used tools. Start exploring!</p>
          </div>
        </div>

        {/* AdSense Footer Ad */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-8 mt-8">
          <div className="bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2">Footer Ad - 728x90</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Replace with AdSense code</p>
            <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-2 block">
              {/* AdSense Footer Ad Code Here */}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}