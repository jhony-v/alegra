import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import type { Seller } from "@/core/models/seller";

export default function useIncrementSellerScore() {
  const store = useSearchImagesStore();

  const increment = (item: Seller) => {
    if (store.existsWinner) return;
    const updatedSeller = store.updateSellerScore(item.id);
    updatedSeller && store.checkWinner(updatedSeller);
  };
  return {
    increment,
  };
}
