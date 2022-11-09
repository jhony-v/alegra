<script setup lang="ts">
import FullScreenBox from "@/shared/components/ui/FullScreenBox.vue";
import { Ufo } from "mdue";
import { onBeforeMount, watch } from "vue";
import { useRouter } from "vue-router";
import useSearchImagesStore from "../searchImages/store/useSearchImagesStore";
import InvoiceWinnerBanner from "./components/InvoiceWinnerBanner.vue";
import CreateNewInvoiceButton from "./sections/CreateNewInvoice/components/CreateNewInvoiceButton.vue";
import CreateNewInvoice from "./sections/CreateNewInvoice/CreateNewInvoice.vue";

const store = useSearchImagesStore();
const router = useRouter();

const checkWinnerExistence = () => {
  if (!store.existsWinner) router.replace("/");
};

watch(() => store.existsWinner, checkWinnerExistence);

onBeforeMount(checkWinnerExistence);
</script>
<template>
  <FullScreenBox class="flex-col md:flex-row">
    <InvoiceWinnerBanner />
    <CreateNewInvoice class="p-8 w-full md:overflow-y-auto">
      <template #actions>
        <CreateNewInvoiceButton />
      </template>
    </CreateNewInvoice>
  </FullScreenBox>
</template>
