'use client';

import { useState } from 'react';
import { Code, Copy, Download } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function CodeFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState<'javascript' | 'liquid'>('javascript');

  const formatCode = () => {
    if (!input.trim()) {
      toast.error('Please enter some code to format');
      return;
    }

    try {
      if (language === 'javascript') {
        // Simple JS formatting using JSON.stringify for objects, or basic indentation
        const formatted = input
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .join('\n')
          .replace(/;/g, ';\n')
          .replace(/{/g, '{\n')
          .replace(/}/g, '\n}');
        setOutput(formatted);
      } else if (language === 'liquid') {
        // Basic Liquid formatting
        const formatted = input
          .replace(/\{\{-\s*/g, '{{- ')
          .replace(/\s*-\}\}/g, ' -}}')
          .replace(/\{\{\s*/g, '{{ ')
          .replace(/\s*\}\}/g, ' }}')
          .replace(/\{\%-\s*/g, '{%- ')
          .replace(/\s*-\%\}/g, ' -%}')
          .replace(/\{\%\s*/g, '{% ')
          .replace(/\s*\%\}/g, ' %}')
          .split('\n')
          .map(line => line.trim())
          .join('\n');
        setOutput(formatted);
      }
      toast.success('Code formatted successfully!');
    } catch (error) {
      toast.error('Failed to format code');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  const downloadCode = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `formatted.${language === 'javascript' ? 'js' : 'liquid'}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Code Formatter</h1>
          <p className="text-xl text-gray-600">
            Format and beautify your Liquid and JavaScript code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Input Code</h2>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'javascript' | 'liquid')}
                className="border border-gray-300 rounded px-3 py-1"
              >
                <option value="javascript">JavaScript</option>
                <option value="liquid">Liquid</option>
              </select>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter your ${language} code here...`}
              className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none"
            />
            <button
              onClick={formatCode}
              className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Format Code
            </button>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Formatted Output</h2>
              <div className="flex space-x-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!output}
                  className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Copy size={16} className="mr-1" />
                  Copy
                </button>
                <button
                  onClick={downloadCode}
                  disabled={!output}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Download size={16} className="mr-1" />
                  Download
                </button>
              </div>
            </div>
            <textarea
              value={output}
              readOnly
              placeholder="Formatted code will appear here..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50 resize-none"
            />
          </div>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16 bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">AdSense Placeholder - Replace with actual AdSense code</p>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}