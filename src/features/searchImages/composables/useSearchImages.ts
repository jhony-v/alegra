import { useServices } from "@/core/lib/serviceProvider";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import { ref } from "vue";

const MINIMUM_LENGTH = 3;

export default function useSearchImages() {
  const store = useSearchImagesStore();
  const services = useServices();
  const term = ref("");
  const isInvalidTerm = ref(false);

  const search = async () => {
    const invalidLength = term.value.trim().length < MINIMUM_LENGTH;
    if (invalidLength) {
      isInvalidTerm.value = true;
      return;
    }
    store.setTerm(term.value);
    isInvalidTerm.value = false;
    store.loadingTerm = true;
    store.canSearch = true;
    try {
      const { data: images } = await services.images.getPublicImages(
        store.term,
        store.sellersLength
      );
      store.blendSellersWithImages(images);
      store.error = false;
    } catch {
      store.error = true;
      store.canSearch = false;
    } finally {
      store.loadingTerm = false;
    }
  };

  return {
    isInvalidTerm,
    search,
    term,
  };
}
