import { createToast } from "mosha-vue-toastify";

export default function useToast() {
  return (message: string) => {
    createToast(message, { position: "top-right" });
  };
}
