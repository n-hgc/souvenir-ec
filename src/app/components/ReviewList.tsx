'use client';

import { useState } from 'react';
import { Review } from './ReviewSection';

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const [filterRelationship, setFilterRelationship] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'joy'>('date');

  // フィルタリング
  const filteredReviews = reviews.filter(review => 
    filterRelationship === 'all' || review.relationship === filterRelationship
  );

  // ソート
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.joyLevel - a.joyLevel;
    }
  });

  const renderStars = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= level ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const getRelationshipIcon = (relationship: string) => {
    switch (relationship) {
      case '恋人':
        return '💕';
      case '家族':
        return '👨‍👩‍👧‍👦';
      case '友人':
        return '👥';
      case '職場の同僚':
        return '💼';
      default:
        return '👤';
    }
  };

  const getRelationshipColor = (relationship: string) => {
    switch (relationship) {
      case '恋人':
        return 'bg-pink-100 text-pink-800';
      case '家族':
        return 'bg-blue-100 text-blue-800';
      case '友人':
        return 'bg-green-100 text-green-800';
      case '職場の同僚':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        まだレビューがありません。最初のレビューを投稿してみませんか？
      </div>
    );
  }

  return (
    <div>
      {/* フィルター・ソート */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">関係性で絞り込み:</label>
          <select
            value={filterRelationship}
            onChange={(e) => setFilterRelationship(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">すべて</option>
            <option value="恋人">恋人</option>
            <option value="家族">家族</option>
            <option value="友人">友人</option>
            <option value="職場の同僚">職場の同僚</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">並び順:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'joy')}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">投稿日順</option>
            <option value="joy">喜び度順</option>
          </select>
        </div>
      </div>

      {/* レビュー一覧 */}
      <div className="space-y-4">
        {sortedReviews.map((review) => (
          <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getRelationshipIcon(review.relationship)}</span>
                <div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRelationshipColor(review.relationship)}`}>
                    {review.relationship}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{review.userName}</p>
                </div>
              </div>
              <div className="text-right">
                {renderStars(review.joyLevel)}
                <p className="text-xs text-gray-500 mt-1">{review.createdAt}</p>
              </div>
            </div>
            
            {review.comment && (
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          選択した条件に一致する体験談がありません。
        </div>
      )}
    </div>
  );
}
