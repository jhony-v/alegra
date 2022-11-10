import type { Services } from "@/core/services";
import services from "@/core/services";
import { provide, inject, defineComponent } from "vue";

const serviceKey = "service";

export const ServiceProvider = defineComponent({
  setup(_props, { slots }) {
    provide(serviceKey, services);
    return () => {
      return slots.default?.();
    };
  },
});

export const useServices = () => inject(serviceKey) as Services;
