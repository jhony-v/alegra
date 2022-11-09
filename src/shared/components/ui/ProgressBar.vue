<script lang="ts" setup>
defineProps({
  percentage: {
    type: Number,
  },
  color: {
    type: String,
  },
});
</script>
<template>
  <div role="progressbar" class="h-1 w-full bg-gray-200 inline-block">
    <div
      class="transform h-1 progressbar__item"
      :style="{ width: `${percentage}%`, background: color }"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.progressbar__item {
  transition: 0.3s width;
}
</style>
