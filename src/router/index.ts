//@ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import SearchImages from "../features/searchImages/SearchImages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: SearchImages,
    },
    {
      path: "/invoice",
      redirect: "/invoice/add",
      children: [
        {
          path: "add",
          component: () => import("@/features/newInvoice/NewInvoice.vue"),
        },
        {
          path: "created",
          component: () =>
            import("@/features/invoiceCreated/InvoiceCreated.vue"),
        },
      ],
    },
  ],
});

export default router;
