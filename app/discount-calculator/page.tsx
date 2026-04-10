'use client';

import Link from 'next/link';
import { ArrowLeft, Percent } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function DiscountCalculatorPage() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState<{
    discountAmount: number;
    finalPrice: number;
    savings: number;
  } | null>(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0 || discount > 100) {
      toast.error('Please enter valid values (price > 0, discount 0-100%)');
      return;
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    const savings = discountAmount;

    setResult({
      discountAmount: parseFloat(discountAmount.toFixed(2)),
      finalPrice: parseFloat(finalPrice.toFixed(2)),
      savings: parseFloat(savings.toFixed(2))
    });

    toast.success('Discount calculated successfully!');
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
            <Percent className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discount Calculator</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Calculate discount amounts, final prices, and savings for your Shopify products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Original Price ($)
              </label>
              <input
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter original price"
                min="0"
                step="0.01"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Discount Percentage (%)
              </label>
              <input
                type="number"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter discount %"
                min="0"
                max="100"
                step="0.01"
              />
            </div>
          </div>

          <button
            onClick={calculateDiscount}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-8"
          >
            Calculate Discount
          </button>

          {result && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">${result.discountAmount}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Discount Amount</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">${result.finalPrice}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Final Price</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">${result.savings}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">You Save</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}