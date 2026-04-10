'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import { ArrowLeft, ImageIcon, Download } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function formatBytes(bytes: number) {
  return `${(bytes / 1024).toFixed(2)} KB`;
}

export default function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [isCompressing, setIsCompressing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (!selected) {
      return;
    }
    setFile(selected);
    setOriginalSize(selected.size);
    setCompressedUrl(null);
    setCompressedSize(0);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  const compressImage = async () => {
    if (!file) {
      toast.error('Upload an image first');
      return;
    }

    setIsCompressing(true);

    const image = new Image();
    const url = URL.createObjectURL(file);
    image.src = url;

    image.onload = async () => {
      const canvas = document.createElement('canvas');
      const maxWidth = image.width;
      const maxHeight = image.height;
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        toast.error('Unable to compress image');
        setIsCompressing(false);
        return;
      }
      ctx.drawImage(image, 0, 0, maxWidth, maxHeight);
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            toast.error('Compression failed');
            setIsCompressing(false);
            return;
          }
          setCompressedSize(blob.size);
          const compressedBlobUrl = URL.createObjectURL(blob);
          setCompressedUrl(compressedBlobUrl);
          toast.success('Image compressed successfully');
          setIsCompressing(false);
        },
        'image/jpeg',
        0.7
      );
    };

    image.onerror = () => {
      toast.error('Unable to read image file');
      setIsCompressing(false);
    };
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
            <ImageIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Image Compressor</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Upload an image, compress it in the browser, and compare original vs compressed size.
          </p>

          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl p-10 text-center cursor-pointer bg-gray-50 dark:bg-gray-900 hover:border-blue-500 transition-colors"
          >
            <input {...getInputProps()} />
            <p className="text-gray-700 dark:text-gray-300">
              {isDragActive ? 'Drop your image here' : 'Drag & drop an image, or click to select a file'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">JPEG, PNG, WEBP supported</p>
          </div>

          {file && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-wrap gap-6 items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{file.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Original size: {formatBytes(originalSize)}</p>
                </div>
                <button
                  onClick={compressImage}
                  disabled={isCompressing}
                  className="px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  {isCompressing ? 'Compressing…' : 'Compress Image'}
                </button>
              </div>
            </div>
          )}

          {compressedUrl && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Compressed Output</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-4">
                  <img src={compressedUrl} alt="Compressed preview" className="w-full object-contain" />
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">Compressed size: {formatBytes(compressedSize)}</p>
                  <p className="text-gray-600 dark:text-gray-300">Savings: {formatBytes(originalSize - compressedSize)}</p>
                  <a
                    href={compressedUrl}
                    download={`compressed-${file?.name ?? 'image'}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Download size={16} />
                    Download compressed image
                  </a>
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
