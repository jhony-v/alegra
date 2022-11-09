export interface Seller {
  id: number;
  name: string;
  identification: string;
  observations?: string;
  status?: "active" | "inactive";
}

export interface SellerImage extends Seller {
  score: number;
  image: string;
}

export interface PublicImage {
  image: string;
}
