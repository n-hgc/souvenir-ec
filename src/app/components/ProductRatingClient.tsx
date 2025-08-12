'use client';

import { Review } from './ReviewSection';

interface ProductRatingClientProps {
  reviews: Review[];
}

export default function ProductRatingClient({ reviews }: ProductRatingClientProps) {
  const handleViewReviews = () => {
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (reviews.length === 0) {
    return (
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          <span className="text-gray-300 text-xl">★★★★★</span>
        </div>
        <span className="text-sm text-gray-500">まだ評価がありません</span>
        <button
          onClick={handleViewReviews}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          最初の評価を投稿する
        </button>
      </div>
    );
  }

  const averageJoy = reviews.reduce((sum, review) => sum + review.joyLevel, 0) / reviews.length;
  const totalReviews = reviews.length;

  const renderStars = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-xl ${
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

  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center gap-2">
        {renderStars(averageJoy)}
        <span className="text-lg font-bold text-blue-600">{averageJoy.toFixed(1)}</span>
      </div>
      
      <div className="flex flex-col">
        <span className={`text-sm font-medium ${getRatingColor(averageJoy)}`}>
          {getRatingText(averageJoy)}
        </span>
        <span className="text-xs text-gray-500">
          {totalReviews}件の体験談
        </span>
      </div>

      <button
        onClick={handleViewReviews}
        className="text-sm text-blue-600 hover:text-blue-800 underline"
      >
        詳細を見る
      </button>
    </div>
  );
}
