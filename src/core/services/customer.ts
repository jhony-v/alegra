import { importServiceMock } from "@/mocks/utils";

export const findAllCustomers = async (term: string = "") => {
  return importServiceMock(() => import("@/mocks/customer.mock"));
};
