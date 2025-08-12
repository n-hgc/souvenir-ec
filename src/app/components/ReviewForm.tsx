'use client';

import { useState } from 'react';
import { Review } from './ReviewSection';

interface ReviewFormProps {
  productId: number;
  onSubmit: (review: Omit<Review, 'id' | 'createdAt' | 'userName'>) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [joyLevel, setJoyLevel] = useState(0);
  const [relationship, setRelationship] = useState<'恋人' | '家族' | '友人' | '職場の同僚'>('家族');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (joyLevel === 0) return;

    onSubmit({
      productId,
      joyLevel,
      relationship,
      comment: comment.trim() || undefined
    });

    // フォームをリセット
    setJoyLevel(0);
    setRelationship('家族');
    setComment('');
    setIsSubmitted(true);

    // 3秒後にメッセージを消す
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setJoyLevel(star)}
            className={`text-2xl transition-colors ${
              star <= joyLevel ? 'text-yellow-400' : 'text-gray-300'
            } hover:text-yellow-400`}
          >
            ★
          </button>
        ))}
        <span className="ml-3 text-sm text-gray-600">
          {joyLevel > 0 && (
            <span className="text-blue-600 font-medium">
              {joyLevel === 5 && '大変喜ばれました！'}
              {joyLevel === 4 && '喜ばれました！'}
              {joyLevel === 3 && '普通でした'}
              {joyLevel === 2 && 'あまり喜ばれませんでした'}
              {joyLevel === 1 && '喜ばれませんでした'}
            </span>
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      {isSubmitted && (
        <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded">
          レビューを投稿しました！ありがとうございます。
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 喜び度 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            この商品をもらって、どのくらい喜びましたか？
          </label>
          {renderStars()}
        </div>

        {/* 関係性 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            どんな関係の人からもらいましたか？
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['恋人', '家族', '友人', '職場の同僚'] as const).map((rel) => (
              <label key={rel} className="flex items-center">
                <input
                  type="radio"
                  name="relationship"
                  value={rel}
                  checked={relationship === rel}
                  onChange={() => setRelationship(rel)}
                  className="mr-2 text-blue-600"
                />
                <span className="text-sm text-gray-700">{rel}</span>
              </label>
            ))}
          </div>
        </div>

        {/* コメント */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            コメント（任意）
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="もらった時の気持ちや、どんなシーンで贈られたかなど、自由に書いてください"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            maxLength={500}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {comment.length}/500文字
          </div>
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={joyLevel === 0}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          体験を投稿する
        </button>
      </form>
    </div>
  );
}
