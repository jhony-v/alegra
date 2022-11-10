<script lang="ts" setup>
import useTranslation from "@/shared/composables/useTranslation";
import BrandLogo from "./BrandLogo.vue";

defineProps({
  title: {
    type: String,
  },
});
const t = useTranslation();
</script>
<template>
  <header class="overview" :aria-label="t('mainNavigation')">
    <slot name="background"></slot>
    <div class="flex items-center gap-3 justify-center my-8">
      <BrandLogo />
      <h1 class="text-white text-2xl lg:text-3xl">{{ title }}</h1>
    </div>
    <div v-if="$slots.default">
      <slot></slot>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.overview {
  @apply rounded-xl m-4 px-4 py-4 xl:py-20 shadow-lg relative;
  background-image: linear-gradient(
    45deg,
    var(--primary) 100%,
    var(--primary-light)
  );
}
</style>
