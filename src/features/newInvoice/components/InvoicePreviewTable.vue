<script setup lang="ts">
import type { SellerImage } from "@/core/models/seller";
import ProgressBar from "@/shared/components/ui/ProgressBar.vue";
import useTranslation from "@/shared/composables/useTranslation";
import { computed } from "vue";
import { getPercentageScore } from "../../searchImages/utils";

const props = defineProps({
  sellers: {
    type: Array,
    default: () => [],
  },
});

const t = useTranslation();
const data = computed(() => props.sellers as SellerImage[]);
</script>
<template>
  <div class="overflow-x-auto whitespace-nowrap">
    <table class="table-flat">
      <thead>
        <tr>
          <th>N.</th>
          <th>ID</th>
          <th>{{ t("common.customer") }}</th>
          <th>{{ t("score") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(seller, index) in data" :key="seller.id">
          <td class="py-1">{{ index + 1 }}</td>
          <td class="py-1">{{ seller.id }}</td>
          <td class="py-1">{{ seller.name }}</td>
          <td class="py-1">
            <div class="flex gap-3 w-full items-center">
              <strong class="w-10">{{ seller.score || 0 }}</strong>
              <ProgressBar
                color="var(--primary-dark)"
                :percentage="getPercentageScore(seller.score)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
