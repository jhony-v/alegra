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

export interface NewInvoiceCreatedResponse extends CreateNewInvoice {
  numberTemplate: {
    number: string;
  };
}
