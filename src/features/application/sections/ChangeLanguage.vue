<script lang="ts" setup>
import { LANGUAGE } from "@/core/i18n/languages";
import useTranslation, {
  useChangeLanguage,
} from "@/shared/composables/useTranslation";
import { computed } from "vue";

const { change, language } = useChangeLanguage();
const t = useTranslation();

const currentLanguage = computed(() => {
  if (language.value === LANGUAGE.en) return LANGUAGE.es;
  return LANGUAGE.en;
});

const toggleLanguage = () => {
  change(currentLanguage.value);
};
</script>
<template>
  <button
    class="flex items-center gap-2 font-bold bg-primary-light rounded-xl text-sm p-1 md:px-4 md:py-2"
    @click="toggleLanguage"
    tabindex="-1"
  >
    {{ t(`languages.${currentLanguage}`) }}
    <img :src="`/countries/${currentLanguage}.png`" />
  </button>
</template>
