import type {
  CreateNewInvoice,
  NewInvoiceCreatedResponse,
} from "@/core/models/invoice";

export interface Store {
  showNewInvoice: boolean;
  invoice: CreateNewInvoice;
  creatingInvoice: boolean;
  invoiceCreated: NewInvoiceCreatedResponse | null;
}
