import { useServices } from "@/core/lib/service";
import type { Customer } from "@/core/models/customer";
import { reactive, ref, watch } from "vue";

export default function useFindAllCustomers() {
  const services = useServices();
  const data = ref<Customer[]>([]);
  const term = ref("");

  const findAll = async (value: string) => {
    if (value) {
      const response = await services.customer.findAllCustomers(value);
      data.value = response.data;
    }
  };

  watch(term, findAll);

  return reactive({
    term,
    data,
    findAll,
  });
}
