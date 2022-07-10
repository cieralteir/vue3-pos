import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

const app = createApp(App);

// Global filters
app.config.globalProperties.$filters = {
  uppercase(value) {
    return value.toUpperCase();
  },
  currency(value) {
    return `PHP ${value.toFixed(2)}`;
  },
};

app.use(router);
app.mount("#app");
