<script lang="ts" setup>
import { onMounted, ref } from "vue";
const opened = ref(true);

onMounted(() => {
  setTimeout(() => {
    opened.value = false;
  }, 800);
});
</script>
<template>
  <div v-if="opened" class="flex absolute w-full left-0 top-0 h-full side">
    <div data-animate="true" class="side__left"></div>
    <div data-animate="true" class="side__right"></div>
  </div>
</template>
<style lang="scss" scoped>
.side {
  @apply z-10 overflow-hidden;
  [data-animate="true"] {
    @apply h-full w-1/2 transition;
  }
  &__left {
    @apply bg-primary-dark;
    animation: 0.9s sidebar__left 1;
    @keyframes sidebar__left {
      to {
        transform: translateX(-100%);
        opacity: 0.7;
      }
    }
  }
  &__right {
    @apply bg-primary;
    animation: 0.9s sidebar__right 1;
    @keyframes sidebar__right {
      to {
        transform: translateX(100%);
        opacity: 0.7;
      }
    }
  }
}
</style>
