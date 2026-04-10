'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import Link from 'next/link';
import { ArrowLeft, FileText, Download, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function PDFSplitterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<Array<{ name: string; url: string }>>([]);
  const [isSplitting, setIsSplitting] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (!selected) return;
    setFile(selected);
    setPages([]);
    toast.success('PDF loaded successfully');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
  });

  const splitPDF = async () => {
    if (!file) {
      toast.error('Upload a PDF first');
      return;
    }

    setIsSplitting(true);
    try {
      const sourceBytes = await file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(sourceBytes);
      const pageCount = sourcePdf.getPageCount();
      const results: Array<{ name: string; url: string }> = [];

      for (let i = 0; i < pageCount; i += 1) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(sourcePdf, [i]);
        newPdf.addPage(copiedPage);
        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
        results.push({
          name: `page-${i + 1}.pdf`,
          url: URL.createObjectURL(blob),
        });
      }

      setPages(results);
      toast.success('PDF split into individual pages successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to split PDF');
    } finally {
      setIsSplitting(false);
    }
  };

  const clearPages = () => {
    pages.forEach((page) => URL.revokeObjectURL(page.url));
    setPages([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Tools
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border dark:border-gray-700 p-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PDF Splitter</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Split a PDF into separate page files so you can keep only the pages you need.
          </p>

          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl p-10 text-center cursor-pointer bg-gray-50 dark:bg-gray-900 hover:border-blue-500 transition-colors"
          >
            <input {...getInputProps()} />
            <p className="text-gray-700 dark:text-gray-300">
              {isDragActive ? 'Drop the PDF here' : 'Drag & drop a PDF, or click to select a file'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Only PDF files are supported</p>
          </div>

          {file && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{file.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button
                  onClick={splitPDF}
                  disabled={isSplitting}
                  className="px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {isSplitting ? 'Splitting…' : 'Split PDF'}
                </button>
              </div>
            </div>
          )}

          {pages.length > 0 && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Download Pages</h2>
                <button
                  onClick={clearPages}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
                >
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <div className="space-y-3">
                {pages.map((page, index) => (
                  <div key={page.name} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{page.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Page {index + 1}</p>
                    </div>
                    <a
                      href={page.url}
                      download={page.name}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
