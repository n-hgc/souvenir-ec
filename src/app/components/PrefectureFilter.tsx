'use client';

import { useState } from 'react';

// 47都道府県データ
const PREFECTURES = [
  { id: 1, name: '北海道', region: '北海道・東北' },
  { id: 2, name: '青森県', region: '北海道・東北' },
  { id: 3, name: '岩手県', region: '北海道・東北' },
  { id: 4, name: '宮城県', region: '北海道・東北' },
  { id: 5, name: '秋田県', region: '北海道・東北' },
  { id: 6, name: '山形県', region: '北海道・東北' },
  { id: 7, name: '福島県', region: '北海道・東北' },
  { id: 8, name: '茨城県', region: '関東' },
  { id: 9, name: '栃木県', region: '関東' },
  { id: 10, name: '群馬県', region: '関東' },
  { id: 11, name: '埼玉県', region: '関東' },
  { id: 12, name: '千葉県', region: '関東' },
  { id: 13, name: '東京都', region: '関東' },
  { id: 14, name: '神奈川県', region: '関東' },
  { id: 15, name: '新潟県', region: '中部' },
  { id: 16, name: '富山県', region: '中部' },
  { id: 17, name: '石川県', region: '中部' },
  { id: 18, name: '福井県', region: '中部' },
  { id: 19, name: '山梨県', region: '中部' },
  { id: 20, name: '長野県', region: '中部' },
  { id: 21, name: '岐阜県', region: '中部' },
  { id: 22, name: '静岡県', region: '中部' },
  { id: 23, name: '愛知県', region: '中部' },
  { id: 24, name: '三重県', region: '近畿' },
  { id: 25, name: '滋賀県', region: '近畿' },
  { id: 26, name: '京都府', region: '近畿' },
  { id: 27, name: '大阪府', region: '近畿' },
  { id: 28, name: '兵庫県', region: '近畿' },
  { id: 29, name: '奈良県', region: '近畿' },
  { id: 30, name: '和歌山県', region: '近畿' },
  { id: 31, name: '鳥取県', region: '中国' },
  { id: 32, name: '島根県', region: '中国' },
  { id: 33, name: '岡山県', region: '中国' },
  { id: 34, name: '広島県', region: '中国' },
  { id: 35, name: '山口県', region: '中国' },
  { id: 36, name: '徳島県', region: '四国' },
  { id: 37, name: '香川県', region: '四国' },
  { id: 38, name: '愛媛県', region: '四国' },
  { id: 39, name: '高知県', region: '四国' },
  { id: 40, name: '福岡県', region: '九州・沖縄' },
  { id: 41, name: '佐賀県', region: '九州・沖縄' },
  { id: 42, name: '長崎県', region: '九州・沖縄' },
  { id: 43, name: '熊本県', region: '九州・沖縄' },
  { id: 44, name: '大分県', region: '九州・沖縄' },
  { id: 45, name: '宮崎県', region: '九州・沖縄' },
  { id: 46, name: '鹿児島県', region: '九州・沖縄' },
  { id: 47, name: '沖縄県', region: '九州・沖縄' },
];

interface PrefectureFilterProps {
  onPrefectureSelect?: (prefecture: string) => void;
}

export default function PrefectureFilter({ onPrefectureSelect }: PrefectureFilterProps) {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('');

  const handlePrefectureClick = (prefectureName: string) => {
    setSelectedPrefecture(prefectureName);
    onPrefectureSelect?.(prefectureName);
  };

  const handleReset = () => {
    setSelectedPrefecture('');
    onPrefectureSelect?.('');
  };

  return (
    <div className="w-full">
      {/* PC用: 横スクロールタグ形式 */}
      <div className="hidden md:block">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {/* すべてのタグ */}
          <button
            onClick={handleReset}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              !selectedPrefecture
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            すべて
          </button>
          
          {/* 47都道府県のタグ */}
          {PREFECTURES.map((prefecture) => (
            <button
              key={prefecture.id}
              onClick={() => handlePrefectureClick(prefecture.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedPrefecture === prefecture.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {prefecture.name}
            </button>
          ))}
        </div>
        
        {/* スクロールインジケーター */}
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-gray-200 rounded-full">
            <div className="w-8 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>

      {/* スマホ用: サイドバー形式 */}
      <div className="md:hidden">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">都道府県で絞り込み</h3>
          
          {/* すべてのボタン */}
          <button
            onClick={handleReset}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors mb-2 ${
              !selectedPrefecture
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              {!selectedPrefecture && (
                <div className="w-1 h-4 bg-white rounded-full mr-3"></div>
              )}
              <span className="flex-1">すべての都道府県</span>
            </div>
          </button>

          {/* 地域別にグループ化 */}
          {Object.entries(
            PREFECTURES.reduce((acc, prefecture) => {
              if (!acc[prefecture.region]) {
                acc[prefecture.region] = [];
              }
              acc[prefecture.region].push(prefecture);
              return acc;
            }, {} as Record<string, typeof PREFECTURES>)
          ).map(([region, prefectures]) => (
            <div key={region} className="mb-4">
              <h4 className="text-xs font-medium text-gray-500 mb-2 px-3">
                {region}
              </h4>
              <div className="space-y-1">
                {prefectures.map((prefecture) => (
                  <button
                    key={prefecture.id}
                    onClick={() => handlePrefectureClick(prefecture.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedPrefecture === prefecture.name
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      {selectedPrefecture === prefecture.name && (
                        <div className="w-1 h-4 bg-white rounded-full mr-3"></div>
                      )}
                      <span className="flex-1">{prefecture.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
