import type { Customer } from "./customer";
import type { Product } from "./product";
import type { Seller } from "./seller";

export interface CreateNewInvoice {
  items: Product[];
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

export interface Retention {
  id: number;
  name: string;
  percentage: number;
  amount: number;
}

export interface NewInvoiceCreatedResponse {
  id: number;
  date: string;
  dueDate: string;
  observations?: string;
  anotation?: string;
  termsConditions?: string;
  status: string;
  numberTemplate: Array<{
    id: number;
    prefix: string;
    number: number;
    text: string;
  }>;
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
  retentions: Retention[];
  items: Array<Product & { reference: string; tax: any }>;
  costCenter: {
    id: string;
    code: string;
    name: string;
    description: string;
    status: "active" | "deactive";
  };
}
