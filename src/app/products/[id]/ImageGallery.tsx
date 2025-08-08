'use client';

import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* メイン画像 */}
      <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-lg">{productName} - 画像{currentImageIndex + 1}</span>
        </div>
      </div>

      {/* サムネイル画像 */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-16 bg-gray-100 rounded border-2 ${
                currentImageIndex === index ? 'border-blue-600' : 'border-gray-200'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-xs">画像{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
