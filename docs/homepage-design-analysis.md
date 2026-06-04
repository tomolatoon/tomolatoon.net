# 個人サイト トップページ デザイン分析

エンジニア・デザイナー・クリエイターの **「著名な個人サイト」のトップページデザイン** を、複数の方向性（ミニマル系・ビジュアル / 3D 系・テキスト中心系・アプリ風など）からバランスよく取り上げ、各サイトの特徴とトップページ全体のパターンを整理したドキュメントです。

`tomolatoon.net`（Astro v5 + Vue + UnoCSS、現状は「名前・タグライン・bio・SNS リンクのみの一画面 landing」状態 — `src/pages/index.astro` 参照）の今後のデザイン方針を検討する際の参考として作成しています。

> **読み方のメモ**
>
> - 各サイトの分析は **「実際に取得した HTML / メタタグの記述」+「キュレーション記事の解説」** に基づいています。本ドキュメント執筆時にライブで取得した内容を元にしているため、サイト側の更新で構成が変わっている場合があります。
> - 実際の見た目（色味・余白の具体ピクセル数・アニメーションの細部など）は HTML 取得だけでは判定しきれないため、第三者の解説記事を引用しつつ、本ドキュメント独自の解釈となる箇所は **「〜と考えられます」「〜と推測されます」** と明示しています。
> - URL はすべて執筆時に実在を確認しています。

---

## 目次

