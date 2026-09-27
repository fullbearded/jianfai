<script setup lang="ts">
import Wordmark from './Wordmark.vue'
import FiveStep from './FiveStep.vue'

const taskTypes = [
  { title: '办公文档', detail: 'Word · Excel · PPT', href: '/workbuddy/', mark: '01' },
  { title: '文件与远程', detail: '整理 · 查找 · 执行', href: '/workbuddy/', mark: '02' },
  { title: '资讯与知识', detail: '收集 · 筛选 · 复用', href: '/articles/', mark: '03' },
  { title: '专业分析', detail: '研究 · 诊断 · 判断', href: '/cases/', mark: '04' },
  { title: '内容生产', detail: '视频 · 自媒体 · GEO', href: '/articles/', mark: '05' },
  { title: 'AI 工作系统', detail: 'Skill · Agent · 自动化', href: '/method/', mark: '06' }
]

const paths = [
  { no: '01', label: '新手推荐', title: '先把 AI 用起来', detail: '从入门到放弃五章教程，安装、界面、第一个任务，建立正确起点。', href: '/workbuddy/' },
  { no: '02', label: '任务驱动', title: '从真实案例开始', detail: '用办公、文件、内容等场景，边做边学会判断。', href: '/cases/' },
  { no: '03', label: '方法进阶', title: '建立自己的工作法', detail: '用五步法把一次成功，变成下一次可复用的起点。', href: '/method/' },
  { no: '04', label: '团队落地', title: '把方法交给团队', detail: '任务卡、模板、RunBook，帮助团队稳定交付结果。', href: '/enterprise/' }
]

const steps = [
  { no: '01', title: '识别任务', detail: '找一件高频、耗时、有明确产出的工作。' },
  { no: '02', title: '说清五要素', detail: '任务、输入、标准、边界、产出，一次讲明白。' },
  { no: '03', title: '拆成小步', detail: '让 AI 逐步处理，人保留关键判断。' },
  { no: '04', title: '按标准验收', detail: '结果不合格，就回到定义层修正。' },
  { no: '05', title: '沉淀模板', detail: '把这次做法，变成下次的工作起点。' }
]

const offers = [
  { no: '01', title: '实战手册', detail: 'WorkBuddy / Codex 保姆级教程，跟着做就能上手。', href: '/workbuddy/', cta: '开始学习' },
  { no: '02', title: '交流群', detail: '每周精选、案例拆解、答疑互助，模板库免费领。', href: '/community/', cta: '加入交流群' },
  { no: '03', title: '训练营', detail: '21 天跑通一套自己的 AI 工作方法，结业有标准。', href: '/training/', cta: '查看大纲' },
  { no: '04', title: '企业落地', detail: '交付任务卡、模板与 RunBook，团队带得走。', href: '/enterprise/', cta: '预约沟通' }
]

const cases = [
  { no: '01', title: '物流企业周报自动化', tool: 'WorkBuddy', result: '每周 3 小时 → 20 分钟' },
  { no: '02', title: '合同初审要点提取', tool: '简法五要素', result: '初审通过率提升' },
  { no: '03', title: '客服话术沉淀', tool: 'Codex', result: '新人上手周期减半' }
]
</script>

