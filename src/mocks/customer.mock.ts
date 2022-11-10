import type { Customer } from "@/core/models/customer";

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

export default customers;
