<script setup lang="ts">
import PrimaryButton from "@/shared/components/ui/PrimaryButton.vue";
import useTranslation from "@/shared/composables/useTranslation";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import useNewInvoiceStore from "@/features/newInvoice/store/useNewInvoiceStore";

const store = useNewInvoiceStore();
const t = useTranslation();
</script>
<template>
  <PrimaryButton type="submit" :title="t('common.create')">
    {{ t("common.create") }} {{ t("invoice") }}
    <div class="ml-2" v-if="store.creatingInvoice">
      <LoadingSpinner />
    </div>
  </PrimaryButton>
</template>
