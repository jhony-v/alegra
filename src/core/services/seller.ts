import { alegraApi } from "@/config/api";
import type { Seller } from "@/core/models/seller";
import { importServiceMock } from "@/mocks/utils";

export const getAllSellers = async () => {
  try {
    return await alegraApi.get<Seller[]>("/v1/seller");
  } catch {
    return importServiceMock(() => import("@/mocks/sellers.mock"));
  }
};
