# Tech Blog

## 技術ブログ

Tech Blog

## 機能概要

- **Qiita 記事一覧**：自分がこれまでに投稿した Qiita 記事を一覧で表示できます
- **MicroCMS 記事一覧**：自分がこれまでに投稿した MicroCMS 記事を一覧で表示できます

## スクリーンショット

![メイン画面](./tech-blog--tech-blog-1eb1a.asia-east1.hosted.app_.png)

## 使用技術

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-06B6D4?logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.46-06B6D4?logo=daisyui&logoColor=white)

![Firebase](https://img.shields.io/badge/Firebase-11.7.3-FFCA28?logo=firebase&logoColor=white)
![Firebase App Hosting](https://img.shields.io/badge/FirebaseAppHosting-11.7.3-FFCA28?logo=firebase&logoColor=white)

![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/ReactTestingLibrary-E33332?logo=testinglibrary&logoColor=white)

## 必要環境

- Node.js v20.19.0 以上
- npm

## セットアップ

### 1.リポジトリをクローン

```bash
$ git clone https://github.com/asa129/tech-blog
$ cd tech-blog
```


### 2.パッケージインストール

```bash
$ npm install
```


### 3.環境変数を設定

必要な API キー、アクセストークン、URL

- Qiita：
https://qiita.com/api/v2/docs
- MicroCMS：
https://microcms.io/
- LINKPREVIEW：
https://my.linkpreview.net/

`.env.example`を`.env`に変更して、以下を設定してください

```bash
QIITA_API_TOKEN=your_qiita_api_token
X_MICROCMS_API_KEY=your_microcms_api_key
LINKPREVIEW_API_KEY=your_linkpreview_api_key
```

### 4.開発サーバー起動

```bash
npm run dev
```

### 5.ブラウザで URL にアクセス
http://localhost:3000
