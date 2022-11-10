<script lang="ts" setup>
import InvoicePreviewTable from "@/features/newInvoice/components/InvoicePreviewTable.vue";
import useResetNewInvoice from "@/features/newInvoice/composables/useResetNewInvoice";
import useGetSellers from "@/features/searchImages/composables/useGetSellers";
import CardBox from "@/shared/components/ui/CardBox.vue";
import HelperText from "@/shared/components/ui/HelperText.vue";
import PrimaryButton from "@/shared/components/ui/PrimaryButton.vue";
import SubtitleText from "@/shared/components/ui/SubtitleText.vue";
import useTranslation from "@/shared/composables/useTranslation";
import { useRouter } from "vue-router";
import SummaryCard from "../component/SummaryCard.vue";
import TableItemsBought from "../component/TableItemsBought.vue";
import useGetInvoiceCreated from "../composables/useGetInvoiceCreated";

const t = useTranslation();
const { invoice } = useGetInvoiceCreated();
const { reset } = useResetNewInvoice();
const router = useRouter();
const sellers = useGetSellers();

const onResetAll = () => {
  reset();
  router.push("/");
};
</script>
<template>
  <section class="invoice-detail z-10 relative">
    <SummaryCard
      :client="invoice?.client"
      :date="invoice?.date"
      :total-paid="invoice?.totalPaid"
      :currency="invoice?.currency"
      class="fade-up"
    />
    <CardBox class="fade-up">
      <div class="flex-1 grid gap-5 p-4">
        <div>
          <SubtitleText>{{ t("product.products") }}</SubtitleText>
          <TableItemsBought :items="invoice?.items" />
        </div>
        <div>
          <SubtitleText>{{ t("common.sellers") }}</SubtitleText>
          <InvoicePreviewTable :sellers="sellers" />
        </div>
        <div v-if="invoice?.termsConditions">
          <SubtitleText>{{ t("common.termsConditions") }}</SubtitleText>
          <HelperText>{{ invoice?.termsConditions }}</HelperText>
        </div>
        <PrimaryButton class="w-full" @click="onResetAll">
          {{ t("invoiceCreated.complete") }}
        </PrimaryButton>
      </div>
    </CardBox>
  </section>
</template>
<style lang="scss" scoped>
.invoice-detail {
  @apply mx-8 sm:flex flex-col sm:mx-auto sm:w-3/4 lg:w-5/12 mb-8;
}
</style>
