'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Download } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function formatBytes(bytes: number) {
  return `${(bytes / 1024).toFixed(2)} KB`;
}

export default function JpgPngConverterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<'png' | 'jpeg'>('png');
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [convertedSize, setConvertedSize] = useState<number>(0);
  const [isConverting, setIsConverting] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (!selected) return;
    setFile(selected);
    setOriginalSize(selected.size);
    setResultUrl(null);
    setConvertedSize(0);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  const convertFile = () => {
    if (!file) {
      toast.error('Upload an image first');
      return;
    }

    setIsConverting(true);

    const image = new Image();
    const url = URL.createObjectURL(file);
    image.src = url;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        toast.error('Conversion failed');
        setIsConverting(false);
        return;
      }
      ctx.drawImage(image, 0, 0);
      const mimeType = targetFormat === 'png' ? 'image/png' : 'image/jpeg';
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            toast.error('Conversion failed');
            setIsConverting(false);
            return;
          }
          setConvertedSize(blob.size);
          setResultUrl(URL.createObjectURL(blob));
          toast.success('Image converted successfully');
          setIsConverting(false);
        },
        mimeType,
        0.92
      );
    };

    image.onerror = () => {
      toast.error('Unable to read image file');
      setIsConverting(false);
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
            <RefreshCw className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JPG ↔ PNG Converter</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Convert your images between JPG and PNG formats instantly in the browser.
          </p>

          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl p-10 text-center cursor-pointer bg-gray-50 dark:bg-gray-900 hover:border-blue-500 transition-colors"
          >
            <input {...getInputProps()} />
            <p className="text-gray-700 dark:text-gray-300">
              {isDragActive ? 'Drop your image here' : 'Drag & drop an image, or click to select a file'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PNG and JPEG images supported</p>
          </div>

          {file && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{file.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Original size: {formatBytes(originalSize)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Output format</label>
                  <select
                    value={targetFormat}
                    onChange={(e) => setTargetFormat(e.target.value as 'png' | 'jpeg')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={convertFile}
                    disabled={isConverting}
                    className="w-full px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    {isConverting ? 'Converting…' : 'Convert'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {resultUrl && (
            <div className="mt-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-4">
                  <img src={resultUrl} alt="Converted preview" className="w-full object-contain" />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">Converted size: {formatBytes(convertedSize)}</p>
                  <a
                    href={resultUrl}
                    download={`converted-${file?.name?.replace(/\.(png|jpg|jpeg)$/i, '') ?? 'image'}.${targetFormat === 'jpeg' ? 'jpg' : 'png'}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Download size={16} />
                    Download converted image
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
