import type { SellerImage } from "@/core/models/seller";
import { reactive, ref } from "vue";

export default function usePreviewSellerImage() {
  const seller = ref<Partial<SellerImage>>({});
  const open = ref(false);

  const select = (payload: SellerImage) => {
    seller.value = payload;
    open.value = true;
  };

  const close = () => {
    seller.value = {};
    open.value = false;
  };

  return reactive({
    seller,
    open,
    select,
    close,
  });
}
