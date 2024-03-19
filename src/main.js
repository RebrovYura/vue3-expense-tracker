import { createApp } from "vue";
import { createPinia } from "pinia";
import components from "./components/index.js";
import App from "./App.vue";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "../node_modules/flowbite-vue/dist/index.css";
import "./style.css";

// const pinia = createPinia()
const app = createApp(App);
app.use(Toast);
// app.use(pinia)

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
