import type { NewInvoiceCreatedResponse } from "@/core/models/invoice";
import { CURRENCY } from "@/shared/constants";
import dayjs from "dayjs";
import { defineStore } from "pinia";
import type { Store } from "../types";

const defaultDate = dayjs().format("YYYY-MM-DD");

const useNewInvoiceStore = defineStore("newInvoice", {
  state(): Store {
    return {
      showNewInvoice: false,
      creatingInvoice: false,
      invoice: {
        client: {
          id: 0,
        },
        currency: CURRENCY.PEN,
        date: defaultDate,
        dueDate: defaultDate,
        items: [],
        seller: {
          id: 0,
        },
        observations: "",
      },
      invoiceCreated: null,
    };
  },
  actions: {
    toggleShowNewInvoice() {
      this.showNewInvoice = !this.showNewInvoice;
    },
    activeNewInvoice() {
      this.showNewInvoice = true;
    },
    setInvoiceCreated(invoice: NewInvoiceCreatedResponse) {
      this.invoiceCreated = invoice;
    },
  },
});

export default useNewInvoiceStore;
