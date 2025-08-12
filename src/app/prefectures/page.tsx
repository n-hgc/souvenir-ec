import PrefectureFilter from '../components/PrefectureFilter';

export default function PrefecturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">都道府県リスト確認</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">47都道府県フィルター</h2>
          <PrefectureFilter />
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">都道府県一覧（47件）</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
              '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
              '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
              '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
              '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
              '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
              '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
            ].map((prefecture, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg text-center">
                <span className="text-sm font-medium text-gray-700">{prefecture}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

