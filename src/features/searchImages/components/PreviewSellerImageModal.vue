<script lang="ts" setup>
import SellerProgressDetail from "@/shared/components/seller/SellerProgressDetail.vue";
import ModalBox from "@/shared/components/ui/ModalBox.vue";
import PrimaryButton from "@/shared/components/ui/PrimaryButton.vue";
import { Close } from "mdue";

defineProps({
  seller: {
    type: Object,
    default: () => ({}),
  },
  open: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["close", "like"]);
</script>
<template>
  <ModalBox auto-width :open="open">
    <div class="relative inline-block">
      <img :src="seller.image" alt="preview image of seller" class="w-96" />
      <div class="absolute top-2 right-2">
        <PrimaryButton
          invert
          as-avatar
          aria-label="close"
          @click="$emit('close')"
        >
          <Close class="text-xl" />
        </PrimaryButton>
      </div>
      <div class="absolute bottom-0 w-full p-3 bg-white">
        <SellerProgressDetail
          :score="seller.score"
          :disabled="disabled"
          @increment="$emit('like', seller)"
        />
      </div>
    </div>
  </ModalBox>
</template>
