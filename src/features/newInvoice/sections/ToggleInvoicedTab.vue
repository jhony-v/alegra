<script setup lang="ts">
import useTranslation from "@/shared/composables/useTranslation";
import useNewInvoiceStore from "../store/useNewInvoiceStore";
import { FolderOutline } from "mdue";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
const newInvoice = useNewInvoiceStore();
const searchImages = useSearchImagesStore();
const t = useTranslation();
</script>
<template>
  <div v-if="!newInvoice.showNewInvoice && searchImages.existsWinner">
    <button
      class="text-sm font-bold mb-4 flex gap-2 items-center animate-pulse"
      @click="newInvoice.toggleShowNewInvoice"
    >
      <FolderOutline class="text-2xl" />

      {{ t("common.show") }} {{ t("invoice") }}
    </button>
  </div>
</template>
