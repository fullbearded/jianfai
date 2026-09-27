<script setup lang="ts">
// 简法字标：分色三层（色相/字重/间距），禁止任何第四层效果
defineProps<{
  size?: number // px
}>()
</script>

<template>
  <span class="jf-wordmark" :style="{ fontSize: (size || 28) + 'px' }">
    <span class="jf">JIANF</span><span class="dot">·</span><span class="ai">AI</span>
  </span>
</template>
