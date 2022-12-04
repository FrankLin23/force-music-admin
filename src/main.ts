import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Quasar, Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import router from "./router";
import pinia from "@/store";
import "@/router/router-guard";

const app = createApp(App);
app.use(Quasar, {
  plugins: {
    Notify,
  },
});
app.use(router);
app.use(pinia);
app.mount("#app");
