import type { Seller } from "@/core/models/seller";
import type { Product } from "@/core/models/product";
import type { NewInvoiceCreatedResponse } from "@/core/models/invoice";
import type { Customer } from "@/core/models/customer";

export const sellers: Seller[] = [
  {
    id: 1,
    identification: "1.000.12",
    name: "Marcos",
    status: "active",
  },
  {
    id: 2,
    identification: "1.111.12",
    name: "Juan",
    status: "active",
  },
  {
    id: 3,
    identification: "1.235.82",
    name: "Rosa",
    status: "active",
  },
  {
    id: 4,
    identification: "1.333.12",
    name: "Miguel",
    status: "active",
  },
  {
    id: 5,
    identification: "2.217.82",
    name: "Juan matias",
    status: "active",
  },
  {
    id: 6,
    identification: "5.241.10",
    name: "Gerardo Zuckerberg",
    status: "active",
  },
];

export const products: Product[] = [
  {
    id: 1,
    image:
      "https://i.linio.com/p/1cf4c2e8e7715f87559d9a1b3cd6bfa8-catalog.webp",
    name: "Tableta gráfica",
    price: 124,
  },
  {
    id: 2,
    image:
      "https://i.linio.com/p/1cf4c2e8e7715f87559d9a1b3cd6bfa8-catalog.webp",
    name: "Cámara web HD 720p",
    price: 151,
  },
  {
    id: 3,
    image:
      "https://i.linio.com/p/4d539ae35bae24f2f74893e32bf0b853-catalog.webp",
    name: "Mouse inalambrico",
    price: 16,
  },
  {
    id: 4,
    image:
      "https://i.linio.com/p/4d539ae35bae24f2f74893e32bf0b853-catalog.webp",
    name: "Estabilizador FORZA",
    price: 58,
  },
  {
    id: 5,
    image:
      "https://i.linio.com/p/9dcd535d4ea37509e5470437a55eb5c9-catalog.webp",
    name: "Teclado mécanico MINI",
    price: 212,
  },
  {
    id: 6,
    image:
      "https://i.linio.com/p/ecc67ea2da20d0c00f6082b99bd3ed64-catalog.webp",
    name: "Mesa plegable portátil",
    price: 23,
  },
  {
    id: 7,
    image:
      "https://i.linio.com/p/7d7f604618a2b2e1de7559916efb8285-catalog.webp",
    name: "Audifonos Gamer",
    price: 89,
  },
];

export const customers: Customer[] = [
  {
    id: 1,
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
  {
    id: 2,
    name: "Marcos",
    identification: "963.654.988",
    email: "marcos@alegra.com",
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
  {
    id: 3,
    name: "Carlos",
    identification: "963.654.988",
    email: "carlos.20@alegra.com",
    phonePrimary: "111 11 11",
    phoneSecondary: "",
    fax: "",
    mobile: "(333) 555-55-55",
    observations: "",
    address: {
      address: "Avenida Madison",
      city: "Lima, PE",
    },
  },
];

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
