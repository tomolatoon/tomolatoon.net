# 個人サイト掲載コンテンツガイド

エンジニア / クリエイター向けの個人サイト（ポートフォリオサイト）に **「何を載せるか」「なぜ載せるか」「どう書くか」** を、信頼できる情報源を元に整理したドキュメントです。

このリポジトリ（`tomolatoon.net`、Astro v5 + Vue + UnoCSS の静的サイト）は現状トップページに「名前・タグライン・短い bio・SNS リンク（GitHub / X / Qiita / Zenn）」のみが表示されている landing page 状態です（`src/pages/index.astro` 参照）。本ドキュメントは、ここから内容を拡充していく際の指針として利用することを想定しています。

> **本ドキュメントの読み方**
>
> - 各項目は **「なぜ必要か → 何を書くか → 実践のヒント」** で構成しています。
> - すべて掲載する必要はなく、自分のキャリアステージ・サイトの目的に応じて取捨選択してください。
> - 出典が明示されている記述は引用元の主張、明示されていない記述や「〜と考えられます」と書いた箇所は本ドキュメント執筆時の推測・補足です。

---

## 目次

1. [そもそも個人サイトに何を載せるべきか（全体像）](#1-そもそも個人サイトに何を載せるべきか全体像)
2. [必須セクション](#2-必須セクション)
   1. [About / 自己紹介](#21-about--自己紹介)
   2. [Skills / スキル](#22-skills--スキル)
   3. [Projects / 作品・成果物](#23-projects--作品成果物)
   4. [Contact / 連絡先](#24-contact--連絡先)
3. [推奨セクション](#3-推奨セクション)
   1. [Blog / 技術記事・執筆](#31-blog--技術記事執筆)
   2. [Resume / 履歴書（CV）](#32-resume--履歴書cv)
   3. [Now ページ・Uses ページ（developer culture 系）](#33-now-ページuses-ページdeveloper-culture-系)
   4. [経歴・タイムライン](#34-経歴タイムライン)
   5. [OSS・登壇・受賞・寄稿実績](#35-oss登壇受賞寄稿実績)
4. [サイト全体の設計指針](#4-サイト全体の設計指針)
5. [tomolatoon.net への提案](#5-tomolatoonnet-への提案)
6. [参考資料（出典一覧）](#6-参考資料出典一覧)

---

## 1. そもそも個人サイトに何を載せるべきか（全体像）

エンジニア向けの代表的なガイドでは、個人ポートフォリオの **コア構成要素は「About・Skills・Projects・Resume・Contact」の 5 つ** とされることが多いです。Hostinger のガイドでは「A strong developer portfolio should include About, Skills, Projects, Resume, and Contact Info sections.」と明示されています（[Hostinger - 25 web developer portfolio examples](https://www.hostinger.com/tutorials/web-developer-portfolio)）。

一方で、daily.dev の記事 [How to Build a Standout Developer Portfolio Site](https://daily.dev/blog/how-to-build-a-standout-developer-portfolio-site) では、**「About / Projects / Contact の 3 セクションだけでも、クライアントや採用担当者が知りたいことは充足する」** という立場を取っています。つまり、「全部入り」を目指すよりも **「自分のサイトが何を達成したいか」から逆算して必要なものだけを選ぶ** という姿勢が重要だと考えられます。

日本語圏のガイド（[レバテックキャリア - エンジニア向けポートフォリオの作り方](https://career.levtech.jp/guide/knowhow/article/61016/)、[パーソルクロステクノロジー - エンジニアポートフォリオの例](https://staff.persol-xtech.co.jp/corporate/security/article.html?id=236) など）でも、共通して **「自己紹介・スキル・成果物・連絡先」** の 4 点が中核要素として挙げられています。

サイトの目的別に重視すべきセクションが変わる、というのが本ドキュメントの推測ですが、典型的には以下のように整理できると考えられます。

- **転職・案件獲得が目的** → Projects と Resume、Contact を最重視
- **技術ブランディング・知見の発信が目的** → Blog と OSS / 登壇実績を最重視
- **趣味・自己表現のショーケース** → About と Projects の見せ方（デザイン）を最重視

`tomolatoon.net` は学生個人のサイトであり、`bio` に所属コミュニティ（UEC25, VLL, MMA, 工研, まにけん, squec）が並んでいることや SNS 欄に Qiita / Zenn が含まれていることから、**「技術ブランディング寄り＋ 自己表現要素も大切にしたい」サイト** だと推測されます。この前提を念頭に以下を読むと取捨選択しやすいはずです。

---

## 2. 必須セクション

### 2.1 About / 自己紹介

#### なぜ必要か

About は **「あなたが何者で、なぜそれをやっているか」を一文以上で伝えるための場所** です。Hostinger は「The introductory and About Me section should include a brief introduction about yourself, your background, and your expertise」と説明し、専門性と人柄の両方を伝えるべきだとしています（[Hostinger](https://www.hostinger.com/tutorials/web-developer-portfolio)）。

また、Indeed のキャリア記事 [How To Make a Web Developer Portfolio Website](https://www.indeed.com/career-advice/career-development/web-developer-portfolio-website) は **「About ページにはヘッドショット（顔写真）を入れて『人間味』を見せること」** を推奨しています。

#### 何を書くか

日本語のガイド [JimdoCafe - ホームページ自己紹介の必須 9 項目](https://www.jimdo.com/jp/blog-lp-jiko-syoukai/) や [ペライチ大学 - ポートフォリオサイトの作り方](https://peraichi.com/univ/20220815) を踏まえると、最低限以下が候補になります。

- 名前 / ハンドル
- 写真またはアバター画像
- 現在の所属・肩書き（学生なら大学・学年・専攻、社会人なら会社・職種）
- 興味分野（技術・趣味）
- 価値観・モチベーション（なぜそれをやっているか）
- 連絡経路（SNS や Email）

#### 実践のヒント

- 冒頭に長い経歴を並べるのではなく、**最初に「キャッチコピー的な 1〜2 行」** で印象を作るのが定番です（[マイナビクリエイター - ポートフォリオの序章を飾る自己紹介の書き方](https://mynavi-creator.jp/knowhow/article/profile-of-a-portfolio)）。
- 詳細な経歴は別途「タイムライン」や Resume に逃がすと、About 自体は読みやすくなります（推測）。
- 「親しみやすい文体で書く」「数字を入れると説得力が増す」と日本語圏のブログ系ガイドでは繰り返し推奨されています（[ブログエイト](https://blog8.jp/blog-profile-role/)、[Nakyublog](https://nakyublog.com/blog-profile/)）。

---

### 2.2 Skills / スキル

#### なぜ必要か

スキルセクションは **採用担当者・クライアント・コラボ希望者が「この人に依頼できるか」を判断するための速読領域** です。Hostinger は「The skills and technologies section shows the different skills and proficiencies」と説明しています（[Hostinger](https://www.hostinger.com/tutorials/web-developer-portfolio)）。

#### 何を書くか

- 言語（C++, TypeScript, Python など）
- フレームワーク・ライブラリ（Astro, Vue, React など）
- ツール（Git, Docker, CI/CD 系など）
- 環境（OS, エディタ, クラウド）
- 専門分野（フロントエンド / バックエンド / インフラ / 機械学習 / 競プロ / 低レイヤなど）

#### 実践のヒント

- 日本語ガイドの [FLEXY - エンジニアのポートフォリオの作り方](https://flxy.jp/media/article/28937) では **「スキルはグラフ化や数値化など工夫すると伝わりやすい」** とされています。ただし「★ 5 段階」などの主観評価は信頼性が低いと批判されがちなので、**「実務年数」「主要 OSS への貢献数」「コード行数」「資格・スコア」など客観的な数字** を添えると説得力が増すと考えられます。
- ロードマップ系ガイドの [roadmap.sh - Top 10 Web Developer Portfolio Templates](https://roadmap.sh/frontend/web-developer-portfolio) では、**「使える技術スタック」と「最も得意 / 主力スキル」を分けて表示する** デザインが多いと紹介されています。
- 「すべて並べる」よりも **応募・売り込み対象に関連するもの優先で並べ替える** ほうが効果的、というのが [The Muse - 6 Things You Should Put on Your Personal Website](https://www.themuse.com/advice/6-things-you-should-put-on-your-personal-websiteand-6-things-to-avoid-at-all-costs) の主張です。

---

### 2.3 Projects / 作品・成果物

#### なぜ必要か

Projects は **ポートフォリオの心臓部** であり、daily.dev は「The projects section is the heart of your portfolio and showcases your actual work, giving potential employers or clients insight into your capabilities and problem-solving skills.」と表現しています（[daily.dev](https://daily.dev/blog/how-to-build-a-standout-developer-portfolio-site)）。

#### 何を書くか

Hostinger と Indeed の両ガイドで共通して挙げられているのは以下の要素です（[Hostinger](https://www.hostinger.com/tutorials/web-developer-portfolio)、[Indeed](https://www.indeed.com/career-advice/career-development/web-developer-portfolio-website)）。

- プロジェクト名 / 一行概要
- 目的・解決した課題
- 使用技術スタック
- 自分の役割（チーム開発の場合）
- スクリーンショット / デモ動画 / ライブデモ
- ソースコードへのリンク（GitHub など）
- 直面した技術的課題と、どう乗り越えたか

#### 実践のヒント

- **数より質**。daily.dev は「Most developers do best with 3 to 6 projects. Fewer projects is fine if each one is strong and well explained.」としており、無理に数を埋めない方針を推奨しています（[daily.dev](https://daily.dev/blog/how-to-build-a-standout-developer-portfolio-site)）。
- 日本語ガイドの [パーソルクロステクノロジー - エンジニアポートフォリオの例](https://staff.persol-xtech.co.jp/corporate/security/article.html?id=236) でも、**「技術やツールを『なぜ選んだのか』まで説明すると伝わりやすい」** という同様の主張があります。
- 「Astro × Vue × UnoCSS で個人サイトを作る」ような **メタ的な題材自体も立派なプロジェクト** として掲載できます（推測）。`tomolatoon.net` の README にも採用技術が一覧化されているため、それを元に Projects 化しやすい状態と考えられます。

---

### 2.4 Contact / 連絡先

#### なぜ必要か

Contact は **「サイトを見た人を次の行動に進ませる」最後のゲート** です。daily.dev は「Make it ridiculously easy for your website visitors to get in touch with you」と強調しています（[daily.dev](https://daily.dev/blog/how-to-build-a-standout-developer-portfolio-site)）。

#### 何を書くか

Hostinger と TBH Creative のガイド（[TBH Creative - Contact page best practices](https://www.tbhcreative.com/blog/website-best-practices-contact-page/)）を踏まえると以下が候補です。

- Email アドレス（あるいは Contact Form）
- SNS / プロフェッショナルなリンク（GitHub, X, LinkedIn など）
- 必要であれば物理的な所在地（フリーランス・受託の場合のみ。学生個人サイトでは通常不要と考えられます）
- 返信目安（24h 以内 など、応答性についての期待管理）

#### 実践のヒント

- Email を平文で晒すとスパム収集の対象になるリスクがあると言われています。`mailto:` リンクと組み合わせて表示するか、Contact Form 経由にする、あるいは Cloudflare の Email Routing のようなエイリアスを使う方法があります（推測 + 一般的な慣行）。
- 「Download My Resume」「View My Work」「Contact Me」のような **CTA（Call to Action）ボタン** を主要ページ末尾に置くことが、Portfoliobox や Pixpa の記事で共通して推奨されています（[Portfoliobox - Mastering the call to action strategies](https://www.portfoliobox.com/magazine/mastering-the-call-to-action-strategies-for-your-website)、[Pixpa - How to Optimise Call-To-Action for Portfolio Website](https://www.pixpa.com/blog/how-to-optimise-call-to-action-for-portfolio-website)）。

---

## 3. 推奨セクション

### 3.1 Blog / 技術記事・執筆

#### なぜ必要か

Hostinger のガイドでは「Including guides, articles, blog posts, and other written content can help establish you as a thought leader and demonstrate your expertise and passion for the field.」と説明されています（[Hostinger](https://www.hostinger.com/tutorials/web-developer-portfolio)）。

日本語の解説 [とりあえず HP - 自己紹介サイトの作り方](https://pr.toriaez.jp/navi/column/2706.html) では、**「自己紹介サイト内にブログを設けることで、SNS よりまとまった形式で知見をストックでき、検索エンジン経由のアクセスも見込める」** とされています。

#### 何を書くか

- 自分のメモ・備忘録レベルの技術記事（学習ログ）
- 解決に時間がかかった問題のまとめ
- ライブラリの内部実装を読んだ記録
- イベント参加レポート
- 個人開発の振り返り

#### 実践のヒント

- すでに Qiita / Zenn を運用している場合、`tomolatoon.net` の `SocialLinks.astro` のように **外部記事への導線をリンクで集約する** だけでも十分機能すると考えられます。
- 自前のブログを持つ場合、Astro v5 の Content Collections は MDX や Markdown でブログを構築するのに向いており（[Astro 公式ドキュメント - Content Collections](https://docs.astro.build/en/guides/content-collections/)）、本リポジトリの構成とも親和性が高いです。

---

### 3.2 Resume / 履歴書（CV）

#### なぜ必要か

Hostinger は「While your portfolio itself is a showcase of your abilities, having a downloadable resume is a professional touch that many employers appreciate.」と書いており、Web 上のページに加えて **「ダウンロード可能な PDF 履歴書」** を置くと、採用フローでそのまま使ってもらえる利点があるとしています（[Hostinger](https://www.hostinger.com/tutorials/web-developer-portfolio)）。

#### 何を書くか・実践のヒント

- 名前・連絡先
- 学歴・職歴・インターン経験
- スキル / 資格
- 主要プロジェクト（Projects との重複は OK だが、より定量的に）
- 公開してもよい個人情報レベル（住所・電話番号など機微情報を載せるかは慎重に検討する必要があります）

学生のサイトの場合、PDF 履歴書まで載せるかは目的次第ですが、**インターン応募がある時期だけ公開する** という運用も現実的だと考えられます（推測）。

---

### 3.3 Now ページ・Uses ページ（developer culture 系）

エンジニア界隈の個人サイトには、**標準的な「About」を超えた以下の小さなページ** が掲載されることが多くあります。

- **Now ページ**: 「いまは何をやっているか」を継続更新するページ。発祥は Derek Sivers が提唱した [nownownow.com](https://nownownow.com/about) のムーブメント。
- **Uses ページ**: 「日常的に使っているハードウェア・ソフトウェア」をまとめるページ。Wes Bos がまとめている [uses.tech](https://uses.tech/) というリストが有名です。

これらは [Brian Lovin の personal-websites リスト](https://github.com/stars/brianlovin/lists/personal-websites) で言及されている著名なエンジニア個人サイト（Lee Robinson、Brian Lovin など）でもよく見られる構成要素です。

「載せると個性が伝わりやすく、回遊性も上がる」というのが本ドキュメントの推測ですが、必須ではないため、運用が続けられそうなときだけ取り入れるのがよいと考えられます。

---

### 3.4 経歴・タイムライン

経歴を年表 / タイムライン形式で見せる構成は、Indeed や SiteGround の記事 [SiteGround - The Best Web Developer Portfolio Examples](https://www.siteground.com/academy/web-developer-portfolio/) で紹介されている代表的なポートフォリオに頻繁に登場します。

学生の場合は **「いつから何の言語を触ったか」「いつからどのコミュニティに所属しているか」** を時系列で見せると、技術的成長の物語が伝わりやすいと考えられます（推測）。

---

### 3.5 OSS・登壇・受賞・寄稿実績

以下のような「外向きの活動」は、技術コミュニティでの信頼性（権威性）を補強します。日本語ガイドの [WEBST8 - ブログプロフィールの書き方](https://webst8.com/blog/blog-profile-role/) では **「保有特許・出版書籍などで信頼性・権威性を担保する」** ことが推奨されており、エンジニア版に置き換えると以下のようなものが該当します。

- OSS への commit / contributor 履歴（GitHub プロフィールへのリンクで代替も可）
- カンファレンス・LT 登壇のスライドや動画
- 雑誌・Web メディアへの寄稿
- ハッカソン・コンテスト受賞歴
- 競技プログラミングのレーティング（AtCoder, Codeforces など）
- 認定試験・資格

---

## 4. サイト全体の設計指針

ここまでの「何を載せるか」とは別軸の、**サイト全体としての設計指針** を整理します。本リポジトリには既に `docs/web_best_practice.md` という詳細なベストプラクティス集があるため、本セクションは「個人サイトの文脈での要点」のみに絞ります。

### 4.1 目的とターゲットを 1 行で決める

The Muse の [6 Things You Should Put on Your Personal Website](https://www.themuse.com/advice/6-things-you-should-put-on-your-personal-websiteand-6-things-to-avoid-at-all-costs) では、**「誰に何を伝えるサイトか」が定まっていないとコンテンツの優先順位が崩れる** と指摘されています。例：

- 「学生インターン応募用」→ Projects と Resume を上に
- 「個人技術ブログ」→ Blog を上に
- 「コミュニティ自己紹介」→ About と SNS を上に

### 4.2 視覚的シンプルさ・一貫性

[ペライチ大学](https://peraichi.com/univ/20220815) と [SiteGround Academy](https://www.siteground.com/academy/web-developer-portfolio/) の両方が **「デザインはシンプル・配色とレイアウトに統一感」** を共通して推奨しています。

### 4.3 ナビゲーションを明確に

[Network Solutions - What Pages Should I Have on My Personal Website?](https://www.networksolutions.com/blog/personal-website-pages/) では、**「主要ページが 3 クリック以内で到達できる」「ハンバーガーメニューだけに頼らない」** ことが推奨されています。

### 4.4 アクセシビリティと SEO

`docs/web_best_practice.md` で既に詳細に整理されている通り、画像 alt、見出し階層、`<html lang>`、`<title>`、`<meta description>`、OGP は必須です。個人サイトの文脈では特に、**「OGP 画像で『誰のサイトか』が一目でわかる」** ことが SNS 経由の発見可能性に直結します（推測ですが、ほぼ業界共通の運用と考えられます）。

### 4.5 メンテナンス計画を立てる

個人サイトが古くなる主因は **「最後の更新が n 年前で止まっている」** です。Now ページのような **更新サイクルを内包する仕組み** を入れる、もしくは Projects / Blog だけは定期更新するなどの運用ルールを決めておくことが望ましいと考えられます（推測）。

---

## 5. tomolatoon.net への提案

現在の `src/pages/index.astro` と `src/constants/site.ts` の内容を踏まえて、**今のサイトを壊さずに段階的に追加できる順序** を推測ベースで提案します（あくまで推測なので、必要に応じて取捨選択してください）。

| Step | 追加要素                                                | 理由                                                                |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| 1    | About ページ（経歴 + 所属の各略称の解説）               | 現状の bio が略称のみで初見には読み解けないため                     |
| 2    | Projects ページ（OSS や個人開発、当サイト自体も含めて） | 技術ブランディング上、最も影響が大きい                              |
| 3    | Blog 一覧 or 外部記事リンク集（Qiita/Zenn を集約）      | 既に書いている記事の発見性を高めるため                              |
| 4    | Contact 強化（Email を表示 or 問い合わせ手段の明示）    | 現状は SNS DM 頼みのため                                            |
| 5    | Now / Uses ページ                                       | 個性・更新ネタの恒常化                                              |
| 6    | Resume PDF                                              | インターン・就活時期に合わせて。常時公開する必要はないと考えられます |

`src/constants/site.ts` の `SITE_DESCRIPTION` が「C++ とボカロが好きな一般大学生」となっており、検索結果や OGP に直結するため、**About ページの拡充と同時に description も「サイトの目的が一行で伝わる」表現に磨く** ことも検討するとよいでしょう（推測）。

---

## 6. 参考資料（出典一覧）

### 英語圏（信頼性高めの技術メディア・テンプレートガイド）

- [Hostinger - 25 web developer portfolio examples from top developers](https://www.hostinger.com/tutorials/web-developer-portfolio)
- [daily.dev - How to Build a Standout Developer Portfolio Site](https://daily.dev/blog/how-to-build-a-standout-developer-portfolio-site)
- [Indeed - How To Make a Web Developer Portfolio Website (Plus Tips)](https://www.indeed.com/career-advice/career-development/web-developer-portfolio-website)
- [SiteGround Academy - The Best Web Developer Portfolio Examples, Ideas & Tips](https://www.siteground.com/academy/web-developer-portfolio/)
- [roadmap.sh - Top 10 Web Developer Portfolio Templates](https://roadmap.sh/frontend/web-developer-portfolio)
- [The Muse - 6 Things You Should Put on Your Personal Website—and 6 Things to Avoid](https://www.themuse.com/advice/6-things-you-should-put-on-your-personal-websiteand-6-things-to-avoid-at-all-costs)
- [Network Solutions - What Pages Should I Have on My Personal Website?](https://www.networksolutions.com/blog/personal-website-pages/)
- [TBH Creative - Website best practices for common pages, part 1: Contact pages](https://www.tbhcreative.com/blog/website-best-practices-contact-page/)
- [Portfoliobox - Mastering the call to action strategies for your website](https://www.portfoliobox.com/magazine/mastering-the-call-to-action-strategies-for-your-website)
- [Pixpa - How to Optimise Call-To-Action for Portfolio Website](https://www.pixpa.com/blog/how-to-optimise-call-to-action-for-portfolio-website)
- [Fiero Code - The Ultimate Guide to Your Personal Portfolio Website](https://fierocode.com/blog/the-ultimate-guide-to-your-personal-portfolio-website/)

### 日本語圏（キャリア / ブログ運用ガイド）

- [レバテックキャリア - エンジニア向けポートフォリオの作り方と参考例](https://career.levtech.jp/guide/knowhow/article/61016/)
- [パーソルクロステクノロジー - エンジニアポートフォリオの例とは](https://staff.persol-xtech.co.jp/corporate/security/article.html?id=236)
- [FLEXY - エンジニアのポートフォリオの作り方](https://flxy.jp/media/article/28937)
- [Sky 株式会社 - エンジニアのポートフォリオの作り方とは？](https://www.sky-career.jp/media/article/579/)
- [ペライチ大学 - ポートフォリオサイトの作り方](https://peraichi.com/univ/20220815)
- [マイナビクリエイター - ポートフォリオの序章を飾る自己紹介の書き方](https://mynavi-creator.jp/knowhow/article/profile-of-a-portfolio)
- [とりあえず HP - 自己紹介サイトの作り方](https://pr.toriaez.jp/navi/column/2706.html)
- [JimdoCafe - ホームページ自己紹介の必須 9 項目](https://www.jimdo.com/jp/blog-lp-jiko-syoukai/)
- [WEBST8 - ブログプロフィールの書き方](https://webst8.com/blog/blog-profile-role/)
- [ブログエイト - ブログプロフィールの書き方](https://blog8.jp/blog-profile-role/)
- [Nakyublog - 具体例つき：ブログの自己紹介の書き方](https://nakyublog.com/blog-profile/)

### 著名なエンジニア個人サイト（参考事例）

- [Lee Robinson](https://leerob.com/) — Cursor の DevRel、元 Vercel。Blog・Uses・Projects などが整理された典型例
- [Brian Lovin](https://brianlovin.com/) — Notion の Product Designer。`How my website works` というメタ記事もある
- [Brian Lovin の "Personal websites" GitHub list](https://github.com/stars/brianlovin/lists/personal-websites) — 著名な開発者の個人サイト一覧
- [uses.tech](https://uses.tech/) — Uses ページのリスト（Wes Bos 運営）
- [nownownow.com](https://nownownow.com/about) — Now ページのリスト（Derek Sivers 提唱）

### 関連する技術 / 仕様の一次情報

- [Astro 公式ドキュメント - Content Collections](https://docs.astro.build/en/guides/content-collections/) — Blog セクションを Astro で実装する場合の公式リファレンス
- 本リポジトリ内 [`docs/web_best_practice.md`](./web_best_practice.md) — HTML / CSS / a11y / SEO / セキュリティなど横断のベストプラクティス集

---

> **このドキュメントは執筆時点（2026 年 5 月）の情報を元に整理しています。** Web 上のガイドや事例は陳腐化しやすいため、参考資料は定期的に最新版を確認してください。
