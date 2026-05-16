# Web ベストプラクティス集

Web で「良いコード」を書くための原則を、**HTML・CSS・JS・パフォーマンス・a11y・セキュリティ・SEO・運用** の観点から横断的にまとめたものです。
このリポジトリ（Astro v5 + Vue + UnoCSS の静的サイト、Cloudflare Pages デプロイ）に適用しやすい原則を優先していますが、Web 一般に通用する内容を網羅的に扱います。

> **読み方のヒント**
> 各項目は **「原則 → 理由 → 実践」** で書かれています。すべて守る必要はなく、**プロジェクトの制約・規模・寿命に応じてトレードオフを選択** してください。
> ベストプラクティスは仕様変更で陳腐化します。迷ったら一次情報（MDN / web.dev / W3C / WHATWG / RFC）に当たるのが最短です。

---

## 目次

1. [基本原則（哲学）](#1-基本原則哲学)
2. [HTML](#2-html)
3. [CSS](#3-css)
4. [JavaScript / TypeScript](#4-javascript--typescript)
5. [アクセシビリティ（a11y）](#5-アクセシビリティa11y)
6. [パフォーマンス](#6-パフォーマンス)
7. [セキュリティ](#7-セキュリティ)
8. [SEO と発見可能性](#8-seo-と発見可能性)
9. [国際化（i18n）と多言語化](#9-国際化i18nと多言語化)
10. [プログレッシブエンハンスメントと耐障害性](#10-プログレッシブエンハンスメントと耐障害性)
11. [プライバシーと法令対応](#11-プライバシーと法令対応)
12. [ビルド・デプロイ・配信](#12-ビルドデプロイ配信)
13. [テストと品質保証](#13-テストと品質保証)
14. [モニタリング・観測性](#14-モニタリング観測性)
15. [開発者体験（DX）とプロセス](#15-開発者体験dxとプロセス)
16. [一次情報・参考資料](#16-一次情報参考資料)

---

## 1. 基本原則（哲学）

### 1.1 Web の Rule of Least Power（最小権力則）

> 「同じ目的を達成できるなら、より宣言的で、より低レベルの技術を選べ」（W3C TAG）

- 静的 HTML で済むなら CSS を、CSS で済むなら JS を使わない。
- JS で済むなら WASM やネイティブ拡張を使わない。
- **理由**: 表現力が低い技術ほど、機械（クローラ、支援技術、検索エンジン、古いブラウザ）が解釈しやすく、寿命が長い。
- 参照: [W3C - The Rule of Least Power](https://www.w3.org/2001/tag/doc/leastPower.html)

### 1.2 プログレッシブエンハンスメント

- まず HTML で動作する基盤を作り、CSS で見栄えを足し、JS で体験を強化する。
- JS が読み込めない・失敗する状況（電車内、低帯域、広告ブロッカー、古い端末）でもコンテンツは読める。
- リンクは `<a href>`、フォームは `<form action>` を **必ず** 持たせる。

### 1.3 コンテンツとプレゼンテーションの分離

- 構造（HTML）、見た目（CSS）、振る舞い（JS）を混ぜない。
- インラインスタイルや `onclick` 属性での JS 記述は避ける（CSP との相性も悪い）。

### 1.4 ユーザー優先・端末多様性の前提

- 想定すべき環境: モバイル / 低速回線 / 高 DPI / ダークモード / 縮小ウィンドウ / スクリーンリーダー / キーボードのみ / `prefers-reduced-motion` / 100% を超える文字サイズ。
- **「自分の環境で動く」は基準にならない。**

### 1.5 後方互換性と Web は壊さない

- URL は契約。可能な限り変えない。変えるなら 301 リダイレクトを残す。
- 「Don't break the Web」は Web 標準コミュニティの原則（[Jeremy Keith - Resilient Web Design](https://resilientwebdesign.com/)）。

### 1.6 シンプルさ・読みやすさ・削除しやすさ

- コードは書かれる時間より **読まれる時間** の方が圧倒的に長い。
- 「動くコード」より「**消しやすいコード**」を目指す（YAGNI、過剰抽象化を避ける）。
- 200〜400 行で 1 ファイル、800 行を超えるなら分割を検討。

---

## 2. HTML

### 2.1 セマンティック HTML を使う

- `<div>` の前に意味のある要素を検討する: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<time>`, `<address>`。
- ボタンには `<button>`、リンクには `<a>` を使い、`<div onclick>` で再発明しない。
  - `<button>` は **Enter/Space で発火、フォーカス可能、role 自動付与** など 20 行以上の追加実装を一発で得られる。
- 見出しは `<h1>`〜`<h6>` を **論理階層通り** に使う（スキップしない）。

### 2.2 文書構造の必須要素

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ページの内容を端的に表すタイトル</title>
    <meta name="description" content="120〜160 文字で要約" />
  </head>
  <body>
    ...
  </body>
</html>
```

- `lang` 属性は **必須**（スクリーンリーダーの読み上げ言語、`hyphens`、IME に影響）。
- `<title>` はページごとにユニークに、検索結果での見え方を意識して 60 文字程度。
- `viewport` の `user-scalable=no` / `maximum-scale=1` は **付けない**（拡大できない = a11y 違反）。

### 2.3 フォーム

- `<label>` を必ず関連付ける（`for` 属性 or 子要素として）。
- `type` 属性を適切に: `email`, `tel`, `url`, `number`, `date`, `search`。
  - モバイルキーボードが切り替わる、ブラウザネイティブ検証が効く。
- `autocomplete` を付ける: `autocomplete="email"`, `autocomplete="current-password"`。
- `required` / `pattern` / `minlength` などネイティブ検証を活用、JS は補助。
- 送信ボタンを必ず置く（Enter キー送信のため）。

### 2.4 画像とメディア

- すべての `<img>` に `alt` を書く。装飾画像は `alt=""`（空文字）。
- 寸法を明示: `<img src="..." width="1200" height="800" />`（CLS 防止）。
- レスポンシブ画像: `srcset` + `sizes` または `<picture>` で `<source>` 切り替え。
- 遅延読み込み: `loading="lazy"` をファーストビュー外に。
- デコード: `decoding="async"` を基本に。
- 動画は `<video>` の `controls`、字幕用に `<track kind="captions">`。

### 2.5 リンクのベストプラクティス

- `target="_blank"` には `rel="noopener noreferrer"` を必ず付ける（`window.opener` 経由のタブナビング攻撃対策）。
  - 現代ブラウザでは `noopener` が暗黙適用されるが、明示する。
- 外部サイトへのリンクは視覚的にも示すと親切。
- `mailto:` / `tel:` リンクも有効。

### 2.6 メタタグ

- **OGP**: `og:title` / `og:description` / `og:image` / `og:url` / `og:type`（SNS シェア時のカード）。
- **Twitter Card**: `twitter:card` を `summary_large_image` などに。
- **正規 URL**: `<link rel="canonical" href="...">` で重複対策。
- **Favicon**: 32x32 PNG + 180x180 (apple-touch-icon) + SVG が現代的。
- **テーマカラー**: `<meta name="theme-color" content="#...">`。

### 2.7 バリデーションと標準準拠

- [W3C Validator](https://validator.w3.org/) や [Nu Html Checker](https://validator.w3.org/nu/) で検証する。
- 不正なネスト（`<p>` 内の `<div>` など）は支援技術の挙動を不安定にする。

---

## 3. CSS

### 3.1 設計手法を選ぶ

選択肢: **BEM / SMACSS / OOCSS / ITCSS / Atomic CSS（Tailwind, UnoCSS）/ CSS-in-JS / CSS Modules**。

- **小〜中規模なら Atomic CSS（UnoCSS など）** が高速で破綻しにくい。
- **大規模 + デザイントークン管理が重要** なら CSS Modules + デザインシステム。
- 重要なのは **「1 つを選んで一貫させる」** こと。

### 3.2 モダン CSS 機能を活用する

- **論理プロパティ**: `margin-inline` / `padding-block` / `inset` で書字方向に依存しないレイアウト（i18n 対応）。
- **`clamp()`** で流動的タイポグラフィ: `font-size: clamp(1rem, 1vw + 0.8rem, 1.25rem);`。
- **`gap`**: Flexbox / Grid の隙間は margin より `gap` で。
- **`aspect-ratio`**: メディアの形状を保つ。
- **`:is()` / `:where()` / `:has()`**: セレクタ重複削減 + 詳細度コントロール。
- **コンテナクエリ** (`@container`): 親コンテナ基準のレスポンシブ（メディアクエリより堅牢）。
- **カスケードレイヤー** (`@layer`): スタイルの優先順位を明示管理。
- **`color-mix()` / `oklch()`**: 知覚的に均一な色操作。

### 3.3 リセット / ノーマライズ

- 既存ブラウザ差を消す。`modern-normalize`、Andy Bell の [Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/) などが定番。
- `* { box-sizing: border-box }` はほぼ必須。

### 3.4 レスポンシブデザイン

- **モバイルファースト**: `min-width` メディアクエリで段階的に上げる。
- 固定幅ではなく **流動的単位**（`%`, `rem`, `vw`, `clamp()`）。
- ブレークポイントはデバイスではなく **コンテンツが破綻する幅** で。
- タッチターゲットは **最低 44x44 CSS px**（Apple HIG / WCAG 2.5.5）。

### 3.5 タイポグラフィ

- 本文は `1rem` 以上（ユーザー設定の尊重）。
- 行長は **45〜75 文字** が読みやすい（`max-width: 65ch`）。
- 行間: 本文は `1.5` 前後、見出しは詰める。
- フォントサブセット化（日本語は特に巨大）+ `font-display: swap`（FOUT を許容して FOIT を避ける）。

### 3.6 ダークモード

- `prefers-color-scheme` をベースに、ユーザー手動切替も用意。
- CSS カスタムプロパティでカラートークン化すると切替が楽。
- `color-scheme: light dark` をルートに付け、フォーム要素の色も追従させる。

### 3.7 アニメーション

- `transform` / `opacity` を使う（GPU 合成、レイアウト・ペイント不要）。
- `prefers-reduced-motion: reduce` を尊重し、過度なパララックス・自動再生を避ける。

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3.8 詳細度と命名

- `!important` は最終手段。デバッグ難度を上げる。
- ID セレクタはスタイリングに使わない（詳細度が強すぎる）。
- グローバルなクラス汚染を避ける（CSS Modules / scoped / Atomic）。

---

## 4. JavaScript / TypeScript

### 4.1 モダン JS の基本

- ES Modules を使う（`type="module"`、`import` / `export`）。
- `const` 既定、必要なときだけ `let`、`var` は使わない。
- `===` を使う（`==` は型変換が罠）。
- オプショナルチェイニング `?.` / Null 合体 `??`。
- 可能な限り **不変（イミュータブル）** に扱う（スプレッド、`Object.freeze`、Map/Set）。

### 4.2 TypeScript

- `tsconfig` は `strict: true`（`strictNullChecks`, `noImplicitAny` など全部入り）。
- `any` 禁止、必要なら `unknown` を使い narrow する。
- ライブラリ境界では Zod / Valibot などで **ランタイムバリデーション**（型は信用ならない）。
- `as` キャストはできるだけ避け、型ガードや判別共用体（discriminated union）を使う。
- `enum` より **literal union 型** + `as const`。

### 4.3 エラーハンドリング

- 例外は **想定外のバグ** を表現するもの。期待される失敗は Result 型 / Either / `[err, data]` で表現する設計が安全。
- `catch` で握りつぶさない。最低限ログに残す。
- 非同期は `async/await` で書き、`Promise` を `await` 忘れしない（ESLint の `no-floating-promises`）。
- ユーザー向けエラーは技術詳細を漏らさない、開発者向けログは十分な文脈を残す。

### 4.4 イベントハンドリングと DOM

- イベント委譲（event delegation）を活用する。
- `passive: true` をスクロール系リスナーに（タッチ・ホイールイベント）。
- メモリリークを避ける: コンポーネント破棄時にリスナー / Observer / setInterval を解除。
- グローバル変数を作らない。

### 4.5 非同期と並行性

- 並列実行できるものは `Promise.all` / `Promise.allSettled`。
- レースには `AbortController` でキャンセル可能にする。
- ループの中で `await` する前に、`Promise.all` で並列化できないか考える。

### 4.6 モジュールとバンドル

- 副作用のある import は最小限に（Tree Shaking 阻害）。
- `import type` で型のみ import（バンドルから除外）。
- 動的 import (`import()`) でルート単位コード分割。

### 4.7 コーディング規約

- 命名: 変数/関数は `camelCase`、型/クラスは `PascalCase`、定数は `SCREAMING_SNAKE_CASE`。
- 関数は **小さく、一つのことをする**（50 行を超えたら分解検討）。
- 早期 return でネストを減らす（4 レベル超えは要警戒）。
- マジックナンバー禁止（名前付き定数に）。

### 4.8 フレームワーク非依存の指針

- フレームワークは「どう書くか」を決めるが、ロジックは **純関数 + 型** で書けばどこでも動く。
- ビジネスロジックは UI から分離（`useFoo` フックや `composables` の中だけにビジネスルールを置かない）。

---

## 5. アクセシビリティ（a11y）

### 5.1 基準は WCAG 2.2 Level AA

- 4 原則（**POUR**）: Perceivable / Operable / Understandable / Robust。
- 主要な達成基準:
  - **コントラスト比**: テキスト 4.5:1 以上、大文字 3:1 以上。
  - **キーボード操作可能**: 全機能をキーボードのみで完了できる。
  - **フォーカスの可視化**: `:focus-visible` を消さない。
  - **タッチターゲット**: 24x24 CSS px 以上（WCAG 2.2）。
  - **ターゲット間隔**: 隣接要素との間隔も含めた配慮。

### 5.2 セマンティクスとランドマーク

- ページに **1 つの `<main>`**、ナビは `<nav>`、ヘッダ・フッタも明示。
- 「ヘッダーへスキップ / メインへスキップ」リンクを最初に置く（キーボードユーザー向け）。

### 5.3 ARIA は最後の手段

- > 「ARIA を使わないで済むのが最善」（WAI-ARIA Authoring Practices）。
- まずネイティブ HTML 要素を選ぶ。`<button>` を `<div role="button" tabindex="0">` で再発明しない。
- `aria-label`, `aria-labelledby`, `aria-describedby` でラベル付けが必要な場合のみ使う。

### 5.4 フォームの a11y

- ラベルは可視テキストで（プレースホルダーだけは NG）。
- エラーは `aria-invalid` / `aria-describedby` で関連付け、ライブ領域（`role="alert"` / `aria-live`）で通知。

### 5.5 動的コンテンツ

- モーダルは **フォーカストラップ** + 開いたら最初のフォーカス可能要素へ移動 + 閉じたら開く前の位置に戻す。
- トーストやスナックバーは `aria-live="polite"`。緊急なものは `assertive`。

### 5.6 動きと感覚過敏への配慮

- 自動再生する動画・音声は避ける、もしくは停止 UI を提供。
- 5Hz 超の点滅は発作を誘発しうる（光感受性）。
- `prefers-reduced-motion` を尊重。

### 5.7 自動テスト + 手動テスト

- axe-core / Pa11y / Lighthouse a11y で自動チェック（**しかし問題の 30〜50% しか検出できない**）。
- スクリーンリーダー（NVDA / VoiceOver / TalkBack）での実機確認。
- キーボードのみで全操作を試す。

参照: [WCAG 2.2 (W3C)](https://www.w3.org/TR/WCAG22/), [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/), [a11yproject.com](https://www.a11yproject.com/)。

---

## 6. パフォーマンス

### 6.1 Core Web Vitals を目標にする

| メトリクス                           | しきい値（Good） | 内容                               |
| ------------------------------------ | ---------------- | ---------------------------------- |
| **LCP**（Largest Contentful Paint）  | ≤ 2.5s           | 主要コンテンツの表示               |
| **INP**（Interaction to Next Paint） | ≤ 200ms          | 操作への応答（FID の後継、2024〜） |
| **CLS**（Cumulative Layout Shift）   | ≤ 0.1            | レイアウトのガタつき               |

補助指標: TTFB / FCP / TBT / Speed Index。

### 6.2 配信レイヤー（最も効果が大きい）

- **CDN** で静的アセットをエッジ配信（Cloudflare Pages なら自動）。
- **HTTP/2 or HTTP/3** を使う（多重化 + ヘッダ圧縮）。
- **gzip / Brotli** 圧縮（Brotli の方が高効率）。
- **適切な `Cache-Control`**: イミュータブルなアセット（ハッシュ付き）は `public, max-age=31536000, immutable`、HTML は短く。

### 6.3 アセット最適化

- **画像**: AVIF / WebP を優先、`<picture>` でフォールバック。サイズは表示サイズの 2x 程度に抑える。
- **フォント**: WOFF2、サブセット、`font-display: swap`、`preload` するなら `crossorigin`。
- **アイコン**: SVG スプライトまたは Iconify 系で必要分のみ。
- **動画**: H.264 → AV1/VP9 への切り替え検討。`preload="metadata"` までに。

### 6.4 JavaScript のコスト

- **JS は最も高価なリソース**。1 KB の JS は 1 KB の画像より遥かに重い（パース・コンパイル・実行コスト）。
- バンドルサイズを監視（[bundlesize](https://github.com/siddharthkp/bundlesize), [size-limit](https://github.com/ai/size-limit)）。
- ルート分割・遅延読み込み・Tree Shaking。
- ライブラリ選定: `bundlephobia.com` でサイズチェック、`moment` より `date-fns`/`Temporal`、`lodash` より個別 import。

### 6.5 レンダリング戦略

- **静的 HTML（SSG）** が最速。Astro v5 の島アーキテクチャと相性が良い。
- **Hydration コスト** に注意（島ごとに最小化、`client:idle` / `client:visible` を使う）。
- 必要なら Streaming SSR / Partial Hydration / RSC。

### 6.6 リソースヒント

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://example.com" />
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />
<link rel="modulepreload" href="/critical.js" />
```

- `preload` の使い過ぎは逆効果。クリティカルパス上のもののみ。

### 6.7 CLS の防止

- 画像・iframe・広告・埋め込みに `width`/`height` または `aspect-ratio`。
- フォント切替によるサイズシフトには `size-adjust` / `font-display: optional`。
- 動的に挿入されるバナーは予約スペースを確保。

### 6.8 監視

- 実ユーザー計測（**RUM**: Real User Monitoring）。Cloudflare Web Analytics / Vercel Speed Insights / SpeedCurve。
- ラボ計測（Lighthouse, WebPageTest）と RUM のギャップを認識する。

参照: [web.dev/vitals](https://web.dev/vitals/), [Performance Best Practices (MDN)](https://developer.mozilla.org/ja/docs/Web/Performance)。

---

## 7. セキュリティ

### 7.1 必ず HTTPS

- HSTS（`Strict-Transport-Security`）で HTTPS を強制。
- mixed content（HTTPS ページ内の HTTP リソース）を作らない。

### 7.2 Content Security Policy（CSP）

最強の XSS 対策。レスポンスヘッダか `<meta>` で設定:

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-RANDOM';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
```

- `unsafe-inline` / `unsafe-eval` を使わないのが理想（nonce or hash を使う）。
- まず `Content-Security-Policy-Report-Only` で検証。

### 7.3 主要なセキュリティヘッダ

| ヘッダ                                             | 役割                                  |
| -------------------------------------------------- | ------------------------------------- |
| `Strict-Transport-Security`                        | HTTPS 強制                            |
| `Content-Security-Policy`                          | XSS / インジェクション対策            |
| `X-Content-Type-Options: nosniff`                  | MIME スニッフィング無効化             |
| `Referrer-Policy: strict-origin-when-cross-origin` | リファラ漏洩抑制                      |
| `Permissions-Policy`                               | カメラ・マイク・位置情報など API 制御 |
| `X-Frame-Options: DENY`                            | クリックジャッキング防止              |
| `Cross-Origin-Opener-Policy`                       | プロセス分離                          |
| `Cross-Origin-Embedder-Policy`                     | 同上                                  |

[securityheaders.com](https://securityheaders.com/) で採点できる。

### 7.4 OWASP Top 10 の心得

主要なものを一行ずつ:

1. **Broken Access Control**: 認可は常にサーバー側で。クライアント側のチェックは UX 用。
2. **Cryptographic Failures**: 弱い暗号・自前実装を避ける。`crypto.subtle` / 標準ライブラリを使う。
3. **Injection**（SQL/NoSQL/コマンド/XSS/LDAP）: パラメタライズドクエリ、エスケープ、ホワイトリスト。
4. **Insecure Design**: スレットモデリング。
5. **Security Misconfiguration**: 既定パスワード、デバッグエンドポイント。
6. **Vulnerable Components**: Dependabot / Renovate で依存性を更新。
7. **Authentication Failures**: パスワード再利用検出、レート制限、MFA。
8. **Software/Data Integrity Failures**: SRI（Subresource Integrity）、署名検証。
9. **Logging Failures**: 過剰なログ（PII を含めない）、十分なログ（侵入検知用）。
10. **SSRF**: URL ホワイトリスト、内部 IP ブロック。

### 7.5 XSS 対策の具体策

- フレームワークのテンプレートはデフォルトでエスケープされる（Astro / Vue / React）。
- `v-html` / `dangerouslySetInnerHTML` は使う前に DOMPurify でサニタイズ。
- URL を属性に入れる前に検証（`javascript:` スキーム等）。
- CSP を併用（多層防御）。

### 7.6 CSRF / CORS

- Cookie ベースの認証なら `SameSite=Lax` か `Strict`。状態を変える操作には CSRF トークン。
- API は CORS をホワイトリストで（`*` を避ける、`Access-Control-Allow-Credentials: true` と `*` の併用は不可）。

### 7.7 Subresource Integrity（SRI）

外部 CDN を使うときは:

```html
<script
  src="https://cdn.example.com/lib.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```

### 7.8 シークレットの取り扱い

- リポジトリにコミットしない（`.env` は `.gitignore`、テンプレートとして `.env.example`）。
- 漏れたら **必ずローテーション**（履歴から消すだけでは不十分）。
- 静的サイトのクライアントコードに **API シークレットを置かない**（公開鍵のみ）。
- Cloudflare Pages なら環境変数 / Secrets で。

### 7.9 依存ライブラリの監査

- `npm audit` / `pnpm audit`、Dependabot、Snyk、`socket.dev`。
- 取り込む前にメンテナンス状況・ダウンロード数・最終更新を確認。

参照: [OWASP Top 10](https://owasp.org/www-project-top-ten/), [MDN Web Security](https://developer.mozilla.org/ja/docs/Web/Security)。

---

## 8. SEO と発見可能性

### 8.1 技術 SEO の基本

- レンダリング: SSG/SSR で **HTML にコンテンツが含まれている** ことを保証。
- 一意な `<title>` / `<meta description>` / `<link rel="canonical">`。
- `robots.txt` と `sitemap.xml` を提供（Astro は `@astrojs/sitemap` で自動生成）。
- 404 は 404 を返す（200 で「見つかりません」と書かない）。
- リダイレクトは 301（恒久）/ 302（一時）を正しく使う。

### 8.2 構造化データ（Schema.org / JSON-LD）

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "...",
    "author": { "@type": "Person", "name": "..." },
    "datePublished": "2026-05-06"
  }
</script>
```

- 記事・パンくず・組織・人物・FAQ などにスキーマを付けると検索表示が豊富になる。
- [Rich Results Test](https://search.google.com/test/rich-results) で検証。

### 8.3 OGP / Twitter Card

- シェア時のサムネ・タイトル・概要は **すべてのページ** で設定。
- OG 画像は 1200x630、ファイルサイズは 1MB 以下が無難。

### 8.4 内部リンク・URL 設計

- URL は **人間に意味がある形**（`/blog/2026/web-best-practices` など）。
- パンくず + 関連リンクで回遊性を上げる。
- 重複コンテンツには `canonical`、似た URL は統一。

### 8.5 コアウェブバイタルは SEO 要素

- ページエクスペリエンスは Google の検索ランキング要素。Core Web Vitals が直接効く。

参照: [Google 検索セントラル](https://developers.google.com/search/docs)。

---

## 9. 国際化（i18n）と多言語化

### 9.1 言語属性とエンコーディング

- `<html lang="ja">` を必ず。多言語ページは `<a hreflang="en">` と切替リンク。
- 文字コードは UTF-8 一択。BOM は付けない。

### 9.2 文字列の外部化

- ハードコードせず、リソースファイル（JSON/YAML）に分離。
- 複数形（plural rules）は `Intl.PluralRules`。
- 日付・数値は `Intl.DateTimeFormat` / `Intl.NumberFormat`、自前文字列フォーマットを避ける。

### 9.3 タイポグラフィと書字方向

- アラビア語・ヘブライ語などは RTL（`dir="rtl"`）。論理プロパティで対応する。
- 日本語は禁則処理・縦書き（`writing-mode: vertical-rl`）。
- 言語固有のフォントを `font-family` で指定。

### 9.4 SEO 上の i18n

- `hreflang` で言語別ページを関連付け。
- URL 設計: サブドメイン / サブディレクトリ / クエリパラメータ。サブディレクトリ（`/ja/`, `/en/`）が最も扱いやすい。

---

## 10. プログレッシブエンハンスメントと耐障害性

### 10.1 失敗の前提

- ネットワークは切れる、CDN は落ちる、ブラウザにバグがある、JS は実行されない（CSP、広告ブロック、エラー）。
- すべてを前提に設計する。

### 10.2 オフライン / 不安定回線

- Service Worker でアセットキャッシュ + オフラインフォールバック（PWA でなくとも有効）。
- フォーム送信は失敗時にローカルストレージで保持してリトライ可能に。

### 10.3 グレースフル・デグラデーション

- 新機能は機能検出（feature detection）で。
- `if ('IntersectionObserver' in window) { ... }`、CSS では `@supports`。

### 10.4 タイムアウトとリトライ

- すべての fetch にタイムアウトを設ける（`AbortSignal.timeout`）。
- 指数バックオフでリトライ（ただし冪等な操作のみ）。

---

## 11. プライバシーと法令対応

### 11.1 必要最小限のデータ取得

- **Privacy by Design / Default**（GDPR の基本原則）。
- アナリティクスは Cookie レス（Cloudflare Web Analytics, Plausible, Fathom）が望ましい。

### 11.2 同意管理（CMP）

- EU 圏ユーザーには Cookie 同意 UI が必須。
- 同意前に Tracking タグを発火させない。
- カテゴリ別オプトイン（必須 / 機能 / 分析 / 広告）。

### 11.3 法律と規制

- **GDPR**（EU）/ **CCPA**（カリフォルニア）/ **個人情報保護法**（日本）/ **e-Privacy 指令**。
- 適用される地域を見極めて対応する。

### 11.4 Do Not Track / Global Privacy Control

- `Sec-GPC: 1` を尊重し、トラッキングを無効化。

---

## 12. ビルド・デプロイ・配信

### 12.1 静的サイトの強み

- Astro v5 の SSG はビルド時に HTML を生成 → CDN 配信で 圧倒的に速く・安く・安全。
- ホスティング: Cloudflare Pages / Netlify / Vercel / GitHub Pages。

### 12.2 アセットのフィンガープリント

- ファイル名にハッシュ付与（Astro / Vite が自動）。
- `Cache-Control: public, max-age=31536000, immutable` で永続キャッシュ。

### 12.3 HTML はキャッシュを短く

- `max-age=0, must-revalidate` または ETag で。

### 12.4 CI/CD

- main ブランチへの push で自動ビルド・デプロイ。
- PR ごとにプレビューデプロイ（Cloudflare Pages はデフォルトで対応）。
- ビルド前に **lint / type-check / test** を必ず通す。
- セキュリティスキャン（Snyk / GitHub Advanced Security / `pnpm audit`）も組み込む。

### 12.5 ロールバック戦略

- 直前デプロイへの即時ロールバック手順を整える。
- 致命的バグ時に「とりあえず戻す」が選択肢にあると安心。

### 12.6 環境変数とビルド差分

- `import.meta.env.PROD` などで環境差を扱う。
- 本番にだけ必要な計測スクリプトはビルド時に除去（dev で発火させない）。

---

## 13. テストと品質保証

### 13.1 テストピラミッド

- **ユニット**: 純関数 / 小さなコンポーネント。Vitest など。高速・大量。
- **インテグレーション**: ルーティング / フォーム送信 / API 連携。
- **E2E**: 重要なユーザーフローのみ。Playwright / Cypress。

### 13.2 ユニットテストの指針

- **Arrange / Act / Assert** の構造を保つ。
- テスト名は「何を検証するか」を文として書く（日本語可）。
- 1 テスト 1 アサーションを守る必要はないが、**1 つの関心事** に絞る。
- 実装ではなく **振る舞いを** テストする（リファクタで壊れない）。

### 13.3 視覚回帰テスト

- Percy / Chromatic / Playwright のスクリーンショットで UI 退行検知。
- デザインシステムを持つなら必須級。

### 13.4 アクセシビリティテストの組み込み

- Lighthouse CI、axe-core を CI に。
- Storybook + a11y アドオンでコンポーネント単位の検査。

### 13.5 リント / フォーマット / 型チェック

- ESLint（`typescript-eslint` 含む）+ Prettier + `tsc --noEmit`。
- pre-commit hook（lint-staged + husky）で機械的にブロック。
- このリポジトリでは Claude Code 側のフックで自動 lint/format も検討。

### 13.6 静的解析

- 依存サイクル検出: `madge`。
- 死コード検出: `knip`、`ts-prune`、`depcheck`。

---

## 14. モニタリング・観測性

### 14.1 エラートラッキング

- Sentry / Bugsnag / Cloudflare Logpush。
- ソースマップを本番にもアップロードして、minify 後でも追跡可能に。

### 14.2 ユーザー行動分析

- Cookie レスのプライバシーフレンドリーなツールを優先。
- 何を計測するかを **目的から逆算** する（PV だけ取っても意味は薄い）。

### 14.3 RUM（実ユーザー計測）

- Core Web Vitals を field データで計測。
- ラボ計測との乖離を観測する。

### 14.4 ログ

- 構造化ログ（JSON）で出力。
- PII（個人識別情報）はログに残さない / 残すなら暗号化 / 期限を切る。

### 14.5 アラート

- しきい値ベース（5xx 率、レイテンシ、Web Vitals 劣化）。
- アラート疲れを避けるため、**Page されるべき** 重大度のみ夜間通知。

---

## 15. 開発者体験（DX）とプロセス

### 15.1 リポジトリの整備

- **README** に「これは何か / セットアップ / コマンド一覧 / デプロイ」を最低限。
- **CONTRIBUTING.md** / **CODE_OF_CONDUCT.md**（OSS なら）。
- **LICENSE** を必ず置く。

### 15.2 Git ワークフロー

- **Conventional Commits**: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `perf:`, `ci:`, `build:`。
- ブランチ運用: trunk-based development（短命フィーチャーブランチ + main 直行）が小規模では最適。
- PR テンプレートで「変更点 / 動機 / テスト方法 / スクリーンショット」を求める。

### 15.3 コードレビュー

- **小さな PR**（< 400 行が目安、超えたら分割）。
- レビュー観点: 正しさ / セキュリティ / パフォーマンス / 可読性 / テストカバレッジ。
- 個人攻撃しない、コードについて議論する。

### 15.4 ドキュメンテーション

- **コードのそばにドキュメントを置く**（README / JSDoc / TSDoc）。
- 「なぜ」を書く（「何を」はコードを読めば分かる）。
- 設計判断は **ADR**（Architecture Decision Record）に残す。

### 15.5 命名と一貫性

- プロジェクト全体で命名・ディレクトリ構成を統一。
- ESLint / Prettier の設定をコミットして全員同じ設定で作業。

### 15.6 自動化

- 反復作業はスクリプト化（package.json scripts、Makefile、Just）。
- リリースノート自動生成（changesets / release-please）。

### 15.7 オンボーディング

- 新規メンバーが 30 分で `pnpm dev` まで辿り着ける状態を維持。
- 開発環境の再現性: Devcontainer / mise / asdf でツールバージョン固定。

---

## 16. 一次情報・参考資料

### Web 標準

- [MDN Web Docs](https://developer.mozilla.org/ja/) — 最も信頼できる Web リファレンス。
- [HTML Living Standard (WHATWG)](https://html.spec.whatwg.org/)
- [ECMA-262](https://tc39.es/ecma262/) — JavaScript 言語仕様。
- [W3C TR](https://www.w3.org/TR/) — Web 関連仕様の総覧。
- [caniuse.com](https://caniuse.com/) — ブラウザ実装状況。

### パフォーマンス

- [web.dev](https://web.dev/) — Google による Web ベストプラクティス集。
- [PageSpeed Insights](https://pagespeed.web.dev/) / [WebPageTest](https://www.webpagetest.org/)
- [The High Performance Browser Networking](https://hpbn.co/) — Ilya Grigorik による無料書籍。

### アクセシビリティ

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) / [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/) — Heydon Pickering。
- [a11yproject.com](https://www.a11yproject.com/)

### セキュリティ

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) / [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [MDN Web Security](https://developer.mozilla.org/ja/docs/Web/Security)
- [Mozilla Observatory](https://observatory.mozilla.org/) — セキュリティヘッダ採点。

### SEO

- [Google 検索セントラル](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org/)

### デザインと UX

- [Refactoring UI](https://www.refactoringui.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- [Resilient Web Design](https://resilientwebdesign.com/) — Jeremy Keith（無料）。

### 書籍（普遍性が高いもの）

- _High Performance Browser Networking_ — Ilya Grigorik
- _Inclusive Design Patterns_ — Heydon Pickering
- _CSS Secrets_ — Lea Verou
- _You Don't Know JS_ シリーズ — Kyle Simpson
- _The Pragmatic Programmer_ — Andrew Hunt, David Thomas

---

## 付録: このリポジトリ向けの実践チェックリスト

Astro v5 + Vue + UnoCSS + Cloudflare Pages という構成における優先度の高い項目。

### コミット前

- [ ] `pnpm lint` / `pnpm format:check` / `astro check` がすべてパス。
- [ ] 新しい依存を入れた場合、`bundlephobia.com` でサイズを確認した。
- [ ] 画像を追加した場合、寸法を明示し `loading="lazy"` を検討した。
- [ ] 新規ページに `<title>` / `<meta description>` / OGP を設定した。
- [ ] `<html lang="ja">` が保たれている。

### デプロイ前

- [ ] Lighthouse で Performance / Accessibility / Best Practices / SEO がすべて 90 以上。
- [ ] Cloudflare Pages に CSP / HSTS / `X-Content-Type-Options` 等が設定されている。
- [ ] 404 ページが存在し、404 ステータスを返す。
- [ ] sitemap.xml と robots.txt が配信されている。

### 定期メンテナンス

- [ ] `pnpm outdated` で依存性を点検（月 1）。
- [ ] `pnpm audit` で脆弱性チェック（週 1 / CI で自動）。
- [ ] [securityheaders.com](https://securityheaders.com/) と [observatory.mozilla.org](https://observatory.mozilla.org/) で採点を確認。
- [ ] Web Vitals の field データを RUM で確認。

---

> **このドキュメントは生きた資料です。** 仕様変更・新しいベストプラクティスの登場に応じて随時更新してください。
> 迷ったときの優先順位は **「ユーザーの体験 > 開発者の体験 > 流行の技術」** です。
