<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    screenMenu?: boolean
  }>(),
  { screenMenu: false }
)

const isOpen = ref(false)

function toggle() {
  if (props.screenMenu) isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="jf-community-nav" :class="{ 'jf-community-nav--screen': screenMenu, 'is-open': isOpen }">
    <button
      class="jf-community-nav__trigger"
      type="button"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span>交流群</span>
      <span class="jf-community-nav__chevron" aria-hidden="true">⌄</span>
    </button>
    <div class="jf-community-nav__popover" role="dialog" aria-label="加入简法交流群">
      <img src="/wechat-personal.jpg" alt="简法交流群微信二维码" />
      <div class="jf-community-nav__copy">
        <span>WECHAT GROUP</span>
        <strong>微信扫码加入交流群</strong>
        <small>添加后备注「简法AI」</small>
      </div>
    </div>
  </div>
</template>
