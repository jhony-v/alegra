import { alegraApi } from "@/config/api";
import type { CreateNewInvoice } from "../models/invoice";

export const createNewInvoice = (payload: CreateNewInvoice) => {
  return alegraApi.post("/v1/invoices", payload);
};