1. [調査対象サイトの選定方針](#1-調査対象サイトの選定方針)
2. [サイト別分析](#2-サイト別分析)
   1. [Lee Robinson — leerob.com](#21-lee-robinson--leerobcom)
   2. [Dan Abramov — overreacted.io](#22-dan-abramov--overreactedio)
   3. [Sindre Sorhus — sindresorhus.com](#23-sindre-sorhus--sindresorhuscom)
   4. [Shawn "swyx" Wang — swyx.io](#24-shawn-swyx-wang--swyxio)
   5. [Brittany Chiang — brittanychiang.com](#25-brittany-chiang--brittanychiangcom)
   6. [Brian Lovin — brianlovin.com](#26-brian-lovin--brianlovincom)
   7. [Josh W. Comeau — joshwcomeau.com](#27-josh-w-comeau--joshwcomeaucom)
   8. [Wes Bos — wesbos.com](#28-wes-bos--wesboscom)
   9. [Sarah Drasner — sarahdrasnerdesign.com](#29-sarah-drasner--sarahdrasnerdesigncom)
   10. [Bruno Simon — bruno-simon.com](#210-bruno-simon--bruno-simoncom)
   11. [Henry Heffernan — henryheffernan.com](#211-henry-heffernan--henryheffernancom)
   12. [平尾誠 — arutega.jp / arutega-db.arutega.jp（日本人事例）](#212-平尾誠--aruteajp--arutega-dbarutegajp日本人事例)
3. [横断パターンの分類](#3-横断パターンの分類)
4. [tomolatoon.net への適用示唆](#4-tomolatoonnet-への適用示唆)
5. [参考資料（出典一覧）](#5-参考資料出典一覧)

---

## 1. 調査対象サイトの選定方針

`curious.page` の [Best Personal Website Examples for Developers (2026)](https://curious.page/blog/best-personal-website-examples-developers) では、「standout サイトは過剰なデザインを避け、コンテンツに集中している」「Lee Robinson / Brittany Chiang / Josh Comeau などが代表例」と整理されています。一方で Awwwards の [Best Portfolio Websites](https://www.awwwards.com/websites/portfolio/) や [Personal Portfolio Site](https://www.awwwards.com/sites/personal-portfolio-site) は、3D / 高インタラクション系の対極にある作品を多数取り上げています。

そこで本ドキュメントでは、**「ミニマル」「テキスト中心」「アプリ風」「ブログハブ型」「アート / カラフル」「3D / インタラクティブ」「日本人事例」** の 7 軸を意識して、合計 12 サイトを選定しました。

---

## 2. サイト別分析

### 2.1 Lee Robinson — [leerob.com](https://leerob.com/)

| 項目                   | 内容                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | テキスト中心 / 散文型                                                                                                                                         |
| ファーストビューの要素 | `# Lee Robinson` 見出し → 「I'm a developer and writer. I work at [Cursor] teaching about AI. Previously, I worked at [Vercel].」という散文の自己紹介から開始 |
| レイアウト             | 1 カラム、最大幅は狭め（読みやすさ重視）と推測されます                                                                                                        |
| ナビゲーション         | トップにはほぼ無く、本文内のリンクで `bio` / `cursor` / `music` / `writing` などに飛ばす方式                                                                  |
| 配色 / トーン          | 落ち着いた配色。`og:image` がブランドカラーで、メタ description が `Developer and writer.` の一行のみ                                                         |
| 動き / インタラクション | ほぼ静的（HTML 取得時点）                                                                                                                                     |
| 特徴                   | **「散文 + ハイパーリンク」だけで自己紹介を完結させる Markdown ライクな構成。**「I last listened to [Song About You] by The Band CAMINO.」のような **動的な近況** を本文に混ぜているのが個性的な点 |

curious.page によれば「The design is minimal—almost austere—which puts all the focus on the content.」と評されています（[curious.page](https://curious.page/blog/best-personal-website-examples-developers)）。

---

### 2.2 Dan Abramov — [overreacted.io](https://overreacted.io/)

| 項目                   | 内容                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | ブログ記事リスト直行型 / 究極ミニマル                                                                                                                                               |
| ファーストビューの要素 | サイト名 `overreacted` + 作者アバター + **記事タイトル一覧（日付 + 一行サブコピー）** が、いきなり全件並ぶ                                                                          |
| レイアウト             | 1 カラム、サイドバーや About 等のナビなし                                                                                                                                           |
| 配色                   | ダーク背景にライトテキスト（HTML 取得結果からは色値までは断定できませんが、Sarah Drasner の Night Owl テーマベースという [GitHub README](https://github.com/gaearon/overreacted.io) の説明から、ダーク系の濃紺ベースだと考えられます） |
| 動き                   | 基本的に静的。記事内に動的なアニメーションがあるかは別問題                                                                                                                          |
| 特徴                   | **「自己紹介より先にコンテンツ」** という思想を極限まで貫いたサイト。記事タイトルが内容を語るため、説明文は最小限。「A blog by Dan Abramov」と description にだけ書いている          |

「mostly technical blog. forked from gatsby-blog-starter」というメタ情報も公開されています（[GitHub - gaearon/overreacted.io](https://github.com/gaearon/overreacted.io)）。

---

### 2.3 Sindre Sorhus — [sindresorhus.com](https://sindresorhus.com/)

| 項目                   | 内容                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | 一画面完結型 / 名刺サイト                                                                                                                                                           |
| ファーストビューの要素 | プロフィール写真 → 名前 `Sindre Sorhus` → タグライン `Full-Time Open-Sourcerer & App Maker` → 「Apps」「Code」の 2 ボタン → SNS リンクのリスト → 引用句で締める                     |
| レイアウト             | 1 カラム、中央寄せ、要素が縦に積まれるだけのシンプル構成                                                                                                                            |
| ナビゲーション         | 主要 CTA は「Apps」「Code」の 2 つだけ                                                                                                                                              |
| 配色 / トーン          | 白基調 + 少しの装飾色（HTML 取得時点）                                                                                                                                              |
| 動き                   | 基本静的                                                                                                                                                                            |
| 特徴                   | **「写真 + 名前 + 一行タグライン + 1〜2 個の CTA + SNS」** という、現代的なミニマル個人サイトの教科書的構成。スティーブ・ジョブズの引用句「The people who are crazy enough to think they can change the world are the ones who do」で締める情緒設計が印象的 |

`tomolatoon.net` の現状とおそらく最も骨格が似ているサイトと考えられます。

---

### 2.4 Shawn "swyx" Wang — [swyx.io](https://www.swyx.io/)

| 項目                   | 内容                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | テキスト中心 / コンテンツリスト型                                                                                                                                                   |
| ファーストビューの要素 | ヘッダーに `Home / Ideas / About / Subscribe` のナビ → 名前 + ロール → 自己紹介散文 → 大きな自画像写真（スキー姿）                                                                  |
| レイアウト             | 1 カラム中央寄せ、文章中心。下に「Latest Swyx Content」のリスト、「Most Popular Writing」「Most Popular Speaking」のセクションが続く                                                |
| 配色 / トーン          | テーマカラーは indigo 系（`meta theme-color: #3730a3`）。テキスト主体で写真は 1 点アクセント                                                                                        |
| 動き                   | 静的中心と推測されます                                                                                                                                                              |
| 特徴                   | **「自己紹介 → 最新コンテンツ → 代表作 → 講演リスト」というドキュメント型構成。** 写真は 1 枚だけだが、それが趣味（スキー）の場面で人柄を伝える役割を果たしていると考えられます       |

技術スタックは「SvelteKit + TailwindCSS、GitHub Issues を CMS として利用」と公開されています（[Jampack - Optimizing Swyx's personal site](https://jampack.divriots.com/devlog/swyx-personal-site/)）。

---

### 2.5 Brittany Chiang — [brittanychiang.com](https://brittanychiang.com/)

| 項目                   | 内容                                                                                                                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | 単一ページ完結型 / 二カラム固定サイドバー                                                                                                                                                            |
| ファーストビューの要素 | 左サイド：`Brittany Chiang` 大見出し → 「Frontend Engineer」サブ → 「I build accessible, pixel-perfect experiences for the web.」というタグライン → SNS アイコン列。右サイドに「About」セクションが続く |
| レイアウト             | 2 カラム（PC）。左が固定された自己紹介ペイン、右がスクロール可能な About / Experience / Projects / Writing                                                                                           |
| 配色 / トーン          | ダークネイビー基調（`meta theme-color: #0f172a`）+ アクセントのシアン                                                                                                                                |
| 動き / インタラクション | スクロール連動のハイライト、ホバー時のサブアニメーション。「Click to time travel」と書かれた Doctor Who の TARDIS GIF で旧バージョン（v4）に飛べる遊び心あり                                         |
| 特徴                   | **「ダーク × ペアレイアウト × タイムライン」** の典型例。GitHub OSS（[bchiang7/v4](https://github.com/bchiang7/v4)）として公開されていて、数多くの開発者が踏襲しているデザイン言語                  |

curious.page では「a gold standard for developer portfolios」と紹介されています（[curious.page](https://curious.page/blog/best-personal-website-examples-developers)）。

---

### 2.6 Brian Lovin — [brianlovin.com](https://brianlovin.com/)

| 項目                   | 内容                                                                                                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | マルチカラム / アプリ風                                                                                                                                                                                    |
| ファーストビューの要素 | グローバルサイドバー（左に固定ナビ、中央にコンテンツ列、右に詳細ペイン）。本文クロールでは HTML がほぼ空だったため、JavaScript 駆動のアプリと考えられます                                                  |
| レイアウト             | 多カラム。Brian 本人による [How my website works](https://brianlovin.com/writing/how-my-website-works-C9iyYC3) で「macOS / iPadOS にインスパイアされたマルチカラムレイアウト」「the site to feel like a web application」と説明されています |
| 配色                   | ライト / ダーク両対応と推測されます（macOS 系の規範を踏襲）                                                                                                                                                |
| 動き                   | ページ遷移がスムーズで、SPA 的な切替                                                                                                                                                                       |
| 特徴                   | **「個人サイトをアプリとして設計する」** という野心的なアプローチ。コメントシステムまで自前で実装している点が、フィードバックループ重視の設計思想を表していると考えられます                                |

---

### 2.7 Josh W. Comeau — [joshwcomeau.com](https://www.joshwcomeau.com/)

| 項目                   | 内容                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | ブログハブ型 / フレンドリーキャラクター系                                                                                                                                                             |
| ファーストビューの要素 | グローバルナビ（categories / courses / goodies / About）→ プロモバナー（コース割引）→ 最新記事リスト                                                                                                  |
| レイアウト             | 1 カラム、記事カードが大きく並ぶ                                                                                                                                                                      |
| 配色 / トーン          | 明るめのパステル系。OGP 画像は「A cute 3D mascot sits on a marshmallow cloud」と description が明示しており、**3D マスコット** を一貫したブランド要素にしている                                       |
| 動き / インタラクション | curious.page 曰く「interactive, visually rich blog posts that demonstrate frontend skills better than any list of technologies」とされ、記事中のデモが豊富（[curious.page](https://curious.page/blog/best-personal-website-examples-developers)） |
| 特徴                   | **「Skills 一覧を書かず、インタラクティブな記事そのものでスキルを証明する」** スタイル。「Disable sounds」「Activate dark mode」など UI 切替トグルが明示されていて、サイト自体が遊べる教材になっている |

---

### 2.8 Wes Bos — [wesbos.com](https://wesbos.com/)

| 項目                   | 内容                                                                                                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | パーソナリティ全開型 / 教育系メディア                                                                                                                                                               |
| ファーストビューの要素 | 名前 / ブランディング + コース・ポッドキャストへの導線                                                                                                                                              |
| レイアウト             | 1 カラム、ヘッダーが特徴的。Gatsby 製、Styled Components で実装                                                                                                                                     |
| 配色 / トーン          | 本人曰く「early 2000s hardcore emo kid vibe」を狙った独特の世界観（[Wes Bos - My New Website!](https://wesbos.com/new-wesbos-website)）                                                             |
| 動き                   | 派手すぎないが、コーポレートサイトより遥かにキャラクターが立つ装飾                                                                                                                                  |
| 特徴                   | **「主役は自分のキャラクター。CSS / JavaScript / mediocre jokes / BBQ Tips を平気で並べる」**。Wes Bos の `/uses` ページが [awesome-uses](https://github.com/wesbos/awesome-uses) リストの起点になっていることでも有名 |

---

### 2.9 Sarah Drasner — [sarahdrasnerdesign.com](https://sarahdrasnerdesign.com/)

| 項目                   | 内容                                                                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | アート / カラフル / 高インタラクション型                                                                                                                                          |
| ファーストビューの要素 | DesignRush 記事 [Colorful Website Design Inspiration: Sarah Drasner Design](https://www.designrush.com/best-designs/websites/sarah-drasner-design) では「bright home screen filled with colored 3D balls surrounded by moving, swirly lines」と描写されています |
| レイアウト             | 同記事曰く「infinite scroll format」                                                                                                                                              |
| 配色 / トーン          | ビビッドな多色グラデーション。配色そのものがブランド                                                                                                                              |
| 動き                   | ボタンがユーザーの興味（プロジェクト / 予約ボタンなど）に応じて動くインタラクション                                                                                              |
| 特徴                   | **「サイト全体が SVG アニメーションのデモ」**。SVG Animations 著者である Sarah Drasner らしい構成と考えられます（参考: [Awwwards - Sarah Drasner Design](https://www.awwwards.com/sites/sarah-drasner-design)） |

なお、技術ブログ側は別 URL [sarah.dev](https://sarah.dev/) として運用されており、こちらはミニマルなテキスト中心構成と考えられます。

---

### 2.10 Bruno Simon — [bruno-simon.com](https://bruno-simon.com/)

| 項目                   | 内容                                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | 3D ゲーム / フル没入型                                                                                                                                                                                                                |
| ファーストビューの要素 | 「Welcome! My name is Bruno Simon, and I'm a creative developer. This is my portfolio. Please drive around to learn more about me」というメッセージ + **操作キー説明（WASD/ARROWS, SHIFT 等）** が画面 UI として置かれる                |
| レイアウト             | 3D 空間そのものがレイアウト。サイトを「車で走り回って探索する」                                                                                                                                                                       |
| 配色                   | プレイフルな多色                                                                                                                                                                                                                      |
| 動き                   | WebGL/WebGPU レンダリング、物理エンジン（Rapier）、効果音（Howler.js）。Achievement、Circuit（タイムアタック）、Whispers（訪問者の落書き）など **ゲーム機能を完備**                                                                   |
| 特徴                   | **「ポートフォリオを完全にゲーム化」した極端事例。** 2020 年に Awwwards Site of the Year を獲得（[Creative Bloq](https://www.creativebloq.com/news/3d-car-portfolio)）。OSS としても [folio-2025](https://github.com/brunosimon/folio-2025) で公開 |

`docs/web_best_practice.md` で言及されている「Rule of Least Power」とは対極の選択ですが、**「クリエイティブデベロッパー」を名乗るための最強の名刺** になっています。

---

### 2.11 Henry Heffernan — [henryheffernan.com](https://henryheffernan.com/)

| 項目                   | 内容                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | 3D オフィス / レトロデスクトップ型                                                                                                                                                                    |
| ファーストビューの要素 | 「late 90s aesthetic」の 3D オフィス空間に入り、CRT モニタやデスクトップ要素を操作してコンテンツに到達する仕組み                                                                                      |
| レイアウト             | 3D シーンの内部に Web 要素（iframe）が埋め込まれている構造（[three.js forum](https://discourse.threejs.org/t/3d-portfolio-inspired-by-henry-heffernans-portfolio/84457) より、「camera controls and iframe techniques」と紹介） |
| 配色                   | ノスタルジックなブラウン / グレー系の 90 年代風                                                                                                                                                       |
| 動き                   | Three.js + React で構築されたカメラワーク。Hacker News では「3D Portfolio website with late 90s aesthetic, made with Three and React」と紹介されています（[HN](https://news.ycombinator.com/item?id=31313187)） |
| 特徴                   | **「世界観の作り込みが採用面接代わりになる」事例**。本人ツイートでも「inspired by Bruno Simon」と言及されており、Bruno Simon の影響系譜にある（[Henry Heffernan on X](https://x.com/henryheffernan/status/1523634736157315073)） |

---

### 2.12 平尾誠 — [arutega.jp](https://arutega.jp/) / [arutega-db.arutega.jp](https://arutega-db.arutega.jp/)（日本人事例）

| 項目                   | 内容                                                                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 種別                   | ダーク × アニメーション重視型                                                                                                                                                                                                       |
| ファーストビューの要素 | キュレーション記事の解説によれば「全体が黒で統一され、アニメーションがスムーズで、UI が整っている」「英語で書かれている」「開いたページの一部が隠れていることによってスクロールをしてもらう意図を持たせている」                       |
| レイアウト             | 単一ページ風 / スクロール誘導型                                                                                                                                                                                                     |
| 配色                   | ブラック基調                                                                                                                                                                                                                        |
| 動き                   | スムーズなトランジション・スクロール演出                                                                                                                                                                                            |
| 特徴                   | **海外就業を視野に入れた英語サイト**。日本人エンジニアのデザイン志向ポートフォリオの代表例として、複数のキュレーション記事に登場（[arutega.jp - 参考にしたい日本人デザイナー・エンジニアのポートフォリオサイトまとめ](https://arutega.jp/knowledge/japanese-portfolio/)） |

> **注記**: 本サイトのトップページ HTML はクライアントレンダリングのため取得時に本文が読めず、上記は引用元の解説に依拠した分析であることを明示しておきます。

---

## 3. 横断パターンの分類

12 サイトを俯瞰すると、トップページのデザインは概ね以下の 6 パターンに分類できると考えられます。

### パターン A: 名刺ミニマル型

**例**: Sindre Sorhus / 現状の `tomolatoon.net`

- 構成: 写真 / アバター + 名前 + 一行タグライン + 1〜2 個の CTA + SNS リンク
- 強み: 一目で「誰か」「何屋か」が伝わる。実装コスト最小
- 弱み: コンテンツ深度が無いため、回遊にはサブページが必要

### パターン B: ブログ記事リスト直行型

**例**: Dan Abramov / Lee Robinson

- 構成: ヘッダーは極小、いきなり記事タイトルが並ぶ（Dan）/ 散文の自己紹介の直後に Writing リンクが並ぶ（Lee）
- 強み: 検索流入や記事消費に最適。「中身で語る」思想
- 弱み: 初見の読者には「この人が誰か」がわかりにくいため、About への明確な動線が必要と考えられます

### パターン C: 単一ページ統合型（履歴書サイト風）

**例**: Brittany Chiang

- 構成: ヒーロー（名前 + ロール + タグライン）→ About → Experience（タイムライン）→ Projects → Writing → フッター、を 1 ページに連結
- 強み: 「全部見せて 1 ページ」で完結。採用担当者に好まれる構成と考えられます（[Hostinger - 25 web developer portfolio examples](https://www.hostinger.com/tutorials/web-developer-portfolio) でも推奨）
- 弱み: ページが長くなる、編集の影響範囲が広い

### パターン D: アプリ風マルチカラム

**例**: Brian Lovin

- 構成: 固定サイドバー + 中央列 + 詳細ペインの 3 カラムで、SPA 的に切替
- 強み: 「サイトをプロダクトとして見せる」差別化が可能
- 弱み: 実装コストが高い。SEO とアクセシビリティへの配慮が複雑化

### パターン E: パーソナリティ / アート / カラフル型

**例**: Wes Bos / Sarah Drasner / Josh Comeau

- 構成: 配色・タイポ・マスコット・アニメーションでブランドを構築。コンテンツはブログとコース
- 強み: 強烈に記憶に残る。教育コンテンツ・コース販売との相性が良い
- 弱み: デザインとイラスト / モーションの投資が必要。陳腐化リスクもある

### パターン F: 3D / インタラクティブ没入型

**例**: Bruno Simon / Henry Heffernan / 平尾誠（程度は中間）

- 構成: ヒーローを廃して 3D 空間 or 大きなアニメーションが主役。コンテンツ取得は「探索」によって行う
- 強み: 「クリエイティブデベロッパー」「インタラクションエンジニア」を志す人の最強の証明手段
- 弱み: パフォーマンス・モバイル対応・a11y の難易度が桁違いに高い。情報伝達効率は最低クラス。`docs/web_best_practice.md` で言及されている「Rule of Least Power」「Progressive Enhancement」とトレードオフ関係になる

---

### パターン横断で見られる共通要素

異なるパターンでも、ほとんどのサイトに以下の要素が共通して観察されました。

1. **タグライン（一行肩書き）** — 「Developer and writer.」（Lee）/「Frontend Engineer」（Brittany）/「Full-Time Open-Sourcerer & App Maker」（Sindre）/「Writer, Founder, Devtools Startup Advisor」（swyx）など、**名前の直下に一行で職能を表すコピー** が必ず置かれている。
2. **SNS / GitHub 等の外部リンク集約** — 12 サイトすべてに何らかの形で存在。アイコン列やテキストリンクで統一感を持たせる。
3. **OG 画像と meta description の整備** — どのサイトもメタタグから取れる description が「サイトの目的を一行で表す」内容になっている。SNS シェアの第一印象を決める要素として徹底されています。
4. **タイポグラフィの主役化** — Brittany Chiang は Inter、Bruno Simon は Amatic SC + Nunito など、フォント選定がブランディングの一部になっている（HTML のメタ情報や Behind the scene ページから確認）。

---

## 4. tomolatoon.net への適用示唆

現状の `src/pages/index.astro` は **Sindre Sorhus 型（パターン A: 名刺ミニマル型）に最も近い** と考えられます。アバター + 名前 + タグライン + bio + SNS アイコン + 1 アクセント線、という構成は教科書的なミニマル個人サイトの形です。

ここから先の方向性として、すでに観察した 6 パターンの中で **無理なく拡張できる候補** を以下にまとめます。あくまで本ドキュメント執筆者の推測ベースの示唆です。

### Step 0: そのまま洗練する（パターン A の純度を上げる）

- タグライン `C++ とボカロが好きな一般大学生` は人柄が伝わる名コピーと考えられます。ただし bio の `UEC25, VLL, MMA, 工研, まにけん, squec` は **初見で読み解けない略称の羅列** になっているため、ホバーで補足が出る、もしくは About ページで丁寧に展開するとよさそうです（推測）。
- Sindre Sorhus 流に倣うなら、最後を **一言の引用や信条** で締めると深みが出ると考えられます。

### Step 1: パターン B（ブログ直行型）への片足進出

- 既存の `SocialLinks.astro` に Qiita / Zenn が含まれているため、**「最近書いた記事 3 本」** をトップに自動で並べる Astro Content Collection または RSS フェッチを追加すれば、Lee Robinson 風の「散文 → 最新コンテンツ」構成に近づきます。
- Astro v5 は Content Collections で MDX を扱えるため、構成変更コストは小さいと考えられます（[Astro 公式 - Content Collections](https://docs.astro.build/en/guides/content-collections/)）。

### Step 2: パターン C（単一ページ統合）の段階的な導入

- Brittany Chiang 流のタイムラインは、UEC（電通大）入学 → 各サークル参加 → OSS / 個人開発 のヒストリーを並べると、学生サイトとして強い物語性を持つと推測されます。
- 別ページに分けずに **「トップを縦に伸ばすだけ」** で実装可能。既存の `GeoBg.astro` を最上部に残し、その下に About / Skills / Projects のセクションを足す構成が、現行 UnoCSS スタックと相性良いと考えられます。

### Step 3: パターン E / F は「やりたければやる」

- 既に幾何学 SVG 背景 `GeoBg.astro` という装飾要素が入っている点を活かして、**控えめな motion** を追加するだけでも「動きのある名刺」になります（推測）。
- Bruno Simon 級の 3D ゲーム化は **「クリエイティブデベロッパーを名乗る」目的が明確な人向け** であり、`tomolatoon.net` の現在の目的（学生コミュニティ自己紹介＋技術発信）には過剰になる可能性が高いと考えられます。`docs/web_best_practice.md` の「Rule of Least Power」と矛盾します。
- 一方で、**Vue 統合がすでに `package.json` に入っているがまだ使われていない** ことから、「小さなインタラクティブ島」を 1 つだけ作る（例: アバターをホバーで反転させる、所属コミュニティの略称ホバーで説明を出す等）程度は、現行スタックと整合性が高い拡張だと考えられます。

### 結論的な推奨ルート（推測）

`tomolatoon.net` には **「パターン A の名刺を維持しつつ、Step 1（ブログ集約）→ Step 2 の About / Projects 追加へ段階拡張」** がもっとも事故の少ない経路だと考えられます。`docs/personal-website-content-guide.md` の Step 1〜3（About → Projects → Blog）とほぼ同じ流れであり、整合的です。

---

## 5. 参考資料（出典一覧）

### 各サイト（実在 URL）

- [Lee Robinson — leerob.com](https://leerob.com/)
- [Dan Abramov — overreacted.io](https://overreacted.io/)
- [Sindre Sorhus — sindresorhus.com](https://sindresorhus.com/)
- [Shawn "swyx" Wang — swyx.io](https://www.swyx.io/)
- [Brittany Chiang — brittanychiang.com](https://brittanychiang.com/)
- [Brian Lovin — brianlovin.com](https://brianlovin.com/) / [How my website works](https://brianlovin.com/writing/how-my-website-works-C9iyYC3)
- [Josh W. Comeau — joshwcomeau.com](https://www.joshwcomeau.com/)
- [Wes Bos — wesbos.com](https://wesbos.com/) / [My New Website! Here are the deets](https://wesbos.com/new-wesbos-website)
- [Sarah Drasner Design — sarahdrasnerdesign.com](https://sarahdrasnerdesign.com/) / [Sarah's tech blog — sarah.dev](https://sarah.dev/)
- [Bruno Simon — bruno-simon.com](https://bruno-simon.com/) / [Bruno's portfolio source — folio-2025](https://github.com/brunosimon/folio-2025)
- [Henry Heffernan — henryheffernan.com](https://henryheffernan.com/) / [Henry Heffernan OS Portfolio](https://os.henryheffernan.com/about)
- [arutega.jp（平尾誠ほか）](https://arutega.jp/)

### キュレーション記事 / 第三者解説

- [curious.page - Best Personal Website Examples for Developers (2026)](https://curious.page/blog/best-personal-website-examples-developers)
- [Hostinger - 25 web developer portfolio examples from top developers](https://www.hostinger.com/tutorials/web-developer-portfolio)
- [Colorlib - 21 Best Developer Portfolio Websites — Real Examples (2026)](https://colorlib.com/wp/developer-portfolios/)
- [Site Builder Report - Web Designer & Developer Portfolios: 25 Inspiring Examples](https://www.sitebuilderreport.com/inspiration/web-developer-designer-portfolios)
- [Scrimba - 10 minimal portfolio examples for web developers](https://scrimba.com/articles/minimal-web-developer-portfolio-examples/)
- [DesignRush - Colorful Website Design Inspiration: Sarah Drasner Design](https://www.designrush.com/best-designs/websites/sarah-drasner-design)
- [Creative Bloq - This might be the coolest design portfolio you'll ever see](https://www.creativebloq.com/news/3d-car-portfolio)
- [Awwwards - Bruno's Portfolio SOTD](https://www.awwwards.com/sites/brunos-portfolio)
- [Awwwards - Best Portfolio Websites](https://www.awwwards.com/websites/portfolio/)
- [arutega - 参考にしたい日本人デザイナー・エンジニアのポートフォリオサイトまとめ](https://arutega.jp/knowledge/japanese-portfolio/)
- [マイナビクリエイター - イケてる Web デザインで作られたポートフォリオサイト 20 選](https://mynavi-creator.jp/knowhow/article/cool-web-design-portfolio-sites)
- [LIG - Web デザイナー厳選！参考になるおしゃれなポートフォリオサイト 16 選](https://liginc.co.jp/602521)
- [emmabostian/developer-portfolios（GitHub）](https://github.com/emmabostian/developer-portfolios)

### 技術背景の一次情報

- [GitHub - gaearon/overreacted.io](https://github.com/gaearon/overreacted.io)
- [GitHub - bchiang7/v4](https://github.com/bchiang7/v4)
- [Jampack - Optimizing Swyx's personal site](https://jampack.divriots.com/devlog/swyx-personal-site/)
- [Astro 公式 - Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Hacker News - Henry Heffernan's 3D Portfolio](https://news.ycombinator.com/item?id=31313187)

### 関連内部ドキュメント

- [`docs/personal-website-content-guide.md`](./personal-website-content-guide.md) — 個人サイトに掲載すべきコンテンツのガイド
- [`docs/web_best_practice.md`](./web_best_practice.md) — Web 全般のベストプラクティス（Rule of Least Power、Progressive Enhancement など、パターン F の判断材料）

---

> **このドキュメントは執筆時点（2026 年 5 月）の各サイトの状態を元にしています。** 個人サイトはリニューアル頻度が高いため、リンク先の構成が変わっている可能性があります。
