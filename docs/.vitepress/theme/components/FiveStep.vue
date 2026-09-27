<script setup lang="ts">
// 五段线母题：5 条等长横线对应简法五要素，仅「当前阶段」为橙
// 用法：<FiveStep :current="3" :labels="['识别任务','五要素','分阶段','验收','沉淀']" />
const props = withDefaults(
  defineProps<{
    current?: number // 1-5，当前步
    labels?: string[] // 可选标签
  }>(),
  { current: 1, labels: () => [] }
)

const steps = [1, 2, 3, 4, 5]
</script>

<template>
  <div class="jf-five-step-wrap">
    <div class="jf-five-step" role="img" :aria-label="`简法五步，当前第 ${current} 步`">
      <span
        v-for="n in steps"
        :key="n"
        class="seg"
        :class="{ current: n === props.current, done: n < props.current }"
      />
    </div>
    <div v-if="labels.length" class="jf-five-step-labels">
      <span
        v-for="(label, i) in labels"
        :key="label"
        :class="{ active: i + 1 === props.current }"
      >
        {{ label }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.jf-five-step-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.jf-five-step-labels {
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: var(--jf-text-2);
}

.jf-five-step-labels span {
  flex: 1;
  max-width: 64px;
  text-align: center;
  white-space: nowrap;
}

.jf-five-step-labels .active {
  color: var(--jf-orange);
  font-weight: 700;
}
</style>
