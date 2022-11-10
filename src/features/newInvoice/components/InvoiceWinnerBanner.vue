<script lang="ts" setup>
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import BrandLogo from "@/shared/components/ui/BrandLogo.vue";
import useTranslation from "@/shared/composables/useTranslation";

const t = useTranslation();
const store = useSearchImagesStore();
</script>
<template>
  <div
    class="bg-primary-dark md:w-1/4 md:px-8 p-4 md:py-16 text-lg text-white rounded-r-sm"
    role="banner"
  >
    <BrandLogo class="mb-4" />
    {{ t("banner.hello") }}
    <span class="font-bold text-3xl"> {{ store.winningSeller?.name }} </span>,
    {{ t("banner.respectiveConnector") }}
    <span class="font-bold text-2xl"> {{ t("banner.winner") }} </span>,
    {{ t("banner.createInvoiceNow") }}
    <span class="font-bold text-2xl">{{ t("banner.invoice") }}.</span>
  </div>
</template>
