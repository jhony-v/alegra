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
});

const t = useTranslation();
const emit = defineEmits(["update:modelValue", "search"]);

const onInput = (ev: Event) => {
  emit("update:modelValue", (ev.target as HTMLInputElement).value);
};
</script>
<template>
  <form
    aria-describedby="buscar imagenes"
    class="bg-white rounded-xl p-4 flex items-center shadow-md"
    @submit.prevent="$emit('search', modelValue)"
  >
    <input
      :placeholder="placeholder"
      class="flex-1 px-3"
      spellcheck="false"
      :value="modelValue"
      @input="onInput"
    />
    <PrimaryButton type="submit">
      <span class="mr-1">{{ t("searchLabel") }}</span>
      <Magnify />
    </PrimaryButton>
  </form>
</template>
