import { products } from "@/mocks";

export const getAllProducts = async () => {
  return { data: products };
};
