<script lang="ts" setup>
import { MAX_SCORE } from "@/features/searchImages/constants";
import { getPercentageScore } from "@/features/searchImages/utils";
import { computed } from "vue";
import PrimaryButton from "../ui/PrimaryButton.vue";
import ProgressBar from "../ui/ProgressBar.vue";
import { ThumbUp } from "mdue";
import useTranslation from "@/shared/composables/useTranslation";

const props = defineProps({
  disabled: {
    type: Boolean,
  },
  score: {
    type: Number,
    default: 0,
  },
  hideButton: {
    type: Boolean,
  },
});
const t = useTranslation();
const percentageScore = computed(() => {
  return getPercentageScore(props.score);
});

defineEmits(["increment"]);
</script>
<template>
  <div>
    <div class="flex items-center gap-2">
      <ProgressBar color="orange" :percentage="percentageScore" />
      <PrimaryButton
        v-if="!hideButton"
        as-avatar
        :disabled="disabled"
        class="active:-rotate-45"
        @click="$emit('increment')"
      >
        <ThumbUp />
      </PrimaryButton>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-1 text-sm text-gray-800">
      <p>
        {{ t("score") }}:
        <span class="font-bold text-blac">
          {{ score || 0 }}
        </span>
      </p>
      <p>
        {{ t("missing") }}:
        <span class="font-bold text-black">{{ MAX_SCORE - (score || 0) }}</span>
      </p>
    </div>
  </div>
</template>
