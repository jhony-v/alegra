<script setup lang="ts">
import GreetingsAnimation from "@/shared/components/ui/GreetingsAnimation.vue";
import { ServiceProvider } from "@/core/lib/serviceProvider";
import AppWrapper from "./AppWrapper.vue";
</script>

<template>
  <GreetingsAnimation />
  <ServiceProvider>
    <AppWrapper />
  </ServiceProvider>
</template>
