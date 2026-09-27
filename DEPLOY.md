# 发布流程：Markdown 写好 → 网站自动上线

> 核心心法：**你只写 Markdown，其余交给流水线。**
> 本地写 → `git push` → Cloudflare Pages 自动构建 → jianfai.com 自动更新，全程 1-2 分钟。

## 一、首次部署（只做一次）

### 1. 推到 GitHub

```bash
cd <你的本地仓库路径>    # 即 jianfai-site 所在目录，按自己的机器填写
git init
git add .
git commit -m "init: jianfai.com 官网上线"
# 在 github.com 新建仓库 jianfai-site（建议 Public，MIT 开源）
git remote add origin git@github.com:你的用户名/jianfai-site.git
git branch -M main
git push -u origin main
```

### 2. 连接 Cloudflare Pages

1. 打开 https://dash.cloudflare.com → **Workers 和 Pages** → **创建** → **Pages** → **连接到 Git**
2. 授权 GitHub，选择 `jianfai-site` 仓库
3. 构建配置（照抄）：
   - 项目名称：`jianfai`（会生成 `jianfai.pages.dev` 预览域）
   - 生产分支：`main`
   - 框架预设：`VitePress`（没有就选 `None`）
   - 构建命令：`npm run build`
   - 构建输出目录：`docs/.vitepress/dist`
   - 环境变量：`NODE_VERSION` = `22`
4. 点 **保存并部署**，等 1-2 分钟构建完成

### 3. 绑定 jianfai.com

域名已在你的 Cloudflare 账号里，绑定零配置：

1. Pages 项目 → **自定义域** → **设置自定义域**
2. 输入 `jianfai.com`，确认（Cloudflare 自动加 CNAME）
3. 建议同时绑 `www.jianfai.com`，并在 DNS 里把它 301 到主域
4. 等 HTTPS 证书签发完成（几分钟），访问 https://jianfai.com 验证

## 二、日常发布（每天就是这一步）

```bash
# 写完 Markdown 后：
cd <你的本地仓库路径>    # 即 jianfai-site 所在目录，按自己的机器填写
git add .
git commit -m "教程：新增 03-提示词管理"
git push
# → 1-2 分钟后 jianfai.com 自动更新，完事
```

## 三、写教程/文章的规范

| 事项 | 规范 |
| --- | --- |
| 文件位置 | WorkBuddy 教程 `docs/workbuddy/tutorial/`，Codex `docs/codex/tutorial/`，文章 `docs/articles/` |
| 文件命名 | `01-标题.md`（数字前缀决定排序） |
| 页面开头 | frontmatter：`title` + `description`（SEO 必需） |
| 图片 | 放 `docs/public/images/`，正文引用 `/images/文件名.png` |
| 模板 | `docs/_templates/tutorial-template.md`，复制改内容 |
| 新栏目 | 在 `docs/.vitepress/config.mts` 的 `sidebar` 里登记 |

### frontmatter 示例

```markdown
---
title: 03 提示词管理
description: 把常用提示词沉淀成可复用资产
---

正文……
```

## 四、本地预览（发布前想看效果）

```bash
npm run dev        # 改动实时热更新
```

## 五、上线后（建议按顺序做）

1. **百度收录**：百度站长平台（ziyuan.baidu.com）添加站点 → 验证（把 meta 标签加进 `config.mts` 的 head，配置里已留注释位）→ 提交 `https://jianfai.com/sitemap.xml`
2. **Google 收录**：Search Console 同样操作
3. **统计**：Cloudflare 控制台 → 你的域名 → 分析和日志（免费，零代码接入）
4. **待办提醒**（来自品牌知识库）：
   - ICP 备案方案拍板（P0：微信生态落地页需要国内备案子域）
   - 企微二维码、问卷入口、平台数据回填
   - GitHub 链接替换：`config.mts` 里 `YOUR_GITHUB` 改成真实仓库名
   - 邮箱 hi@jianfai.com 确认后在 `/contact/` 更新

## 六、回滚

Pages 项目 → **部署** → 找到任意历史部署 → **回滚**。内容即代码，永不丢稿。
