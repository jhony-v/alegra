<script lang="ts" setup>
import BrandLogo from "./BrandLogo.vue";

defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <header
    class="overview rounded-xl m-4 p-4 shadow-lg"
    aria-label="Navegación principal relative"
  >
    <div class="flex items-center gap-3 justify-center my-8">
      <BrandLogo />
      <h1 class="text-white text-2xl">{{ title }}</h1>
    </div>
    <div v-if="$slots.default">
      <slot></slot>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.overview {
  background-image: linear-gradient(
    45deg,
    var(--primary) 10%,
    var(--primary-dark)
  );
}
</style>
