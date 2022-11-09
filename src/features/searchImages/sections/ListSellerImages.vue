<script lang="ts" setup>
import SellerCard from "@/shared/components/seller/SellerCard.vue";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import { computed } from "vue";
import useGetSellers from "../composables/useGetSellers";
import useIncrementSellerScore from "../composables/useIncrementSellerScore";
import useSearchImagesStore from "../store/useSearchImagesStore";

const store = useSearchImagesStore();
const sellers = useGetSellers();
const existsWinner = computed(() => store.existsWinner);
const { increment } = useIncrementSellerScore();
</script>
<template>
  <LoadingSpinner v-if="store.loadingTerm" />
  <section v-else-if="store.error">
    <h1>Error al obtener resultados</h1>
  </section>
  <section
    v-else
    class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1"
  >
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
