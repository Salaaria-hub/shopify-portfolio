'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import Link from 'next/link';
import { ArrowLeft, ArrowDown, FileText } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function formatSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function PDFCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [isCompressing, setIsCompressing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (!selected) return;
    setFile(selected);
    setOriginalSize(selected.size);
    setCompressedUrl(null);
    setCompressedSize(0);
    toast.success('PDF loaded successfully');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
  });

  const compressPdf = async () => {
    if (!file) {
      toast.error('Upload a PDF first');
      return;
    }

    setIsCompressing(true);
    try {
      const sourceBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(sourceBytes);
      const copiedPdf = await PDFDocument.create();
      const copiedPages = await copiedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => copiedPdf.addPage(page));
      const compressedBytes = await copiedPdf.save({ useObjectStreams: true });
      const blob = new Blob([compressedBytes as any], { type: 'application/pdf' });
      setCompressedUrl(URL.createObjectURL(blob));
      setCompressedSize(compressedBytes.byteLength);
      toast.success('PDF processed successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to process PDF');
    } finally {
      setIsCompressing(false);
    }
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PDF Compressor</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Upload a PDF and re-save it with optimized object streams for smaller file size.
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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{file.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Original size: {formatSize(file.size)}</p>
                </div>
                <button
                  onClick={compressPdf}
                  disabled={isCompressing}
                  className="px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {isCompressing ? 'Processing…' : 'Compress PDF'}
                </button>
              </div>
            </div>
          )}

          {compressedUrl && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Compressed PDF Ready</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Compressed size: {formatSize(compressedSize)}</p>
              <a
                href={compressedUrl}
                download={`compressed-${file?.name ?? 'document'}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                <ArrowDown size={16} />
                Download PDF
              </a>
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
