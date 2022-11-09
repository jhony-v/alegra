import useSearchImagesStore from "../store/useSearchImagesStore";
import { watch } from "vue";
import useToast from "@/shared/composables/useToast";
import useTranslation from "@/shared/composables/useTranslation";

export default function useSubscribeNewWinner() {
  const store = useSearchImagesStore();
  const createToast = useToast();
  const t = useTranslation();

  watch(
    () => store.existsWinner,
    (value) => {
      if (value) {
        createToast(t("newWinner"));
      }
    }
  );
}
