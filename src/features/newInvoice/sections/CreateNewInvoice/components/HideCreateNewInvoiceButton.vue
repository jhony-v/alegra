<script setup lang="ts">
import useTranslation from "@/shared/composables/useTranslation";
import useNewInvoiceStore from "@/features/newInvoice/store/useNewInvoiceStore";

const newInvoice = useNewInvoiceStore();
const t = useTranslation();
</script>
<template>
  <button
    class="font-bold"
    type="button"
    @click="newInvoice.toggleShowNewInvoice"
    :title="t('common.hide')"
  >
    {{ t("common.hide") }}
  </button>
</template>
