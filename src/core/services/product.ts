import { importServiceMock } from "@/mocks/utils";

export const getAllProducts = async () => {
  return importServiceMock(() => import("@/mocks/products.mock"));
};