<template>
  <div class="jf-home">
    <section class="jf-hero" aria-labelledby="hero-title">
      <div class="jf-hero__content">
        <div class="jf-eyebrow">
          <Wordmark :size="24" class="jf-wordmark--light" />
          <span>给第一次用 AI 的你</span>
        </div>
        <h1 id="hero-title">把复杂留给 <em>AI</em>，<br /><span>把简单留给工作。</span></h1>
        <p class="jf-hero__lede">简法是一套从第一次提问，到团队协作的 AI 工作方法。<br />不需要懂代码，先从一件你今天正在做的事开始。</p>
        <div class="jf-hero__actions">
          <a class="jf-btn jf-btn--primary" href="/workbuddy/">先跑通第一个任务 <span>↗</span></a>
          <a class="jf-text-link" href="#method">先理解五步方法 <span>↓</span></a>
        </div>
        <p class="jf-hero__note"><span class="jf-pulse"></span>每一篇教程都从真实工作出发，有过程，也有验收标准。</p>
      </div>

      <div class="jf-hero__panel" aria-label="简法五步预览">
        <div class="jf-panel__topline"><span><i></i>正在开始</span><span>01 / 05</span></div>
        <div class="jf-panel__title">先把一件事做完</div>
        <div class="jf-panel__example">例如：把本周会议记录整理成一页周报</div>
        <ol class="jf-panel__steps">
          <li v-for="(step, index) in steps" :key="step.no" :class="{ active: index === 0 }">
            <span>{{ step.no }}</span>
            <strong>{{ step.title }}</strong>
            <b v-if="index === 0">现在</b>
          </li>
        </ol>
        <div class="jf-panel__footer">五步法，让每一次成功都能复用 <span>→</span></div>
      </div>
    </section>

    <section class="jf-proof" aria-label="简法特点">
      <div><strong>真实任务</strong><span>从工作出发</span></div>
      <div><strong>可复现</strong><span>过程完整公开</span></div>
      <div><strong>有标准</strong><span>结果可以验收</span></div>
      <div><strong>能沉淀</strong><span>一次成功，多次复用</span></div>
    </section>

    <section class="jf-section jf-section--paths" id="paths" aria-labelledby="paths-title">
      <div class="jf-section__head jf-section__head--split">
        <div>
          <p class="jf-kicker"><span>01</span>从这里开始</p>
          <h2 id="paths-title">四段路径，按你的目标进入</h2>
        </div>
        <p>不用从头读。带着问题进来，先跑通一个能验收的结果。</p>
      </div>
      <div class="jf-paths">
        <a v-for="(path, index) in paths" :key="path.no" :href="path.href" class="jf-path" :class="{ featured: index === 0 }">
          <div class="jf-path__mark"><span>{{ path.no }}</span><i>{{ path.label }}</i></div>
          <div class="jf-path__body"><h3>{{ path.title }}</h3><p>{{ path.detail }}</p></div>
          <span class="jf-path__arrow">↗</span>
        </a>
      </div>
    </section>

    <section class="jf-section jf-section--tasks" aria-labelledby="tasks-title">
      <div class="jf-section__head jf-section__head--split">
        <div>
          <p class="jf-kicker"><span>02</span>从真实任务开始</p>
          <h2 id="tasks-title">你现在想让 AI 帮你做什么？</h2>
        </div>
        <p>选择一个熟悉的场景，答案会比“AI 能做什么”更快出现。</p>
      </div>
      <div class="jf-task-grid">
        <a v-for="task in taskTypes" :key="task.title" :href="task.href" class="jf-task">
          <span class="jf-task__mark">{{ task.mark }}</span>
          <span><strong>{{ task.title }}</strong><small>{{ task.detail }}</small></span>
          <span class="jf-task__arrow">↗</span>
        </a>
      </div>
    </section>

    <section class="jf-section jf-method" id="method" aria-labelledby="method-title">
      <div class="jf-method__intro">
        <p class="jf-kicker jf-kicker--light"><span>03</span>简法五步</p>
        <h2 id="method-title">一次成功，<br />不该只发生一次。</h2>
        <p>工具会变，方法不变。简法把一件事拆成五个可检查的动作，让你知道下一步做什么，也知道结果好不好。</p>
        <a class="jf-btn jf-btn--light" href="/method/">看完整方法 <span>↗</span></a>
      </div>
      <div class="jf-method__list">
        <div v-for="(step, index) in steps" :key="step.no" class="jf-method__step" :class="{ current: index === 0 }">
          <span>{{ step.no }}</span><div><strong>{{ step.title }}</strong><p>{{ step.detail }}</p></div><i>↗</i>
        </div>
      </div>
      <FiveStep :current="1" :labels="steps.map((step) => step.title)" class="jf-method__line" />
    </section>

    <section class="jf-section jf-section--offers" aria-labelledby="offers-title">
      <div class="jf-section__head jf-section__head--split">
        <div>
          <p class="jf-kicker"><span>04</span>你可以从这里开始</p>
          <h2 id="offers-title">从第一次使用，到团队落地</h2>
        </div>
        <p>每个入口都对应一个清晰的下一步，按自己的节奏来。</p>
      </div>
      <div class="jf-offers">
        <a v-for="offer in offers" :key="offer.no" :href="offer.href" class="jf-offer">
          <span class="jf-offer__no">{{ offer.no }}</span><div><h3>{{ offer.title }}</h3><p>{{ offer.detail }}</p></div><span class="jf-offer__cta">{{ offer.cta }} <b>↗</b></span>
        </a>
      </div>
    </section>

    <section class="jf-section jf-cases" aria-labelledby="cases-title">
      <div class="jf-cases__intro">
        <p class="jf-kicker"><span>05</span>场景开源</p>
        <h2 id="cases-title">真实场景，公开解法。</h2>
        <p>每个 Case 都会写清楚场景、工具、操作过程和最终效果。你也可以把自己的工作提交进来。</p>
        <a class="jf-text-link" href="/cases/">查看全部案例 <span>↗</span></a>
      </div>
      <div class="jf-cases__list">
        <a v-for="item in cases" :key="item.no" href="/cases/" class="jf-case-row"><span>{{ item.no }}</span><strong>{{ item.title }}</strong><small>{{ item.tool }}</small><b>{{ item.result }}</b><i>↗</i></a>
        <div class="jf-case-submit"><img src="/survey-scene.png" alt="提交 AI 工作场景的问卷二维码" /><div><strong>提交你的工作场景</strong><p>扫码填写，我们会把真实问题整理成可复现的公开 Case。</p></div><a href="/cases/#提交你的场景">了解提交准备 <span>↗</span></a></div>
      </div>
    </section>

    <section class="jf-section jf-contact" id="contact" aria-labelledby="contact-title">
      <div><p class="jf-kicker jf-kicker--light"><span>06</span>保持联系</p><h2 id="contact-title">一起把一件事做成。</h2><p>无论是个人学习，还是企业内训，告诉我们你想跑通的那一项任务。</p></div>
      <div class="jf-contact__details"><a href="mailto:runner.dada@gmail.com" class="jf-contact__email">runner.dada@gmail.com <span>↗</span></a><div class="jf-contact__wechat"><img src="/wechat-personal.jpg" alt="达哥个人微信二维码" /><span>添加微信，备注「简法AI」</span></div></div>
    </section>

    <footer class="jf-footer"><Wordmark :size="18" /><span>把复杂留给 AI，把简单留给工作</span><span>© 2026 简法 · jianfai.com</span></footer>
  </div>
