<script setup lang="ts">
import { RouterView } from "vue-router";
import useGetInitialSellers from "@/features/searchImages/composables/useGetInitialSellers";
import GreetingsAnimation from "@/shared/components/ui/GreetingsAnimation.vue";
import useGetInitialProducts from "@/features/application/composables/useGetInitialProducts";

useGetInitialSellers();
useGetInitialProducts();
</script>

<template>
  <GreetingsAnimation />
  <RouterView />
</template>
