<script setup lang="ts">
import useTranslation from "@/shared/composables/useTranslation";

defineProps({
  score: {
    type: Number,
    default: 0,
  },
  totalSellers: {
    type: Number,
    default: 0,
  },
});
const t = useTranslation();
</script>
<template>
  <p class="text-sm" role="complementary">
    {{ t("common.reducedScore") }} <strong>{{ score }}</strong>
    {{ t("common.of") }} <strong>{{ totalSellers }}</strong>
    {{ t("common.sellers") }}
  </p>
</template>
