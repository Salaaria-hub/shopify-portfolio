'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDescriptionGeneratorPage() {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [keyFeatures, setKeyFeatures] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateDescription = async () => {
    if (!productName.trim() || !productType.trim()) {
      toast.error('Please enter at least a product name and type');
      return;
    }

    setIsGenerating(true);
    setGeneratedDescription('');

    try {
      const response = await fetch('/api/generate-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName,
          productType,
          keyFeatures,
          targetAudience,
          tone
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate description');
      }

      setGeneratedDescription(data.description);
      toast.success('Description generated successfully!');
    } catch (error: any) {
      toast.error(error.message || 'An error occurred');
    } finally {
      setIsGenerating(false);
    }
  };



  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedDescription);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const regenerate = () => {
    generateDescription();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Tools
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Description Generator</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Generate compelling product descriptions for your Shopify store using customizable templates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Product Name *
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Premium Wireless Headphones"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Product Type *
              </label>
              <input
                type="text"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., audio device"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Key Features
              </label>
              <input
                type="text"
                value={keyFeatures}
                onChange={(e) => setKeyFeatures(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., noise cancellation, 30hr battery"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Target Audience
              </label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., music enthusiasts"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full md:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={generateDescription}
              disabled={isGenerating}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin mr-2" size={16} />
                  Generating...
                </>
              ) : (
                'Generate Description'
              )}
            </button>
            {generatedDescription && !isGenerating && (
              <button
                onClick={regenerate}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center"
              >
                <RefreshCw className="mr-2" size={16} />
                Regenerate
              </button>
            )}
          </div>

          {generatedDescription && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Generated Description</h3>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                >
                  <Copy className="mr-1" size={14} />
                  Copy
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded p-4">
                <pre className="whitespace-pre-wrap text-gray-900 dark:text-white font-sans text-sm leading-relaxed">
                  {generatedDescription}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}