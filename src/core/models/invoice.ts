import type { Customer } from "./customer";
import type { Product } from "./product";
import type { Seller } from "./seller";

interface Item {
  id: number;
  name: string;
  discount: number;
  observations: string;
  price: number;
  quantity: number;
}

export interface CreateNewInvoice {
  items: Item[];
  dueDate: string;
  date: string;
  observations?: string;
  client: {
    id: number;
  };
  seller: {
    id: number;
  };
  currency: string;
}

export interface NewInvoiceCreatedResponse {
  id: number;
  dueDate: string;
  date: string;
  observations?: string;
  numberTemplate: Array<{
    id: number;
    prefix: string;
    number: number;
    text: string;
  }>;
  termsConditions?: string;
  anotation?: string;
  currency: {
    code: string;
    symbol: string;
    exchangeRate: number;
  };
  client: Customer;
  seller: Seller;
  total: number;
  totalPaid: number;
  balance: number;
  decimalPrecision: number;
  items: Array<Product & { reference: string }>;
  costCenter: {
    id: string;
    code: string;
    name: string;
    description: string;
    status: "active" | "deactive";
  };
}
