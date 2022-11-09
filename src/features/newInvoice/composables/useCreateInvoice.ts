import { useServices } from "@/core/lib/serviceProvider";
import type { CreateNewInvoice } from "@/core/models/invoice";
import useSearchImagesStore from "@/features/searchImages/store/useSearchImagesStore";
import { useRouter } from "vue-router";
import useNewInvoiceStore from "../store/useNewInvoiceStore";

export default function useCreateInvoice() {
  const newInvoice = useNewInvoiceStore();
  const searchImage = useSearchImagesStore();
  const router = useRouter();
  const services = useServices();

  const create = async () => {
    const invoice = newInvoice.invoice;
    const winningSeller = searchImage.winningSeller;
    try {
      newInvoice.creatingInvoice = true;
      const payload: CreateNewInvoice = {
        client: {
          id: Number(invoice.client.id),
        },
        seller: {
          id: winningSeller!.id!,
        },
        items: invoice.items,
        currency: invoice.currency,
        date: invoice.date,
        dueDate: invoice.dueDate,
        observations: invoice.observations,
      };
      const { data } = await services.invoice.createNewInvoice(payload);
      newInvoice.setInvoiceCreated(data);
      router.push("/invoice/created");
    } catch (error) {
      if (import.meta.env.DEV) {
        console.log(error);
      }
    } finally {
      newInvoice.creatingInvoice = false;
    }
  };

  return {
    create,
  };
}