</template>

<style scoped>
.jf-home { max-width: 1240px; margin: 0 auto; padding: 28px 36px 32px; color: var(--jf-text-1); }
.jf-hero { display: grid; grid-template-columns: minmax(0, 1.12fr) minmax(320px, .88fr); gap: 32px; min-height: 548px; padding: clamp(38px, 5vw, 72px); border-radius: 22px; background: var(--jf-deep-bg); color: var(--jf-deep-text); overflow: hidden; position: relative; isolation: isolate; }
.jf-hero::after { content: ''; position: absolute; z-index: -1; width: 520px; height: 520px; right: -180px; bottom: -230px; border: 1px solid rgba(255,255,255,.12); border-radius: 50%; box-shadow: 0 0 0 72px rgba(255,255,255,.025), 0 0 0 144px rgba(255,255,255,.02); }
.jf-hero__content { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.jf-eyebrow { display: flex; align-items: center; gap: 16px; margin-bottom: 34px; color: var(--jf-deep-text-2); font-size: 13px; }
.jf-eyebrow .jf-wordmark .jf { color: #fff; }.jf-eyebrow .jf-wordmark .dot { color: var(--jf-deep-text-3); }.jf-eyebrow .jf-wordmark .ai { color: var(--jf-orange-deep-bg); }
.jf-eyebrow > span { padding-left: 16px; border-left: 1px solid var(--jf-deep-line); }
.jf-hero h1 { max-width: 680px; margin: 0; color: #fff; font-size: clamp(42px, 6vw, 78px); font-weight: 700; line-height: 1.08; letter-spacing: -.055em; text-wrap: balance; }
.jf-hero h1 em { color: var(--jf-orange-deep-bg); font-style: normal; }.jf-hero h1 span { color: #fff; }
.jf-hero__lede { max-width: 530px; margin: 26px 0 0; color: var(--jf-deep-text-2); font-size: 17px; line-height: 1.85; }
.jf-hero__actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: 34px; }
.jf-btn { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 50px; padding: 0 22px; border: 1px solid transparent; border-radius: 7px; font-size: 15px; font-weight: 700; text-decoration: none !important; transition: transform .22s ease, background .22s ease, box-shadow .22s ease, border-color .22s ease; }
.jf-btn span, .jf-text-link span { font-family: var(--jf-mono); font-size: 17px; }
.jf-btn--primary { background: var(--jf-orange-deep-bg); color: #1f130b; box-shadow: 0 10px 24px rgba(255,107,44,.18); }.jf-btn--primary:hover { transform: translateY(-2px); background: #ff8654; box-shadow: 0 14px 32px rgba(255,107,44,.28); }
.jf-btn--light { border-color: rgba(255,255,255,.5); color: #fff; }.jf-btn--light:hover { transform: translateY(-2px); border-color: #fff; background: rgba(255,255,255,.1); }
.jf-text-link { color: currentColor; font-size: 15px; font-weight: 700; text-decoration: none !important; }.jf-text-link:hover { color: var(--jf-orange-deep-bg); }
.jf-hero__note { display: flex; align-items: center; gap: 10px; margin: 42px 0 0; color: var(--jf-deep-text-3); font-size: 12px; }.jf-pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--jf-orange-deep-bg); box-shadow: 0 0 0 5px rgba(255,107,44,.12); }
.jf-hero__panel { align-self: center; min-height: 390px; padding: 20px; border: 1px solid rgba(255,255,255,.18); border-radius: 16px; background: rgba(255,255,255,.055); box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 30px 70px rgba(0,0,0,.18); backdrop-filter: blur(16px); }
.jf-panel__topline, .jf-panel__footer { display: flex; justify-content: space-between; align-items: center; color: var(--jf-deep-text-3); font-family: var(--jf-mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }.jf-panel__topline { padding-bottom: 20px; border-bottom: 1px solid var(--jf-deep-line); }.jf-panel__topline span:first-child { display: flex; align-items: center; gap: 8px; color: var(--jf-deep-text-2); }.jf-panel__topline i { width: 7px; height: 7px; border-radius: 50%; background: var(--jf-orange-deep-bg); }
.jf-panel__title { margin: 30px 0 7px; color: #fff; font-size: 30px; font-weight: 700; letter-spacing: -.03em; }.jf-panel__example { color: var(--jf-deep-text-2); font-size: 13px; line-height: 1.6; }
.jf-panel__steps { display: grid; gap: 8px; margin: 28px 0 26px; padding: 0; list-style: none; }.jf-panel__steps li { display: flex; align-items: center; gap: 12px; min-height: 38px; padding: 0 11px; border: 1px solid var(--jf-deep-line); border-radius: 6px; color: var(--jf-deep-text-3); font-size: 13px; }.jf-panel__steps li span { color: var(--jf-deep-text-3); font-family: var(--jf-mono); font-size: 11px; }.jf-panel__steps li strong { color: var(--jf-deep-text-2); font-weight: 600; }.jf-panel__steps li b { margin-left: auto; color: var(--jf-orange-deep-bg); font-family: var(--jf-mono); font-size: 10px; font-weight: 600; }.jf-panel__steps li.active { border-color: var(--jf-orange-deep-bg); background: rgba(255,107,44,.1); }.jf-panel__steps li.active strong { color: #fff; }.jf-panel__footer { padding-top: 17px; border-top: 1px solid var(--jf-deep-line); color: var(--jf-deep-text-2); text-transform: none; letter-spacing: 0; }.jf-panel__footer span { color: var(--jf-orange-deep-bg); font-size: 16px; }
.jf-proof { display: grid; grid-template-columns: repeat(4,1fr); margin: -1px 46px 0; padding: 20px 0; border-bottom: 1px solid var(--jf-line); }.jf-proof > div { display: flex; flex-direction: column; gap: 5px; padding: 0 24px; border-right: 1px solid var(--jf-line); }.jf-proof > div:first-child { padding-left: 0; }.jf-proof > div:last-child { border-right: 0; }.jf-proof strong { font-size: 15px; }.jf-proof span { color: var(--jf-text-3); font-size: 12px; }
.jf-section { margin-top: 122px; }.jf-section__head { margin-bottom: 32px; }.jf-section__head--split { display: flex; align-items: end; justify-content: space-between; gap: 32px; }.jf-section__head--split > p { max-width: 290px; margin: 0 0 3px; color: var(--jf-text-2); font-size: 14px; line-height: 1.75; }.jf-kicker { display: flex; align-items: center; gap: 11px; margin: 0 0 13px; color: var(--jf-orange); font-family: var(--jf-mono); font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }.jf-kicker span { display: inline-flex; align-items: center; justify-content: center; min-width: 28px; height: 19px; border: 1px solid var(--jf-line-strong); border-radius: 4px; color: var(--jf-text-3); font-size: 10px; letter-spacing: .02em; }.jf-kicker--light { color: var(--jf-orange-deep-bg); }.jf-kicker--light span { border-color: rgba(255,255,255,.22); color: var(--jf-deep-text-3); }
.jf-section h2 { margin: 0; color: var(--jf-text-1); font-size: clamp(30px, 4vw, 46px); font-weight: 700; letter-spacing: -.045em; line-height: 1.12; text-wrap: balance; }.jf-section h3 { margin: 0; }
.jf-paths { display: grid; grid-template-columns: repeat(2,1fr); gap: 13px; }.jf-path { display: grid; grid-template-columns: 74px 1fr 34px; gap: 20px; align-items: center; min-height: 166px; min-width: 0; padding: 25px 24px; border: 1px solid var(--jf-line); border-radius: 10px; color: var(--jf-text-1); text-decoration: none !important; transition: transform .2s ease, border-color .2s ease, background .2s ease; }.jf-path:hover { transform: translateY(-3px); border-color: var(--jf-ink-blue); background: var(--jf-bg-soft); }.jf-path.featured { border-color: var(--jf-ink-blue); box-shadow: 4px 4px 0 var(--jf-orange); }.jf-path__mark { display: flex; min-width: 0; flex-direction: column; gap: 10px; }.jf-path__mark span { color: var(--jf-ink-blue); font-family: var(--jf-mono); font-size: 25px; font-weight: 700; }.jf-path__mark i { align-self: flex-start; padding: 3px 6px; background: var(--jf-bg-mist); color: var(--jf-text-2); font-size: 10px; font-style: normal; white-space: nowrap; }.jf-path__body { min-width: 0; }.jf-path__body h3 { margin-bottom: 8px; font-size: 18px; text-wrap: balance; }.jf-path__body p { max-width: 280px; margin: 0; color: var(--jf-text-2); font-size: 13px; line-height: 1.7; }.jf-path__arrow { color: var(--jf-orange); font-family: var(--jf-mono); font-size: 25px; text-align: right; }
.jf-task-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--jf-line); border-left: 1px solid var(--jf-line); }.jf-task { display: grid; grid-template-columns: 36px minmax(0,1fr) 24px; gap: 14px; align-items: center; min-height: 104px; min-width: 0; padding: 20px; border-right: 1px solid var(--jf-line); border-bottom: 1px solid var(--jf-line); color: var(--jf-text-1); text-decoration: none !important; transition: background .2s ease, color .2s ease; }.jf-task:hover { background: var(--jf-ink-blue); color: #fff; }.jf-task__mark { color: var(--jf-orange); font-family: var(--jf-mono); font-size: 11px; font-weight: 700; }.jf-task strong, .jf-task small { display: block; }.jf-task strong { margin-bottom: 4px; font-size: 15px; text-wrap: balance; }.jf-task small { color: var(--jf-text-2); font-size: 12px; }.jf-task:hover small { color: var(--jf-deep-text-2); }.jf-task__arrow { color: var(--jf-text-3); font-family: var(--jf-mono); font-size: 20px; text-align: right; }.jf-task:hover .jf-task__arrow { color: var(--jf-orange-deep-bg); }
.jf-method { display: grid; grid-template-columns: .85fr 1.15fr; gap: 46px; min-width: 0; padding: clamp(38px, 5vw, 65px); border-radius: 18px; background: var(--jf-deep-bg); color: var(--jf-deep-text); position: relative; overflow: hidden; }.jf-method::before { content: '05'; position: absolute; right: 5%; bottom: -19%; color: rgba(255,255,255,.035); font-family: var(--jf-display); font-size: 260px; font-weight: 700; line-height: 1; }.jf-method__intro { position: relative; z-index: 1; min-width: 0; }.jf-method h2 { color: #fff; }.jf-method__intro > p:not(.jf-kicker) { max-width: 400px; margin: 24px 0 30px; color: var(--jf-deep-text-2); font-size: 15px; line-height: 1.85; }.jf-method__list { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); min-width: 0; border-top: 1px solid var(--jf-deep-line); border-left: 1px solid var(--jf-deep-line); }.jf-method__step { display: grid; grid-template-columns: 30px minmax(0,1fr) 18px; gap: 12px; min-height: 115px; min-width: 0; padding: 18px; border-right: 1px solid var(--jf-deep-line); border-bottom: 1px solid var(--jf-deep-line); }.jf-method__step > span { color: var(--jf-deep-text-3); font-family: var(--jf-mono); font-size: 11px; }.jf-method__step strong { color: var(--jf-deep-text-2); font-size: 15px; text-wrap: balance; }.jf-method__step p { margin: 8px 0 0; color: var(--jf-deep-text-3); font-size: 12px; line-height: 1.6; }.jf-method__step > i { color: var(--jf-deep-text-3); font-style: normal; text-align: right; }.jf-method__step.current { background: rgba(255,107,44,.1); }.jf-method__step.current strong, .jf-method__step.current > i { color: #fff; }.jf-method__step.current > span { color: var(--jf-orange-deep-bg); }.jf-method__line { position: relative; z-index: 1; grid-column: 2; min-width: 0; }.jf-method :deep(.jf-five-step-labels) { color: var(--jf-deep-text-3); }.jf-method :deep(.jf-five-step-labels .active) { color: var(--jf-orange-deep-bg); }
.jf-offers { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }.jf-offer { display: grid; grid-template-columns: 42px minmax(0,1fr) auto; gap: 18px; align-items: center; min-height: 142px; min-width: 0; padding: 23px 24px; border: 1px solid var(--jf-line); color: var(--jf-text-1); text-decoration: none !important; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }.jf-offer:hover { transform: translateY(-3px); border-color: var(--jf-ink-blue); box-shadow: 4px 4px 0 var(--jf-orange); }.jf-offer__no { align-self: start; color: var(--jf-text-3); font-family: var(--jf-mono); font-size: 11px; }.jf-offer h3 { margin-bottom: 6px; font-size: 19px; text-wrap: balance; }.jf-offer p { max-width: 310px; margin: 0; color: var(--jf-text-2); font-size: 13px; line-height: 1.65; }.jf-offer__cta { color: var(--jf-orange); font-size: 13px; font-weight: 700; white-space: nowrap; }.jf-offer__cta b { margin-left: 4px; font-family: var(--jf-mono); font-size: 17px; }
.jf-cases { display: grid; grid-template-columns: .74fr 1.26fr; gap: 70px; min-width: 0; align-items: start; }.jf-cases__intro, .jf-cases__list { min-width: 0; }.jf-cases__intro > p:not(.jf-kicker) { max-width: 330px; margin: 22px 0 30px; color: var(--jf-text-2); font-size: 15px; line-height: 1.8; }.jf-cases__list { border-top: 1px solid var(--jf-line); }.jf-case-row { display: grid; grid-template-columns: 32px minmax(0,1fr) 110px 150px 24px; gap: 14px; align-items: center; min-height: 72px; min-width: 0; border-bottom: 1px solid var(--jf-line); color: var(--jf-text-1); text-decoration: none !important; }.jf-case-row:hover strong { color: var(--jf-orange); }.jf-case-row > span { color: var(--jf-text-3); font-family: var(--jf-mono); font-size: 11px; }.jf-case-row strong { font-size: 14px; text-wrap: balance; }.jf-case-row small { color: var(--jf-text-2); font-size: 12px; }.jf-case-row b { color: var(--jf-orange); font-size: 12px; font-weight: 600; white-space: nowrap; }.jf-case-row i { color: var(--jf-text-3); font-size: 18px; font-style: normal; text-align: right; }.jf-case-submit { display: grid; grid-template-columns: 72px minmax(0,1fr) auto; gap: 16px; align-items: center; min-width: 0; margin-top: 22px; padding: 15px; border: 1px solid var(--jf-line); background: var(--jf-bg-soft); }.jf-case-submit > * { min-width: 0; }.jf-case-submit img { width: 72px; height: 72px; border-radius: 4px; object-fit: cover; }.jf-case-submit strong { font-size: 14px; }.jf-case-submit p { margin: 5px 0 0; color: var(--jf-text-2); font-size: 12px; line-height: 1.6; }.jf-case-submit a { color: var(--jf-ink-blue); font-size: 12px; font-weight: 700; text-decoration: none; white-space: nowrap; }.jf-case-submit a span { color: var(--jf-orange); font-family: var(--jf-mono); font-size: 16px; }
.jf-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; min-width: 0; align-items: center; padding: 56px; border-radius: 18px; background: var(--jf-deep-bg); color: var(--jf-deep-text); }.jf-contact > * { min-width: 0; }.jf-contact h2 { color: #fff; }.jf-contact > div:first-child > p:not(.jf-kicker) { max-width: 380px; margin: 20px 0 0; color: var(--jf-deep-text-2); font-size: 15px; line-height: 1.8; }.jf-contact__details { display: flex; min-width: 0; align-items: center; justify-content: space-between; gap: 28px; }.jf-contact__email { color: #fff; font-size: 18px; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }.jf-contact__email span { color: var(--jf-orange-deep-bg); font-family: var(--jf-mono); }.jf-contact__wechat { display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--jf-deep-text-3); font-size: 11px; text-align: center; }.jf-contact__wechat img { width: 104px; height: 104px; border-radius: 6px; object-fit: cover; }.jf-footer { display: flex; align-items: center; gap: 18px; margin-top: 34px; padding: 0 2px; color: var(--jf-text-3); font-size: 12px; }.jf-footer > span:last-child { margin-left: auto; font-family: var(--jf-mono); font-size: 10px; }
@media (max-width: 960px) { .jf-home { padding: 20px 24px 32px; }.jf-hero { grid-template-columns: 1fr; min-height: auto; gap: 40px; }.jf-hero__panel { max-width: 570px; width: 100%; }.jf-proof { margin: 0 12px; }.jf-cases { gap: 36px; }.jf-case-row { grid-template-columns: 28px minmax(0,1fr) 100px 24px; }.jf-case-row small { display: none; }.jf-contact { padding: 44px; } }
@media (max-width: 899px) { .jf-paths, .jf-offers { grid-template-columns: 1fr; }.jf-task-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }.jf-method { grid-template-columns: 1fr; gap: 36px; }.jf-method__list { grid-template-columns: repeat(2,minmax(0,1fr)); }.jf-method__line { grid-column: auto; }.jf-cases, .jf-contact { grid-template-columns: 1fr; }.jf-contact { gap: 34px; }.jf-method__step { min-height: 104px; } }
@media (max-width: 720px) { .jf-home { padding: 12px 14px 24px; }.jf-hero { padding: 30px 24px; border-radius: 14px; }.jf-eyebrow { margin-bottom: 28px; }.jf-hero h1 { font-size: clamp(39px, 12vw, 58px); }.jf-hero__lede { font-size: 15px; }.jf-hero__actions { align-items: flex-start; flex-direction: column; gap: 18px; }.jf-hero__note { margin-top: 31px; line-height: 1.5; }.jf-hero__panel { min-height: 0; padding: 16px; }.jf-panel__title { margin-top: 22px; font-size: 24px; }.jf-panel__steps { margin: 20px 0; }.jf-proof { grid-template-columns: repeat(2,1fr); margin: 0; padding: 0; }.jf-proof > div, .jf-proof > div:first-child { min-height: 78px; padding: 16px 12px; border-right: 1px solid var(--jf-line); border-bottom: 1px solid var(--jf-line); }.jf-proof > div:nth-child(2n) { border-right: 0; }.jf-section { margin-top: 82px; }.jf-section__head--split { display: block; }.jf-section__head--split > p { margin-top: 18px; }.jf-paths, .jf-offers { grid-template-columns: 1fr; }.jf-path { grid-template-columns: 60px 1fr 26px; min-height: 142px; padding: 19px 16px; }.jf-path__body h3 { font-size: 16px; }.jf-path__body p { font-size: 12px; }.jf-task-grid { grid-template-columns: repeat(2,1fr); }.jf-task { grid-template-columns: 30px 1fr; gap: 10px; padding: 16px 12px; }.jf-task__arrow { display: none; }.jf-task strong { font-size: 13px; }.jf-task small { font-size: 11px; line-height: 1.4; }.jf-method { grid-template-columns: 1fr; gap: 34px; padding: 30px 22px; border-radius: 14px; }.jf-method__list { grid-template-columns: 1fr; }.jf-method__step { min-height: 90px; }.jf-method__line { grid-column: auto; }.jf-method :deep(.jf-five-step-labels) { display: none; }.jf-cases { grid-template-columns: 1fr; gap: 28px; }.jf-case-row { grid-template-columns: 26px minmax(0,1fr) 22px; gap: 10px; min-height: 66px; }.jf-case-row b { display: none; }.jf-case-submit { grid-template-columns: 64px 1fr; gap: 12px; }.jf-case-submit img { width: 64px; height: 64px; }.jf-case-submit a { grid-column: 2; }.jf-contact { grid-template-columns: 1fr; gap: 30px; padding: 30px 22px; border-radius: 14px; }.jf-contact__details { align-items: flex-start; flex-direction: column; }.jf-contact__email { font-size: 16px; }.jf-footer { align-items: flex-start; flex-wrap: wrap; gap: 10px; }.jf-footer > span:last-child { width: 100%; margin-left: 0; } }
@media (prefers-reduced-motion: reduce) { .jf-btn, .jf-path, .jf-task, .jf-offer { transition: none; } }
</style>
