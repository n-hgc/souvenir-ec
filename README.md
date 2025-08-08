# 日本の土産品特化ECサイト

全国各地の厳選されたお土産を、AIがあなたに最適な形で提案するECプラットフォームです。

## 特徴

- 🎯 **AIによる最適提案**: 自然な対話形式でお土産を相談
- 🗺️ **地域別商品**: 都道府県・地域ごとに商品を分類
- 🛒 **ハイブリッドEC**: 自社商品とアフィリエイト商品の併売
- 📝 **レビュー機能**: ユーザーによる商品レビュー
- 🎨 **和風デザイン**: 日本の伝統を意識したUI/UX

## 技術スタック

- **フロントエンド**: Next.js 15.4.6
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **ホスティング**: GitHub Pages

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/your-username/souvenir-ec.git
cd souvenir-ec
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:3000` にアクセス

## ビルドとデプロイ

### ローカルビルド
```bash
npm run build
```

### GitHub Pagesへのデプロイ

1. GitHubリポジトリの設定で「Pages」を有効化
2. Sourceを「GitHub Actions」に設定
3. mainブランチにプッシュすると自動デプロイ

```bash
git add .
git commit -m "Update for GitHub Pages deployment"
git push origin main
```

## プロジェクト構造

```
souvenir-ec/
├── docs/                    # プロジェクトドキュメント
│   ├── README.md           # プロジェクト概要
│   ├── 要件定義.md         # 機能要件
│   ├── 画面設計.md         # UI/UX設計
│   ├── デザインポリシー.md # デザインガイドライン
│   ├── 開発ロードマップ.md # 開発計画
│   └── 変更ログ.md         # 変更履歴
├── src/
│   └── app/                # Next.js App Router
│       ├── page.tsx        # ホームページ
│       ├── layout.tsx      # レイアウト
│       └── globals.css     # グローバルスタイル
├── public/                 # 静的ファイル
├── .github/workflows/      # GitHub Actions
└── package.json           # 依存関係
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 貢献

プルリクエストやイシューの報告を歓迎します。大きな変更を行う場合は、まずイシューで議論してください。

## 連絡先

プロジェクトに関する質問や提案がある場合は、イシューを作成してください。
