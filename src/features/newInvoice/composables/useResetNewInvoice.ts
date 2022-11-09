import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import useNewInvoiceStore from "../store/useNewInvoiceStore";

export default function useResetNewInvoice() {
  const searchImages = useSearchImagesStore();
  const newInvoice = useNewInvoiceStore();

  const reset = () => {
    searchImages.reset();
    newInvoice.$reset();
  };

  return {
    reset,
  };
}
