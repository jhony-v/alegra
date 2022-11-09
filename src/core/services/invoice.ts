import { alegraApi } from "@/config/api";
import { invoiceCreated } from "@/mocks";
import { mockResponseCreateNewInvoice } from "@/mocks/utils";
import type { CreateNewInvoice } from "../models/invoice";

export const createNewInvoice = async (payload: CreateNewInvoice) => {
  try {
    return await alegraApi.post("/v1/invoices", payload);
  } catch {
    return {
      data: mockResponseCreateNewInvoice(invoiceCreated, payload),
    };
  }
};
