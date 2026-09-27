# SEO

> 日期：2026-09-27 · 范围：`docs/workbuddy/`（1 栏目首页 + 27 篇教程 + 5 幕目录 + 4 附录 + 4 附录目录页）+ VitePress 工程配置

## 一、做了什么

### 1. 关键词矩阵（按页面分组）

| 页面组 | 主关键词 | 辅助词 |
| --- | --- | --- |
| 栏目首页 | WorkBuddy 教程 | WorkBuddy 实战案例、从入门到放弃 |
| 系列总目录 | WorkBuddy 从入门到放弃 | 保姆级教程、WorkBuddy 中文教程 |
| 1.1 / 序章 | WorkBuddy 是什么 | AI 办公工作台、能力边界 |
| 1.2 安装 | WorkBuddy 下载安装教程 | WorkBuddy 安装、登录配置 |
| 第一幕其余 | WorkBuddy 第一个任务 / Skill | 主界面、验收清单 |
| 2.x 进阶 | WorkBuddy 指令模板 / 专家 / 连接器 | 飞书接入、办公三件套、知识库 |
| 3.x 精通 | 打造 Skill / 多 Agent / 定时任务 | 岗位路线图、行业落地 |
| 4.x 放弃 | 该不该用 AI / 自动化成本 | 反模式、决策树、止损 |
| 附录 | WorkBuddy 提示词 / 常见问题 | 指令模板、速查表 |

差异化定位依据（2026-09-27 搜索调研）：WorkBuddy 官方文档为英文，中文 SERP 缺系统教程；竞品（深云等）做的是问答式知识库，「从入门到放弃 + 会止损」角度无人占位。

### 2. 改动清单

| #   | 改动                     | 文件数 | 说明                                                                                                               |
| --- | ---------------------- | --- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | title/description 关键词化 | 41  | title 含品牌词/需求词（13-34 字符）；description 45-78 汉字，含行动点                                                               |
| 2   | 补 H1                   | 33  | 27 篇正文 + 6 个 index 页此前无 H1 或 H1 过短，已补齐且与 title 主关键词一致                                                            |
| 3   | robots.txt             | 1   | 新建 `public/robots.txt`，指向 sitemap.xml                                                                            |
| 4   | 页面级 OG + canonical     | 配置  | config.mts 增加 `transformHead`：每页生成 og:title/og:description/og:url/canonical（各恰好 1 条）；删除全局写死的 og:title/og:url 重复项 |
| 5   | 构建验证                   | -   | `vitepress build` 通过，全站 workbuddy 页面抽查通过                                                                         |

注：栏目首页 H1 你已手动改为「WorkBuddy从入门到精通」，已保留——与 frontmatter 的「从入门到放弃」形成双关键词覆盖，正好。

## 二、自检评分

| 检查项                               | 状态                       |
| --------------------------------- | ------------------------ |
| 每页唯一 title（含关键词）                  | ✅ 41/41                  |
| title 长度 13-34 字符（SERP 不截断）       | ✅                        |
| description 45-78 字（不截断、含 CTA）    | ✅                        |
| 每页恰好 1 个 H1 且含关键词                 | ✅ 33 补齐                  |
| og:title/description/url 页面级生成    | ✅ 构建产物验证                 |
| canonical 每页 1 条                  | ✅ 全站抽查                   |
| robots.txt + sitemap              | ✅                        |
| 内链结构（总目录/幕目录/上下篇）                 | ✅ 原有保留                   |
| 结构化数据 JSON-LD（FAQ/BreadcrumbList） | ⚠️ 未做，建议后续               |
| 正文内容                              | ⚠️ 多数为大纲状态，SEO 上限取决于正文落地 |

## 三、后续建议（按优先级）

1. **提交收录**：部署后到百度站长平台（config 里已留验证码占位）与 Google Search Console 提交 `https://jianfai.com/sitemap.xml`。
2. **正文落地**：优先写 1.2 安装、1.1 是什么、附录 D 常见问题——搜索意图最强；每篇正文按 frontmatter 的 description 兑现承诺，首 150 字内给核心答案。
3. **FAQ 结构化数据**：附录 D 页面加 JSON-LD FAQPage schema，可争取百度/Google 富摘要。
4. **Case 库补位**：`cases/` 目录还是空的，"物流周报自动化"这类长尾词竞争极低，值得单独成页。
5. **外链引用**：正文撰写时每 500 字至少 1 处外部权威引用（如 WorkBuddy 官方文档 workbuddy.ai）。

## 四、回滚

所有改动未提交 git，`git diff` / `git checkout -- docs/workbuddy docs/.vitepress/config.mts` 可整体回滚。
