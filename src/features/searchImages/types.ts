import type { SellerImage } from "@/core/models/seller";

export type Store = {
  sellers: SellerImage[];
  loadingTerm: boolean;
  error: boolean;
  canSearch: boolean;
  term: string;
  winningSeller: SellerImage | null;
};
