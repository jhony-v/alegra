<script lang="ts" setup>
import SellerCard from "@/shared/components/seller/SellerCard.vue";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import useTranslation from "@/shared/composables/useTranslation";
import { computed } from "vue";
import useGetSellers from "../composables/useGetSellers";
import useIncrementSellerScore from "../composables/useIncrementSellerScore";
import useSearchImagesStore from "../store/useSearchImagesStore";

const store = useSearchImagesStore();
const sellers = useGetSellers();
const existsWinner = computed(() => store.existsWinner);
const { increment } = useIncrementSellerScore();
const t = useTranslation();
</script>
<template>
  <LoadingSpinner v-if="store.loadingTerm" />
  <section v-else-if="store.error">
    <h1>{{ t("error.gettingImages") }}</h1>
  </section>
  <section velse class="seller-images">
    <SellerCard
      v-for="seller in sellers"
      :key="seller.id"
      :seller="seller"
      :disabled="existsWinner"
      :selected="seller.id === store.winningSeller?.id"
      @like="increment"
    />
  </section>
</template>
<style lang="scss" scoped>
.seller-images {
  @apply grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1;
}
</style>
