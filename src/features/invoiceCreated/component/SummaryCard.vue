<script lang="ts" setup>
import BadgePoint from "@/shared/components/ui/BadgePoint.vue";
import HelperText from "@/shared/components/ui/HelperText.vue";
import useTranslation from "@/shared/composables/useTranslation";
import formatAmount from "@/shared/utils/formatAmount";

defineProps({
  client: {
    type: Object,
    default: () => ({}),
  },
  currency: {
    type: Object,
    default: () => ({}),
  },
  totalPaid: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: "",
  },
});
const t = useTranslation();
</script>
<template>
  <div class="invoice-summary">
    <div class="py-2 flex-1">
      <HelperText>
        {{ t("invoiceCreated.invoiceFor") }}
      </HelperText>
      <h3 class="text-xl my-2">
        {{ client.name }}
      </h3>
      <HelperText>
        {{ client.email }}
      </HelperText>
      <HelperText>
        {{ client.address?.address }} -
        {{ client.address?.city }}
      </HelperText>
    </div>
    <div class="invoice-summary__amount">
      <HelperText>
        {{ t("common.totalPaid") }}
      </HelperText>
      <h2 class="text-5xl my-4">
        <span class="text-gray-400">{{ currency.symbol }}</span>
        {{ formatAmount({ amount: totalPaid, currency: currency.currency }) }}
      </h2>
      <HelperText>
        <BadgePoint class="ml-2" />
        {{ date }}
      </HelperText>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.invoice-summary {
  @apply bg-white rounded-xl -my-16 mb-5 shadow-lg p-8 flex sm:inline-flex;
  &__amount {
    @apply inline-block rounded-md bg-gray-50 ml-4 py-2 px-4;
  }
}
</style>
