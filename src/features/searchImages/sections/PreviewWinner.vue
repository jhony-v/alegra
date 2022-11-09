<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import InvoiceWinnerBanner from "@/features/newInvoice/components/InvoiceWinnerBanner.vue";
import useTranslation from "@/shared/composables/useTranslation";
import HideCreateNewInvoiceButton from "@/features/newInvoice/sections/CreateNewInvoice/components/HideCreateNewInvoiceButton.vue";
import CreateNewInvoiceButton from "@/features/newInvoice/sections/CreateNewInvoice/components/CreateNewInvoiceButton.vue";

const CreateNewInvoice = defineAsyncComponent(
  () =>
    import(
      "@/features/newInvoice/sections/CreateNewInvoice/CreateNewInvoice.vue"
    )
);
const t = useTranslation();
</script>
<template>
  <div class="md:flex w-full h-full">
    <InvoiceWinnerBanner />
    <div class="flex-1 p-6">
      <router-link
        to="/invoice/add"
        class="text-blue-600 mb-4 inline-block text-sm font-bold"
      >
        {{ t("openFullScreen") }}
      </router-link>
      <Suspense>
        <CreateNewInvoice>
          <template #actions>
            <HideCreateNewInvoiceButton />
            <CreateNewInvoiceButton />
          </template>
        </CreateNewInvoice>
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </div>
  </div>
</template>
