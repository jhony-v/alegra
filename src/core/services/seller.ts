import { alegraApi } from "@/config/api";
import { sellers } from "@/mocks";
import type { Seller } from "@/core/models/seller";

export const getAllSellers = async () => {
  try {
    return await alegraApi.get<Seller[]>("/v1/seller");
  } catch {
    return { data: sellers };
  }
};
