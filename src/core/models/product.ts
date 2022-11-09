export interface Product {
  id: number;
  image?: string;
  price: number;
  name: string;
  discount?: number;
  description?: string;
  reference?: string;
  observations?: string;
  quantity?: number;
}
