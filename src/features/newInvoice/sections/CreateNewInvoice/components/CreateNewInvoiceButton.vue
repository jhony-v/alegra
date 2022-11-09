<script setup lang="ts">
import PrimaryButton from "@/shared/components/ui/PrimaryButton.vue";
import useTranslation from "@/shared/composables/useTranslation";
import useResetNewInvoice from "@/features/newInvoice/composables/useResetNewInvoice";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import useNewInvoiceStore from "@/features/newInvoice/store/useNewInvoiceStore";

const { reset } = useResetNewInvoice();
const store = useNewInvoiceStore();
const t = useTranslation();
</script>
<template>
  <div class="inline-flex gap-7">
    <button class="font-bold" @click="reset" :title="t('common.cancel')">
      {{ t("common.cancel") }}
    </button>
    <PrimaryButton type="submit" :title="t('common.create')">
      {{ t("common.create") }} {{ t("invoice") }}
      <div class="ml-2" v-if="store.creatingInvoice">
        <LoadingSpinner />
      </div>
    </PrimaryButton>
  </div>
</template>
