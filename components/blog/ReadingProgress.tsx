'use client';

import { motion } from 'framer-motion';

interface ReadingProgressProps {
  progress: number;
  className?: string;
}

export default function ReadingProgress({ progress, className = '' }: ReadingProgressProps) {
  return (
    <div className={`fixed top-0 left-0 w-full h-1 bg-gray-800 z-50 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}