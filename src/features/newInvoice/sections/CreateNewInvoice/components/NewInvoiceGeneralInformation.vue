<script setup lang="ts">
import useTranslation from "@/shared/composables/useTranslation";
import useNewInvoiceStore from "../../../store/useNewInvoiceStore";

const newInvoice = useNewInvoiceStore();
const t = useTranslation();
</script>
<template>
  <div class="wrapper">
    <div class="field">
      <label>{{ t("newInvoice.client") }}</label>
      <input v-model="newInvoice.invoice.client.id" />
    </div>
    <div class="field">
      <label>{{ t("newInvoice.currency") }}</label>
      <input v-model="newInvoice.invoice.currency" readonly />
    </div>
    <div class="field">
      <label>{{ t("newInvoice.date") }}</label>
      <input v-model="newInvoice.invoice.date" type="date" />
    </div>
    <div class="field">
      <label>{{ t("newInvoice.dueDate") }}</label>
      <input v-model="newInvoice.invoice.dueDate" type="date" />
    </div>
    <div class="field">
      <label>{{ t("newInvoice.observations") }}</label>
      <textarea v-model="newInvoice.invoice.observations" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @apply grid gap-4 sm:grid-cols-2;
  .field {
    @apply flex gap-2 text-sm;
    label {
      @apply w-24 block;
    }
    input,
    textarea {
      @apply flex-1 bg-gray-200 rounded-md px-1;
    }
  }
}
</style>
