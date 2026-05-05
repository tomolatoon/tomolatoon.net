# tomolatoon.net

[tomolatoon.net](https://tomolatoon.net) の個人サイトのソースコードです。

## 技術スタック

| カテゴリ               | 採用技術                                                                    |
| ---------------------- | --------------------------------------------------------------------------- |
| フレームワーク         | [Astro](https://astro.build/) v5（静的出力）                                |
| UI コンポーネント      | [Vue](https://vuejs.org/) v3（統合済み、将来利用予定）                      |
| スタイリング           | [UnoCSS](https://unocss.dev/)（presetWind4 + Attributify + Icons）          |
| フォント               | [@fontsource](https://fontsource.org/)（DM Sans・Noto Sans JP）             |
| アイコン               | [Simple Icons](https://simpleicons.org/)（@iconify-json/simple-icons 経由） |
| 言語                   | TypeScript（strict モード）                                                 |
| パッケージマネージャー | pnpm                                                                        |
| ホスティング           | Cloudflare Pages                                                            |

## ディレクトリ構成

```
src/
├── pages/
│   └── index.astro          # トップページ
├── layouts/
│   └── Base.astro           # HTML 骨格・メタタグ・フォント読み込み
├── components/
│   ├── GeoBg.astro          # 幾何学 SVG 背景
│   ├── Avatar.astro         # アバター
│   └── SocialLinks.astro   # SNS リンク一覧
└── constants/
    └── site.ts              # サイト名・説明・URL などの定数
```

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動（http://localhost:4321）
pnpm dev
```

## コマンド一覧

| コマンド            | 内容                                   |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | 開発サーバー起動                       |
| `pnpm build`        | 静的ファイルのビルド（`dist/` に出力） |
| `pnpm preview`      | ビルド結果のローカルプレビュー         |
| `pnpm lint`         | ESLint によるコードチェック            |
| `pnpm lint:fix`     | ESLint の自動修正                      |
| `pnpm format`       | Prettier によるコード整形              |
| `pnpm format:check` | Prettier の整形チェック（CI 向け）     |

## スタイリングについて

UnoCSS の **Attributify モード**を採用しています。クラス属性の代わりに HTML 属性として直接ユーティリティを指定できます。

```astro
<!-- Attributify モードの例 -->
<div flex items-center gap="4" text="dark" bg="page-bg">...</div>
```

### カスタムカラー

`uno.config.ts` でプロジェクト専用のカラーパレットを定義しています。

| 変数名    | 用途                           |
| --------- | ------------------------------ |
| `cyan`    | アクセントカラー（水色）       |
| `pink`    | アクセントカラー（ピンク）     |
| `lav`     | アクセントカラー（ラベンダー） |
| `page-bg` | ページ背景色                   |
| `dark`    | 見出しテキスト                 |
| `mid`     | 本文テキスト                   |
| `muted`   | 補足テキスト                   |

> **注意**: `Base.astro` にも同じ値が CSS 変数（`--cyan` など）として定義されています。SVG 属性から直接参照するために必要なため、`uno.config.ts` の値と二重管理になっています。

## パスエイリアス

`@/` で `src/` 以下を参照できます。

```ts
import { SITE_TITLE } from '@/constants/site';
```

## Cloudflare Pages へのデプロイ

`main` ブランチへのプッシュで自動デプロイされます（Cloudflare Pages の Git 統合）。

| 設定項目           | 値           |
| ------------------ | ------------ |
| ビルドコマンド     | `pnpm build` |
| 出力ディレクトリ   | `dist`       |
| Node.js バージョン | 18 以上      |
