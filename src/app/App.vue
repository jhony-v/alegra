<script setup lang="ts">
import GreetingsAnimation from "@/shared/components/ui/GreetingsAnimation.vue";
import { ServiceProvider } from "@/core/lib/service";
import AppWrapper from "./AppWrapper.vue";
</script>

<template>
  <GreetingsAnimation />
  <ServiceProvider>
    <AppWrapper />
  </ServiceProvider>
</template>
