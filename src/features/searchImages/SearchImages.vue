<script lang="ts" setup>
import SearchImageEngine from "./sections/SearchImageEngine.vue";
import PreviewWinner from "./sections/PreviewWinner.vue";
import useSearchImagesStore from "./store/useSearchImagesStore";
import ModalBox from "@/shared/components/ui/ModalBox.vue";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import { defineAsyncComponent } from "vue";
import useSubscribeNewWinner from "./composables/useSubscribeNewWinner";
import useNewInvoiceStore from "../newInvoice/store/useNewInvoiceStore";
import ToggleInvoicedTab from "../newInvoice/sections/ToggleInvoicedTab.vue";
import InvoicePresenter from "@/shared/components/ui/InvoicePresenter.vue";

const ListSellerImages = defineAsyncComponent(
  () => import("./sections/ListSellerImages.vue")
);

const searchImages = useSearchImagesStore();
const newInvoice = useNewInvoiceStore();
useSubscribeNewWinner();
</script>
<template>
  <div>
    <SearchImageEngine />
    <div class="md:mt-20 mx-4">
      <ToggleInvoicedTab />
      <InvoicePresenter class="fade-up" v-if="!searchImages.canSearch" />
      <Suspense v-else>
        <ListSellerImages />
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </div>
    <ModalBox :open="newInvoice.showNewInvoice">
      <PreviewWinner />
    </ModalBox>
  </div>
</template>
