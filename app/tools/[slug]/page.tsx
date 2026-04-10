import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProfitCalculator from '@/components/tools/ProfitCalculator';

const tools = {
  'image-compressor': {
    name: 'Image Compressor',
    description: 'Compress and optimize images for faster loading',
    component: 'ImageCompressor'
  },
  'image-resizer': {
    name: 'Image Resizer',
    description: 'Resize images to specific dimensions',
    component: 'ImageResizer'
  },
  'jpg-png-converter': {
    name: 'JPG ↔ PNG Converter',
    description: 'Convert between JPG and PNG formats',
    component: 'ImageConverter'
  },
  'pdf-merger': {
    name: 'PDF Merger',
    description: 'Combine multiple PDF files into one',
    component: 'PDFMerger'
  },
  'pdf-splitter': {
    name: 'PDF Splitter',
    description: 'Split PDF files into separate documents',
    component: 'PDFSplitter'
  },
  'pdf-compressor': {
    name: 'PDF Compressor',
    description: 'Reduce PDF file size',
    component: 'PDFCompressor'
  },
  'profit-calculator': {
    name: 'Profit Calculator',
    description: 'Calculate profits for Shopify products',
    component: 'ProfitCalculator'
  },
  'discount-calculator': {
    name: 'Discount Calculator',
    description: 'Calculate discount prices and savings',
    component: 'DiscountCalculator'
  },
  'product-description-generator': {
    name: 'Product Description Generator',
    description: 'Generate compelling product descriptions',
    component: 'DescriptionGenerator'
  }
};

function renderToolComponent(component: string) {
  switch (component) {
    case 'ProfitCalculator':
      return <ProfitCalculator />;
    default:
      return (
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            {component} Component - Implementation needed
          </p>
        </div>
      );
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools[params.slug as keyof typeof tools];
  if (!tool) return {};

  return {
    title: `${tool.name} - Free Shopify Developer Tool`,
    description: tool.description,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools[params.slug as keyof typeof tools];

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Tools
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{tool.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{tool.description}</p>

          {renderToolComponent(tool.component)}
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-8 bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">AdSense Placeholder - Replace with actual AdSense code</p>
        </div>
      </div>
    </div>
  );
}