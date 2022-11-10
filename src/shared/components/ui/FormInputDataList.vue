<script lang="ts" setup>
import { ref, watch } from "vue";
import "vue-select/dist/vue-select.css";
//@ts-ignore
import VueSelect from "vue-select";

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  term: {
    type: [String, Number],
    default: "",
  },
  renderId: {
    type: Function,
    default: () => false,
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue", "update:term"]);
const local = ref(props.modelValue);

const onSearch = (value: string) => {
  emit("update:term", value);
};

watch(local, (value) => {
  emit("update:modelValue", value);
});
</script>
<template>
  <div class="w-full">
    <VueSelect
      v-model="local"
      :label="label"
      :reduce="renderId"
      @search="onSearch"
      :options="options"
    />
  </div>
</template>
