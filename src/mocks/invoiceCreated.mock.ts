import type { NewInvoiceCreatedResponse } from "@/core/models/invoice";

export const invoiceCreated: NewInvoiceCreatedResponse = {
  id: 2,
  date: "2015-11-15",
  dueDate: "2015-12-15",
  observations: "Observaciones de la factura.",
  anotation: "Nota : Favor consignar a la cuenta XXXXXX",
  termsConditions: "Términos y condiciones de mi empresa",
  status: "draft",
  client: {
    id: 2,
    name: "Acrecer",
    identification: "963.654.988",
    email: "prueba2@alegra.com",
    phonePrimary: "111 11 11",
    phoneSecondary: "",
    fax: "",
    mobile: "(333) 555-55-55",
    observations: "",
    address: {
      address: "Avenida Madison",
      city: "New York, USA",
    },
  },
  numberTemplate: [
    {
      id: 1,
      prefix: "A-",
      number: 525,
      text: "Resolución de la DIAN # 45112",
    },
  ],
  retentions: [
    {
      id: 1,
      name: "Compras",
      percentage: 3.5,
      amount: 22.12,
    },
    {
      id: 6,
      name: "Honorarios",
      percentage: 11,
      amount: 500,
    },
  ],
  currency: {
    code: "USD",
    symbol: "$",
    exchangeRate: 3100,
  },
  seller: {
    id: 52,
    name: "Carmen López",
    identification: "",
    observations: "",
  },
  total: 632,
  totalPaid: 500,
  balance: 132,
  decimalPrecision: 2,
  items: [
    {
      id: 1,
      name: "Billetera",
      description: "Billetera de cuero negro",
      reference: "REF-005",
      tax: [
        {
          id: 6,
          name: "IVA",
          percentage: 16,
          description: "Impuesto de valor agregado",
          type: "IVA",
          status: "active",
        },
      ],
      price: 85,
      quantity: 5,
    },
    {
      id: 2,
      name: "Cartera",
      description: "Cartera de cuero color café",
      reference: "CAR-195",
      price: 120,
      tax: [
        {
          id: 6,
          name: "IVA",
          percentage: 16,
          description: "Impuesto de valor agregado",
          type: "IVA",
          status: "active",
        },
      ],
      quantity: 1,
    },
  ],
  costCenter: {
    id: "2",
    code: "CC01",
    name: "Centro de costo ventas general",
    description: "Ingresos y gastos de ventas generales",
    status: "active",
  },
};

export default invoiceCreated;
