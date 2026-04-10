'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ProfitCalculator() {
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [result, setResult] = useState<{
    profit: number;
    profitMargin: number;
    markup: number;
  } | null>(null);

  const calculateProfit = () => {
    const cost = parseFloat(costPrice);
    const selling = parseFloat(sellingPrice);

    if (isNaN(cost) || isNaN(selling) || cost <= 0 || selling <= 0) {
      return;
    }

    const profit = selling - cost;
    const profitMargin = (profit / selling) * 100;
    const markup = (profit / cost) * 100;

    setResult({
      profit: parseFloat(profit.toFixed(2)),
      profitMargin: parseFloat(profitMargin.toFixed(2)),
      markup: parseFloat(markup.toFixed(2))
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cost Price ($)
          </label>
          <input
            type="number"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter cost price"
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Selling Price ($)
          </label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter selling price"
            min="0"
            step="0.01"
          />
        </div>
      </div>

      <button
        onClick={calculateProfit}
        className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <Calculator className="mr-2" size={20} />
        Calculate Profit
      </button>

      {result && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">${result.profit}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Profit</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{result.profitMargin}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Profit Margin</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{result.markup}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Markup</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}