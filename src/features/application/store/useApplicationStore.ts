import { defineStore } from "pinia";
import type { Store } from "../types";

const useApplicationStore = defineStore("application", {
  state(): Store {
    return {
      products: [],
    };
  },
});

export default useApplicationStore;
