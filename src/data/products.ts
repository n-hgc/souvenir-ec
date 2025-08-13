// 商品データの型定義
export interface Product {
  id: number;
  name: string;
  price: number;
  prefecture: string;
  region: string;
  image: string;
  images?: string[]; // 商品詳細ページ用の複数画像
  isAffiliate: boolean;
  description: string;
  expiryDate: string;
  weight: string;
  allergens: string[];
  reviews: Review[];
}

// レビューデータの型定義
export interface Review {
  id: string;
  productId: number;
  joyLevel: number; // 1-5
  relationship: '恋人' | '家族' | '友人' | '職場の同僚';
  comment?: string;
  createdAt: string;
  userName: string;
}

// 簡略化されたレビューデータ（商品カード用）
export interface SimpleReview {
  joyLevel: number;
  relationship: string;
}

// 商品詳細データ
export const PRODUCT_DETAILS: Record<number, Product> = {
  1: {
    id: 1,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    region: "hokkaido",
    image: "/dummy/product1.jpg",
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
    reviews: [
      {
        id: '1',
        productId: 1,
        joyLevel: 5,
        relationship: '家族',
        comment: '母がとても喜んでくれました！北海道旅行の思い出と一緒に贈ったので、特別感があって良かったです。',
        createdAt: '2024-01-15',
        userName: '田中さん'
      },
      {
        id: '2',
        productId: 1,
        joyLevel: 4,
        relationship: '友人',
        comment: '友達の誕生日に贈りました。白い恋人は定番だけど、やっぱり喜ばれますね。',
        createdAt: '2024-01-10',
        userName: '佐藤さん'
      },
      {
        id: '3',
        productId: 1,
        joyLevel: 5,
        relationship: '恋人',
        comment: '彼女が大興奮でした！北海道の思い出と一緒に贈ったので、特別な意味があったみたいです。',
        createdAt: '2024-01-08',
        userName: '山田さん'
      }
    ]
  },
  2: {
    id: 2,
    name: "東京ばな奈",
    price: 1200,
    prefecture: "東京都",
    region: "kanto",
    image: "/dummy/product2.jpg",
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
    reviews: [
      {
        id: '4',
        productId: 2,
        joyLevel: 4,
        relationship: '家族',
        comment: '子供が喜んでいました',
        createdAt: '2024-01-12',
        userName: '鈴木さん'
      },
      {
        id: '5',
        productId: 2,
        joyLevel: 5,
        relationship: '友人',
        comment: '東京観光の思い出に',
        createdAt: '2024-01-09',
        userName: '高橋さん'
      }
    ]
  },
  3: {
    id: 3,
    name: "京都抹茶クッキー",
    price: 1500,
    prefecture: "京都府",
    region: "kansai",
    image: "/dummy/product3.jpg",
    description: "京都の抹茶を使用した上品なクッキー。宇治の抹茶の風味を活かした、京都らしいお土産です。伝統的な製法で作られ、抹茶の香りと甘さのバランスが絶妙です。",
    images: [
      "/dummy/product3-1.jpg",
      "/dummy/product3-2.jpg"
    ],
    expiryDate: "製造日から4ヶ月",
    weight: "10枚入り",
    allergens: ["小麦", "乳"],
    isAffiliate: false,
    reviews: [
      {
        id: '6',
        productId: 3,
        joyLevel: 5,
        relationship: '職場の同僚',
        comment: '抹茶好きの同僚が大喜び',
        createdAt: '2024-01-14',
        userName: '渡辺さん'
      },
      {
        id: '7',
        productId: 3,
        joyLevel: 4,
        relationship: '家族',
        comment: '上品な味で喜ばれました',
        createdAt: '2024-01-11',
        userName: '伊藤さん'
      }
    ]
  },
  4: {
    id: 4,
    name: "博多明太子",
    price: 2000,
    prefecture: "福岡県",
    region: "kyushu",
    image: "/dummy/product4.jpg",
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
    reviews: [
      {
        id: '8',
        productId: 4,
        joyLevel: 3,
        relationship: '友人',
        comment: '辛いものが好きな友達に',
        createdAt: '2024-01-13',
        userName: '中村さん'
      },
      {
        id: '9',
        productId: 4,
        joyLevel: 4,
        relationship: '家族',
        comment: '父が喜んでいました',
        createdAt: '2024-01-10',
        userName: '小林さん'
      }
    ]
  }
};

// トップページ用のおすすめ商品（簡略化されたレビューデータ）
export const RECOMMENDED_PRODUCTS = [
  {
    id: 1,
    name: "東京ばな奈",
    price: 1200,
    prefecture: "東京都",
    image: "/dummy/product1.jpg",
    isAffiliate: false,
    reviews: [
      { joyLevel: 5, relationship: '家族' },
      { joyLevel: 4, relationship: '友人' },
      { joyLevel: 5, relationship: '恋人' }
    ]
  },
  {
    id: 2,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    image: "/dummy/product2.jpg",
    isAffiliate: true,
    reviews: [
      { joyLevel: 5, relationship: '家族' },
      { joyLevel: 4, relationship: '友人' },
      { joyLevel: 5, relationship: '恋人' }
    ]
  },
  {
    id: 3,
    name: "京都抹茶クッキー",
    price: 1500,
    prefecture: "京都府",
    image: "/dummy/product3.jpg",
    isAffiliate: false,
    reviews: [
      { joyLevel: 4, relationship: '家族' },
      { joyLevel: 3, relationship: '職場の同僚' },
      { joyLevel: 5, relationship: '友人' }
    ]
  },
  {
    id: 4,
    name: "博多明太子",
    price: 2000,
    prefecture: "福岡県",
    image: "/dummy/product4.jpg",
    isAffiliate: true,
    reviews: [
      { joyLevel: 4, relationship: '家族' },
      { joyLevel: 5, relationship: '友人' },
      { joyLevel: 3, relationship: '職場の同僚' }
    ]
  },
];

