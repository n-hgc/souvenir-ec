'use client';

import { useState } from 'react';
import Link from 'next/link';
import PrefectureFilter from '../components/PrefectureFilter';
import ProductCardRating from '../components/ProductCardRating';



// 商品データ（47都道府県対応）
const PRODUCTS = [
  {
    id: 1,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    image: "/dummy/product1.jpg",
    isAffiliate: false,
    description: "北海道を代表するお菓子",
    reviews: [
      { id: '1', productId: 1, joyLevel: 5, relationship: '家族' as const, comment: '母がとても喜んでくれました！', createdAt: '2024-01-15', userName: '田中さん' },
      { id: '2', productId: 1, joyLevel: 4, relationship: '友人' as const, comment: '友達の誕生日に贈りました。', createdAt: '2024-01-10', userName: '佐藤さん' },
      { id: '3', productId: 1, joyLevel: 5, relationship: '恋人' as const, comment: '彼女が大興奮でした！', createdAt: '2024-01-08', userName: '山田さん' }
    ]
  },
  {
    id: 2,
    name: "東京ばな奈",
    price: 1200,
    prefecture: "東京都",
    image: "/dummy/product2.jpg",
    isAffiliate: true,
    description: "東京のお土産の定番",
    reviews: [
      { id: '4', productId: 2, joyLevel: 4, relationship: '家族' as const, comment: '子供が喜んでいました', createdAt: '2024-01-12', userName: '鈴木さん' },
      { id: '5', productId: 2, joyLevel: 5, relationship: '友人' as const, comment: '東京観光の思い出に', createdAt: '2024-01-09', userName: '高橋さん' }
    ]
  },
  {
    id: 3,
    name: "京都抹茶クッキー",
    price: 1500,
    prefecture: "京都府",
    image: "/dummy/product3.jpg",
    isAffiliate: false,
    description: "京都の抹茶を使用したクッキー",
    reviews: [
      { id: '6', productId: 3, joyLevel: 5, relationship: '職場の同僚' as const, comment: '抹茶好きの同僚が大喜び', createdAt: '2024-01-14', userName: '渡辺さん' },
      { id: '7', productId: 3, joyLevel: 4, relationship: '家族' as const, comment: '上品な味で喜ばれました', createdAt: '2024-01-11', userName: '伊藤さん' }
    ]
  },
  {
    id: 4,
    name: "博多明太子",
    price: 2000,
    prefecture: "福岡県",
    image: "/dummy/product4.jpg",
    isAffiliate: true,
    description: "博多の名物明太子",
    reviews: [
      { id: '8', productId: 4, joyLevel: 3, relationship: '友人' as const, comment: '辛いものが好きな友達に', createdAt: '2024-01-13', userName: '中村さん' },
      { id: '9', productId: 4, joyLevel: 4, relationship: '家族' as const, comment: '父が喜んでいました', createdAt: '2024-01-10', userName: '小林さん' }
    ]
  },
  {
    id: 5,
    name: "仙台牛タン",
    price: 1800,
    prefecture: "宮城県",
    image: "/dummy/product5.jpg",
    isAffiliate: false,
    description: "仙台の名物牛タン",
    reviews: [
      { id: '10', productId: 5, joyLevel: 4, relationship: '家族' as const, comment: '肉好きの家族に好評', createdAt: '2024-01-12', userName: '加藤さん' }
    ]
  },
  {
    id: 6,
    name: "名古屋味噌カツ",
    price: 1600,
    prefecture: "愛知県",
    image: "/dummy/product6.jpg",
    isAffiliate: true,
    description: "名古屋の味噌カツ",
    reviews: [
      { id: '11', productId: 6, joyLevel: 5, relationship: '友人' as const, comment: '名古屋出身の友達が懐かしがっていました', createdAt: '2024-01-15', userName: '山本さん' }
    ]
  },
  {
    id: 7,
    name: "広島お好み焼き",
    price: 1400,
    prefecture: "広島県",
    image: "/dummy/product7.jpg",
    isAffiliate: false,
    description: "広島の名物お好み焼き",
    reviews: [
      { id: '12', productId: 7, joyLevel: 4, relationship: '家族' as const, comment: '子供が喜んで食べていました', createdAt: '2024-01-14', userName: '松本さん' }
    ]
  },
  {
    id: 8,
    name: "讃岐うどん",
    price: 1200,
    prefecture: "香川県",
    image: "/dummy/product8.jpg",
    isAffiliate: true,
    description: "香川の讃岐うどん",
    reviews: [
      { id: '13', productId: 8, joyLevel: 3, relationship: '職場の同僚' as const, comment: 'うどん好きの同僚に', createdAt: '2024-01-13', userName: '井上さん' }
    ]
  },
  {
    id: 9,
    name: "函館ラーメン",
    price: 1500,
    prefecture: "北海道",
    image: "/dummy/product9.jpg",
    isAffiliate: false,
    description: "函館の名物ラーメン",
    reviews: [
      { id: '14', productId: 9, joyLevel: 4, relationship: '友人' as const, comment: 'ラーメン好きの友達に好評', createdAt: '2024-01-12', userName: '田中さん' }
    ]
  },
  {
    id: 10,
    name: "小樽ガラス",
    price: 3000,
    prefecture: "北海道",
    image: "/dummy/product10.jpg",
    isAffiliate: true,
    description: "小樽のガラス工芸品",
    reviews: [
      { id: '15', productId: 10, joyLevel: 5, relationship: '恋人' as const, comment: '美しいガラスに感動していました', createdAt: '2024-01-15', userName: '佐々木さん' },
      { id: '16', productId: 10, joyLevel: 4, relationship: '家族' as const, comment: '母がとても喜んでいました', createdAt: '2024-01-11', userName: '山口さん' }
    ]
  },
  {
    id: 11,
    name: "横浜中華街点心",
    price: 2500,
    prefecture: "神奈川県",
    image: "/dummy/product11.jpg",
    isAffiliate: true,
    description: "横浜中華街の点心",
    reviews: [
      { id: '17', productId: 11, joyLevel: 4, relationship: '友人' as const, comment: '中華好きの友達に好評', createdAt: '2024-01-14', userName: '森さん' }
    ]
  },
  {
    id: 12,
    name: "鎌倉和菓子",
    price: 1200,
    prefecture: "神奈川県",
    image: "/dummy/product12.jpg",
    isAffiliate: false,
    description: "鎌倉の伝統和菓子",
    reviews: [
      { id: '18', productId: 12, joyLevel: 5, relationship: '家族' as const, comment: '和菓子好きの母が大喜び', createdAt: '2024-01-13', userName: '林さん' }
    ]
  },
  {
    id: 13,
    name: "青森りんご",
    price: 1000,
    prefecture: "青森県",
    image: "/dummy/product13.jpg",
    isAffiliate: false,
    description: "青森の名物りんご",
    reviews: [
      { id: '19', productId: 13, joyLevel: 4, relationship: '家族' as const, comment: '新鮮なりんごで家族が喜んでいました', createdAt: '2024-01-12', userName: '斎藤さん' }
    ]
  },
  {
    id: 14,
    name: "岩手南部鉄器",
    price: 5000,
    prefecture: "岩手県",
    image: "/dummy/product14.jpg",
    isAffiliate: true,
    description: "岩手の伝統工芸品",
    reviews: [
      { id: '20', productId: 14, joyLevel: 5, relationship: '職場の同僚' as const, comment: '茶道好きの同僚が感激していました', createdAt: '2024-01-15', userName: '村上さん' }
    ]
  },
  {
    id: 15,
    name: "秋田きりたんぽ",
    price: 1200,
    prefecture: "秋田県",
    image: "/dummy/product15.jpg",
    isAffiliate: false,
    description: "秋田の郷土料理",
    reviews: [
      { id: '21', productId: 15, joyLevel: 3, relationship: '友人' as const, comment: '郷土料理に興味がある友達に', createdAt: '2024-01-14', userName: '清水さん' }
    ]
  },
  {
    id: 16,
    name: "山形さくらんぼ",
    price: 2000,
    prefecture: "山形県",
    image: "/dummy/product16.jpg",
    isAffiliate: true,
    description: "山形の特産品",
    reviews: [
      { id: '22', productId: 16, joyLevel: 4, relationship: '家族' as const, comment: '甘いさくらんぼで家族が喜んでいました', createdAt: '2024-01-13', userName: '高田さん' }
    ]
  },
  {
    id: 17,
    name: "福島桃",
    price: 1500,
    prefecture: "福島県",
    image: "/dummy/product17.jpg",
    isAffiliate: false,
    description: "福島の名物桃",
    reviews: [
      { id: '23', productId: 17, joyLevel: 4, relationship: '家族' as const, comment: '甘い桃で家族が喜んでいました', createdAt: '2024-01-12', userName: '岡田さん' }
    ]
  },
  {
    id: 18,
    name: "茨城納豆",
    price: 800,
    prefecture: "茨城県",
    image: "/dummy/product18.jpg",
    isAffiliate: true,
    description: "茨城の特産品",
    reviews: [
      { id: '24', productId: 18, joyLevel: 3, relationship: '職場の同僚' as const, comment: '納豆好きの同僚に', createdAt: '2024-01-11', userName: '長谷川さん' }
    ]
  },
  {
    id: 19,
    name: "栃木いちご",
    price: 1200,
    prefecture: "栃木県",
    image: "/dummy/product19.jpg",
    isAffiliate: false,
    description: "栃木の名物いちご",
    reviews: [
      { id: '25', productId: 19, joyLevel: 5, relationship: '恋人' as const, comment: '甘いいちごで彼女が大喜び', createdAt: '2024-01-15', userName: '石川さん' }
    ]
  },
  {
    id: 20,
    name: "群馬こんにゃく",
    price: 600,
    prefecture: "群馬県",
    image: "/dummy/product20.jpg",
    isAffiliate: true,
    description: "群馬の特産品",
    reviews: [
      { id: '26', productId: 20, joyLevel: 3, relationship: '家族' as const, comment: '健康志向の家族に', createdAt: '2024-01-14', userName: '近藤さん' }
    ]
  }
];



export default function ProductsPage() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('');

  // フィルタリングされた商品を取得
  const getFilteredProducts = () => {
    if (selectedPrefecture) {
      return PRODUCTS.filter(product => product.prefecture === selectedPrefecture);
    }
    return PRODUCTS;
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
