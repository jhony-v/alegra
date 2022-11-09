<script lang="ts" setup>
import HelperText from "@/shared/components/ui/HelperText.vue";
import useTranslation from "@/shared/composables/useTranslation";

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
  <div
    class="bg-white rounded-xl -my-16 mb-5 shadow-lg p-3 flex sm:inline-flex"
  >
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
        {{ client.address.address }} -
        {{ client.address.city }}
      </HelperText>
    </div>
    <div class="inline-block rounded-md bg-gray-50 ml-4 py-2 px-4">
      <HelperText>
        {{ t("common.totalPaid") }}
      </HelperText>
      <h2 class="text-5xl my-4">
        <span class="text-gray-400">{{ currency.symbol }}</span>
        {{ totalPaid }}
      </h2>
      <HelperText>
        <div class="w-2 h-2 inline-block ml-2 bg-orange-400 rounded-full"></div>
        {{ date }}
      </HelperText>
    </div>
  </div>
</template>
