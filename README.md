# 简法 JIANF·AI · 官网

> 把复杂留给 AI，把简单留给工作。  
> 一套用 AI 把办公效率做出来的方法体系——从工具上手、方法论到企业落地，全部有标准动作。

- **线上地址**：https://jianfai.com
- **技术栈**：[VitePress](https://vitepress.dev/)（Markdown 即页面） + Cloudflare Pages（推送自动部署）
- **协议**：代码 MIT；品牌资产（Logo / VI / 文案）版权归 简法 所有，详见 LICENSE

## 快速开始

```bash
# 需要 Node.js 20+
npm install
npm run dev        # 本地预览 http://127.0.0.1:5173
npm run build      # 构建到 docs/.vitepress/dist
npm run preview    # 本地预览构建产物
```

## 内容写作

- 教程放 `docs/workbuddy/tutorial/`、`docs/codex/tutorial/`，命名 `01-标题.md`
- 文章放 `docs/articles/`
- 图片放 `docs/public/images/`，正文用 `/images/xxx.png` 引用
- 新页面模板在 `docs/_templates/`
- 写完推送 `main` 分支，Cloudflare Pages 自动构建上线（见 `DEPLOY.md`）

## 目录结构

```
docs/
├── index.md              主页（9 屏结构，HomePage.vue 渲染）
├── workbuddy/            WorkBuddy 栏目（教程 + Case）
├── codex/                Codex 栏目
├── method/               简法工作法（五步 + 五要素）
├── cases/                案例库
├── articles/             文章库（公众号长文镜像）
├── training/             训练营
├── enterprise/           企业 AI 落地
├── community/            研习社（交流群）
├── about/  contact/      关于 / 建联
├── _templates/           页面与教程模板
├── public/               静态资源（favicon / 图片）
└── .vitepress/
    ├── config.mts        站点配置（导航 / 搜索 / sitemap）
    └── theme/            主题（VI 令牌 + 组件）
        ├── style.css     墨蓝 + AI 橙 VI 落地
        └── components/   HomePage / Wordmark / FiveStep
```
