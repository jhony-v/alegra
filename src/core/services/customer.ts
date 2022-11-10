import { customers } from "@/mocks";

export const findAllCustomers = async (term: string) => {
  return {
    data: customers,
  };
};
