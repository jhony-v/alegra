import type { Product } from "@/core/models/product";
import { defineStore } from "pinia";
import type { Store } from "../types";

const useApplicationStore = defineStore("application", {
  state(): Store {
    return {
      products: [],
    };
  },
  actions: {
    setProducts(products: Product[]) {
      this.products = products;
    },
  },
});

export default useApplicationStore;
