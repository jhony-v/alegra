<script lang="ts" setup>
import type { Product } from "@/core/models/product";
import useTranslation from "@/shared/composables/useTranslation";
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const data = computed(() => props.items as Product[]);
const t = useTranslation();
</script>
<template>
  <table class="table-flat">
    <thead>
      <tr>
        <th>Id</th>
        <th>{{ t("product.name") }}</th>
        <th>{{ t("product.description") }}</th>
        <th>{{ t("product.reference") }}</th>
        <th>{{ t("product.price") }}</th>
        <th>{{ t("product.quantity") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.reference }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
    </tbody>
  </table>
</template>
