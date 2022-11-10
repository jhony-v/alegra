import { useServices } from "@/core/lib/serviceProvider";
import useMountOnce from "@/shared/composables/useMountOnce";
import useApplicationStore from "../store/useApplicationStore";

const mounted = useMountOnce();

export default function useGetInitialProducts() {
  const store = useApplicationStore();
  const services = useServices();

  mounted(async () => {
    const { data: products } = await services.product.getAllProducts();
    store.setProducts(products);
  });
}
