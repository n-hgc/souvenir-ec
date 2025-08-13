'use client';

import { Review } from './ReviewSection';

// 簡略化されたレビューデータの型定義
interface SimpleReview {
  joyLevel: number;
  relationship: string;
}

interface ProductCardRatingProps {
  reviews: Review[] | SimpleReview[];
  compact?: boolean;
}

export default function ProductCardRating({ reviews, compact = true }: ProductCardRatingProps) {
  if (reviews.length === 0) {
    return (
      <div className="flex items-center gap-1">
        <span className="text-gray-300 text-xs">★★★★★</span>
        <span className="text-xs text-gray-400">(0)</span>
      </div>
    );
  }

  const averageJoy = reviews.reduce((sum, review) => sum + review.joyLevel, 0) / reviews.length;
  const totalReviews = reviews.length;

  const renderStars = (level: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-xs ${
              star <= level ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return '大変喜ばれる';
    if (rating >= 4.0) return '喜ばれる';
    if (rating >= 3.5) return 'まあまあ';
    if (rating >= 3.0) return '普通';
    return '要検討';
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-blue-600';
    if (rating >= 3.5) return 'text-yellow-600';
    if (rating >= 3.0) return 'text-orange-600';
    return 'text-red-600';
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {renderStars(averageJoy)}
        <div className="flex flex-col">
          <span className="text-xs font-medium text-gray-900">{averageJoy.toFixed(1)}</span>
          <span className="text-xs text-gray-500">({totalReviews})</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        {renderStars(averageJoy)}
        <span className="text-sm font-medium text-gray-900">{averageJoy.toFixed(1)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium ${getRatingColor(averageJoy)}`}>
          {getRatingText(averageJoy)}
        </span>
        <span className="text-xs text-gray-500">{totalReviews}件</span>
      </div>
    </div>
  );
}
