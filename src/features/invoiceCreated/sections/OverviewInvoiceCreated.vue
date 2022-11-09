<script lang="ts" setup>
import SubtitleText from "@/shared/components/ui/SubtitleText.vue";
import useTranslation from "@/shared/composables/useTranslation";
import useGetInvoiceCreated from "../composables/useGetInvoiceCreated";

const t = useTranslation();
const { invoice } = useGetInvoiceCreated();
</script>
<template>
  <section class="mx-4">
    <SubtitleText>{{ t("common.generalInformation") }}</SubtitleText>
  </section>
</template>
