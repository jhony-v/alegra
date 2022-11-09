import type { SellerImage } from "@/core/models/seller";
import { getAllSellers } from "@/core/services/seller";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import useMountOnce from "@/shared/composables/useMountOnce";

const mounted = useMountOnce();

export default function useGetInitialSellers() {
  const store = useSearchImagesStore();

  mounted(() => {
    getAllSellers().then((response) => {
      store.sellers = response.data as any as SellerImage[];
    });
  });
}
