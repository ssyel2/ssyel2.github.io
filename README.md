# SSYEL — Computational Neuroscience

个人科研主页，面向 GitHub Pages 的静态构建。内容聚焦数字神经元、脑电智能分析与可追溯研究方法。

## 本地使用

```bash
npm install
npm run dev
```

构建 GitHub Pages 版本：

```bash
npm run build
```

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动构建并发布公开网站。

## 主要内容位置

- 页面内容：`app/page.tsx`
- 视觉样式：`app/globals.css`
- 页面元数据：`index.html` 与 `app/layout.tsx`
- 社交分享图：`public/og.png`
