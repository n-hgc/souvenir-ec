import Image from 'next/image';
import Link from 'next/link';

// ダミーデータ
const RECOMMENDED_PRODUCTS = [
  {
    id: 1,
    name: "東京ばな奈",
    price: 1200,
    prefecture: "東京都",
    image: "/dummy/product1.jpg",
    isAffiliate: false,
  },
  {
    id: 2,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    image: "/dummy/product2.jpg",
    isAffiliate: true,
  },
  {
    id: 3,
    name: "京都抹茶クッキー",
    price: 1500,
    prefecture: "京都府",
    image: "/dummy/product3.jpg",
    isAffiliate: false,
  },
  {
    id: 4,
    name: "博多明太子",
    price: 2000,
    prefecture: "福岡県",
    image: "/dummy/product4.jpg",
    isAffiliate: true,
  },
];

const ARTICLES = [
  {
    id: 1,
    title: "人気の関東土産ランキング2024",
    image: "/dummy/article1.jpg",
    excerpt: "東京、神奈川、千葉など関東の人気土産を紹介！",
  },
  {
    id: 2,
    title: "職場で喜ばれる手土産特集",
    image: "/dummy/article2.jpg",
    excerpt: "同僚や上司へのお土産選びのコツ",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              日本の土産品を
              <span className="text-blue-600">簡単に</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              全国各地の厳選されたお土産を、AIがあなたに最適な形で提案します
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              商品を見る
            </button>
          </div>
        </div>
      </section>

      {/* AI対話セクション */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-6 text-gray-900">AIにお土産を相談する</h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm">
                    例：「熱海旅行のお土産を教えて」「職場の上司への手土産でおすすめは？」「予算3000円で家族へのお土産を探したい」
                  </p>
                </div>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="お土産について何でも聞いてください..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  相談する
                </button>
              </form>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                自然な言葉でお土産の相談ができます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ商品 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">おすすめの商品</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {RECOMMENDED_PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative h-32 sm:h-48 bg-gray-100 rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-xs sm:text-sm text-center px-2">{product.name}</span>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">{product.prefecture}</p>
                  <h3 className="font-medium mb-2 text-gray-900 text-sm sm:text-base">{product.name}</h3>
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
          <div className="text-center mt-8">
            <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium">
              もっと見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">土産にまつわる記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.id}
                href="#"
                className="flex gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="relative w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs text-center">{article.title}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}