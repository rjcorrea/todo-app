import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
// import axios from "axios";
// import {middleware} from "./middleware";

// middleware(router,axios);

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
