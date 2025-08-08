import Link from 'next/link';
import ImageGallery from './ImageGallery';

// 商品詳細データ
const PRODUCT_DETAILS = {
  1: {
    id: 1,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    region: "hokkaido",
    description: "北海道を代表するお菓子。石屋製菓が製造する、白いチョコレートをサンドしたクッキーです。北海道の厳しい冬の風物詩として、多くの観光客に愛されています。",
    images: [
      "/dummy/product1-1.jpg",
      "/dummy/product1-2.jpg", 
      "/dummy/product1-3.jpg",
      "/dummy/product1-4.jpg"
    ],
    expiryDate: "製造日から6ヶ月",
    weight: "12枚入り",
    allergens: ["小麦", "乳", "卵"],
    isAffiliate: false,
  },
  2: {
    id: 2,
    name: "東京ばな奈",
    price: 1200,
    prefecture: "東京都",
    region: "kanto",
    description: "東京のお土産の定番。東京スカイツリーの限定デザインで、東京観光の思い出にぴったりです。バナナの風味とチョコレートの組み合わせが絶妙です。",
    images: [
      "/dummy/product2-1.jpg",
      "/dummy/product2-2.jpg",
      "/dummy/product2-3.jpg"
    ],
    expiryDate: "製造日から3ヶ月",
    weight: "8個入り",
    allergens: ["小麦", "乳", "卵"],
    isAffiliate: true,
  },
  3: {
    id: 3,
    name: "京都抹茶クッキー",
    price: 1500,
    prefecture: "京都府",
    region: "kansai",
    description: "京都の抹茶を使用した上品なクッキー。宇治の抹茶の風味を活かした、京都らしいお土産です。伝統的な製法で作られ、抹茶の香りと甘さのバランスが絶妙です。",
    images: [
      "/dummy/product3-1.jpg",
      "/dummy/product3-2.jpg"
    ],
    expiryDate: "製造日から4ヶ月",
    weight: "10枚入り",
    allergens: ["小麦", "乳"],
    isAffiliate: false,
  },
  4: {
    id: 4,
    name: "博多明太子",
    price: 2000,
    prefecture: "福岡県",
    region: "kyushu",
    description: "博多の名物明太子。福岡の老舗明太子店が製造する、本格的な明太子です。辛さと旨味のバランスが良く、ご飯のお供に最適です。",
    images: [
      "/dummy/product4-1.jpg",
      "/dummy/product4-2.jpg",
      "/dummy/product4-3.jpg"
    ],
    expiryDate: "製造日から2週間（冷蔵）",
    weight: "100g",
    allergens: ["魚卵"],
    isAffiliate: true,
  }
};

// 同一地域の他商品
const RELATED_PRODUCTS = {
  hokkaido: [
    { id: 5, name: "札幌ラーメン", price: 1800, image: "/dummy/related1.jpg" },
    { id: 6, name: "北海道牛乳", price: 500, image: "/dummy/related2.jpg" },
    { id: 7, name: "小樽ガラス", price: 3000, image: "/dummy/related3.jpg" },
  ],
  kanto: [
    { id: 8, name: "横浜中華街点心", price: 2500, image: "/dummy/related4.jpg" },
    { id: 9, name: "鎌倉和菓子", price: 1200, image: "/dummy/related5.jpg" },
    { id: 10, name: "箱根温泉饅頭", price: 800, image: "/dummy/related6.jpg" },
  ],
  kansai: [
    { id: 11, name: "大阪たこ焼き", price: 1500, image: "/dummy/related7.jpg" },
    { id: 12, name: "神戸ビーフ", price: 5000, image: "/dummy/related8.jpg" },
    { id: 13, name: "奈良鹿せんべい", price: 600, image: "/dummy/related9.jpg" },
  ],
  kyushu: [
    { id: 14, name: "長崎カステラ", price: 1800, image: "/dummy/related10.jpg" },
    { id: 15, name: "熊本いきなり団子", price: 900, image: "/dummy/related11.jpg" },
    { id: 16, name: "宮崎マンゴー", price: 4000, image: "/dummy/related12.jpg" },
  ]
};

// 静的パラメータを生成
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = PRODUCT_DETAILS[productId as keyof typeof PRODUCT_DETAILS];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">商品が見つかりません</h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            商品一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = RELATED_PRODUCTS[product.region as keyof typeof RELATED_PRODUCTS] || [];

  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダー */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/products" className="hover:text-blue-600">商品一覧</Link>
            <span>›</span>
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左側：商品画像 */}
          <div className="space-y-4">
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* 右側：商品情報 */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-blue-600 mb-4">¥{product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mb-4">{product.prefecture}</p>
            </div>

            {/* 商品説明 */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">商品説明</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* 商品詳細情報 */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">商品詳細</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">賞味期限</h3>
                  <p className="text-gray-900">{product.expiryDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">内容量</h3>
                  <p className="text-gray-900">{product.weight}</p>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">特定原材料等（27品目）</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 購入ボタン */}
            <div className="pt-4">
              {product.isAffiliate ? (
                <Link 
                  href="#" 
                  className="block w-full bg-orange-600 text-white text-center py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  楽天市場で購入
                </Link>
              ) : (
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  カートへ追加
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 同一地域の他商品 */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {product.prefecture}の他の商品
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-32 bg-gray-100 rounded-t-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs text-center px-2">{relatedProduct.name}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 text-sm mb-1">{relatedProduct.name}</h3>
                    <p className="text-sm font-semibold text-gray-900">¥{relatedProduct.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
