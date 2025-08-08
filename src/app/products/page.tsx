'use client';

import { useState } from 'react';
import Link from 'next/link';

// 観光地データ
const REGIONS = [
  { id: 'all', name: 'すべて', count: 0 },
  { id: 'hokkaido', name: '北海道', count: 0 },
  { id: 'tohoku', name: '東北', count: 0 },
  { id: 'kanto', name: '関東', count: 0 },
  { id: 'chubu', name: '中部', count: 0 },
  { id: 'kansai', name: '関西', count: 0 },
  { id: 'chugoku', name: '中国', count: 0 },
  { id: 'shikoku', name: '四国', count: 0 },
  { id: 'kyushu', name: '九州', count: 0 },
];

// 商品データ
const PRODUCTS = [
  {
    id: 1,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    region: "hokkaido",
    image: "/dummy/product1.jpg",
    isAffiliate: false,
    description: "北海道を代表するお菓子",
  },
  {
    id: 2,
    name: "東京ばな奈",
    price: 1200,
    prefecture: "東京都",
    region: "kanto",
    image: "/dummy/product2.jpg",
    isAffiliate: true,
    description: "東京のお土産の定番",
  },
  {
    id: 3,
    name: "京都抹茶クッキー",
    price: 1500,
    prefecture: "京都府",
    region: "kansai",
    image: "/dummy/product3.jpg",
    isAffiliate: false,
    description: "京都の抹茶を使用したクッキー",
  },
  {
    id: 4,
    name: "博多明太子",
    price: 2000,
    prefecture: "福岡県",
    region: "kyushu",
    image: "/dummy/product4.jpg",
    isAffiliate: true,
    description: "博多の名物明太子",
  },
  {
    id: 5,
    name: "仙台牛タン",
    price: 1800,
    prefecture: "宮城県",
    region: "tohoku",
    image: "/dummy/product5.jpg",
    isAffiliate: false,
    description: "仙台の名物牛タン",
  },
  {
    id: 6,
    name: "名古屋味噌カツ",
    price: 1600,
    prefecture: "愛知県",
    region: "chubu",
    image: "/dummy/product6.jpg",
    isAffiliate: true,
    description: "名古屋の味噌カツ",
  },
  {
    id: 7,
    name: "広島お好み焼き",
    price: 1400,
    prefecture: "広島県",
    region: "chugoku",
    image: "/dummy/product7.jpg",
    isAffiliate: false,
    description: "広島の名物お好み焼き",
  },
  {
    id: 8,
    name: "讃岐うどん",
    price: 1200,
    prefecture: "香川県",
    region: "shikoku",
    image: "/dummy/product8.jpg",
    isAffiliate: true,
    description: "香川の讃岐うどん",
  },
];

// 地域ごとの商品数を計算
const calculateRegionCounts = () => {
  const counts: Record<string, number> = { all: PRODUCTS.length };
  REGIONS.slice(1).forEach(region => {
    counts[region.id] = PRODUCTS.filter(product => product.region === region.id).length;
  });
  return counts;
};

export default function ProductsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const regionCounts = calculateRegionCounts();

  const filteredProducts = selectedRegion === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.region === selectedRegion);

  const selectedRegionName = REGIONS.find(r => r.id === selectedRegion)?.name || 'すべて';

  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダー */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">商品一覧</h1>
          <p className="text-gray-600">全国各地の厳選されたお土産をご覧ください</p>
        </div>
      </section>

      {/* PC用横スクロールタブ */}
      <section className="hidden lg:block py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">地域で絞り込み</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  selectedRegion === region.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region.name}
                {region.id !== 'all' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({regionCounts[region.id]})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* モバイル用左右分割レイアウト */}
      <div className="lg:hidden flex h-screen">
        {/* 左側：カテゴリリスト */}
        <div className="w-1/4 bg-gray-50 border-r flex-shrink-0">
          <div className="p-3">
            <h2 className="text-base font-semibold mb-3 text-gray-900">地域</h2>
            <div className="space-y-1">
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`w-full text-left px-2 py-2 rounded-lg text-xs transition-colors ${
                    selectedRegion === region.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    {selectedRegion === region.id && (
                      <div className="w-1 h-3 bg-white rounded-full mr-2"></div>
                    )}
                    <span className="flex-1 truncate">{region.name}</span>
                    {region.id !== 'all' && (
                      <span className="text-xs opacity-75 ml-1 flex-shrink-0">
                        {regionCounts[region.id]}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 右側：商品グリッド */}
        <div className="w-3/4 bg-white flex flex-col">
          <div className="p-4 border-b bg-white flex-shrink-0">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-semibold text-gray-900">
                {selectedRegion === 'all' ? 'すべての商品' : REGIONS.find(r => r.id === selectedRegion)?.name + 'の商品'}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredProducts.length}件
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-2">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">該当する商品が見つかりませんでした。</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/products/${product.id}`}
                      className="bg-white border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-36 bg-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400 text-xs text-center px-2">{product.name}</span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-gray-500 mb-1">{product.prefecture}</p>
                        <h3 className="font-medium mb-1 text-gray-900 text-sm">{product.name}</h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        <p className="text-sm font-semibold text-gray-900 mb-2">¥{product.price.toLocaleString()}</p>
                        {product.isAffiliate ? (
                          <span className="block w-full text-center text-blue-600 text-xs font-medium">
                            詳細を見る →
                          </span>
                        ) : (
                          <span className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded text-xs font-medium">
                            カートに入れる
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PC用商品一覧 */}
      <section className="hidden lg:block py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedRegion === 'all' ? 'すべての商品' : REGIONS.find(r => r.id === selectedRegion)?.name + 'の商品'}
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({filteredProducts.length}件)
              </span>
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">該当する商品が見つかりませんでした。</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="relative h-32 sm:h-48 bg-gray-100 rounded-t-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs sm:text-sm text-center px-2">{product.name}</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{product.prefecture}</p>
                    <h3 className="font-medium mb-2 text-gray-900 text-sm sm:text-base">{product.name}</h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 mb-3">¥{product.price.toLocaleString()}</p>
                    {product.isAffiliate ? (
                      <Link href="#" className="block w-full text-center text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                        詳細を見る →
                      </Link>
                    ) : (
                      <button className="w-full bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium">
                        カートに入れる
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
