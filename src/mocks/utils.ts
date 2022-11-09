import type {
  CreateNewInvoice,
  NewInvoiceCreatedResponse,
} from "@/core/models/invoice";

export function mockResponseCreateNewInvoice(
  response: NewInvoiceCreatedResponse,
  payload: CreateNewInvoice
) {
  const { dueDate, date, items, client, seller } = payload;
  return {
    ...response,
    dueDate,
    date,
    items,
    client: {
      ...response.client,
      id: client.id,
    },
    seller: {
      ...response.seller,
      id: seller.id,
    },
  };
}
