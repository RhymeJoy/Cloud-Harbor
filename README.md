# 雲港商行

這是雲港商行的網站，用來整理 TWBC 攤販介紹、預計販售商品與後續上架資訊。專案以 Vue 3 + Vite 建立，原始碼不保留手寫 `index.html` 入口，也不在 HTML 內預放掛載節點；Vite 會在開發與建置時產生必要文件外殼，Vue 入口會動態建立根容器並管理頁面內容與 meta 資訊。

## 開發

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

## 商品圖片

商品圖片統一放在 `public/products/`，資料檔使用 `import.meta.env.BASE_URL` 產生路徑，部署到 GitHub Pages 子路徑時也能正確載入。

## 雙語內容

雙語文字集中在 `src/i18n/index.js`。元件透過 `useI18n()` 取得 `t()` 與 `setLocale()`，目前支援 `zh-TW` 與 `en`，也會同步更新 `<html lang>`、頁面標題與 meta description。

## GitHub Pages 部署

1. 將專案推送到 GitHub。
2. 在 Repository Settings > Pages 將 Source 設為 GitHub Actions。
3. `.github/workflows/deploy.yml` 會安裝依賴、建置 `dist`，並發布到 GitHub Pages。
