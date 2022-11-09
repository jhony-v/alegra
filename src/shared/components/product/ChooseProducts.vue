<script lang="ts" setup>
import useTranslation from "@/shared/composables/useTranslation";
import { computed } from "vue";
import type { JSONObject } from "@/shared/types";
import PrimaryButton from "../ui/PrimaryButton.vue";
import formatAmount from "@/shared/utils/formatAmount";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  renderId: {
    type: Function,
    default: () => false,
  },
});

const t = useTranslation();
const emit = defineEmits(["update:modelValue"]);

const models = computed(() => {
  const modelValue = props.modelValue;
  return modelValue.reduce((previous: JSONObject, current: any) => {
    previous[current.id] = current;
    return previous;
  }, {}) as any;
});
const data = computed(() => props.items as JSONObject[]);
const modelIds = computed(() => new Set([...props.modelValue.map(getId)]));

function getId<T>(item: T) {
  return props.renderId(item);
}

function equalsInItem<T, R>(currentItem: T, item: R) {
  return props.renderId(currentItem) === props.renderId(item);
}

function onChoose<T>(item: T) {
  const existsItem = modelIds.value.has(getId(item));
  if (existsItem) {
    const removeElement = props.modelValue.filter((currentItem) => {
      return !equalsInItem(currentItem, item);
    });
    emit("update:modelValue", removeElement);
  } else {
    emit("update:modelValue", [...props.modelValue, { ...item, quantity: 0 }]);
  }
}

function onIncrease<T>(item: T) {
  const increaseQuantityInModel = props.modelValue.map((currentItem: any) => {
    if (equalsInItem(currentItem, item)) {
      return {
        ...currentItem,
        quantity: (currentItem.quantity || 0) + 1,
      };
    }
    return currentItem;
  });
  emit("update:modelValue", increaseQuantityInModel);
}

function onDecrease<T>(item: T) {
  const decreaseQuantityInModel = props.modelValue.map((currentItem: any) => {
    if (equalsInItem(currentItem, item)) {
      return {
        ...currentItem,
        quantity: (currentItem.quantity || 0) - 1,
      };
    }
    return currentItem;
  });
  emit("update:modelValue", decreaseQuantityInModel);
}
</script>
<template>
  <section
    aria-label="Buscár productos"
    class="bg-gray-50 p-1 rounded-md shadow-md whitespace-nowrap overflow-x-auto"
  >
    <table class="text-xs table-auto w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>{{ t("product.name") }}</th>
          <th>{{ t("product.image") }}</th>
          <th>{{ t("product.price") }}</th>
          <th>{{ t("product.choose") }}</th>
          <th>{{ t("product.quantity") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="renderId(item)">
          <td class="py-2 text-center">{{ renderId(item) }}</td>
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">
            <img
              :src="item.image"
              class="w-6 h-6 mx-auto rounded-sm object-cover"
            />
          </td>
          <td class="text-center">
            S/. {{ formatAmount({ amount: item.price }) }}
          </td>
          <td class="text-center">
            <input
              type="checkbox"
              :checked="modelIds.has(getId(item))"
              @change="onChoose(item)"
            />
          </td>
          <td class="text-center">
            <div class="inline-flex gap-2 items-center">
              <PrimaryButton
                invert
                type="button"
                :disabled="models[item.id]?.quantity <= 0"
                @click="onDecrease(item)"
              >
                -
              </PrimaryButton>
              <span>{{ models[item.id]?.quantity || 0 }}</span>
              <PrimaryButton type="button" invert @click="onIncrease(item)">
                +
              </PrimaryButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