// 同一地域の他商品
export const RELATED_PRODUCTS = {
  hokkaido: [
    { id: 5, name: "札幌ラーメン", price: 1800, image: "/dummy/related1.jpg", reviews: [{ joyLevel: 4, relationship: '家族' }, { joyLevel: 5, relationship: '友人' }] },
    { id: 6, name: "北海道牛乳", price: 500, image: "/dummy/related2.jpg", reviews: [{ joyLevel: 3, relationship: '家族' }, { joyLevel: 4, relationship: '職場の同僚' }] },
    { id: 7, name: "小樽ガラス", price: 3000, image: "/dummy/related3.jpg", reviews: [{ joyLevel: 5, relationship: '恋人' }, { joyLevel: 4, relationship: '友人' }] },
  ],
  kanto: [
    { id: 8, name: "横浜中華街点心", price: 2500, image: "/dummy/related4.jpg", reviews: [{ joyLevel: 4, relationship: '家族' }, { joyLevel: 5, relationship: '友人' }] },
    { id: 9, name: "鎌倉和菓子", price: 1200, image: "/dummy/related5.jpg", reviews: [{ joyLevel: 4, relationship: '家族' }, { joyLevel: 3, relationship: '職場の同僚' }] },
    { id: 10, name: "箱根温泉饅頭", price: 800, image: "/dummy/related6.jpg", reviews: [{ joyLevel: 3, relationship: '家族' }, { joyLevel: 4, relationship: '友人' }] },
  ],
  kansai: [
    { id: 11, name: "大阪たこ焼き", price: 1500, image: "/dummy/related7.jpg", reviews: [{ joyLevel: 5, relationship: '家族' }, { joyLevel: 4, relationship: '友人' }] },
    { id: 12, name: "神戸ビーフ", price: 5000, image: "/dummy/related8.jpg", reviews: [{ joyLevel: 5, relationship: '恋人' }, { joyLevel: 5, relationship: '家族' }] },
    { id: 13, name: "奈良鹿せんべい", price: 600, image: "/dummy/related9.jpg", reviews: [{ joyLevel: 3, relationship: '家族' }, { joyLevel: 4, relationship: '友人' }] },
  ],
  kyushu: [
    { id: 14, name: "長崎カステラ", price: 1800, image: "/dummy/related10.jpg", reviews: [{ joyLevel: 4, relationship: '家族' }, { joyLevel: 4, relationship: '友人' }] },
    { id: 15, name: "熊本いきなり団子", price: 900, image: "/dummy/related11.jpg", reviews: [{ joyLevel: 4, relationship: '家族' }, { joyLevel: 3, relationship: '職場の同僚' }] },
    { id: 16, name: "宮崎マンゴー", price: 4000, image: "/dummy/related12.jpg", reviews: [{ joyLevel: 5, relationship: '恋人' }, { joyLevel: 5, relationship: '家族' }] },
  ]
};

// 商品一覧ページ用の全商品データ
export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "白い恋人",
    price: 800,
    prefecture: "北海道",
    region: "hokkaido",
    image: "/dummy/product1.jpg",
    isAffiliate: false,
    description: "北海道を代表するお菓子",
    expiryDate: "製造日から6ヶ月",
    weight: "12枚入り",
    allergens: ["小麦", "乳", "卵"],
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
    region: "kanto",
    image: "/dummy/product2.jpg",
    isAffiliate: true,
    description: "東京のお土産の定番",
    expiryDate: "製造日から3ヶ月",
    weight: "8個入り",
    allergens: ["小麦", "乳", "卵"],
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
    region: "kansai",
    image: "/dummy/product3.jpg",
    isAffiliate: false,
    description: "京都の抹茶を使用したクッキー",
    expiryDate: "製造日から4ヶ月",
    weight: "10枚入り",
    allergens: ["小麦", "乳"],
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
    region: "kyushu",
    image: "/dummy/product4.jpg",
    isAffiliate: true,
    description: "博多の名物明太子",
    expiryDate: "製造日から2週間（冷蔵）",
    weight: "100g",
    allergens: ["魚卵"],
    reviews: [
      { id: '8', productId: 4, joyLevel: 3, relationship: '友人' as const, comment: '辛いものが好きな友達に', createdAt: '2024-01-13', userName: '中村さん' },
      { id: '9', productId: 4, joyLevel: 4, relationship: '家族' as const, comment: '父が喜んでいました', createdAt: '2024-01-10', userName: '小林さん' }
    ]
  }
];

// 記事データ
export const ARTICLES = [
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

// ヘルパー関数
export const getProductById = (id: number): Product | undefined => {
  return PRODUCT_DETAILS[id];
};

export const getProductsByPrefecture = (prefecture: string): Product[] => {
  return ALL_PRODUCTS.filter(product => product.prefecture === prefecture);
};

export const getRelatedProducts = (region: string) => {
  return RELATED_PRODUCTS[region as keyof typeof RELATED_PRODUCTS] || [];
};
