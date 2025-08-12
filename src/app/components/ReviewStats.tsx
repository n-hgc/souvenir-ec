'use client';

import { Review } from './ReviewSection';

interface ReviewStatsProps {
  reviews: Review[];
}

export default function ReviewStats({ reviews }: ReviewStatsProps) {
  if (reviews.length === 0) {
    return null;
  }

  // 統計計算
  const totalReviews = reviews.length;
  const averageJoy = reviews.reduce((sum, review) => sum + review.joyLevel, 0) / totalReviews;
  const joyDistribution = [5, 4, 3, 2, 1].map(level => ({
    level,
    count: reviews.filter(review => review.joyLevel === level).length,
    percentage: (reviews.filter(review => review.joyLevel === level).length / totalReviews) * 100
  }));

  const relationshipStats = reviews.reduce((acc, review) => {
    acc[review.relationship] = (acc[review.relationship] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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

  const getJoyLevelText = (level: number) => {
    switch (level) {
      case 5:
        return '大変喜ばれる';
      case 4:
        return '喜ばれる';
      case 3:
        return '普通';
      case 2:
        return 'あまり喜ばれない';
      case 1:
        return '喜ばれない';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">体験談統計</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 総合評価 */}
        <div className="text-center">
          <div className="mb-2">
            {renderStars(Math.round(averageJoy))}
          </div>
          <p className="text-2xl font-bold text-blue-600">{averageJoy.toFixed(1)}</p>
          <p className="text-sm text-gray-600">平均喜び度</p>
          <p className="text-xs text-gray-500 mt-1">
            {totalReviews}件の体験談
          </p>
        </div>

        {/* 喜び度分布 */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">喜び度の分布</h4>
          <div className="space-y-2">
            {joyDistribution.map(({ level, count, percentage }) => (
              <div key={level} className="flex items-center gap-2">
                <div className="flex items-center gap-1 min-w-[60px]">
                  <span className="text-sm text-gray-600">{level}</span>
                  <span className="text-yellow-400">★</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 min-w-[40px] text-right">
                  {count}件
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 関係性別統計 */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">関係性別体験談数</h4>
          <div className="space-y-2">
            {Object.entries(relationshipStats)
              .sort(([, a], [, b]) => b - a)
              .map(([relationship, count]) => (
                <div key={relationship} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{relationship}</span>
                  <span className="text-sm font-medium text-gray-900">{count}件</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* おすすめ度 */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <h4 className="text-sm font-medium text-gray-700 mb-2">この商品のおすすめ度</h4>
          <div className="flex items-center justify-center gap-2">
            {averageJoy >= 4.5 && (
              <span className="text-lg">🎉</span>
            )}
            <span className={`text-lg font-bold ${
              averageJoy >= 4.5 ? 'text-green-600' :
              averageJoy >= 4.0 ? 'text-blue-600' :
              averageJoy >= 3.5 ? 'text-yellow-600' :
              'text-gray-600'
            }`}>
              {averageJoy >= 4.5 ? '大変おすすめ！' :
               averageJoy >= 4.0 ? 'おすすめ！' :
               averageJoy >= 3.5 ? 'まあまあ' :
               '要検討'}
            </span>
            {averageJoy >= 4.5 && (
              <span className="text-lg">🎉</span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {averageJoy >= 4.0 ? '多くの人が喜んでくれる商品です' :
             averageJoy >= 3.0 ? '評価は分かれる商品です' :
             '改善の余地がある商品です'}
          </p>
        </div>
      </div>
    </div>
  );
}
