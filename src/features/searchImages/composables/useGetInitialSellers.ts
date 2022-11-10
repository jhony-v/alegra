import { useServices } from "@/core/lib/service";
import type { SellerImage } from "@/core/models/seller";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import useMountOnce from "@/shared/composables/useMountOnce";

const mounted = useMountOnce();

export default function useGetInitialSellers() {
  const store = useSearchImagesStore();
  const services = useServices();

  mounted(() => {
    services.seller.getAllSellers().then(({ data }) => {
      store.sellers = data as SellerImage[];
    });
  });
}
