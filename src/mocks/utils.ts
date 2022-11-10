import type {
  CreateNewInvoice,
  NewInvoiceCreatedResponse,
} from "@/core/models/invoice";

export async function importServiceMock(mock: () => Promise<{ default: any }>) {
  const response = await mock();
  return {
    data: response.default,
  };
}

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
