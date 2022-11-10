<script setup lang="ts">
import type { Product } from "@/core/models/product";
import useApplicationStore from "@/features/application/store/useApplicationStore";
import ChooseProducts from "@/shared/components/product/ChooseProducts.vue";
import SubtitleText from "@/shared/components/ui/SubtitleText.vue";
import useTranslation from "@/shared/composables/useTranslation";
import useGetSellers from "@/features/searchImages/composables/useGetSellers";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import InvoicePreviewTable from "@/features/newInvoice/components/InvoicePreviewTable.vue";
import InvoiceTotalHighlighted from "../../components/InvoiceTotalHighlighted.vue";
import useCreateInvoice from "../../composables/useCreateInvoice";
import useNewInvoiceStore from "@/features/newInvoice/store/useNewInvoiceStore";
import NewInvoiceGeneralInformation from "./components/NewInvoiceGeneralInformation.vue";

const sellers = useGetSellers();
const searchImages = useSearchImagesStore();
const newInvoice = useNewInvoiceStore();
const { create } = useCreateInvoice();
const application = useApplicationStore();
const t = useTranslation();
</script>
<template>
  <form @submit.prevent="create" tabindex="0">
    <SubtitleText>{{ t("sellerScores") }}</SubtitleText>
    <InvoicePreviewTable :sellers="sellers" />
    <InvoiceTotalHighlighted
      class="my-5"
      :score="searchImages.totalScore"
      :total-sellers="searchImages.sellersLength"
    />
    <div :aria-label="t('common.generalInformation')" class="mt-10">
      <SubtitleText>{{ t("common.generalInformation") }}</SubtitleText>
      <NewInvoiceGeneralInformation />
    </div>
    <div :aria-label="t('product.products')" class="mt-10">
      <SubtitleText>{{ t("product.products") }}</SubtitleText>
      <ChooseProducts
        v-model="newInvoice.invoice.items"
        :items="application.products"
        :render-id="(currentItem: Product) => currentItem.id"
      />
    </div>
    <div class="flex justify-end mt-10 gap-7">
      <slot name="actions" />
    </div>
  </form>
</template>
