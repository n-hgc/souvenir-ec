import Link from 'next/link';
import ImageGallery from './ImageGallery';
import ReviewSection from '../../components/ReviewSection';
import ProductRatingClient from '../../components/ProductRatingClient';
import ProductCardRating from '../../components/ProductCardRating';
import { getProductById, getRelatedProducts } from '../../../data/products';

// 静的パラメータを生成
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = getProductById(productId);

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

  const relatedProducts = getRelatedProducts(product.region);

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
            <ImageGallery images={product.images || [product.image]} productName={product.name} />
          </div>

          {/* 右側：商品情報 */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-blue-600 mb-4">¥{product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mb-4">{product.prefecture}</p>
              
              {/* 商品評価 */}
              <ProductRatingClient 
                reviews={product.reviews} 
              />
              
              {/* 購入ボタン */}
              {product.isAffiliate ? (
                <Link 
                  href="#" 
                  className="block w-full bg-orange-600 text-white text-center py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium mb-6"
                >
                  楽天市場で購入
                </Link>
              ) : (
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-6">
                  カートへ追加
                </button>
              )}
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
                    <p className="text-sm font-semibold text-gray-900 mb-2">¥{relatedProduct.price.toLocaleString()}</p>
                    
                    {/* レビュー表示 */}
                    <ProductCardRating reviews={relatedProduct.reviews} compact={true} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* レビューセクション */}
        <div id="reviews-section">
          <ReviewSection productId={product.id} productName={product.name} />
        </div>
      </div>
    </main>
  );
}
