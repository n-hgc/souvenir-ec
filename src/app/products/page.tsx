'use client';

import { useState } from 'react';
import Link from 'next/link';
import PrefectureFilter from '../components/PrefectureFilter';
import ProductCardRating from '../components/ProductCardRating';
import { ALL_PRODUCTS } from '../../data/products';

export default function ProductsPage() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('');

  // フィルタリングされた商品を取得
  const getFilteredProducts = () => {
    if (selectedPrefecture) {
      return ALL_PRODUCTS.filter(product => product.prefecture === selectedPrefecture);
    }
    return ALL_PRODUCTS;
  };

  const filteredProducts = getFilteredProducts();

  const handlePrefectureSelect = (prefecture: string) => {
    setSelectedPrefecture(prefecture);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダー */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">商品一覧</h1>
          <p className="text-gray-600">全国各地の厳選されたお土産をご覧ください</p>
        </div>
      </section>

      {/* 都道府県フィルター */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">都道府県で絞り込み</h2>
          <PrefectureFilter onPrefectureSelect={handlePrefectureSelect} />
        </div>
      </section>

      {/* 商品一覧 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedPrefecture 
                ? selectedPrefecture + 'の商品'
                : 'すべての商品'
              }
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
                <Link 
                  key={product.id} 
                  href={`/products/${product.id}`}
                  className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-32 sm:h-48 bg-gray-100 rounded-t-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs sm:text-sm text-center px-2">{product.name}</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{product.prefecture}</p>
                    <h3 className="font-medium mb-2 text-gray-900 text-sm sm:text-base">{product.name}</h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    
                    {/* レビュー表示 */}
                    <div className="mb-2">
                      <ProductCardRating reviews={product.reviews || []} />
                    </div>
                    
                    <p className="text-base sm:text-lg font-semibold text-gray-900 mb-3">¥{product.price.toLocaleString()}</p>
                    {product.isAffiliate ? (
                      <span className="block w-full text-center text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                        詳細を見る →
                      </span>
                    ) : (
                      <span className="block w-full text-center bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                        カートに入れる
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
