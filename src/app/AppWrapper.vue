<script setup lang="ts">
import { RouterView } from "vue-router";
import useGetInitialSellers from "@/features/searchImages/composables/useGetInitialSellers";
import useGetInitialProducts from "@/features/application/composables/useGetInitialProducts";

useGetInitialSellers();
useGetInitialProducts();
</script>

<template>
  <RouterView />
</template>
