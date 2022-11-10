<script lang="ts" setup>
import { computed } from "vue";
import SellerCard from "@/shared/components/seller/SellerCard.vue";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import useTranslation from "@/shared/composables/useTranslation";
import PreviewSellerImageModal from "../components/PreviewSellerImageModal.vue";
import useGetSellers from "../composables/useGetSellers";
import useIncrementSellerScore from "../composables/useIncrementSellerScore";
import usePreviewSellerImage from "../composables/usePreviewSellerImage";
import useSearchImagesStore from "../store/useSearchImagesStore";

const t = useTranslation();
const sellers = useGetSellers();
const store = useSearchImagesStore();
const { increment } = useIncrementSellerScore();
const previewSellerImage = usePreviewSellerImage();
const existsWinner = computed(() => store.existsWinner);
</script>
<template>
  <LoadingSpinner v-if="store.loadingTerm" />
  <section v-else-if="store.error">
    <h1>{{ t("error.gettingImages") }}</h1>
  </section>
  <section v-else class="seller-images">
    <SellerCard
      v-for="seller in sellers"
      :key="seller.id"
      :seller="seller"
      :disabled="existsWinner"
      :selected="seller.id === store.winningSeller?.id"
      @like="increment"
      @preview-image="previewSellerImage.select(seller)"
    />
  </section>
  <PreviewSellerImageModal
    :disabled="existsWinner"
    :open="previewSellerImage.open"
    :seller="previewSellerImage.seller"
    @close="previewSellerImage.close"
    @like="increment"
  />
</template>
<style lang="scss" scoped>
.seller-images {
  @apply grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1;
}
</style>
