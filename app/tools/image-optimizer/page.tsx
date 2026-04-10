'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { Upload, Download, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface CompressedImage {
  file: File;
  originalSize: number;
  compressedSize: number;
  url: string;
}

export default function ImageOptimizerPage() {
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsCompressing(true);
    const compressedImages: CompressedImage[] = [];

    for (const file of acceptedFiles) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);
        const url = URL.createObjectURL(compressedFile);

        compressedImages.push({
          file: compressedFile,
          originalSize: file.size,
          compressedSize: compressedFile.size,
          url,
        });
      } catch (error) {
        console.error('Error compressing image:', error);
        toast.error(`Failed to compress ${file.name}`);
      }
    }

    setImages(prev => [...prev, ...compressedImages]);
    setIsCompressing(false);
    toast.success('Images compressed successfully!');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true,
  });

  const downloadImage = (image: CompressedImage) => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `compressed_${image.file.name}`;
    link.click();
  };

  const downloadAll = () => {
    images.forEach(image => downloadImage(image));
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].url);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Image Optimizer</h1>
          <p className="text-xl text-gray-600">
            Compress and optimize your images for faster Shopify store loading.
          </p>
        </div>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          {isDragActive ? (
            <p className="text-lg text-blue-600">Drop the images here...</p>
          ) : (
            <div>
              <p className="text-lg text-gray-600 mb-2">
                Drag & drop images here, or click to select files
              </p>
              <p className="text-sm text-gray-500">
                Supports JPEG, PNG, GIF, WebP (max 10MB each)
              </p>
            </div>
          )}
        </div>

        {isCompressing && (
          <div className="mt-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Compressing images...</p>
          </div>
        )}

        {images.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Compressed Images</h2>
              <button
                onClick={downloadAll}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <Download className="mr-2" size={20} />
                Download All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-4">
                  <img
                    src={image.url}
                    alt={`Compressed ${image.file.name}`}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900 truncate">{image.file.name}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Original: {formatBytes(image.originalSize)}</span>
                      <span>Compressed: {formatBytes(image.compressedSize)}</span>
                    </div>
                    <div className="text-sm text-green-600">
                      Saved: {formatBytes(image.originalSize - image.compressedSize)} (
                      {((1 - image.compressedSize / image.originalSize) * 100).toFixed(1)}%)
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <button
                        onClick={() => downloadImage(image)}
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                      <button
                        onClick={() => removeImage(index)}
                        className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors flex items-center justify-center"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AdSense Placeholder */}
        <div className="mt-16 bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">AdSense Placeholder - Replace with actual AdSense code</p>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}