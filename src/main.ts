import { createApp } from "vue";
import { createPinia } from "pinia";
import "mosha-vue-toastify/dist/style.css";
import App from "./app/App.vue";
import router from "./router";
import "./core/styles/styles.scss";
import i18n from "./core/i18n";

const run = (element: string | Element) => {
  const app = createApp(App);

  app.use(i18n);
  app.use(createPinia());
  app.use(router);

  app.mount(element);
};

run("#app");
