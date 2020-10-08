import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Chakra from "@chakra-ui/vue";

Vue.use(Chakra);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
