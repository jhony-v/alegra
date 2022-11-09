import { onMounted } from "vue";

export default function useMountOnce() {
  let mounted = false;
  return (callback: VoidFunction) => {
    onMounted(() => {
      if (!mounted) {
        mounted = true;
        callback();
      }
    });
  };
}
