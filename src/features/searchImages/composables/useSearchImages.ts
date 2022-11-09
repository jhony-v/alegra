import { getPublicImages } from "@/core/services/images";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import useToast from "@/shared/composables/useToast";
import useTranslation from "@/shared/composables/useTranslation";
import { ref } from "vue";

const MINIMUM_LENGTH = 3;

export default function useSearchImages() {
  const store = useSearchImagesStore();
  const term = ref("");
  const createToast = useToast();
  const t = useTranslation();

  const search = async () => {
    const value = term.value.trim();
    if (value.length < MINIMUM_LENGTH) {
      createToast(t("invalidTermLength"));
      return;
    }
    store.setTerm(value);
    store.loadingTerm = true;
    store.canSearch = true;
    try {
      const { data: images } = await getPublicImages(
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
    search,
    term,
  };
}
