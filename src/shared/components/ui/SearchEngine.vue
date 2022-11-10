<script lang="ts" setup>
import PrimaryButton from "./PrimaryButton.vue";
import { Magnify } from "mdue";
import useTranslation from "@/shared/composables/useTranslation";

defineProps({
  placeholder: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  invalid: {
    type: Boolean,
  },
  invalidMessage: {
    type: String,
  },
});

const t = useTranslation();
const emit = defineEmits(["update:modelValue", "search"]);

const onInput = (ev: Event) => {
  emit("update:modelValue", (ev.target as HTMLInputElement).value);
};
</script>
<template>
  <form
    :aria-describedby="placeholder"
    class="bg-white rounded-xl p-4 flex items-center shadow-md"
    @submit.prevent="$emit('search', modelValue)"
  >
    <div class="flex-1 px-3">
      <input
        :placeholder="placeholder"
        id="search-engine"
        spellcheck="false"
        autocomplete="off"
        class="w-full"
        :value="modelValue"
        @keyup="onInput"
      />
      <span v-if="invalid" class="text-red-500 text-xs font-bold">
        {{ invalidMessage }}
      </span>
    </div>
    <PrimaryButton type="submit">
      <span class="mr-1">{{ t("searchLabel") }}</span>
      <Magnify class="text-2xl" aria-hidden="true" />
    </PrimaryButton>
  </form>
</template>
