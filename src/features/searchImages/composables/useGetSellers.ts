import { computed } from "vue";
import useSearchImagesStore from "../store/useSearchImagesStore";

export default function useGetSellers() {
  const store = useSearchImagesStore();
  return computed(() => store.sellers);
}
