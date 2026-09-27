// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomePage from './components/HomePage.vue'
import Wordmark from './components/Wordmark.vue'
import FiveStep from './components/FiveStep.vue'
import NavCommunity from './components/NavCommunity.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 把首页放在默认 Hero 之后，便于保留 VitePress 的路由能力并完全控制首页内容。
      'home-hero-after': () => h(HomePage)
    })
  },
  enhanceApp({ app }) {
    app.component('Wordmark', Wordmark)
    app.component('FiveStep', FiveStep)
    app.component('NavCommunity', NavCommunity)
  }
} satisfies Theme
