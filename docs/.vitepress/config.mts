import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '简法 JIANF·AI',
  description:
    '把复杂留给 AI，把简单留给工作。一套用 AI 把办公效率做出来的方法体系——从工具上手、方法论到企业落地，全部有标准动作。',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0B2545' }],
    // 百度站长验证
    ['meta', { name: 'baidu-site-verification', content: 'codeva-JE0aHW71YE' }],
    // Google 站长验证
    ['meta', { name: 'google-site-verification', content: 'cj6a-iHAyOBhoNJdj3usaqd-uhixN8Pr10mUxegSBpQ' }],
    // Open Graph（站点级兜底；页面级 og:title/og:description/og:url 由下方 transformHead 按页生成）
    ['meta', { property: 'og:site_name', content: '简法 JIANF·AI' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://jianfai.com/og-cover.png' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }]
  ],
  // 页面级 SEO：按每篇 frontmatter 的 title/description 生成 og 标签与规范链接
  transformHead({ head, pageData }) {
    const site = 'https://jianfai.com'
    const fm = pageData.frontmatter
    // index.md -> 目录路径，foo.md -> /foo，配合 cleanUrls 无尾斜杠
    let path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    if (path.endsWith('/')) path = path.slice(0, -1)
    const url = site + '/' + path
    head.push(['meta', { property: 'og:title', content: fm.title || '简法 JIANF·AI' }])
    head.push(['meta', { property: 'og:description', content: fm.description || '把复杂留给 AI，把简单留给工作。' }])
    head.push(['meta', { property: 'og:url', content: url }])
    head.push(['link', { rel: 'canonical', href: url }])
    // 注意：不要 return head，否则整组标签会被重复注入
  },
  // 站点地图：部署后提交 https://jianfai.com/sitemap.xml 到百度/Google 站长
  sitemap: { hostname: 'https://jianfai.com' },
  // Markdown 即页面的基础：目录页带摘要
  lastUpdated: true,
  cleanUrls: true,
  // 模板目录不参与构建（复制使用）
  srcExclude: ['**/_templates/**'],
  themeConfig: {
    logo: '/mark.svg',
    siteTitle: '简法 JIANF·AI',
    // 导航只保留用户真正需要的入口，减少新手第一次进入时的选择成本。
    // 首页置顶；WorkBuddy 与 Codex 为两个顶级教程栏目。导航用主关键词「教程」，系列名「从入门到放弃」留给栏目页 H1 与侧边栏。
    nav: [
      { text: '首页', link: '/' },
      { text: 'WorkBuddy 教程', link: '/workbuddy/', activeMatch: '^/workbuddy/' },
      { text: 'Codex 教程', link: '/codex/' },
      { text: '简法五步', link: '/method/' },
      { text: '案例库', link: '/cases/' },
      { text: '训练营', link: '/training/' },
      { text: '企业服务', link: '/enterprise/' },
      { component: 'NavCommunity' },
      { text: '联系', link: '/contact/' }
    ],
    // 本地全文搜索（无后端）
    search: { provider: 'local' },
    // 侧边栏：教程类栏目带目录，营销页不带
    sidebar: {
      '/workbuddy/': [
        {
          text: 'WorkBuddy 从入门到放弃',
          items: [
            { text: '栏目总览', link: '/workbuddy/' },
            { text: '序章 自检', collapsed: false, items: [
              { text: '0.1 这套教程给谁看', link: '/workbuddy/tutorial/00-序章/01-这套教程给谁看' },
              { text: '0.2 三个自检问题', link: '/workbuddy/tutorial/00-序章/02-三个自检问题' },
              { text: '0.3 能力边界一张图', link: '/workbuddy/tutorial/00-序章/03-能力边界一张图' }
            ] },
            { text: '第一章 入门', collapsed: true, items: [
              { text: '1.1 认识 WorkBuddy', link: '/workbuddy/tutorial/01-入门/01-认识WorkBuddy' },
              { text: '1.2 安装与启动', link: '/workbuddy/tutorial/01-入门/02-安装与启动' },
              { text: '1.3 主界面、任务与工作区', link: '/workbuddy/tutorial/01-入门/03-主界面任务与工作区' },
              { text: '1.4 跑通第一个真实任务', link: '/workbuddy/tutorial/01-入门/04-跑通第一个真实任务' },
              { text: '1.5 装上第一个 Skill', link: '/workbuddy/tutorial/01-入门/05-装上第一个Skill' },
              { text: '1.6 入门验收与报错自救', link: '/workbuddy/tutorial/01-入门/06-入门验收与报错自救' }
            ] },
            { text: '第二章 进阶', collapsed: true, items: [
              { text: '2.1 可复制指令模板', link: '/workbuddy/tutorial/02-进阶/01-可复制指令模板' },
              { text: '2.2 专家与专家团', link: '/workbuddy/tutorial/02-进阶/02-专家与专家团' },
              { text: '2.3 连接器：接入飞书与 IM', link: '/workbuddy/tutorial/02-进阶/03-连接器接入飞书与IM' },
              { text: '2.4 办公三件套', link: '/workbuddy/tutorial/02-进阶/04-办公三件套' },
              { text: '2.5 文件与信息管理', link: '/workbuddy/tutorial/02-进阶/05-文件与信息管理' },
              { text: '2.6 场景 Case', link: '/workbuddy/tutorial/02-进阶/06-场景Case' },
              { text: '2.7 进阶验收', link: '/workbuddy/tutorial/02-进阶/07-进阶验收' }
            ] },
            { text: '第三章 精通', collapsed: true, items: [
              { text: '3.1 打造 Skill', link: '/workbuddy/tutorial/03-精通/01-打造Skill' },
              { text: '3.2 Skill 封装方法论', link: '/workbuddy/tutorial/03-精通/02-Skill封装方法论' },
              { text: '3.3 自动化任务与可靠性', link: '/workbuddy/tutorial/03-精通/03-自动化任务与可靠性' },
              { text: '3.4 多 Agent 系统设计', link: '/workbuddy/tutorial/03-精通/04-多Agent系统设计' },
              { text: '3.5 岗位路线图', link: '/workbuddy/tutorial/03-精通/05-岗位路线图' },
              { text: '3.6 行业路线图', link: '/workbuddy/tutorial/03-精通/06-行业路线图' },
              { text: '3.7 精通验收', link: '/workbuddy/tutorial/03-精通/07-精通验收' }
            ] },
            { text: '第四章 放弃', collapsed: true, items: [
              { text: '4.1 五种该果断放弃的场景', link: '/workbuddy/tutorial/04-放弃/01-五种该放弃的场景' },
              { text: '4.2 自动化的隐形成本', link: '/workbuddy/tutorial/04-放弃/02-自动化的隐形成本' },
              { text: '4.3 反模式清单', link: '/workbuddy/tutorial/04-放弃/03-反模式清单' },
              { text: '4.4 退化路线', link: '/workbuddy/tutorial/04-放弃/04-退化路线' },
              { text: '4.5 用与不用决策树', link: '/workbuddy/tutorial/04-放弃/05-用与不用决策树' },
              { text: '4.6 结语：工具会变，方法不变', link: '/workbuddy/tutorial/04-放弃/06-结语-工具会变方法不变' }
            ] },
            { text: '附录', collapsed: true, items: [
              { text: '附录 A 常用指令模板', link: '/workbuddy/tutorial/附录/A-常用指令模板' },
              { text: '附录 B 场景速查表', link: '/workbuddy/tutorial/附录/B-场景速查表' },
              { text: '附录 C 可复制提示词汇总', link: '/workbuddy/tutorial/附录/C-可复制提示词汇总' },
              { text: '附录 D 常见问题', link: '/workbuddy/tutorial/附录/D-常见问题' }
            ] }
          ]
        }
      ],
      '/codex/': [{ text: 'Codex', items: [{ text: '栏目总览', link: '/codex/' }] }],
      '/method/': [{ text: '简法工作法', items: [{ text: '五步与五要素', link: '/method/' }] }]
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: '简法 JIANF·AI · 把复杂留给 AI，把简单留给工作',
      copyright: 'Copyright © 2026 简法 · 达哥讲AI 出品 · jianfai.com'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/fullbearded/jianfai' }]
  }
})
