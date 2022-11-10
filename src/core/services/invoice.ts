import { alegraApi } from "@/config/api";
import { importServiceMock } from "@/mocks/utils";
import type { CreateNewInvoice } from "../models/invoice";

export const createNewInvoice = async (payload: CreateNewInvoice) => {
  try {
    return await alegraApi.post("/v1/invoices", payload);
  } catch {
    return importServiceMock(() => import("@/mocks/invoiceCreated.mock"));
  }
};
