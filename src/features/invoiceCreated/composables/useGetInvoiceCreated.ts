import useNewInvoiceStore from "@/features/newInvoice/store/useNewInvoiceStore";
import { computed } from "vue";

export default function useGetInvoiceCreated() {
  const store = useNewInvoiceStore();
  const invoice = computed(() => store.invoiceCreated);
  const exists = computed(() => store.existsInvoiceCreated);

  return {
    invoice,
    exists,
  };
}
