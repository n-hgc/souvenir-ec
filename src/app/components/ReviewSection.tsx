'use client';

import { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewStats from './ReviewStats';

// レビューデータの型定義
export interface Review {
  id: string;
  productId: number;
  joyLevel: number; // 喜び度（1-5）
  relationship: '恋人' | '家族' | '友人' | '職場の同僚';
  comment?: string;
  createdAt: string;
  userName: string;
}

interface ReviewSectionProps {
  productId: number;
  productName: string;
}

export default function ReviewSection({ productId, productName }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([
    // サンプルデータ
    {
      id: '1',
      productId: 1,
      joyLevel: 5,
      relationship: '家族',
      comment: '母がとても喜んでくれました！北海道旅行の思い出と一緒に贈ったので、特別感があって良かったです。',
      createdAt: '2024-01-15',
      userName: '田中さん'
    },
    {
      id: '2',
      productId: 1,
      joyLevel: 4,
      relationship: '友人',
      comment: '友達の誕生日に贈りました。白い恋人は定番だけど、やっぱり喜ばれますね。',
      createdAt: '2024-01-10',
      userName: '佐藤さん'
    },
    {
      id: '3',
      productId: 1,
      joyLevel: 5,
      relationship: '恋人',
      comment: '彼女が大興奮でした！北海道の思い出と一緒に贈ったので、特別な意味があったみたいです。',
      createdAt: '2024-01-08',
      userName: '山田さん'
    }
  ]);

  const handleAddReview = (newReview: Omit<Review, 'id' | 'createdAt' | 'userName'>) => {
    const review: Review = {
      ...newReview,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      userName: 'あなた' // 実際の実装ではログインユーザー名
    };
    setReviews(prev => [review, ...prev]);
  };

  return (
    <section className="mt-12 border-t pt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {productName}をもらった人の体験談
        </h2>
        
        {/* レビュー統計 */}
        <ReviewStats reviews={reviews} />
        
        {/* レビュー投稿フォーム */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">あなたの体験を投稿</h3>
          <ReviewForm productId={productId} onSubmit={handleAddReview} />
        </div>
        
        {/* レビュー一覧 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">みんなの体験談</h3>
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
