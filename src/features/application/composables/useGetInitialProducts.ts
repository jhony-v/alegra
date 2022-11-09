import { getAllProducts } from "@/core/services/product";
import useMountOnce from "@/shared/composables/useMountOnce";
import useApplicationStore from "../store/useApplicationStore";

const mounted = useMountOnce();

export default function useGetInitialProducts() {
  const store = useApplicationStore();

  mounted(async () => {
    const { data: products } = await getAllProducts();
    store.products = products;
  });
}
